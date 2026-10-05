import Link from 'next/link';
import { Building2, HeartHandshake, BarChart3 } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="site-shell py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-lg font-bold text-slate-900">ReferBridge</div>
            <p className="mt-3 text-sm text-slate-600">An early-stage referral marketplace for validating whether job seekers and referrers value a more structured, trustworthy referral flow.</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">Explore</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link href="/jobs">Jobs</Link></li>
              <li><Link href="/how-it-works">How it works</Link></li>
              <li><Link href="/why-this-exists">Why this exists</Link></li>
              <li><Link href="/trust">Trust & disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">Validation</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link href="/admin/login">Admin login</Link></li>
              <li><Link href="/refer">Submit an opportunity</Link></li>
              <li><Link href="/jobs">Browse sample jobs</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-5 text-sm text-slate-500">
          Demo platform for validation. Referrals are not guaranteed and do not guarantee interviews or employment.
        </div>
      </div>
    </footer>
  );
}
