import { NextResponse } from 'next/server';
import { saveWaitlistSignup } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      userType: String(formData.get('userType') || 'job seeker').trim(),
      desiredRole: String(formData.get('desiredRole') || '').trim(),
      experience: String(formData.get('experience') || '').trim(),
      location: String(formData.get('location') || '').trim()
    };

    if (!payload.name || !payload.email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    saveWaitlistSignup(payload);

    return NextResponse.redirect(new URL('/?waitlist=success', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'));
  } catch (error) {
    return NextResponse.json({ error: 'Unable to save signup right now.' }, { status: 500 });
  }
}
