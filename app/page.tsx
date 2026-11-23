'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { SOFTWARE_NOTICE } from './lib/legal';

// ─── App UI: Budget Mockup ─────────────────────────────────────────────────────
function BudgetMockup() {
  return (
    <div className="app-card p-6 w-full max-w-sm mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="font-mono-label" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Monthly budget</p>
          <p style={{ fontWeight: 600, color: 'var(--forest)', fontSize: '1rem' }}>Jordan&apos;s sample budget</p>
        </div>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold"
          style={{ background: 'var(--forest)', color: '#FFFFFF' }}
        >
          J
        </div>
      </div>

      <div className="rounded-2xl p-4 mb-4" style={{ background: 'var(--forest)', color: '#FFFFFF' }}>
        <p className="font-mono-label mb-1" style={{ color: 'rgba(240,248,250,0.75)', fontSize: '0.6rem' }}>Planned vs. spent</p>
        <p style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>$670 planned</p>
        <p style={{ color: 'rgba(240,248,250,0.8)', fontSize: '0.75rem', marginTop: '0.25rem' }}>
          <span style={{ color: '#4BBFD4' }}>$495 spent</span> so far this month
        </p>
      </div>

      <div className="space-y-3 mb-4">
        {[
          { label: 'Groceries — planned vs. spent', detail: '$312 of $400', pct: 78, color: '#1A7A8A' },
          { label: 'Transportation — planned vs. spent', detail: '$95 of $150', pct: 63, color: '#0F2535' },
          { label: 'Dining out — planned vs. spent', detail: '$88 of $120', pct: 73, color: '#1A7A8A' },
        ].map(g => (
          <div key={g.label}>
            <div className="flex justify-between items-center mb-1">
              <span style={{ fontSize: '0.78rem', color: 'var(--charcoal)', fontWeight: 500 }}>{g.label}</span>
              <span className="font-mono-label" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>{g.detail}</span>
            </div>
            <div className="rounded-full h-1.5" style={{ background: 'rgba(15,37,53,0.1)' }}>
              <div
                className="h-1.5 rounded-full"
                style={{ width: `${g.pct}%`, background: g.color, transition: 'width 1s ease' }}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        className="rounded-xl p-3 flex items-start gap-3"
        style={{ background: 'rgba(26,122,138,0.1)', border: '1px solid rgba(26,122,138,0.25)' }}
      >
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ background: 'var(--olive)' }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M12 6v6l4 2" />
            <circle cx="12" cy="12" r="9" />
          </svg>
        </div>
        <p style={{ fontSize: '0.72rem', color: 'var(--forest)', lineHeight: 1.5 }}>
          <strong>Budget review: due Friday.</strong> Update your categories and look over the month.
        </p>
      </div>
    </div>
  );
}

// ─── App UI: Goal Tracker Mockup ───────────────────────────────────────────────
function GoalMockup() {
  const goals = [
    { name: 'Vacation goal', note: '40% of target', pct: 40 },
    { name: 'Down payment goal', note: '15% of target', pct: 15 },
    { name: 'Pay off a balance goal', note: '60% of target', pct: 60 },
  ];

  return (
    <div className="app-card p-5 w-full max-w-sm mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center gap-3 mb-4 pb-4" style={{ borderBottom: '1px solid rgba(15,37,53,0.1)' }}>
        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'var(--forest)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        </div>
        <div>
          <p style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--forest)' }}>My goals</p>
          <p className="font-mono-label" style={{ color: 'var(--olive)', fontSize: '0.55rem' }}>Updated by you</p>
        </div>
      </div>

      <div className="space-y-4 mb-4">
        {goals.map(goal => (
          <div key={goal.name} className="rounded-xl p-3" style={{ background: 'rgba(15,37,53,0.05)' }}>
            <div className="flex justify-between items-center mb-2">
              <span style={{ fontSize: '0.8rem', color: 'var(--forest)', fontWeight: 600 }}>{goal.name}</span>
              <span className="font-mono-label" style={{ color: 'var(--olive)', fontSize: '0.58rem' }}>{goal.note}</span>
            </div>
            <div className="rounded-full h-2" style={{ background: 'rgba(15,37,53,0.1)' }}>
              <div className="h-2 rounded-full" style={{ width: `${goal.pct}%`, background: 'var(--olive)' }} />
            </div>
          </div>
        ))}
      </div>

      <div
        className="flex items-center gap-2 rounded-full px-4 py-2"
        style={{ background: 'rgba(15,37,53,0.06)', border: '1px solid rgba(15,37,53,0.12)' }}
      >
        <p style={{ fontSize: '0.72rem', color: 'rgba(15,37,53,0.7)', flex: 1 }}>Update your goal progress…</p>
        <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'var(--forest)' }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          background: 'linear-gradient(135deg, #0A1A26 0%, #0F2535 40%, #143040 70%, #0A1A26 100%)',
          overflow: 'hidden',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(40,160,180,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(40,160,180,0.12) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        <div
          className="absolute"
          style={{
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(40,160,180,0.2) 0%, transparent 70%)',
            top: '-100px',
            right: '-100px',
          }}
        />
        <div
          className="absolute"
          style={{
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(80,190,200,0.12) 0%, transparent 70%)',
            bottom: '100px',
            left: '-50px',
          }}
        />

        <div
          className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-20"
          style={{
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease, transform 1s ease',
          }}
        >
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(40,160,180,0.15)',
                border: '1px solid rgba(40,160,180,0.35)',
              }}
            >
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4BBFD4' }} />
              <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.8rem', fontWeight: 500 }}>
                A budgeting benefit from your employer
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: 'white',
                marginBottom: '1.5rem',
              }}
            >
              Budgeting and goals,
              <br />
              <span style={{ color: '#4BBFD4' }}>made simple</span>
              <br />
              for every employee.
            </h1>

            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '1.15rem',
                lineHeight: 1.7,
                maxWidth: '540px',
                marginBottom: '2.5rem',
              }}
            >
              Balanced Pathway is software where you build a monthly budget, name your money goals and look back on how the month went — all from the numbers you enter yourself.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2"
                style={{
                  background: '#1A7A8A',
                  color: 'white',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  padding: '0.875rem 2rem',
                  borderRadius: '10px',
                  transition: 'background 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#228A9A'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#1A7A8A'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Employee Sign Up
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/for-employers"
                className="inline-flex items-center gap-2"
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  padding: '0.875rem 2rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
              >
                For Employers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS BAR ── */}
      <section style={{ background: '#0F2535', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
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
                desc: 'Budget and goal entries belong to the employee. Employers see only anonymous, aggregate usage trends.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                ),
                title: 'Entered by you',
                desc: 'You type in your own income, categories and goal progress. Nothing is pulled in from outside accounts.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                ),
                title: 'A simple monthly routine',
                desc: 'Plan at the start of the month, update as you go and review at the end, whatever your pay schedule.',
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
                  <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.35rem' }}>
                    {pillar.title}
                  </p>
                  <p style={{ color: 'rgba(240,248,250,0.75)', fontSize: '0.82rem', lineHeight: 1.6 }}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL STATEMENT ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono-label mb-8" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
            About Balanced Pathway
          </p>
          <h2 className="headline-lg mb-8" style={{ color: 'var(--forest)' }}>
            One calm place
            <br />
            <em className="italic-accent">for the month ahead.</em>
          </h2>
          <p style={{ color: 'rgba(15,37,53,0.75)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '540px', margin: '0 auto 2rem' }}>
            Many people keep their budget in their head or scattered across notes. Balanced Pathway gives employees a tidy, private workspace to plan their spending and keep their goals in view.
          </p>
          <p
            className="rounded-xl p-4"
            style={{
              color: 'rgba(15,37,53,0.8)',
              fontSize: '0.85rem',
              lineHeight: 1.7,
              maxWidth: '540px',
              margin: '0 auto',
              background: 'rgba(26,122,138,0.08)',
              border: '1px solid rgba(26,122,138,0.2)',
            }}
          >
            {SOFTWARE_NOTICE}
          </p>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="pb-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: 'A Budget You Build',
                body: 'Enter your income, add the spending categories that fit your life and give each one a monthly plan. Change it whenever your month changes.',
              },
              {
                label: 'Goals You Name',
                body: 'Set a goal such as a vacation fund, a down payment or paying off a balance, then update your own numbers to see how far along you are.',
              },
              {
                label: 'Gentle Reminders',
                body: 'Get a nudge to review your budget and update your goal progress, by text if you opt in, or on your calendar with an export.',
              },
              {
                label: 'A Monthly Look Back',
                body: 'At month end, see your planned amounts next to what you actually entered, category by category, in one simple review.',
              },
            ].map((f, i) => (
              <div key={i} className="card-feature p-8" style={{ minHeight: '280px' }}>
                <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.6rem', lineHeight: 1.5 }}>
                  {f.label}
                </p>
                <p style={{ color: 'var(--charcoal)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-28 px-6" style={{ background: 'var(--white)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              How It Works
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              Four steps,
              <br />
              <em className="italic-accent">repeated each month.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Set Up',
                desc: 'Enter your monthly income and choose the spending categories that match how you live.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                    <circle cx="9" cy="6" r="2" fill="currentColor" />
                    <circle cx="15" cy="12" r="2" fill="currentColor" />
                    <circle cx="8" cy="18" r="2" fill="currentColor" />
                  </svg>
                ),
              },
              {
                num: '02',
                title: 'Plan',
                desc: 'Build your monthly budget by giving each category an amount, and add any goals you want to work toward.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                ),
              },
              {
                num: '03',
                title: 'Track',
                desc: 'As the month goes on, update your spending and your goal progress with your own numbers.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                ),
              },
              {
                num: '04',
                title: 'Review',
                desc: 'Open your monthly budget review to compare planned and actual, then adjust for next month.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                ),
              },
            ].map((step, i) => (
              <div key={step.num} className="relative">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(15,37,53,0.08)', color: 'var(--forest)' }}
                >
                  {step.icon}
                </div>
                <p className="font-mono-label mb-3" style={{ color: 'rgba(15,37,53,0.55)', fontSize: '0.65rem' }}>
                  {step.num}
                </p>
                <h3 className="font-serif mb-3" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--forest)' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'rgba(15,37,53,0.75)', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  {step.desc}
                </p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-5 -right-3 z-10">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(15,37,53,0.3)" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP UI DEMO ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              A Look Inside
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              Your budget and goals,
              <br />
              <em className="italic-accent">side by side.</em>
            </h2>
            <p
              style={{
                color: 'rgba(15,37,53,0.7)',
                fontSize: '1rem',
                lineHeight: 1.8,
                maxWidth: '460px',
                margin: '1.5rem auto 0',
              }}
            >
              Sample screens with sample entries, to show how the pieces fit together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="font-mono-label mb-4" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                Budget Builder
              </p>
              <p className="headline-md mb-6" style={{ color: 'var(--forest)', fontSize: '1.5rem' }}>
                See planned and spent together
              </p>
              <p style={{ color: 'rgba(15,37,53,0.7)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                Every category shows what you planned next to what you have entered so far, so the month is easy to read at a glance.
              </p>
              <div className="animate-float">
                <BudgetMockup />
              </div>
            </div>

            <div>
              <p className="font-mono-label mb-4" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                Goal Tracker
              </p>
              <p className="headline-md mb-6" style={{ color: 'var(--forest)', fontSize: '1.5rem' }}>
                Keep every goal in view
              </p>
              <p style={{ color: 'rgba(15,37,53,0.7)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                Name a goal, set a target and update your progress whenever you like. The bar moves with the numbers you enter.
              </p>
              <div className="animate-float-delay">
                <GoalMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EMPLOYER SECTION ── */}
      <section className="py-28 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono-label mb-6" style={{ color: 'rgba(240,248,250,0.75)', fontSize: '0.65rem' }}>
                For Employers
              </p>
              <h2 className="headline-lg text-white mb-6">
                A budgeting benefit
                <br />
                <em className="italic-accent">for the whole workforce.</em>
              </h2>
              <p style={{ color: 'rgba(240,248,250,0.8)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Offer every employee a private place to plan their month. You invite your team, and Balanced Pathway handles the rest.
              </p>
              <div className="space-y-5">
                {[
                  { title: 'Simple rollout', desc: 'Verify eligibility and send invitations from your HR system.' },
                  { title: 'Private by design', desc: 'Individual budgets and goals are never visible to employers.' },
                  { title: 'Anonymous usage trends', desc: 'See aggregate usage only, never anything about one person.' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(240,248,250,0.15)', border: '1px solid rgba(240,248,250,0.3)' }}
                    >
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.title}</p>
                      <p style={{ color: 'rgba(240,248,250,0.75)', fontSize: '0.85rem' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/for-employers" className="btn-primary">
                  Learn More for Employers
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(240,248,250,0.06)',
                  border: '1px solid rgba(240,248,250,0.15)',
                }}
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
                    { label: 'Budgets started', value: 'Aggregate trend' },
                    { label: 'Goals created', value: 'Aggregate trend' },
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
                    <strong style={{ color: '#FFFFFF' }}>Privacy protected:</strong> Employers see anonymous usage trends, never individual budgets or goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono-label mb-8" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
            Get Started
          </p>
          <h2 className="headline-lg mb-8" style={{ color: 'var(--forest)' }}>
            A simple place
            <br />
            <em className="italic-accent">to plan your month.</em>
          </h2>
          <p
            style={{
              color: 'rgba(15,37,53,0.7)',
              fontSize: '1rem',
              lineHeight: 1.8,
              maxWidth: '440px',
              margin: '0 auto 2.5rem',
            }}
          >
            Employees can sign up with the Employer ID from their onboarding email. Employers can talk with us about offering Balanced Pathway.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/signup" className="btn-forest">
              Employee Sign Up
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/talk-to-sales" className="btn-outline" style={{ color: 'var(--forest)', borderColor: 'rgba(15,37,53,0.35)' }}>
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
