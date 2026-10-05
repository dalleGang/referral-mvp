import Link from 'next/link';
import { ArrowRight, Building2, Handshake, BarChart3 } from 'lucide-react';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="site-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white">R</div>
          <div>
            <div className="text-base font-bold tracking-tight text-slate-900">ReferBridge</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="/jobs" className="hover:text-brand-700">Jobs</Link>
          <Link href="/how-it-works" className="hover:text-brand-700">How it works</Link>
          <Link href="/why-this-exists" className="hover:text-brand-700">Why this exists</Link>
          <Link href="/trust" className="hover:text-brand-700">Trust</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/refer" className="button-secondary hidden sm:inline-flex">Become a Referrer</Link>
          <Link href="/jobs" className="button-primary">Find Jobs</Link>
        </div>
      </div>
    </header>
  );
}
