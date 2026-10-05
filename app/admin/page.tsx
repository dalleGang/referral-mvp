import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createHash } from 'crypto';
import { getDashboardData } from '@/lib/db';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export default async function AdminPage() {
  const cookieStore = cookies();
  const sessionValue = cookieStore.get('admin_session')?.value;
  const expectedValue = createHash('sha256').update(ADMIN_PASSWORD).digest('hex');

  if (sessionValue !== expectedValue) {
    redirect('/admin/login');
  }

  const dashboard = await getDashboardData();

  return (
    <div className="site-shell py-10 md:py-16">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">Dashboard</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-5xl">Admin overview</h1>
        </div>
      </div>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Interested users" value={String(dashboard.waitlistCount)} description="Total waitlist signups" />
        <StatCard title="Jobs" value={String(dashboard.jobCount)} description="Active demo listings" />
        <StatCard title="Referral requests" value={String(dashboard.referralRequestCount)} description="Candidate applications" />
        <StatCard title="Referrer submissions" value={String(dashboard.referrerCount)} description="Company openings submitted" />
      </section>

      <section className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-xl font-bold text-slate-900">Waitlist by user type</h2>
          <div className="mt-5 space-y-3">
            {dashboard.userTypeBreakdown.map((entry) => (
              <div key={entry.type} className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700">
                <span className="font-medium capitalize">{entry.type}</span>
                <span className="font-semibold text-slate-900">{entry.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold text-slate-900">Analytics summary</h2>
          <div className="mt-5 space-y-3">
            {dashboard.analytics.map((entry) => (
              <div key={entry.type} className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700">
                <span className="font-medium">{entry.type}</span>
                <span className="font-semibold text-slate-900">{entry.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-8 xl:grid-cols-3">
        <div className="card p-6 xl:col-span-1">
          <h2 className="text-xl font-bold text-slate-900">Waitlist users</h2>
          <div className="mt-5 space-y-3">
            {dashboard.waitlistUsers.length === 0 ? <p className="text-sm text-slate-500">No signups yet.</p> : dashboard.waitlistUsers.slice(0, 8).map((user) => (
              <div key={user.id} className="rounded-xl border border-slate-200 p-3 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">{user.name}</p>
                <p>{user.email}</p>
                <p className="mt-1 capitalize text-slate-500">{user.userType}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6 xl:col-span-1">
          <h2 className="text-xl font-bold text-slate-900">Candidates</h2>
          <div className="mt-5 space-y-3">
            {dashboard.candidates.length === 0 ? <p className="text-sm text-slate-500">No referral requests yet.</p> : dashboard.candidates.slice(0, 8).map((candidate) => (
              <div key={candidate.id} className="rounded-xl border border-slate-200 p-3 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">{candidate.fullName}</p>
                <p>{candidate.email}</p>
                <p className="mt-1 text-slate-500">{candidate.currentLocation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6 xl:col-span-1">
          <h2 className="text-xl font-bold text-slate-900">Referrers</h2>
          <div className="mt-5 space-y-3">
            {dashboard.referrers.length === 0 ? <p className="text-sm text-slate-500">No referrer submissions yet.</p> : dashboard.referrers.slice(0, 8).map((referrer) => (
              <div key={referrer.id} className="rounded-xl border border-slate-200 p-3 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">{referrer.name}</p>
                <p>{referrer.company}</p>
                <p className="mt-1 text-slate-500">{referrer.jobTitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ title, value, description }: { title: string; value: string; description: string }) {
  return (
    <div className="card p-5">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <div className="mt-3 text-3xl font-bold text-slate-900">{value}</div>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  );
}
