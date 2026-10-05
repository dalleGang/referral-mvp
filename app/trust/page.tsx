export default function TrustPage() {
  return (
    <div className="site-shell py-12 md:py-16">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">Trust & disclaimer</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">Important information</h1>

        <ul className="list-check mt-6 pl-0 list-none">
          <li>Referrals do not guarantee interviews, screening calls, or employment.</li>
          <li>Referrals do not guarantee jobs or placements.</li>
          <li>Candidates must meet the role requirements and hiring process requirements.</li>
          <li>Referral availability depends on the referrer, company policy, and internal approval.</li>
          <li>Any rewards or commissions are subject to applicable platform terms and company policy.</li>
          <li>The platform does not sell jobs or promise placement outcomes.</li>
        </ul>
      </div>
    </div>
  );
}
