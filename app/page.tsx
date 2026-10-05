import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, Users, Sparkles } from 'lucide-react';
import { getJobs } from '@/lib/db';
import { SITE_CONFIG } from '@/lib/site-config';
import { LandingPage } from '@/components/landing-page';

export default async function HomePage() {
  const jobs = await getJobs();

  return (
    <>
      <LandingPage jobs={jobs.slice(0, 3)} />
    </>
  );
}
