import { JobRecord } from '@/lib/types';

export const SITE_CONFIG = {
  brand: 'ReferBridge',
  headline: 'Stop applying blindly. Get referred.',
  subheadline: 'Discover job opportunities where people inside companies can help qualified candidates get referred.',
  primaryCTA: 'Find Jobs',
  secondaryCTA: 'Become a Referrer',
  waitlistHead: 'Join the Early Access List',
  waitlistSubhead: 'We will share relevant jobs and opportunities as soon as they become available.'
};

export const DEMO_JOBS: JobRecord[] = [
  {
    id: 'microsoft-swe-intern-banglore',
    title: 'Software Engineer Intern',
    company: 'Microsoft',
    location: 'Bangalore',
    workMode: 'Hybrid',
    experience: '0-1 years',
    salary: '₹18-25 LPA',
    postedAt: '2026-10-02T00:00:00.000Z',
    description: 'We are looking for a curious software engineer intern who enjoys problem solving, shipping code, and learning from experienced engineers. This is a demo role intended to help validate a referral marketplace MVP. Candidates should be comfortable with JavaScript/TypeScript and basic web application concepts.',
    requirements: ['B.E./B.Tech in Computer Science or equivalent', 'Strong fundamentals in data structures and algorithms', 'Good understanding of JavaScript, TypeScript, and React', 'Good communication and teamwork'],
    referralAvailable: true,
    referrer: 'Aisha P.',
    status: 'open',
    isDemo: true
  },
  {
    id: 'google-data-analyst-bengaluru',
    title: 'Data Analyst',
    company: 'Google',
    location: 'Bengaluru',
    workMode: 'Remote',
    experience: '1-3 years',
    salary: '₹18-28 LPA',
    postedAt: '2026-09-28T00:00:00.000Z',
    description: 'The Data Analyst will help monitor usage metrics, build dashboards, and support product teams with actionable insights. This demo opportunity exists for validation testing only and is not a live Google job listing.',
    requirements: ['Bachelor\'s degree in analytics, statistics, economics or related', 'SQL, Excel, and dashboarding experience', 'Comfortable with data storytelling', 'Strong written communication'],
    referralAvailable: true,
    referrer: 'Nikhil S.',
    status: 'open',
    isDemo: true
  },
  {
    id: 'amazon-product-manager-hyderabad',
    title: 'Product Manager',
    company: 'Amazon',
    location: 'Hyderabad',
    workMode: 'On-site',
    experience: '2-5 years',
    salary: '₹25-40 LPA',
    postedAt: '2026-09-23T00:00:00.000Z',
    description: 'We are looking for a product-minded professional to own roadmap discovery, stakeholder coordination, and customer problem analysis. This is a sample listing for the MVP validation phase and not an actual Amazon listing.',
    requirements: ['2+ years in product, operations, strategy, or consulting', 'Understanding of user research and experimentation', 'Strong problem framing and stakeholder management', 'Good data analysis skills'],
    referralAvailable: false,
    referrer: 'Madhuri K.',
    status: 'review',
    isDemo: true
  },
  {
    id: 'paypal-sdet-pune',
    title: 'Senior SDET',
    company: 'PayPal',
    location: 'Pune',
    workMode: 'Hybrid',
    experience: '3-5 years',
    salary: '₹22-35 LPA',
    postedAt: '2026-09-18T00:00:00.000Z',
    description: 'The ideal candidate enjoys building robust automation, improving release confidence, and collaborating across engineering and QA. This is a sample role used to refine the marketplace concept and should not be interpreted as a live job opening.',
    requirements: ['Hands-on experience in test automation', 'Strong scripting ability in Java or Python', 'Understanding of CI/CD and release pipelines', 'Ability to create test plans and quality dashboards'],
    referralAvailable: true,
    referrer: 'Vikram R.',
    status: 'open',
    isDemo: true
  }
];
