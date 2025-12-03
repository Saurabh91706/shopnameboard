'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Toaster, toast } from 'react-hot-toast'
import Image from 'next/image'

interface FormData {
  name: string
  email: string
  phone: string
  serviceType: string
  budgetRange: string
  contactMethod: string
  message: string
  attachment: File | null
}

const serviceTypes = [
  'ACP Board',
  'LED Board',
  'Fabric Light Box',
  '3D Letter Signage',
  'Glow Sign Board',
  'Non-Lit Board',
  'Other'
]

const budgetRanges = [
  'Under ₹10,000',
  '₹10,000 - ₹25,000',
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹1,00,000',
  'Above ₹1,00,000',
  'Not Sure'
]

const faqs = [
  {
    question: 'How long does it take to manufacture and install a shop name board?',
    answer: 'Typically, from design approval to installation, it takes 5-7 working days for standard boards. Custom designs may take 10-14 days. We provide a detailed timeline during the quotation process.'
  },
  {
    question: 'Do you provide installation services?',
    answer: 'Yes! We offer complete end-to-end services including design, manufacturing, and professional installation. Our team handles everything from site survey to final installation.'
  },
  {
    question: 'What is the warranty period for your boards?',
    answer: 'We provide 1-2 years warranty on manufacturing defects and LED modules. The warranty period varies based on the board type and installation location. Details are provided in your quotation.'
  },
  {
    question: 'Can you work with custom designs?',
    answer: 'Absolutely! We specialize in custom designs. Share your vision, logo, or reference images, and our design team will create a unique board that perfectly represents your brand.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers, UPI, credit/debit cards, and cash. Payment terms are typically 50% advance and 50% on completion, though we can discuss flexible payment options.'
  },
  {
    question: 'Do you serve locations outside major cities?',
    answer: 'Yes, we serve 50+ cities across India. While we have manufacturing facilities in major cities, we can arrange installation in smaller towns. Contact us to check service availability in your area.'
  }
]

const testimonials = [
  {
    name: 'Rajesh Kumar',
    business: 'Kumar Electronics',
    city: 'Bangalore',
    text: 'Excellent service! The ACP board looks premium and has been attracting more customers. Installation was professional and on time.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    business: 'Sharma Boutique',
    city: 'Mumbai',
    text: 'The LED board is stunning, especially at night. Great quality and the team was very responsive throughout the process.',
    rating: 5
  },
  {
    name: 'Amit Patel',
    business: 'Patel Restaurant',
    city: 'Delhi',
    text: 'Professional team, quality work, and competitive pricing. Highly recommend for any signage needs!',
    rating: 5
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    budgetRange: '',
    contactMethod: 'email',
    message: '',
    attachment: null
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [clientCount, setClientCount] = useState(0)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  
  const heroRef = useRef(null)
  const formRef = useRef(null)
  const cardsRef = useRef(null)
  const faqRef = useRef(null)
  
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' })
  const formInView = useInView(formRef, { once: true, margin: '-100px' })
  const cardsInView = useInView(cardsRef, { once: true, margin: '-100px' })
  const faqInView = useInView(faqRef, { once: true, margin: '-100px' })

  // Count-up animation for client count
  useEffect(() => {
    if (cardsInView && clientCount < 150) {
      const timer = setTimeout(() => {
        setClientCount(prev => Math.min(prev + 5, 150))
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [cardsInView, clientCount])

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const formatPhoneNumber = (value: string): string => {
    const cleaned = value.replace(/\D/g, '')
    if (cleaned.length <= 10) {
      if (cleaned.length <= 5) {
        return cleaned
      } else {
        return `${cleaned.slice(0, 5)} ${cleaned.slice(5)}`
      }
    }
    return `${cleaned.slice(0, 5)} ${cleaned.slice(5, 10)}`
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'phone' ? formatPhoneNumber(value) : value
    }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name as keyof FormData]
        return newErrors
      })
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size must be less than 5MB')
        return
      }
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast.error('Please upload an image file')
        return
      }
      
      // Create preview URL
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      
      setFormData(prev => ({ ...prev, attachment: file }))
      toast.success('File attached successfully')
    }
  }

  const removeImage = () => {
    setFormData(prev => ({ ...prev, attachment: null }))
    setImagePreview(null)
    // Reset file input
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
    if (fileInput) {
      fileInput.value = ''
    }
    toast.success('Image removed')
  }

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast.success(`${type} copied to clipboard!`)
    } catch (err) {
      toast.error('Failed to copy')
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Phone number must be at least 10 digits'
    }
    
    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length > 500) {
      newErrors.message = 'Message must be less than 500 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      let imagePath = null
      
      // Upload image file if present
      if (formData.attachment) {
        const uploadFormData = new FormData()
        uploadFormData.append('file', formData.attachment)
        
        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: uploadFormData,
        })
        
        const uploadData = await uploadResponse.json()
        
        if (uploadResponse.ok && uploadData.success) {
          imagePath = uploadData.path
        } else {
          throw new Error(uploadData.error || 'Failed to upload image')
        }
      }
      
      // Save submission to API
      const submission = {
        ...formData,
        attachment: imagePath,
      }
      
      // Remove the File object before stringifying
      const { attachment: _, ...submissionData } = submission
      const finalSubmission = {
        ...submissionData,
        attachment: imagePath,
      }
      
      console.log('Submitting form:', finalSubmission)
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalSubmission),
      })
      
      const responseData = await response.json()
      console.log('Submission response:', responseData)
      
      if (response.ok && responseData.success) {
        toast.success('Message sent successfully! We\'ll get back to you within 24 hours.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: '',
          budgetRange: '',
          contactMethod: 'email',
          message: '',
          attachment: null
        })
        setImagePreview(null)
      } else {
        throw new Error(responseData.error || 'Failed to submit')
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      <Toaster position="top-right" />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white overflow-hidden flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container-custom section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6"
            >
              Let's Create Your{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                Perfect Signage
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-red-100 mb-8"
            >
              Get a free quote and expert consultation for premium shop name boards
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="#contact-form"
                className="btn-primary text-lg px-8 py-4"
              >
                Get Free Quote
              </a>
              <a
                href="https://wa.me/919580088540"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 flex flex-col items-center gap-2"
            >
              <span className="text-sm text-red-200">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-white rounded-full mt-2"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" ref={formRef} className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Get Your <span className="gradient-text">Free Quote</span>
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="relative">
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ${
                      errors.name ? 'border-red-500' : focusedField === 'name' ? 'border-red-600' : 'border-gray-200'
                    }`}
                    placeholder=" "
                  />
                  <motion.label
                    animate={{
                      y: focusedField === 'name' || formData.name ? -12 : 0,
                      scale: focusedField === 'name' || formData.name ? 0.85 : 1,
                    }}
                    className={`absolute left-4 transition-all ${
                      focusedField === 'name' || formData.name
                        ? 'text-red-600 top-0 bg-white px-2'
                        : 'text-gray-500 top-4'
                    }`}
                  >
                    Your Name *
                  </motion.label>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="relative">
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ${
                      errors.email ? 'border-red-500' : focusedField === 'email' ? 'border-red-600' : 'border-gray-200'
                    }`}
                    placeholder=" "
                  />
                  <motion.label
                    animate={{
                      y: focusedField === 'email' || formData.email ? -12 : 0,
                      scale: focusedField === 'email' || formData.email ? 0.85 : 1,
                    }}
                    className={`absolute left-4 transition-all ${
                      focusedField === 'email' || formData.email
                        ? 'text-red-600 top-0 bg-white px-2'
                        : 'text-gray-500 top-4'
                    }`}
                  >
                    Email Address *
                  </motion.label>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="relative">
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    required
                    maxLength={12}
                    className={`w-full px-4 py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ${
                      errors.phone ? 'border-red-500' : focusedField === 'phone' ? 'border-red-600' : 'border-gray-200'
                    }`}
                    placeholder=" "
                  />
                  <motion.label
                    animate={{
                      y: focusedField === 'phone' || formData.phone ? -12 : 0,
                      scale: focusedField === 'phone' || formData.phone ? 0.85 : 1,
                    }}
                    className={`absolute left-4 transition-all ${
                      focusedField === 'phone' || formData.phone
                        ? 'text-red-600 top-0 bg-white px-2'
                        : 'text-gray-500 top-4'
                    }`}
                  >
                    Phone Number *
                  </motion.label>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Service Type & Budget Range */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all appearance-none ${
                        errors.serviceType ? 'border-red-500' : 'border-gray-200'
                      }`}
                    >
                      <option value="">Service Type *</option>
                      {serviceTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.serviceType && (
                      <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>
                    )}
                  </div>

                  <div className="relative">
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/50 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all appearance-none"
                    >
                      <option value="">Budget Range (Optional)</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Preferred Contact Method *
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {['email', 'phone', 'whatsapp'].map(method => (
                      <motion.label
                        key={method}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.contactMethod === method
                            ? 'border-red-600 bg-red-50 text-red-600'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-red-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method}
                          checked={formData.contactMethod === method}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <span className="capitalize font-semibold">{method}</span>
                      </motion.label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    maxLength={500}
                    className={`w-full px-4 py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all resize-none ${
                      errors.message ? 'border-red-500' : focusedField === 'message' ? 'border-red-600' : 'border-gray-200'
                    }`}
                    placeholder="Tell us about your project requirements..."
                  />
                  <div className="flex justify-between items-center mt-2">
                    {errors.message && (
                      <p className="text-red-500 text-sm">{errors.message}</p>
                    )}
                    <p className={`text-sm ml-auto ${formData.message.length > 450 ? 'text-red-500' : 'text-gray-500'}`}>
                      {formData.message.length}/500
                    </p>
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Reference Images (Optional)
                  </label>
                  
                  {!imagePreview ? (
                    <motion.label
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-3 px-6 py-4 bg-white/50 backdrop-blur-sm border-2 border-gray-200 rounded-xl cursor-pointer hover:border-red-300 transition-all"
                    >
                      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <span className="text-gray-700">
                        {formData.attachment ? formData.attachment.name : 'Upload reference images (Max 5MB)'}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </motion.label>
                  ) : (
                    <div className="relative">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative rounded-xl overflow-hidden border-2 border-gray-200 bg-white/50 backdrop-blur-sm"
                      >
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-2 right-2 flex gap-2">
                          <motion.button
                            type="button"
                            onClick={removeImage}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors"
                            title="Remove image"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </motion.button>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3">
                          <p className="text-sm font-semibold truncate">{formData.attachment?.name}</p>
                          <p className="text-xs text-gray-300">
                            {(formData.attachment?.size ? (formData.attachment.size / 1024 / 1024).toFixed(2) : '0')} MB
                          </p>
                        </div>
                      </motion.div>
                      <motion.label
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-3 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer transition-colors text-sm text-gray-700 font-semibold"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        Change Image
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </motion.label>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section ref={cardsRef} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach us
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={cardsInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {/* Phone Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => copyToClipboard('+91 95800 88540', 'Phone number')}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto"
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Phone</h3>
              <p className="text-gray-700 text-center mb-2">+91 95800 88540</p>
              <p className="text-sm text-gray-500 text-center">Click to copy</p>
            </motion.div>

            {/* Email Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => copyToClipboard('contact@themediaverse.in', 'Email')}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto"
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Email</h3>
              <p className="text-gray-700 text-center mb-2">contact@themediaverse.in</p>
              <p className="text-sm text-gray-500 text-center">Click to copy</p>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all"
            >
              <motion.a
                href="https://wa.me/919580088540"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="block"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">WhatsApp</h3>
                <p className="text-gray-700 text-center mb-2">Quick Chat</p>
                <p className="text-sm text-green-600 font-semibold text-center">Tap to message</p>
              </motion.a>
            </motion.div>

            {/* Business Hours Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto"
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Business Hours</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="flex justify-between"><span>Mon - Sat:</span> <span className="font-semibold">9 AM - 7 PM</span></p>
                <p className="flex justify-between"><span>Sunday:</span> <span className="font-semibold">Closed</span></p>
                <p className="text-xs text-gray-500 text-center mt-3">IST (UTC+5:30)</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border-2 border-red-200 text-center">
              <div className="text-4xl font-black text-red-600 mb-2">
                {clientCount}+
              </div>
              <p className="text-gray-700 font-semibold">Happy Clients</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-2 border-green-200 text-center">
              <div className="text-4xl font-black text-green-600 mb-2">24h</div>
              <p className="text-gray-700 font-semibold">Response Time</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200 text-center">
              <div className="text-4xl font-black text-blue-600 mb-2">14+</div>
              <p className="text-gray-700 font-semibold">Signage Solutions</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Find Us
            </h2>
            <p className="text-xl text-gray-600">
              Visit our office or get directions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200"
          >
            <div className="relative h-96 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1234567890!2d77.5946!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMzUnNDAuNSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
            <div className="bg-white p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Mediaverse</h3>
                <p className="text-gray-600">
                  Office Location<br />
                  India
                </p>
              </div>
              <motion.a
                href="https://maps.app.goo.gl/gimkTv2P9YR83vdD6"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary whitespace-nowrap"
              >
                Get Directions
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={faqInView ? 'visible' : 'hidden'}
            className="max-w-3xl mx-auto space-y-4"
          >
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-red-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-red-300 transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.business}, {testimonial.city}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

// FAQ Accordion Component
function FAQItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-red-300 transition-all"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
        whileHover={{ backgroundColor: 'rgba(239, 68, 68, 0.05)' }}
      >
        <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-6 text-red-600 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-gray-700 leading-relaxed">
          {faq.answer}
        </div>
      </motion.div>
    </motion.div>
  )
}
