import { NextResponse } from 'next/server';
import { createHash } from 'crypto';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const password = String(formData.get('password') || '');
    const validPassword = createHash('sha256').update(ADMIN_PASSWORD).digest('hex');
    const submitted = createHash('sha256').update(password).digest('hex');

    if (submitted !== validPassword) {
      return NextResponse.json({ error: 'Invalid password.' }, { status: 401 });
    }

    const response = NextResponse.redirect(new URL('/admin', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'));
    response.cookies.set('admin_session', validPassword, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      secure: process.env.NODE_ENV === 'production'
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Login failed.' }, { status: 500 });
  }
}
