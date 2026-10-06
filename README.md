# ReferBridge MVP

A lightweight job-referral marketplace MVP for validating early demand in the job-seeker and referrer market.

## Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- In-memory storage (serverless-safe MVP)

## What is included

- Landing page with reusable conversion-focused messaging
- Job listing and detailed job pages
- Referral request form with resume upload
- Referrer submission flow
- Early-access waitlist form
- Admin dashboard with basic metrics and tables
- Simple analytics event logging
- Demo job data
- SEO metadata, robots, and sitemap

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Run the app:

```bash
npm run dev
```

4. Open http://localhost:3000

## Admin access

Use the password configured in `.env.local` or the default local value:

```text
admin123
```

Then visit `/admin/login` and sign in.

## Data storage

The application uses in-memory storage for MVP validation:
- Demo jobs are always available
- Submissions (waitlist, referrals, referrers) are stored in memory during the session
- Data resets when the app restarts (this is intentional for MVP validation)
- For production, connect to a real database (PostgreSQL, MongoDB, etc.)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel (https://vercel.com)
3. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL` = your Vercel domain (e.g., `https://your-app.vercel.app`)
   - `ADMIN_PASSWORD` = your admin password (e.g., `admin123`)
4. Deploy

### Local

```bash
npm run build
npm run start
```

Then open http://localhost:3000

## Notes

- Demo/sample job listings are intentionally marked as sample data.
- Resume uploads are stored temporarily in memory.
- The code is optimized for easy iteration as testing reveals the best landing page message and conversion flow.
- This MVP is designed for validation, not production use.
