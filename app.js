:root {
  --bg: #f8fafc;
  --card: #ffffff;
  --text: #0f172a;
  --muted: #475569;
  --line: #e2e8f0;
  --primary: #1d4ed8;
  --primary-dark: #163bb8;
  --primary-soft: #eff6ff;
  --success: #166534;
  --success-soft: #ecfdf5;
  --warning: #9a5b00;
  --warning-soft: #fff7ed;
  --shadow: 0 14px 32px rgba(15, 23, 42, 0.08);
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.5;
}

a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }

.container {
  width: min(1120px, calc(100% - 24px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 72px;
  gap: 16px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 1.1rem;
}

.brand-mark {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: var(--primary);
  color: white;
  display: grid;
  place-items: center;
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: 22px;
  color: var(--muted);
  font-weight: 600;
}

.nav-actions {
  display: flex;
  gap: 12px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 0.85rem 1.2rem;
  font-weight: 700;
  border: 1px solid var(--line);
  cursor: pointer;
  transition: 0.2s ease;
}

.btn:hover { transform: translateY(-1px); }

.btn-primary {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.btn-primary:hover { background: var(--primary-dark); }

.btn-secondary {
  background: white;
  color: var(--text);
}

.btn-light {
  background: white;
  color: var(--text);
  width: 100%;
}

.hero {
  padding: 64px 0 48px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 30px;
  align-items: center;
}

.pill {
  display: inline-block;
  background: var(--primary-soft);
  color: var(--primary);
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1 {
  font-size: clamp(2.5rem, 4vw, 4.2rem);
  line-height: 1.05;
  margin: 18px 0 14px;
}

h2 {
  font-size: clamp(2rem, 2vw, 2.5rem);
  line-height: 1.15;
  margin: 0;
}

h3 { margin: 0 0 10px; }

.lead {
  font-size: 1.1rem;
  color: var(--muted);
  max-width: 620px;
}

.cta-row {
  display: flex;
  gap: 12px;
  margin: 28px 0 20px;
  flex-wrap: wrap;
}

.trust-points {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.9;
}

.flow-card {
  background: white;
  border: 1px solid var(--line);
  border-radius: 24px;
  box-shadow: var(--shadow);
  padding: 22px;
}

.flow-step {
  background: #f8fafc;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.flow-step.alt {
  background: #f0fdf4;
}

.step-label {
  color: var(--muted);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
}

.arrow {
  text-align: center;
  font-size: 1.5rem;
  color: var(--primary);
  padding: 10px 0;
  font-weight: 700;
}

.section {
  padding: 36px 0 20px;
}

.section-heading-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}

.eyebrow {
  margin: 0 0 8px;
  color: var(--primary);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.76rem;
}

.light { color: white; }

.job-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.job-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 20px;
  box-shadow: var(--shadow);
}

.job-meta {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 12px;
}

.job-tag {
  font-size: 0.68rem;
  background: var(--primary-soft);
  color: var(--primary);
  border-radius: 999px;
  font-weight: 700;
  padding: 0.4rem 0.7rem;
}

.job-card p {
  color: var(--muted);
}

.job-info {
  display: grid;
  gap: 8px;
  margin: 18px 0;
  color: var(--muted);
  font-size: 0.94rem;
}

.job-info strong { color: var(--text); }

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.feature-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 24px;
  box-shadow: var(--shadow);
}

.icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: var(--primary-soft);
  display: grid;
  place-items: center;
  color: var(--primary);
  font-weight: 700;
  margin-bottom: 16px;
}

.waitlist-wrap {
  padding-bottom: 60px;
}

.waitlist-box {
  background: #0f172a;
  border-radius: 24px;
  color: white;
  padding: 28px;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 24px;
  align-items: end;
}

.waitlist-box p { color: #cbd5e1; }

.waitlist-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.form-row {
  display: grid;
  gap: 12px;
}

.two-col { grid-template-columns: repeat(2, minmax(0, 1fr)); }

label {
  display: block;
  margin-bottom: 8px;
  font-size: 0.9rem;
  font-weight: 600;
}

input, select, textarea {
  width: 100%;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: white;
  padding: 0.8rem 0.9rem;
  font-size: 1rem;
  color: var(--text);
}

textarea { resize: vertical; }

.full-width { width: 100%; }

.footer {
  border-top: 1px solid var(--line);
  background: white;
  padding: 28px 0 38px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 26px;
}

.footer h3, .footer h4 { margin: 0 0 12px; }

.footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;
  color: var(--muted);
}

.page-pad {
  padding-top: 48px;
  padding-bottom: 56px;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 18px;
  margin-bottom: 20px;
}

.info-banner {
  background: #fff7ed;
  color: var(--warning);
  border: 1px solid #fed7aa;
  border-radius: 14px;
  padding: 14px 16px;
  margin-bottom: 24px;
  font-weight: 600;
}

.detail-layout {
  display: grid;
  grid-template-columns: 1.5fr 0.8fr;
  gap: 24px;
  align-items: start;
}

.detail-card,
.sidebar-card,
.card,
.admin-card,
.detail-form-card,
.stat-card {
  background: white;
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: var(--shadow);
}

.detail-card,
.sidebar-card,
.detail-form-card,
.card {
  padding: 22px;
}

.sidebar-card {
  position: sticky;
  top: 90px;
}

.muted {
  color: var(--muted);
}

.detail-list {
  margin: 18px 0;
  padding-left: 18px;
  color: var(--muted);
}

.detail-list li { margin-bottom: 10px; }

.form-card {
  max-width: 880px;
  margin: 0 auto;
}

.job-form {
  display: grid;
  gap: 18px;
  margin-top: 20px;
}

.checkbox-row {
  display: flex;
  align-items: start;
  gap: 10px;
  color: var(--muted);
  font-weight: 600;
}

.checkbox-row input {
  width: auto;
  margin-top: 4px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0,1fr));
  gap: 18px;
  margin-top: 18px;
}

.stat-card {
  padding: 20px;
  display: grid;
  gap: 8px;
}

.stat-card span { color: var(--muted); }

.stat-card strong {
  font-size: 2rem;
}

.dashboard-grid {
  margin-top: 26px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0,1fr));
  gap: 18px;
}

.three-col { grid-template-columns: repeat(3, minmax(0,1fr)); }

.admin-card {
  padding: 20px;
}

.list-stack,
.item-list {
  display: grid;
  gap: 10px;
  margin-top: 18px;
}

.list-row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 12px;
  background: #f8fafc;
  border: 1px solid var(--line);
}

.item {
  padding: 12px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #f8fafc;
}

.item strong { display: block; margin-bottom: 3px; }

.back-link {
  display: inline-block;
  margin-bottom: 16px;
  color: var(--primary);
  font-weight: 700;
}

.success-message {
  margin-top: 16px;
  padding: 12px 14px;
  border-radius: 12px;
  background: var(--success-soft);
  color: var(--success);
  font-weight: 700;
  border: 1px solid #bbf7d0;
}

@media (max-width: 900px) {
  .hero-grid,
  .detail-layout,
  .waitlist-box,
  .dashboard-grid,
  .three-col,
  .footer-grid,
  .job-grid,
  .feature-grid,
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .nav {
    flex-wrap: wrap;
    padding: 14px 0;
  }

  .nav-links {
    width: 100%;
    justify-content: center;
  }

  .nav-actions {
    width: 100%;
    justify-content: center;
  }

  .two-col {
    grid-template-columns: 1fr;
  }

  .page-header,
  .section-heading-row {
    flex-direction: column;
    align-items: flex-start;
  }
}
