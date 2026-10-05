# ReferBridge MVP

A lightweight job-referral marketplace MVP for validating early demand in the job-seeker and referrer market.

## Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- SQLite (local MVP data store)

## What is included

- Landing page with reusable conversion-focused messaging
- Job listing and detailed job pages
- Referral request form with resume upload
- Referrer submission flow
- Early-access waitlist form
- Admin dashboard with basic metrics and tables
- Simple analytics event logging
- Local SQLite database with realistic demo data
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

## Database

The application stores data in `data/referral-mvp.db` and creates tables automatically on first run.

## Notes

- Demo/sample job listings are intentionally marked as sample data.
- Resume uploads are saved locally under `data/uploads` for MVP validation.
- The code is built to be easy to iterate on as testing reveals the best landing page message and conversion flow.
