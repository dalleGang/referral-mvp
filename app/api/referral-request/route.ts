import { NextResponse } from 'next/server';
import { saveReferralRequest } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get('resume');
    const jobId = String(formData.get('jobId') || '');
    const fullName = String(formData.get('fullName') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const linkedinUrl = String(formData.get('linkedinUrl') || '').trim();
    const yearsOfExperience = String(formData.get('yearsOfExperience') || '').trim();
    const currentLocation = String(formData.get('currentLocation') || '').trim();
    const skills = String(formData.get('skills') || '').trim();
    const motivation = String(formData.get('motivation') || '').trim();
    const consent = formData.get('consent') === 'on';

    if (!fullName || !email || !phone || !linkedinUrl || !currentLocation || !skills || !motivation || !consent) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
    }

    let resumePath: string | null = null;
    if (file && file instanceof File && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const dir = `${process.cwd()}/data/uploads`;
      const fs = await import('fs');
      const path = await import('path');
      fs.mkdirSync(dir, { recursive: true });
      const filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
      const fullPath = path.join(dir, filename);
      fs.writeFileSync(fullPath, Buffer.from(bytes));
      resumePath = `/uploads/${filename}`;
    }

    saveReferralRequest({
      jobId,
      fullName,
      email,
      phone,
      linkedinUrl,
      resumePath,
      yearsOfExperience,
      currentLocation,
      skills,
      motivation,
      consent
    });

    return NextResponse.redirect(new URL('/jobs?submitted=referral', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'));
  } catch (error) {
    return NextResponse.json({ error: 'Unable to submit your referral request right now.' }, { status: 500 });
  }
}
