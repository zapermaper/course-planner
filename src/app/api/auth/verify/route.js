import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();
    
    if (!email.endsWith('@g.risd.org')) {
      return NextResponse.json(
        { error: 'Only RISD students are allowed to use this platform' },
        { status: 401 }
      );
    }

    const verificationCode = Math.floor(100000 + Math.random() * 900000);
    
    global.verificationCodes = global.verificationCodes || {};
    global.verificationCodes[email] = verificationCode;

    const msg = {
      to: email,
      from: 'jakeshammermonkeys@gmail.com',
      subject: 'Your RHS Course Planner Verification Code',
      text: `Your verification code is: ${verificationCode}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #56357c;">Richardson High School Course Planner</h2>
          <p>Your verification code is:</p>
          <h1 style="color: #56357c; font-size: 32px;">${verificationCode}</h1>
          <p>This code will expire in 15 minutes.</p>
          <p>If you didn't request this code, please ignore this email.</p>
        </div>
      `
    };

    await sgMail.send(msg);

    return NextResponse.json({ message: 'Verification code sent' });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send verification code' },
      { status: 500 }
    );
  }
}