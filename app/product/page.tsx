'use client';

import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { ADVICE_DISCLAIMER } from '../lib/legal';

export default function ProductPage() {
  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative pt-48 pb-28 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono-label mb-8" style={{ color: 'rgba(240,248,250,0.75)', fontSize: '0.65rem' }}>
            The Product
          </p>
          <h1 className="headline-xl text-white mb-8">
            A budget and goals,
            <br />
            <em className="italic-accent">in your own numbers.</em>
          </h1>
          <p style={{ color: 'rgba(240,248,250,0.85)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '540px', margin: '0 auto 2.5rem' }}>
            Balanced Pathway gives employees a budget builder, a goal tracker and a monthly review. Everything is based on what you enter yourself.
          </p>
          <Link href="/signup" className="btn-primary">
            Employee Sign Up
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── CORE FEATURES ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              Features
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              Six simple tools
              <br />
              <em className="italic-accent">for planning your month.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Budget Builder',
                desc: 'Enter your monthly income, then give each spending category a planned amount. Adjust the plan any time your month changes.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                ),
              },
              {
                title: 'Spending Categories',
                desc: 'Start with common categories or create your own, like groceries, commuting or gifts. Rename, add or remove them whenever you like.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                  </svg>
                ),
              },
              {
                title: 'Goal Tracker',
                desc: 'Name a goal such as a vacation fund, a down payment or paying off a balance. Set a target and update your progress with your own numbers.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                ),
              },
              {
                title: 'Monthly Budget Review',
                desc: 'At the end of each month, see planned and actual side by side for every category, built only from the entries you made.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                ),
              },
              {
                title: 'Reminders',
                desc: 'Choose reminders to review your budget and update goal progress. Receive them by text if you opt in, or add them to your calendar.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                ),
              },
              {
                title: 'Privacy Controls',
                desc: 'Your entries are private to you. Choose which reminders you receive, edit your information and ask us to delete your account.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
            ].map((feature, i) => (
              <div key={i} className="card-feature p-8">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(15,37,53,0.08)', color: 'var(--forest)' }}
                >
                  {feature.icon}
                </div>
                <h3 className="font-serif mb-3" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--forest)' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'rgba(15,37,53,0.75)', fontSize: '0.9rem', lineHeight: 1.75 }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIVACY SECTION ── */}
      <section className="py-28 px-6" style={{ background: 'var(--white)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
                Privacy First
              </p>
              <h2 className="headline-lg mb-6" style={{ color: 'var(--forest)' }}>
                Your budget is
                <br />
                <em className="italic-accent">your business.</em>
              </h2>
              <p style={{ color: 'rgba(15,37,53,0.75)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Balanced Pathway is built so that the numbers you enter stay private. Your employer never sees your individual budget or goals.
              </p>
              <div className="space-y-5">
                {[
                  { title: 'Entered by you', desc: 'There are no outside accounts to connect or manage.' },
                  { title: 'Encrypted storage', desc: 'Your entries are encrypted in transit and at rest.' },
                  { title: 'Employer sees only aggregates', desc: 'Companies see anonymous usage trends, never individual budgets or goals.' },
                  { title: 'No data selling', desc: 'Your budget and goal entries are never sold.' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(15,37,53,0.1)' }}
                    >
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: 'var(--forest)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.title}</p>
                      <p style={{ color: 'rgba(15,37,53,0.7)', fontSize: '0.85rem' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy visual */}
            <div className="rounded-2xl p-8" style={{ background: 'var(--ivory)', border: '1px solid rgba(15,37,53,0.1)' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: 'var(--forest)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 600, color: 'var(--forest)', fontSize: '0.9rem' }}>Reminder preferences</p>
                  <p className="font-mono-label" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>You choose what you receive</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'Budget review reminders', on: true },
                  { label: 'Goal progress reminders', on: true },
                  { label: 'Calendar export', on: true },
                  { label: 'New features and Budget Challenges', on: false },
                ].map(item => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between p-3 rounded-xl"
                    style={{ background: 'rgba(15,37,53,0.04)', border: '1px solid rgba(15,37,53,0.08)' }}
                  >
                    <span style={{ fontSize: '0.85rem', color: 'var(--charcoal)', fontWeight: 500 }}>{item.label}</span>
                    <div
                      className="w-9 h-5 rounded-full flex items-center px-0.5"
                      style={{ background: item.on ? 'var(--olive)' : 'rgba(15,37,53,0.2)' }}
                    >
                      <div
                        className="w-4 h-4 bg-white rounded-full shadow-sm"
                        style={{ transform: item.on ? 'translateX(16px)' : 'translateX(0)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.72rem', color: 'rgba(15,37,53,0.65)', marginTop: '1rem', textAlign: 'center' }}>
                Sample screen — you control your own preferences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="headline-lg text-white mb-8">
            Offer your team
            <br />
            <em className="italic-accent">a simple budgeting benefit.</em>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/talk-to-sales" className="btn-primary">
              Talk to Sales →
            </Link>
            <Link href="/for-employers" className="btn-outline">
              For Employers
            </Link>
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section className="py-10 px-6" style={{ background: 'var(--ivory)' }}>
        <p className="max-w-3xl mx-auto text-center" style={{ color: 'rgba(15,37,53,0.8)', fontSize: '0.82rem', lineHeight: 1.7 }}>
          {ADVICE_DISCLAIMER}
        </p>
      </section>

      <Footer />
    </div>
  );
}
