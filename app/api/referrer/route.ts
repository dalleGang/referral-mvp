import { NextResponse } from 'next/server';
import { saveReferrer } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      company: String(formData.get('company') || '').trim(),
      jobTitle: String(formData.get('jobTitle') || '').trim(),
      linkedin: String(formData.get('linkedin') || '').trim(),
      jobOpeningUrl: String(formData.get('jobOpeningUrl') || '').trim(),
      role: String(formData.get('role') || '').trim(),
      location: String(formData.get('location') || '').trim(),
      currentlyEmployed: String(formData.get('currentlyEmployed') || 'yes').trim(),
      relationship: String(formData.get('relationship') || '').trim(),
      notes: String(formData.get('notes') || '').trim()
    };

    if (!payload.name || !payload.email || !payload.company || !payload.jobTitle || !payload.linkedin || !payload.location) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
    }

    saveReferrer(payload);

    return NextResponse.redirect(new URL('/refer?submitted=success', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'));
  } catch (error) {
    return NextResponse.json({ error: 'Unable to submit the opportunity right now.' }, { status: 500 });
  }
}
