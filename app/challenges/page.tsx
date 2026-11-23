'use client';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

function ProgressBar({ pct, color = '#1A7A8A' }: { pct: number; color?: string }) {
  return (
    <div className="w-full rounded-full h-2" style={{ background: 'rgba(15,37,53,0.1)' }}>
      <div className="h-2 rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}

const iconProps = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#0F2535', strokeWidth: 1.5 };

export default function ChallengesPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center" style={{ background: 'var(--forest)' }}>
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ background: 'rgba(75,191,212,0.15)', border: '1px solid rgba(75,191,212,0.35)', color: '#FFFFFF' }}
          >
            Optional and self-paced
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6" style={{ color: '#FFFFFF' }}>
            Budget Challenges
            <br />
            <span style={{ color: '#4BBFD4' }}>one small habit at a time.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgba(240,248,250,0.85)' }}>
            Each month, employees can join a short challenge that builds a budgeting habit. Everyone works from their own entries, at their own pace, and nothing is shared with other employees.
          </p>
        </div>
      </section>

      {/* Challenge types */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--forest)' }}>
              Four kinds of challenges.
            </h2>
            <p className="text-lg" style={{ color: 'rgba(15,37,53,0.75)' }}>
              Each one is a simple routine you can start any time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* 30-Day Spending Tracker */}
            <div className="card-ivory p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'var(--olive-light)' }}>
                  <svg {...iconProps}>
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: 'var(--forest)' }}>30-Day Spending Tracker</h3>
                  <p className="text-sm" style={{ color: 'rgba(15,37,53,0.7)' }}>Log your spending for a month</p>
                </div>
              </div>
              <p className="mb-6" style={{ color: 'rgba(15,37,53,0.8)' }}>
                Enter what you spend each day for 30 days and watch your categories fill in. By the end, you have a clear picture to build next month&apos;s plan from.
              </p>
              <div className="p-5 rounded-2xl mb-4" style={{ background: 'rgba(15,37,53,0.04)' }}>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-semibold" style={{ color: 'var(--forest)' }}>Sample tracker</p>
                  <span className="text-xs font-bold" style={{ color: 'var(--olive)' }}>Day 18 of 30</span>
                </div>
                <p className="text-xs mb-3" style={{ color: 'rgba(15,37,53,0.7)' }}>18 days of entries logged</p>
                <ProgressBar pct={60} />
                <p className="text-xs mt-1" style={{ color: 'rgba(15,37,53,0.7)' }}>60% of the way through</p>
              </div>
              <ul className="space-y-2">
                {['A daily entry habit', 'Works with your own categories', 'Skip a day and pick back up', 'Ends with a summary of your entries'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(15,37,53,0.8)' }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--olive)' }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* First-Goal Kickoff */}
            <div className="card-ivory p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'var(--olive-light)' }}>
                  <svg {...iconProps}>
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: 'var(--forest)' }}>First-Goal Kickoff</h3>
                  <p className="text-sm" style={{ color: 'rgba(15,37,53,0.7)' }}>Start your first money goal</p>
                </div>
              </div>
              <p className="mb-6" style={{ color: 'rgba(15,37,53,0.8)' }}>
                A guided first week for anyone new to goals. Pick something that matters to you, set a target and record your starting point.
              </p>
              <div className="p-5 rounded-2xl mb-4" style={{ background: 'rgba(15,37,53,0.04)' }}>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-sm font-semibold" style={{ color: 'var(--forest)' }}>Vacation goal</p>
                  <span className="text-xs font-bold" style={{ color: 'var(--olive)' }}>40% of target</span>
                </div>
                <ProgressBar pct={40} />
                <p className="text-xs mt-2" style={{ color: 'rgba(15,37,53,0.7)' }}>Sample goal, updated by the employee</p>
              </div>
              <ul className="space-y-2">
                {['Choose a goal in your own words', 'Set a target and a date', 'Record where you are today', 'Schedule a progress reminder'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(15,37,53,0.8)' }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--olive)' }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Category Cleanup Week */}
            <div className="card-ivory p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'var(--olive-light)' }}>
                  <svg {...iconProps}>
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: 'var(--forest)' }}>Category Cleanup Week</h3>
                  <p className="text-sm" style={{ color: 'rgba(15,37,53,0.7)' }}>Tidy up your budget</p>
                </div>
              </div>
              <p className="mb-6" style={{ color: 'rgba(15,37,53,0.8)' }}>
                Spend one week making your categories fit your real life. Merge the ones you rarely use, rename the confusing ones and add what is missing.
              </p>
              <div className="p-5 rounded-2xl mb-4" style={{ background: 'rgba(15,37,53,0.04)' }}>
                <p className="text-sm font-semibold mb-3" style={{ color: 'var(--forest)' }}>Sample checklist</p>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    { label: 'Rename "Misc" to something specific', done: true },
                    { label: 'Merge two similar categories', done: true },
                    { label: 'Add a category for gifts', done: false },
                  ].map(item => (
                    <div key={item.label} className="flex items-center gap-2 text-xs" style={{ color: 'rgba(15,37,53,0.85)' }}>
                      <div
                        className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0"
                        style={{ background: item.done ? 'var(--olive)' : 'rgba(15,37,53,0.12)' }}
                      >
                        {item.done && (
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
              <ul className="space-y-2">
                {['Review every category once', 'Rename, merge or remove', 'Add categories you need', 'Finish with a fresh plan'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(15,37,53,0.8)' }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--olive)' }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Holiday Budget Plan */}
            <div className="card-ivory p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'var(--olive-light)' }}>
                  <svg {...iconProps}>
                    <rect x="3" y="8" width="18" height="13" rx="1" />
                    <path d="M12 8v13M3 12h18M12 8c-2-4-6-3-5 0M12 8c2-4 6-3 5 0" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: 'var(--forest)' }}>Holiday Budget Plan</h3>
                  <p className="text-sm" style={{ color: 'rgba(15,37,53,0.7)' }}>Plan seasonal spending ahead</p>
                </div>
              </div>
              <p className="mb-6" style={{ color: 'rgba(15,37,53,0.8)' }}>
                Map out gifts, travel and gatherings before the season starts, then track your own entries against the plan as it unfolds.
              </p>
              <div className="p-5 rounded-2xl mb-4" style={{ background: 'rgba(15,37,53,0.04)' }}>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-semibold" style={{ color: 'var(--forest)' }}>Gifts — planned vs. spent</p>
                  <span className="text-xs font-bold" style={{ color: 'var(--olive)' }}>$120 of $200</span>
                </div>
                <ProgressBar pct={60} />
                <p className="text-xs mt-1" style={{ color: 'rgba(15,37,53,0.7)' }}>Sample entries added by the employee</p>
              </div>
              <ul className="space-y-2">
                {['Gifts, travel and gatherings', 'Your own planned amounts', 'Update as you spend', 'Review it once the season ends'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(15,37,53,0.8)' }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--olive)' }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How challenges work */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--forest)' }}>
              Challenges that stay personal.
            </h2>
            <p className="text-lg" style={{ color: 'rgba(15,37,53,0.75)' }}>
              Join if you like. Work at your pace. Keep your numbers to yourself.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {[
                { title: 'Opt in each month', desc: 'A new Budget Challenge is offered every month. Join the ones that suit you and skip the rest.' },
                { title: 'Built on your own entries', desc: 'Progress comes from the numbers you enter. Nothing is pulled in from outside accounts.' },
                { title: 'No rankings', desc: 'There are no leaderboards or comparisons between employees.' },
                { title: 'Reminders you choose', desc: 'Get a nudge through your calendar, or by text if you opted in to promotional messages.' },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'var(--olive-light)' }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: 'var(--olive)' }} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: 'var(--forest)' }}>{item.title}</p>
                    <p className="text-sm" style={{ color: 'rgba(15,37,53,0.75)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-ivory p-6">
              <p className="text-xs uppercase tracking-wider font-medium mb-4" style={{ color: 'var(--olive)' }}>My Challenges</p>
              <div className="space-y-4">
                {[
                  { name: '30-Day Spending Tracker', type: 'In progress', progress: 60 },
                  { name: 'First-Goal Kickoff', type: 'In progress', progress: 40 },
                  { name: 'Category Cleanup Week', type: 'In progress', progress: 66 },
                  { name: 'Holiday Budget Plan', type: 'Not started', progress: 0 },
                ].map(c => (
                  <div key={c.name} className="p-4 rounded-2xl" style={{ background: 'rgba(15,37,53,0.04)' }}>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-sm font-semibold" style={{ color: 'var(--forest)' }}>{c.name}</p>
                        <p className="text-xs" style={{ color: 'rgba(15,37,53,0.7)' }}>{c.type}</p>
                      </div>
                      <span className="text-xs font-bold" style={{ color: 'var(--olive)' }}>{c.progress}%</span>
                    </div>
                    <ProgressBar pct={c.progress} />
                  </div>
                ))}
              </div>
              <p className="text-xs mt-4 text-center" style={{ color: 'rgba(15,37,53,0.7)' }}>Sample screen with sample entries</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--forest)' }}>Ready to try one?</h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(15,37,53,0.75)' }}>
            Employees sign up with the Employer ID from their onboarding email. Employers can talk with us about offering Balanced Pathway.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="btn-forest">Employee Sign Up</Link>
            <Link href="/for-employers" className="btn-outline" style={{ color: 'var(--forest)', borderColor: 'rgba(15,37,53,0.35)' }}>
              For Employers
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
