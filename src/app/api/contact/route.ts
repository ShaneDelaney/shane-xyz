import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // You'll change this to your domain
      to: ['shanedelaney11@gmail.com'],
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #111; margin-bottom: 24px;">New Contact Form Submission</h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 16px;">
            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">From:</p>
            <p style="margin: 0; color: #111; font-size: 16px; font-weight: 500;">${name}</p>
          </div>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 16px;">
            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">Email:</p>
            <p style="margin: 0; color: #111; font-size: 16px;">${email}</p>
          </div>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">Message:</p>
            <p style="margin: 0; color: #111; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="margin-top: 24px; color: #6b7280; font-size: 14px;">
            This message was sent from the contact form on shanedelaney.xyz
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

