const sampleJobs = [
  {
    id: 'microsoft-swe-intern',
    title: 'Software Engineer Intern',
    company: 'Microsoft',
    location: 'Bangalore',
    workMode: 'Hybrid',
    experience: '0–1 years',
    salary: '₹18–25 LPA',
    postedAt: '2026-10-01',
    referralAvailable: true,
    description: 'We are looking for a curious software engineer intern who enjoys problem solving, shipping code, and learning from experienced engineers. This is demo data for validation testing only and is not a real Microsoft listing.',
    requirements: [
      'B.E./B.Tech in Computer Science or equivalent',
      'Strong fundamentals in data structures and algorithms',
      'Good understanding of JavaScript, TypeScript and web development',
      'Strong communication and teamwork'
    ]
  },
  {
    id: 'google-data-analyst',
    title: 'Data Analyst',
    company: 'Google',
    location: 'Bengaluru',
    workMode: 'Remote',
    experience: '1–3 years',
    salary: '₹18–28 LPA',
    postedAt: '2026-09-28',
    referralAvailable: true,
    description: 'Support product teams with usage insights, dashboarding, and experiment analysis. This is sample data for the validation prototype and should not be treated as a live Google listing.',
    requirements: [
      'Bachelor\'s degree in analytics, statistics or related field',
      'SQL and dashboarding experience',
      'Comfortable synthesizing data for business decisions',
      'Good written communication'
    ]
  },
  {
    id: 'amazon-pm',
    title: 'Product Manager',
    company: 'Amazon',
    location: 'Hyderabad',
    workMode: 'On-site',
    experience: '2–5 years',
    salary: '₹25–40 LPA',
    postedAt: '2026-09-22',
    referralAvailable: false,
    description: 'Own roadmap discovery, stakeholder coordination, and customer problem analysis. This is sample data for validation testing only and not a live role at Amazon.',
    requirements: [
      '2+ years in product, strategy, consulting or operations',
      'Strong product sense and stakeholder management',
      'Comfortable with experimentation and prioritization',
      'Data-driven decision making'
    ]
  },
  {
    id: 'paypal-sdet',
    title: 'Senior SDET',
    company: 'PayPal',
    location: 'Pune',
    workMode: 'Hybrid',
    experience: '3–5 years',
    salary: '₹22–35 LPA',
    postedAt: '2026-09-18',
    referralAvailable: true,
    description: 'Build robust automation and improve release confidence across engineering and QA. This is sample data for the MVP validation phase and not an actual PayPal listing.',
    requirements: [
      'Hands-on experience in test automation',
      'Strong scripting in Java or Python',
      'Comfortable with CI/CD and release pipelines',
      'Ability to define quality metrics'
    ]
  }
];

const JOBS_STORAGE_KEY = 'referbridge_jobs';
const WAITLIST_KEY = 'referbridge_waitlist';
const REQUESTS_KEY = 'referbridge_requests';
const REFERRERS_KEY = 'referbridge_referrers';
const ANALYTICS_KEY = 'referbridge_analytics';

function getStorageData(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function setStorageData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function seedJobs() {
  const jobs = getStorageData(JOBS_STORAGE_KEY, null);
  if (!jobs) {
    setStorageData(JOBS_STORAGE_KEY, sampleJobs);
  }
}

seedJobs();

function renderFeaturedJobs() {
  const container = document.getElementById('featuredJobs');
  if (!container) return;

  const jobs = getStorageData(JOBS_STORAGE_KEY, sampleJobs).slice(0, 3);
  container.innerHTML = jobs.map(job => `
    <article class="job-card">
      <div class="job-meta">
        <div>
          <strong>${job.company}</strong>
          <h3>${job.title}</h3>
        </div>
        <span class="job-tag">${job.referralAvailable ? 'Referral available' : 'Review required'}</span>
      </div>

      <div class="job-info">
        <div><strong>Location:</strong> ${job.location}</div>
        <div><strong>Work mode:</strong> ${job.workMode}</div>
        <div><strong>Experience:</strong> ${job.experience}</div>
        <div><strong>Salary:</strong> ${job.salary || 'Available on request'}</div>
      </div>

      <p>${job.description.slice(0, 110)}...</p>
      <a class="btn btn-primary full-width" href="job.html?id=${job.id}">Request Referral</a>
    </article>
  `).join('');
}

function renderJobsList() {
  const container = document.getElementById('jobsList');
  if (!container) return;

  const jobs = getStorageData(JOBS_STORAGE_KEY, sampleJobs);
  container.innerHTML = jobs.map(job => `
    <article class="job-card">
      <div class="job-meta">
        <div>
          <strong>${job.company}</strong>
          <h3>${job.title}</h3>
        </div>
        <span class="job-tag">${job.referralAvailable ? 'Referral available' : 'Review required'}</span>
      </div>

      <div class="job-info">
        <div><strong>Location:</strong> ${job.location}</div>
        <div><strong>Mode:</strong> ${job.workMode}</div>
        <div><strong>Experience:</strong> ${job.experience}</div>
        <div><strong>Salary:</strong> ${job.salary || 'Available on request'}</div>
      </div>

      <p>${job.description}</p>
      <a class="btn btn-primary full-width" href="job.html?id=${job.id}">Request Referral</a>
    </article>
  `).join('');
}

function renderJobDetail() {
  const detail = document.getElementById('jobDetail');
  if (!detail) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const jobs = getStorageData(JOBS_STORAGE_KEY, sampleJobs);
  const job = jobs.find(item => item.id === id) || jobs[0];

  if (!job) return;

  document.getElementById('jobId').value = job.id;

  detail.innerHTML = `
    <div class="job-meta">
      <div>
        <span class="job-tag">${job.company}</span>
        <h2>${job.title}</h2>
      </div>
      <span class="job-tag">${job.referralAvailable ? 'Referral available' : 'Review required'}</span>
    </div>

    <p class="muted">${job.location} • ${job.workMode} • ${job.experience}</p>

    <div class="job-info">
      <div><strong>Salary:</strong> ${job.salary || 'Available on request'}</div>
      <div><strong>Posted:</strong> ${new Date(job.postedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
    </div>

    <h3>Job description</h3>
    <p>${job.description}</p>

    <h3>Requirements</h3>
    <ul class="detail-list">
      ${job.requirements.map(item => `<li>${item}</li>`).join('')}
    </ul>
  `;
}

function saveWaitlist(formData) {
  const current = getStorageData(WAITLIST_KEY, []);
  const entry = {
    id: Date.now().toString(),
    name: formData.get('name'),
    email: formData.get('email'),
    userType: formData.get('userType'),
    desiredRole: formData.get('desiredRole'),
    experience: formData.get('experience'),
    location: formData.get('location'),
    createdAt: new Date().toISOString()
  };

  current.push(entry);
  setStorageData(WAITLIST_KEY, current);
  recordAnalytics('WAITLIST_SUBMITTED', '/', { userType: entry.userType, email: entry.email });
}

function saveReferralRequest(formData) {
  const current = getStorageData(REQUESTS_KEY, []);
  const entry = {
    id: Date.now().toString(),
    jobId: formData.get('jobId'),
    fullName: formData.get('fullName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    linkedinUrl: formData.get('linkedinUrl'),
    yearsOfExperience: formData.get('yearsOfExperience'),
    currentLocation: formData.get('currentLocation'),
    skills: formData.get('skills'),
    motivation: formData.get('motivation'),
    createdAt: new Date().toISOString()
  };

  current.push(entry);
  setStorageData(REQUESTS_KEY, current);
  recordAnalytics('REFERRAL_REQUEST_SUBMITTED', '/jobs.html', { jobId: entry.jobId, email: entry.email });
}

function saveReferrer(formData) {
  const current = getStorageData(REFERRERS_KEY, []);
  const entry = {
    id: Date.now().toString(),
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    jobTitle: formData.get('jobTitle'),
    createdAt: new Date().toISOString()
  };

  current.push(entry);
  setStorageData(REFERRERS_KEY, current);
  recordAnalytics('REFERRER_SUBMITTED', '/refer.html', { company: entry.company, email: entry.email });
}

function recordAnalytics(eventType, page, metadata = {}) {
  const current = getStorageData(ANALYTICS_KEY, []);
  current.push({
    id: Date.now().toString(),
    eventType,
    page,
    metadata,
    createdAt: new Date().toISOString()
  });
  setStorageData(ANALYTICS_KEY, current);
}

function renderAdminDashboard() {
  const waitlist = getStorageData(WAITLIST_KEY, []);
  const requests = getStorageData(REQUESTS_KEY, []);
  const referrers = getStorageData(REFERRERS_KEY, []);
  const analytics = getStorageData(ANALYTICS_KEY, []);
  const jobs = getStorageData(JOBS_STORAGE_KEY, sampleJobs);

  document.getElementById('totalWaitlist').textContent = waitlist.length;
  document.getElementById('totalJobs').textContent = jobs.length;
  document.getElementById('totalRequests').textContent = requests.length;
  document.getElementById('totalReferrers').textContent = referrers.length;

  const userTypeBreakdown = {};
  waitlist.forEach(item => {
    userTypeBreakdown[item.userType || 'Other'] = (userTypeBreakdown[item.userType || 'Other'] || 0) + 1;
  });

  const analyticsBreakdown = {};
  analytics.forEach(item => {
    analyticsBreakdown[item.eventType] = (analyticsBreakdown[item.eventType] || 0) + 1;
  });

  document.getElementById('userTypeBreakdown').innerHTML = Object.entries(userTypeBreakdown).map(([type, count]) => `
    <div class="list-row"><span>${type}</span><strong>${count}</strong></div>
  `).join('') || '<div class="list-row"><span>No data yet</span><strong>0</strong></div>';

  document.getElementById('analyticsBreakdown').innerHTML = Object.entries(analyticsBreakdown).map(([type, count]) => `
    <div class="list-row"><span>${type}</span><strong>${count}</strong></div>
  `).join('') || '<div class="list-row"><span>No events yet</span><strong>0</strong></div>';

  document.getElementById('waitlistList').innerHTML = waitlist.length
    ? waitlist.slice(0, 8).map(item => `
      <div class="item">
        <strong>${item.name}</strong>
        <div>${item.email}</div>
        <div>${item.userType}</div>
      </div>
    `).join('')
    : '<div class="item">No waitlist signups yet.</div>';

  document.getElementById('requestsList').innerHTML = requests.length
    ? requests.slice(0, 8).map(item => `
      <div class="item">
        <strong>${item.fullName}</strong>
        <div>${item.email}</div>
        <div>${item.currentLocation}</div>
      </div>
    `).join('')
    : '<div class="item">No referral requests yet.</div>';

  document.getElementById('referrersList').innerHTML = referrers.length
    ? referrers.slice(0, 8).map(item => `
      <div class="item">
        <strong>${item.name}</strong>
        <div>${item.company}</div>
        <div>${item.jobTitle}</div>
      </div>
    `).join('')
    : '<div class="item">No referrer submissions yet.</div>';
}

function bindForms() {
  const waitlistForm = document.getElementById('waitlistForm');
  if (waitlistForm) {
    waitlistForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(waitlistForm);
      saveWaitlist(formData);
      waitlistForm.reset();
      alert('Your early access request has been received.');
    });
  }

  const referralForm = document.getElementById('referralRequestForm');
  if (referralForm) {
    referralForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(referralForm);
      saveReferralRequest(formData);
      referralForm.reset();
      const success = document.createElement('div');
      success.className = 'success-message';
      success.textContent = 'Your referral request has been received.';
      referralForm.appendChild(success);
    });
  }

  const referrerForm = document.getElementById('referrerForm');
  if (referrerForm) {
    referrerForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(referrerForm);
      saveReferrer(formData);
      referrerForm.reset();
      const success = document.createElement('div');
      success.className = 'success-message';
      success.textContent = 'Your opportunity has been submitted successfully.';
      referrerForm.appendChild(success);
    });
  }
}

renderFeaturedJobs();
renderJobsList();
renderJobDetail();
renderAdminDashboard();
bindForms();
