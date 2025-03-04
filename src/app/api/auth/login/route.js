import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, code } = await request.json();

    if (!email || !code) {
      return NextResponse.json(
        { error: 'Email and verification code are required' },
        { status: 400 }
      );
    }

    if (!global.verificationCodes) {
      return NextResponse.json(
        { error: 'Verification code expired or invalid' },
        { status: 401 }
      );
    }

    const storedCode = global.verificationCodes[email];

    if (!storedCode || parseInt(code) !== storedCode) {
      return NextResponse.json(
        { error: 'Invalid verification code' },
        { status: 401 }
      );
    }

    delete global.verificationCodes[email];

    const user = {
      email,
      verified: true, 
    };

    return NextResponse.json({ 
      message: 'Login successful',
      user 
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}