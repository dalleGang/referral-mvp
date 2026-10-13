import Link from 'next/link';
import { ArrowRight, Building2, BriefcaseBusiness, BadgeCheck, Sparkles, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seed-data';
import { JobRecord } from '@/lib/types';

export function LandingPage({ jobs }: { jobs: JobRecord[] }) {
  return (
    <>
      <section className="site-shell py-10 md:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              {SITE_CONFIG.brand}
            </span>
            <h1 className="mt-5 text-4xl font-black leading-tight text-slate-900 md:text-6xl">
              {SITE_CONFIG.headline}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600 md:text-xl">
              {SITE_CONFIG.subheadline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/jobs" className="button-primary">
                {SITE_CONFIG.primaryCTA}
              </Link>
              <Link href="/refer" className="button-secondary">
                {SITE_CONFIG.secondaryCTA}
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-600">
              <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-600" /> Honest referral matching</div>
              <div className="flex items-center gap-2"><BriefcaseBusiness className="h-4 w-4 text-emerald-600" /> Mobile-first job browsing</div>
            </div>
          </div>

          <div className="card p-5 md:p-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="grid gap-3">
                <div className="rounded-xl bg-white p-3 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-500">Job Opening</span>
                    <span className="rounded bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-700">Open</span>
                  </div>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Frontend Engineer</p>
                  <p className="text-sm text-slate-600">Bengaluru • Hybrid</p>
                </div>

                <div className="flex items-center justify-center text-brand-600">
                  <ChevronRight className="h-5 w-5" />
                </div>

                <div className="rounded-xl bg-white p-3 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-500">Referrer</span>
                    <span className="rounded bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">Eligible</span>
                  </div>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Senior PM</p>
                  <p className="text-sm text-slate-600">Can review candidate fit</p>
                </div>

                <div className="flex items-center justify-center text-brand-600">
                  <ChevronRight className="h-5 w-5" />
                </div>

                <div className="rounded-xl bg-white p-3 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-500">Candidate</span>
                    <span className="rounded bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-700">Applied</span>
                  </div>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Profile + Resume</p>
                  <p className="text-sm text-slate-600">Submitted for review</p>
                </div>

                <div className="flex items-center justify-center text-brand-600">
                  <ChevronRight className="h-5 w-5" />
                </div>

                <div className="rounded-xl bg-white p-3 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-500">Outcome</span>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">Not guaranteed</span>
                  </div>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Referral or interview opportunity</p>
                  <p className="text-sm text-slate-600">Depends on eligibility and internal process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell py-10 md:py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">Featured opportunities</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-4xl">Validation sample jobs</h2>
            </div>
            <Link href="/jobs" className="button-secondary">View all jobs</Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {jobs.map((job) => (
              <div key={job.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-brand-700">{job.company}</span>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-700">
                    {job.referralAvailable ? 'Referral available' : 'Review required'}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-bold text-slate-900">{job.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{job.location} • {job.workMode}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-700">
                  <span>{job.experience}</span>
                  {job.salary ? <span>{job.salary}</span> : <span>Salary info available on request</span>}
                </div>
                <p className="mt-4 text-sm text-slate-600">{job.description.slice(0, 110)}...</p>
                <Link href={`/jobs/${job.id}`} className="button-secondary mt-5 w-full">
                  View details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell py-10 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard title="Find relevant roles" description="Browse openings by company, title, location, and experience level." />
          <FeatureCard title="Submit your profile" description="Share resume details and your motivation in a short, simple flow." />
          <FeatureCard title="Track referral status" description="Keep candidates informed without promising an outcome before review." />
        </div>
      </section>

      <section className="site-shell pb-12 md:pb-16">
        <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-soft md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-100">Validation-first</p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{SITE_CONFIG.waitlistHead}</h2>
              <p className="mt-3 text-slate-300">{SITE_CONFIG.waitlistSubhead}</p>
            </div>
            <WaitlistForm />
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="card p-6">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
        <Sparkles className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
    </div>
  );
}

function WaitlistForm() {
  return (
    <form action="/api/waitlist" method="POST" className="grid gap-3 md:grid-cols-2">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="waitlistName">Name</label>
        <input id="waitlistName" name="name" className="field border-slate-700 bg-slate-900 text-white placeholder:text-slate-400" placeholder="Your name" required />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="waitlistEmail">Email</label>
        <input id="waitlistEmail" name="email" type="email" className="field border-slate-700 bg-slate-900 text-white placeholder:text-slate-400" placeholder="you@example.com" required />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="waitlistType">User type</label>
        <select id="waitlistType" name="userType" className="field border-slate-700 bg-slate-900 text-white" defaultValue="job seeker">
          <option value="job seeker">Job seeker</option>
          <option value="referrer">Referrer</option>
          <option value="recruiter">Recruiter</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="desiredRole">Desired role</label>
        <input id="desiredRole" name="desiredRole" className="field border-slate-700 bg-slate-900 text-white placeholder:text-slate-400" placeholder="Software engineer" />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="experience">Experience</label>
        <input id="experience" name="experience" className="field border-slate-700 bg-slate-900 text-white placeholder:text-slate-400" placeholder="0-2 years" />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="location">Location</label>
        <input id="location" name="location" className="field border-slate-700 bg-slate-900 text-white placeholder:text-slate-400" placeholder="Bengaluru" />
      </div>
      <div className="md:col-span-2">
        <button type="submit" className="button-primary w-full bg-white text-slate-900 hover:bg-slate-100">Join the Early Access List</button>
      </div>
    </form>
  );
}
