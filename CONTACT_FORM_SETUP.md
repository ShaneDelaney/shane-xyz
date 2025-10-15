# Contact Form Setup Instructions

Your contact form is now configured to send emails to **shanedelaney11@gmail.com**!

## Setup Steps

### 1. Get a Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key

### 2. Add Environment Variable

#### For Local Development:
Create a `.env.local` file in your project root (if it doesn't exist):

```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

#### For Vercel Deployment:
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (starts with `re_`)
   - **Environment**: Production, Preview, Development (check all)
4. Click **Save**
5. Redeploy your site

### 3. Verify Domain (Optional but Recommended)

For production use, you should verify your domain with Resend:

1. In Resend dashboard, go to **Domains**
2. Add your domain (e.g., `shanedelaney.xyz`)
3. Add the DNS records they provide
4. Once verified, update the API route `from` field:

```typescript
from: 'Contact Form <contact@shanedelaney.xyz>'
```

This prevents emails from going to spam and looks more professional!

## What Happens Now

When someone fills out your contact form:
- ✅ Email sent to: **shanedelaney11@gmail.com**
- ✅ Reply-to field set to the sender's email
- ✅ Beautiful HTML formatting
- ✅ Success/error messages shown to user
- ✅ Form clears after successful submission

## Testing

1. Fill out the form on your site
2. Check your email at shanedelaney11@gmail.com
3. You should receive a nicely formatted email with the sender's name, email, and message

## Free Tier Limits

Resend free tier includes:
- 100 emails per day
- 3,000 emails per month

Perfect for a personal contact form! 🎉

