import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const dataFilePath = path.join(process.cwd(), 'data', 'submissions.json')

// Helper function to ensure data directory and file exist
async function ensureDataFile() {
  const dataDir = path.join(process.cwd(), 'data')
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
  
  try {
    await fs.access(dataFilePath)
  } catch {
    await fs.writeFile(dataFilePath, JSON.stringify([]), 'utf-8')
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureDataFile()
    const body = await request.json()
    
    // Read existing submissions
    let existingData: any[] = []
    try {
      const fileContent = await fs.readFile(dataFilePath, 'utf-8')
      existingData = JSON.parse(fileContent)
    } catch {
      existingData = []
    }
    
    // Add new submission
    const newSubmission = {
      ...body,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
      status: 'new',
      read: false
    }
    
    existingData.unshift(newSubmission)
    
    // Write back to file
    await fs.writeFile(dataFilePath, JSON.stringify(existingData, null, 2), 'utf-8')
    
    return NextResponse.json({ success: true, id: newSubmission.id })
  } catch (error) {
    console.error('Error saving submission:', error)
    return NextResponse.json(
      { error: 'Failed to save submission' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    // Check for auth token
    const authHeader = request.headers.get('authorization')
    
    // Simple token check - in production, use proper JWT validation
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.error('No auth header or invalid format')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    await ensureDataFile()
    
    let existingData: any[] = []
    try {
      const fileContent = await fs.readFile(dataFilePath, 'utf-8')
      existingData = JSON.parse(fileContent)
      console.log(`Loaded ${existingData.length} submissions from file`)
    } catch (error) {
      console.error('Error reading file:', error)
      existingData = []
    }
    
    return NextResponse.json({ submissions: existingData })
  } catch (error) {
    console.error('Error reading submissions:', error)
    return NextResponse.json(
      { error: 'Failed to read submissions' },
      { status: 500 }
    )
  }
}

