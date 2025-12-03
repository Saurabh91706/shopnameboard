'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Toaster, toast } from 'react-hot-toast'

interface Submission {
  id: string
  name: string
  email: string
  phone: string
  serviceType: string
  budgetRange: string
  contactMethod: string
  message: string
  attachment: string | null
  submittedAt: string
  status: string
  read: boolean
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [filteredSubmissions, setFilteredSubmissions] = useState<Submission[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check if already authenticated
    const token = localStorage.getItem('admin_token')
    if (token) {
      setIsAuthenticated(true)
      fetchSubmissions()
    }
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      fetchSubmissions()
      // Refresh every 30 seconds
      const interval = setInterval(fetchSubmissions, 30000)
      return () => clearInterval(interval)
    }
  }, [isAuthenticated])

  useEffect(() => {
    // Filter submissions
    let filtered = submissions

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(sub => 
        sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sub.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sub.phone.includes(searchQuery) ||
        sub.serviceType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sub.message.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(sub => sub.status === statusFilter)
    }

    setFilteredSubmissions(filtered)
  }, [submissions, searchQuery, statusFilter])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (data.success) {
        localStorage.setItem('admin_token', data.token)
        setIsAuthenticated(true)
        toast.success('Login successful!')
        fetchSubmissions()
      } else {
        toast.error('Invalid credentials')
      }
    } catch (error) {
      toast.error('Login failed. Please try again.')
      console.error('Login error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    setIsAuthenticated(false)
    setSubmissions([])
    toast.success('Logged out successfully')
  }

  const fetchSubmissions = async () => {
    try {
      const token = localStorage.getItem('admin_token')
      if (!token) {
        console.error('No token found')
        return
      }
      
      const response = await fetch('/api/contact', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json()
        console.log('Fetched submissions response:', data)
        console.log('Submissions array:', data.submissions)
        console.log('Submissions count:', data.submissions?.length || 0)
        const submissionsArray = Array.isArray(data.submissions) ? data.submissions : []
        console.log('Setting submissions:', submissionsArray.length, 'items')
        setSubmissions(submissionsArray)
        if (submissionsArray.length === 0 && data.submissions) {
          console.warn('Submissions data exists but is not an array:', typeof data.submissions)
        }
      } else if (response.status === 401) {
        // Token expired or invalid
        handleLogout()
        toast.error('Session expired. Please login again.')
      } else {
        const errorData = await response.json().catch(() => ({}))
        console.error('Error response:', response.status, errorData)
        toast.error(`Failed to fetch: ${errorData.error || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Error fetching submissions:', error)
      toast.error('Failed to fetch submissions. Check console for details.')
    }
  }

  const updateSubmissionStatus = async (id: string, status: string, read: boolean) => {
    try {
      const token = localStorage.getItem('admin_token')
      const response = await fetch(`/api/contact/${id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status, read }),
      })

      if (response.ok) {
        setSubmissions(prev => prev.map(sub => 
          sub.id === id ? { ...sub, status, read } : sub
        ))
        toast.success('Status updated')
      } else {
        throw new Error('Failed to update')
      }
    } catch (error) {
      console.error('Error updating status:', error)
      toast.error('Failed to update status')
    }
  }

  const deleteSubmission = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) {
      return
    }

    try {
      const token = localStorage.getItem('admin_token')
      const response = await fetch(`/api/contact/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      if (response.ok) {
        setSubmissions(prev => prev.filter(sub => sub.id !== id))
        toast.success('Submission deleted')
        setSelectedSubmission(null)
      } else {
        throw new Error('Failed to delete')
      }
    } catch (error) {
      console.error('Error deleting submission:', error)
      toast.error('Failed to delete submission')
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800'
      case 'contacted':
        return 'bg-yellow-100 text-yellow-800'
      case 'quoted':
        return 'bg-purple-100 text-purple-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'rejected':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (!isAuthenticated) {
    return (
      <>
        <Toaster position="top-right" />
        <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-700 to-red-800 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-md"
          >
            <div className="text-center mb-8">
              <h1 className="text-4xl font-black text-gray-900 mb-2">Admin Login</h1>
              <p className="text-gray-600">The Mediaverse Admin Panel</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  suppressHydrationWarning
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="admin@themediaverse.in"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  suppressHydrationWarning
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Enter password"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </>
    )
  }

  return (
    <>
      <Toaster position="top-right" />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b-2 border-gray-200 shadow-sm">
          <div className="container-custom py-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-black text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600">Contact Form Submissions</p>
              </div>
              <motion.button
                onClick={handleLogout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Logout
              </motion.button>
            </div>
          </div>
        </header>

        <div className="container-custom py-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg"
            >
              <div className="text-3xl font-black text-gray-900 mb-2">{submissions.length}</div>
              <p className="text-gray-600 font-semibold">Total Submissions</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg"
            >
              <div className="text-3xl font-black text-blue-600 mb-2">
                {submissions.filter(s => s.status === 'new').length}
              </div>
              <p className="text-gray-600 font-semibold">New</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg"
            >
              <div className="text-3xl font-black text-yellow-600 mb-2">
                {submissions.filter(s => s.status === 'contacted').length}
              </div>
              <p className="text-gray-600 font-semibold">Contacted</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg"
            >
              <div className="text-3xl font-black text-green-600 mb-2">
                {submissions.filter(s => s.status === 'completed').length}
              </div>
              <p className="text-gray-600 font-semibold">Completed</p>
            </motion.div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Search
                </label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, email, phone, service..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Status Filter
                </label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                >
                  <option value="all">All Status</option>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="quoted">Quoted</option>
                  <option value="completed">Completed</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submissions List */}
          <div className="space-y-4">
            <AnimatePresence>
              {filteredSubmissions.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white rounded-xl p-12 border-2 border-gray-200 text-center"
                >
                  <p className="text-gray-600 text-lg">No submissions found</p>
                </motion.div>
              ) : (
                filteredSubmissions.map((submission, index) => (
                  <motion.div
                    key={submission.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`bg-white rounded-xl border-2 shadow-lg overflow-hidden cursor-pointer transition-all hover:shadow-xl ${
                      !submission.read ? 'border-red-500 bg-red-50' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedSubmission(submission)}
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{submission.name}</h3>
                            {!submission.read && (
                              <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                                NEW
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 mb-1">{submission.email}</p>
                          <p className="text-gray-600">{submission.phone}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(submission.status)}`}>
                            {submission.status.toUpperCase()}
                          </span>
                          <p className="text-sm text-gray-500 mt-2">{formatDate(submission.submittedAt)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="font-semibold">Service:</span>
                        <span>{submission.serviceType}</span>
                        {submission.budgetRange && (
                          <>
                            <span className="font-semibold">Budget:</span>
                            <span>{submission.budgetRange}</span>
                          </>
                        )}
                        <span className="font-semibold">Contact:</span>
                        <span className="capitalize">{submission.contactMethod}</span>
                        {submission.attachment && (
                          <span className="flex items-center gap-1 text-green-600 font-semibold">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Has Image
                          </span>
                        )}
                      </div>
                      {submission.message && (
                        <p className="text-gray-700 mt-4 line-clamp-2">{submission.message}</p>
                      )}
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Submission Detail Modal */}
        <AnimatePresence>
          {selectedSubmission && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedSubmission(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="sticky top-0 bg-white border-b-2 border-gray-200 p-6 flex justify-between items-center">
                  <h2 className="text-2xl font-black text-gray-900">Submission Details</h2>
                  <button
                    onClick={() => setSelectedSubmission(null)}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-500">Name</label>
                      <p className="text-lg font-bold text-gray-900">{selectedSubmission.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-500">Email</label>
                      <p className="text-lg text-gray-900">
                        <a href={`mailto:${selectedSubmission.email}`} className="text-red-600 hover:underline">
                          {selectedSubmission.email}
                        </a>
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-500">Phone</label>
                      <p className="text-lg text-gray-900">
                        <a href={`tel:${selectedSubmission.phone}`} className="text-red-600 hover:underline">
                          {selectedSubmission.phone}
                        </a>
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-500">Service Type</label>
                      <p className="text-lg text-gray-900">{selectedSubmission.serviceType}</p>
                    </div>
                    {selectedSubmission.budgetRange && (
                      <div>
                        <label className="text-sm font-semibold text-gray-500">Budget Range</label>
                        <p className="text-lg text-gray-900">{selectedSubmission.budgetRange}</p>
                      </div>
                    )}
                    <div>
                      <label className="text-sm font-semibold text-gray-500">Preferred Contact</label>
                      <p className="text-lg text-gray-900 capitalize">{selectedSubmission.contactMethod}</p>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-500">Submitted At</label>
                      <p className="text-lg text-gray-900">{formatDate(selectedSubmission.submittedAt)}</p>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-500">Status</label>
                      <select
                        value={selectedSubmission.status}
                        onChange={(e) => {
                          const updated = { ...selectedSubmission, status: e.target.value, read: true }
                          setSelectedSubmission(updated)
                          updateSubmissionStatus(selectedSubmission.id, e.target.value, true)
                        }}
                        className="mt-1 px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="quoted">Quoted</option>
                        <option value="completed">Completed</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-500">Message</label>
                    <p className="text-gray-900 mt-2 p-4 bg-gray-50 rounded-xl whitespace-pre-wrap">
                      {selectedSubmission.message}
                    </p>
                  </div>

                  {selectedSubmission.attachment && (
                    <div>
                      <label className="text-sm font-semibold text-gray-500">Reference Image</label>
                      <div className="mt-2">
                        {selectedSubmission.attachment.startsWith('/uploads/') || selectedSubmission.attachment.startsWith('uploads/') ? (
                          <div className="relative rounded-xl overflow-hidden border-2 border-gray-200 bg-gray-50">
                            <img
                              src={selectedSubmission.attachment.startsWith('/') ? selectedSubmission.attachment : `/${selectedSubmission.attachment}`}
                              alt="Reference image"
                              className="w-full h-auto max-h-96 object-contain"
                              onError={(e) => {
                                // Fallback if image fails to load
                                const target = e.target as HTMLImageElement
                                target.style.display = 'none'
                                const parent = target.parentElement
                                if (parent) {
                                  const fallback = document.createElement('div')
                                  fallback.className = 'p-4 text-center text-gray-500'
                                  fallback.textContent = `Image not found: ${selectedSubmission.attachment}`
                                  parent.appendChild(fallback)
                                }
                              }}
                            />
                            <a
                              href={selectedSubmission.attachment.startsWith('/') ? selectedSubmission.attachment : `/${selectedSubmission.attachment}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute top-2 right-2 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
                            >
                              View Full Size
                            </a>
                          </div>
                        ) : (
                          <p className="text-gray-900 mt-2">{selectedSubmission.attachment}</p>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4 pt-4 border-t-2 border-gray-200">
                    <motion.button
                      onClick={() => {
                        updateSubmissionStatus(selectedSubmission.id, selectedSubmission.status, true)
                        setSelectedSubmission(null)
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 btn-primary"
                    >
                      Mark as Read
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        deleteSubmission(selectedSubmission.id)
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

