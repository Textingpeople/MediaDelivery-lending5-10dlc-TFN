'use client';

import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function ForEmployersPage() {
  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative pt-48 pb-28 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono-label mb-8" style={{ color: 'rgba(240,248,250,0.75)', fontSize: '0.65rem' }}>
            For Employers
          </p>
          <h1 className="headline-xl text-white mb-8">
            A budgeting benefit
            <br />
            <em className="italic-accent">for your whole workforce.</em>
          </h1>
          <p style={{ color: 'rgba(240,248,250,0.85)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '540px', margin: '0 auto 2.5rem' }}>
            Give every employee a private place to build a monthly budget and track their own goals, without adding work for your HR team.
          </p>
          <Link href="/talk-to-sales" className="btn-primary">
            Talk to Sales
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section style={{ background: 'var(--forest)', borderTop: '1px solid rgba(240,248,250,0.1)' }}>
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                title: 'Private by design',
                desc: 'Employers never see any individual budget or goals. Only anonymous, aggregate usage trends are shared.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: 'Open to every employee',
                desc: 'Anyone you invite can use it, whatever their role, schedule or pay frequency. No account connections are needed.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                ),
                title: 'Light-touch reporting',
                desc: 'See how many employees have enrolled and whether people are using the tools, always in aggregate.',
              },
            ].map((pillar, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(240,248,250,0.1)', color: 'rgba(240,248,250,0.9)' }}
                >
                  {pillar.icon}
                </div>
                <div>
                  <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.35rem' }}>{pillar.title}</p>
                  <p style={{ color: 'rgba(240,248,250,0.75)', fontSize: '0.82rem', lineHeight: 1.6 }}>{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 FEATURES ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              What Employees Get
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              Simple tools
              <br />
              <em className="italic-accent">they can use on their own.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: 'Monthly Budget',
                body: 'Employees enter their own income and spending categories and plan each month in a few minutes.',
              },
              {
                label: 'Money Goals',
                body: 'Employees name goals such as a vacation fund or a down payment and update their own progress.',
              },
              {
                label: 'Reminders',
                body: 'Optional reminders help employees review their budget and update goals, by text or calendar export.',
              },
              {
                label: 'Budget Challenges',
                body: 'Monthly, optional challenges such as a 30-day spending tracker give employees a reason to come back.',
              },
            ].map((f, i) => (
              <div key={i} className="card-feature p-8" style={{ minHeight: '240px' }}>
                <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.6rem', lineHeight: 1.5 }}>
                  {f.label}
                </p>
                <p style={{ color: 'var(--charcoal)', fontSize: '0.95rem', lineHeight: 1.75 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIMPLE ROLLOUT ── */}
      <section className="py-28 px-6" style={{ background: 'var(--white)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              Simple Rollout
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              Three steps
              <br />
              <em className="italic-accent">to get started.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Talk with us',
                desc: 'Tell us about your organization and we will walk through how Balanced Pathway would work for your team.',
              },
              {
                num: '02',
                title: 'Invite your employees',
                desc: 'Share an Employer ID, or use your HR system to verify eligibility and send invitations. Employees sign up on their own.',
              },
              {
                num: '03',
                title: 'See anonymous trends',
                desc: 'Check aggregate usage over time. Individual budgets and goals are never part of what you see.',
              },
            ].map(step => (
              <div key={step.num}>
                <p className="font-mono-label mb-4" style={{ color: 'rgba(15,37,53,0.55)', fontSize: '0.65rem' }}>{step.num}</p>
                <h3 className="font-serif mb-3" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--forest)' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'rgba(15,37,53,0.75)', fontSize: '0.9rem', lineHeight: 1.75 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMPLOYER VIEW ── */}
      <section className="py-28 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono-label mb-6" style={{ color: 'rgba(240,248,250,0.75)', fontSize: '0.65rem' }}>
                What You See
              </p>
              <h2 className="headline-lg text-white mb-6">
                Anonymous trends,
                <br />
                <em className="italic-accent">never individuals.</em>
              </h2>
              <p style={{ color: 'rgba(240,248,250,0.8)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Employer reporting is limited to anonymous, aggregate usage. Nothing an employee enters is shown to you individually.
              </p>
              <div className="space-y-4">
                {[
                  'Number of employees enrolled',
                  'Overall usage of the budget and goal tools',
                  'Participation in monthly Budget Challenges',
                  'Reminder opt-in rates, in aggregate',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(240,248,250,0.15)' }}
                    >
                      <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p style={{ color: 'rgba(240,248,250,0.9)', fontSize: '0.9rem' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{ background: 'rgba(240,248,250,0.06)', border: '1px solid rgba(240,248,250,0.15)' }}
            >
              <div className="mb-6">
                <p className="font-mono-label" style={{ color: 'rgba(240,248,250,0.75)', fontSize: '0.6rem' }}>
                  Employer View
                </p>
                <p style={{ color: '#FFFFFF', fontWeight: 600, marginTop: '0.25rem' }}>Anonymous, aggregate only</p>
              </div>
              <div className="space-y-3 mb-6">
                {[
                  { label: 'Employees enrolled', value: 'Aggregate count' },
                  { label: 'Tool usage', value: 'Aggregate trend' },
                  { label: 'Challenge participation', value: 'Aggregate trend' },
                  { label: 'Individual budgets and goals', value: 'Not visible' },
                ].map(row => (
                  <div
                    key={row.label}
                    className="rounded-xl p-4 flex items-center justify-between gap-3"
                    style={{ background: 'rgba(240,248,250,0.07)' }}
                  >
                    <p style={{ color: '#FFFFFF', fontSize: '0.85rem' }}>{row.label}</p>
                    <p className="font-mono-label" style={{ color: '#4BBFD4', fontSize: '0.6rem' }}>{row.value}</p>
                  </div>
                ))}
              </div>
              <div
                className="rounded-xl p-4 flex items-start gap-3"
                style={{ background: 'rgba(75,191,212,0.1)', border: '1px solid rgba(75,191,212,0.3)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4BBFD4" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <p style={{ color: 'rgba(240,248,250,0.85)', fontSize: '0.75rem', lineHeight: 1.5 }}>
                  <strong style={{ color: '#FFFFFF' }}>Privacy protected:</strong> Employers never see individual budgets or goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono-label mb-8" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
            Get Started
          </p>
          <h2 className="headline-lg mb-8" style={{ color: 'var(--forest)' }}>
            Offer a budgeting benefit
            <br />
            <em className="italic-accent">your team can use.</em>
          </h2>
          <p style={{ color: 'rgba(15,37,53,0.7)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '440px', margin: '0 auto 2.5rem' }}>
            Tell us about your organization and we will follow up to talk through next steps.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/talk-to-sales" className="btn-forest">
              Talk to Sales
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/product" className="btn-outline" style={{ color: 'var(--forest)', borderColor: 'rgba(15,37,53,0.35)' }}>
              See the Product
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
