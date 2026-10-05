import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createHash } from 'crypto';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export default function AdminLoginPage() {
  return (
    <div className="site-shell py-10 md:py-16">
      <div className="mx-auto max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">Admin</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Sign in</h1>
        <p className="mt-3 text-base text-slate-600">Use the local admin password to view the dashboard.</p>

        <form action="/api/admin/login" method="POST" className="mt-8 space-y-5">
          <div>
            <label className="label" htmlFor="password">Password</label>
            <input id="password" name="password" type="password" className="field" required />
          </div>
          <button type="submit" className="button-primary w-full">Access dashboard</button>
        </form>
      </div>
    </div>
  );
}
