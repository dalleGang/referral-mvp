import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function JobCard({ job }: { job: any }) {
  return (
    <article className="card flex h-full flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-brand-700">{job.company}</p>
          <h3 className="mt-2 text-xl font-bold text-slate-900">{job.title}</h3>
        </div>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">
          {job.referralAvailable ? 'Referral available' : 'Review'}
        </span>
      </div>

      <div className="mt-4 grid gap-2 text-sm text-slate-600">
        <div className="flex items-center justify-between gap-3">
          <span>Location</span>
          <span className="font-medium text-slate-900">{job.location}</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span>Work mode</span>
          <span className="font-medium text-slate-900">{job.workMode}</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span>Experience</span>
          <span className="font-medium text-slate-900">{job.experience}</span>
        </div>
        {job.salary ? (
          <div className="flex items-center justify-between gap-3">
            <span>Salary</span>
            <span className="font-medium text-slate-900">{job.salary}</span>
          </div>
        ) : null}
      </div>

      <p className="mt-4 text-sm text-slate-600">{job.description.slice(0, 140)}...</p>

      <div className="mt-5 flex items-center justify-between gap-3 text-xs text-slate-500">
        <span>{new Date(job.postedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
        <span>{job.isDemo ? 'Demo data' : 'Live concept'}</span>
      </div>

      <Link href={`/jobs/${job.id}`} className="button-primary mt-6 w-full">
        Request Referral
      </Link>
    </article>
  );
}
