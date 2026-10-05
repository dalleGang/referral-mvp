import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { AnalyticsTracker } from '@/components/analytics-tracker';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'ReferBridge | Get Referred to Better Jobs',
    template: '%s | ReferBridge'
  },
  description:
    'Discover job opportunities where employees and referrers can help qualified candidates get referred. Honest, transparent, and designed for early validation.',
  openGraph: {
    title: 'ReferBridge | Get Referred to Better Jobs',
    description:
      'Find job opportunities that may be eligible for employee referrals and connect with trusted candidates.',
    type: 'website',
    locale: 'en_IN'
  },
  keywords: ['job referrals', 'career opportunities', 'employee referral', 'job marketplace', 'India jobs'],
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-slate-50 text-slate-900">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
        <AnalyticsTracker />
      </body>
    </html>
  );
}
