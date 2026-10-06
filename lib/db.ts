import { JobRecord, WaitlistSignup, ReferralRequestRecord, ReferrerSubmission } from '@/lib/types';
import { DEMO_JOBS } from '@/lib/seed-data';

// In-memory storage for serverless MVP
let store = {
  jobs: [...DEMO_JOBS],
  waitlistSignups: [] as WaitlistSignup[],
  referralRequests: [] as ReferralRequestRecord[],
  referrers: [] as ReferrerSubmission[],
  analyticsEvents: [] as Array<{ id: string; eventType: string; page: string; metadata: Record<string, any>; createdAt: string }>
};

export async function getJobs(): Promise<JobRecord[]> {
  return Promise.resolve(store.jobs);
}

export async function getJobById(id: string): Promise<JobRecord | null> {
  const job = store.jobs.find((j) => j.id === id);
  return Promise.resolve(job || null);
}

export function saveWaitlistSignup(payload: {
  name: string;
  email: string;
  userType: string;
  desiredRole: string;
  experience: string;
  location: string;
}): void {
  const signup: WaitlistSignup = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: payload.name,
    email: payload.email,
    userType: payload.userType,
    desiredRole: payload.desiredRole,
    experience: payload.experience,
    location: payload.location,
    createdAt: new Date().toISOString()
  };

  store.waitlistSignups.push(signup);
  recordAnalyticsEvent({
    eventType: 'WAITLIST_SUBMITTED',
    page: '/',
    metadata: { email: payload.email, userType: payload.userType }
  });
}

export function saveReferralRequest(payload: {
  jobId: string;
  fullName: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  resumePath: string | null;
  yearsOfExperience: string;
  currentLocation: string;
  skills: string;
  motivation: string;
  consent: boolean;
}): void {
  const request: ReferralRequestRecord = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    jobId: payload.jobId,
    fullName: payload.fullName,
    email: payload.email,
    phone: payload.phone,
    linkedinUrl: payload.linkedinUrl,
    resumePath: payload.resumePath,
    yearsOfExperience: payload.yearsOfExperience,
    currentLocation: payload.currentLocation,
    skills: payload.skills,
    motivation: payload.motivation,
    consent: payload.consent,
    status: 'new',
    createdAt: new Date().toISOString()
  };

  store.referralRequests.push(request);
  recordAnalyticsEvent({
    eventType: 'REFERRAL_REQUEST_SUBMITTED',
    page: '/jobs',
    metadata: { jobId: payload.jobId, email: payload.email }
  });
}

export function saveReferrer(payload: {
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  linkedin: string;
  jobOpeningUrl: string;
  role: string;
  location: string;
  currentlyEmployed: string;
  relationship: string;
  notes: string;
}): void {
  const referrer: ReferrerSubmission = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: payload.name,
    email: payload.email,
    company: payload.company,
    jobTitle: payload.jobTitle,
    linkedin: payload.linkedin,
    jobOpeningUrl: payload.jobOpeningUrl,
    role: payload.role,
    location: payload.location,
    currentlyEmployed: payload.currentlyEmployed,
    relationship: payload.relationship,
    notes: payload.notes,
    createdAt: new Date().toISOString()
  };

  store.referrers.push(referrer);
  recordAnalyticsEvent({
    eventType: 'REFERRER_SUBMITTED',
    page: '/refer',
    metadata: { company: payload.company, email: payload.email }
  });
}

export function recordAnalyticsEvent(payload: {
  eventType: string;
  page: string;
  metadata?: Record<string, string | number | boolean>;
}): void {
  const event = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    eventType: payload.eventType,
    page: payload.page,
    metadata: payload.metadata || {},
    createdAt: new Date().toISOString()
  };

  store.analyticsEvents.push(event);
}

export async function getDashboardData() {
  const waitlistUsers = store.waitlistSignups;
  const candidates = store.referralRequests;
  const referrers = store.referrers;

  const analytics = store.analyticsEvents.reduce(
    (acc, event) => {
      const existing = acc.find((e) => e.type === event.eventType);
      if (existing) {
        existing.count++;
      } else {
        acc.push({ type: event.eventType, count: 1 });
      }
      return acc;
    },
    [] as Array<{ type: string; count: number }>
  );

  const userTypeBreakdown = waitlistUsers.reduce(
    (acc, user) => {
      const existing = acc.find((e) => e.type === user.userType);
      if (existing) {
        existing.count++;
      } else {
        acc.push({ type: user.userType, count: 1 });
      }
      return acc;
    },
    [] as Array<{ type: string; count: number }>
  );

  return Promise.resolve({
    waitlistCount: waitlistUsers.length,
    jobCount: { count: store.jobs.length },
    referralRequestCount: candidates.length,
    referrerCount: referrers.length,
    waitlistUsers,
    candidates,
    referrers,
    analytics,
    userTypeBreakdown
  });
}
