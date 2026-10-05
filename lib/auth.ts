import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createHash } from 'crypto';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export function isAdminSessionValid() {
  const cookieStore = cookies();
  const session = cookieStore.get('admin_session')?.value;
  const expected = createHash('sha256').update(ADMIN_PASSWORD).digest('hex');
  return session === expected;
}

export function requireAdmin() {
  if (!isAdminSessionValid()) {
    redirect('/admin/login');
  }
}
