import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Briefcase, Building2, MapPin, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getJobById } from '@/lib/db';

export default async function JobDetailPage({ params }: { params: { id: string } }) {
  const job = await getJobById(params.id);

  if (!job) {
    notFound();
  }

  const reqs = Array.isArray(job.requirements) ? job.requirements : JSON.parse(job.requirements || '[]');

  return (
    <div className="site-shell py-10 md:py-16">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/jobs" className="text-sm font-medium text-brand-600 hover:text-brand-700">
          ← Back to jobs
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
        <article className="card p-6 md:p-8">
          <div className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            {job.company}
          </div>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">{job.title}</h1>

          <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2"><Building2 className="h-4 w-4" /> {job.company}</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {job.location}</div>
            <div className="flex items-center gap-2"><Briefcase className="h-4 w-4" /> {job.workMode}</div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Referral</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">{job.referralAvailable ? 'Available' : 'Request review'}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Experience</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">{job.experience}</p>
              </div>
              {job.salary ? (
                <div className="text-right">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Salary</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">{job.salary}</p>
                </div>
              ) : null}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-slate-900">Job description</h2>
            <p className="mt-4 whitespace-pre-line text-slate-700">{job.description}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-slate-900">Requirements</h2>
            <ul className="list-check mt-4 pl-0 list-none">
              {reqs.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </article>

        <aside className="card h-fit p-6 md:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">Apply</p>
          <h2 className="mt-2 text-2xl font-bold">Request referral</h2>
          <p className="mt-3 text-sm text-slate-600">
            This does not guarantee an interview or job. Referrer availability depends on the company and internal process.
          </p>

          <div className="mt-6 space-y-4 text-sm text-slate-700">
            <div>
              <p className="font-semibold text-slate-900">Role</p>
              <p>{job.title}</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Location</p>
              <p>{job.location}</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Posted</p>
              <p>{new Date(job.postedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
            </div>
          </div>

          <a href="#referral-form" className="button-primary mt-6 w-full">Request Referral</a>
          <div className="mt-5 border-t border-slate-200 pt-5 text-sm text-slate-600">
            <div className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /> Candidates must meet the role requirements and referral availability is subject to approver review.</div>
          </div>
        </aside>
      </div>

      <div id="referral-form" className="mt-12 card p-6 md:p-8">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">Application</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">Submit your profile for this referral opportunity</h2>
        </div>

        <ReferralRequestForm jobId={job.id} />
      </div>
    </div>
  );
}

function ReferralRequestForm({ jobId }: { jobId: string }) {
  return (
    <form action="/api/referral-request" method="POST" encType="multipart/form-data" className="grid gap-5 md:grid-cols-2">
      <input type="hidden" name="jobId" value={jobId} />
      <div>
        <label className="label" htmlFor="fullName">Full name</label>
        <input id="fullName" name="fullName" className="field" required />
      </div>
      <div>
        <label className="label" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" className="field" required />
      </div>
      <div>
        <label className="label" htmlFor="phone">Phone</label>
        <input id="phone" name="phone" className="field" required />
      </div>
      <div>
        <label className="label" htmlFor="linkedin">LinkedIn URL</label>
        <input id="linkedin" name="linkedinUrl" className="field" placeholder="https://linkedin.com/in/yourname" required />
      </div>
      <div>
        <label className="label" htmlFor="yearsOfExperience">Years of experience</label>
        <input id="yearsOfExperience" name="yearsOfExperience" className="field" required />
      </div>
      <div>
        <label className="label" htmlFor="currentLocation">Current location</label>
        <input id="currentLocation" name="currentLocation" className="field" required />
      </div>
      <div className="md:col-span-2">
        <label className="label" htmlFor="skills">Skills</label>
        <input id="skills" name="skills" className="field" required />
      </div>
      <div className="md:col-span-2">
        <label className="label" htmlFor="resume">Resume upload</label>
        <input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" className="field" required />
      </div>
      <div className="md:col-span-2">
        <label className="label" htmlFor="motivation">Why are you a good fit for this role?</label>
        <textarea id="motivation" name="motivation" className="field min-h-[140px]" required />
      </div>
      <div className="md:col-span-2 flex items-center gap-2 text-sm text-slate-700">
        <input id="consent" name="consent" type="checkbox" className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500" required />
        <label htmlFor="consent">I confirm the information is accurate and I understand referral availability is not guaranteed.</label>
      </div>

      <div className="md:col-span-2">
        <button type="submit" className="button-primary w-full md:w-auto">Request Referral</button>
      </div>
    </form>
  );
}
