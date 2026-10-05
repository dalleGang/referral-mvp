import Link from 'next/link';
import { getJobs } from '@/lib/db';
import { JobCard } from '@/components/job-card';
import { ArrowRight } from 'lucide-react';

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <div className="site-shell py-10 md:py-16">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">Browse</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-5xl">Available referral opportunities</h1>
        </div>
        <Link href="/refer" className="button-secondary">
          Become a Referrer
        </Link>
      </div>

      <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900">
        Demo data only. These example jobs are for validation testing and are not real openings.
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/" className="button-secondary">
          Back to home
        </Link>
      </div>
    </div>
  );
}
