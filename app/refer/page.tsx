import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ReferPage() {
  return (
    <div className="site-shell py-10 md:py-16">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">Referrer</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-5xl">Submit an opening</h1>
        <p className="mt-4 text-base text-slate-600">
          Share a role you believe may be suitable for qualified applicants. This MVP is intentionally simple and does not require a full authentication system.
        </p>

        <ReferrerForm />
      </div>
    </div>
  );
}

function ReferrerForm() {
  return (
    <form action="/api/referrer" method="POST" className="mt-8 grid gap-5 md:grid-cols-2">
      <div>
        <label className="label" htmlFor="name">Name</label>
        <input id="name" name="name" className="field" required />
      </div>
      <div>
        <label className="label" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" className="field" required />
      </div>
      <div>
        <label className="label" htmlFor="company">Company</label>
        <input id="company" name="company" className="field" required />
      </div>
      <div>
        <label className="label" htmlFor="jobTitle">Job title</label>
        <input id="jobTitle" name="jobTitle" className="field" required />
      </div>
      <div>
        <label className="label" htmlFor="linkedin">LinkedIn</label>
        <input id="linkedin" name="linkedin" className="field" required />
      </div>
      <div>
        <label className="label" htmlFor="jobOpeningUrl">Job opening URL</label>
        <input id="jobOpeningUrl" name="jobOpeningUrl" className="field" placeholder="https://..." required />
      </div>
      <div>
        <label className="label" htmlFor="role">Role</label>
        <input id="role" name="role" className="field" required />
      </div>
      <div>
        <label className="label" htmlFor="location">Location</label>
        <input id="location" name="location" className="field" required />
      </div>
      <div className="md:col-span-2">
        <label className="label" htmlFor="currentlyEmployed">Are you currently employed at the company?</label>
        <select id="currentlyEmployed" name="currentlyEmployed" className="field" required>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="md:col-span-2">
        <label className="label" htmlFor="relationship">Referral eligibility / relationship</label>
        <textarea id="relationship" name="relationship" className="field min-h-[110px]" placeholder="e.g. Former intern, recruiter, peer referral, etc." required />
      </div>
      <div className="md:col-span-2">
        <label className="label" htmlFor="notes">Additional notes</label>
        <textarea id="notes" name="notes" className="field min-h-[110px]" placeholder="Add any context relevant to the role or candidate screening." />
      </div>

      <div className="md:col-span-2 flex items-center justify-between gap-4">
        <button type="submit" className="button-primary">Submit Opportunity</button>
        <Link href="/jobs" className="button-secondary">View jobs</Link>
      </div>
    </form>
  );
}
