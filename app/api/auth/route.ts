import { NextRequest, NextResponse } from 'next/server'

const ADMIN_EMAIL = 'admin@themediaverse.in'
const ADMIN_PASSWORD = 'Saurabh@1618'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()
    
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Generate a simple token (in production, use JWT)
      const token = Buffer.from(`${email}:${Date.now()}`).toString('base64')
      
      return NextResponse.json({
        success: true,
        token,
        email
      })
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    )
  }
}

