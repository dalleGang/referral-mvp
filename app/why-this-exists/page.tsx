export default function WhyThisExistsPage() {
  return (
    <div className="site-shell py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">Why this exists</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">Many qualified candidates never get seen</h1>
        <p className="mt-4 text-base text-slate-600 md:text-lg">
          Job portals collect thousands of applications, but many strong candidates never reach the right hiring manager. Employees often know about roles before they become public and can connect qualified people with the right teams.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="card p-6">
          <h2 className="text-xl font-bold text-slate-900">Blind applications</h2>
          <p className="mt-3 text-slate-600">Mass applications often lead to poor visibility when a candidate is otherwise strong.</p>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold text-slate-900">Hidden opportunities</h2>
          <p className="mt-3 text-slate-600">People inside companies may know about roles before wider public listings appear.</p>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold text-slate-900">Better matching</h2>
          <p className="mt-3 text-slate-600">The platform aims to connect qualified candidates with referrers who understand role fit and process.</p>
        </div>
      </div>
    </div>
  );
}
