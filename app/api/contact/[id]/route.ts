import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const dataFilePath = path.join(process.cwd(), 'data', 'submissions.json')

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

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await ensureDataFile()
    const body = await request.json()
    const { id } = params

    let existingData: any[] = []
    try {
      const fileContent = await fs.readFile(dataFilePath, 'utf-8')
      existingData = JSON.parse(fileContent)
    } catch {
      return NextResponse.json({ error: 'No submissions found' }, { status: 404 })
    }

    const index = existingData.findIndex((sub: any) => sub.id === id)
    if (index === -1) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 })
    }

    existingData[index] = { ...existingData[index], ...body }

    await fs.writeFile(dataFilePath, JSON.stringify(existingData, null, 2), 'utf-8')

    return NextResponse.json({ success: true, submission: existingData[index] })
  } catch (error) {
    console.error('Error updating submission:', error)
    return NextResponse.json(
      { error: 'Failed to update submission' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await ensureDataFile()
    const { id } = params

    let existingData: any[] = []
    try {
      const fileContent = await fs.readFile(dataFilePath, 'utf-8')
      existingData = JSON.parse(fileContent)
    } catch {
      return NextResponse.json({ error: 'No submissions found' }, { status: 404 })
    }

    const filteredData = existingData.filter((sub: any) => sub.id !== id)
    
    if (filteredData.length === existingData.length) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 })
    }

    await fs.writeFile(dataFilePath, JSON.stringify(filteredData, null, 2), 'utf-8')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting submission:', error)
    return NextResponse.json(
      { error: 'Failed to delete submission' },
      { status: 500 }
    )
  }
}

