export type UserType = 'job seeker' | 'referrer' | 'recruiter' | 'other';

export type JobRecord = {
  id: string;
  title: string;
  company: string;
  location: string;
  workMode: string;
  experience: string;
  salary?: string;
  postedAt: string;
  description: string;
  requirements: string[];
  referralAvailable: boolean;
  referrer?: string;
  status: string;
  isDemo: boolean;
};

export type WaitlistSignup = {
  id: string;
  name: string;
  email: string;
  userType: UserType | string;
  desiredRole: string;
  experience: string;
  location: string;
  createdAt: string;
};

export type ReferralRequestRecord = {
  id: string;
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
  status: string;
  createdAt: string;
};

export type ReferrerSubmission = {
  id: string;
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
  createdAt: string;
};

export type AnalyticsEventRecord = {
  id: string;
  eventType: string;
  page: string;
  metadata: Record<string, string | number | boolean>;
  createdAt: string;
};
