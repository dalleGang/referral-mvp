export default function HowItWorksPage() {
  return (
    <div className="site-shell py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">How it works</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">Simple and transparent for both sides</h1>
        <p className="mt-4 text-base text-slate-600 md:text-lg">The goal is to make internal referrals easier to discover without making unverified promises.</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">For job seekers</h2>
          <ol className="list-check mt-5 pl-0 list-none">
            <li>Find a relevant job that matches your background.</li>
            <li>Submit your profile, experience, and resume.</li>
            <li>Request a referral and track the status.</li>
            <li>Then continue with the company process if approved.</li>
          </ol>
        </div>

        <div className="card p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">For referrers</h2>
          <ol className="list-check mt-5 pl-0 list-none">
            <li>List or share an opening from your network.</li>
            <li>Review suitable candidates and their profiles.</li>
            <li>Refer qualified candidates when appropriate.</li>
            <li>Receive a reward if company policy allows it.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
