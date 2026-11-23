'use client';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function IntegrationsPage() {
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
            Integrations
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6" style={{ color: '#FFFFFF' }}>
            Only the connections
            <br />
            <span style={{ color: '#4BBFD4' }}>your rollout needs.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgba(240,248,250,0.85)' }}>
            Balanced Pathway works with your HR system to confirm who is eligible and to send invitations. Employees add their own budget and goal numbers by hand, so there is nothing else to connect.
          </p>
        </div>
      </section>

      {/* HR systems — primary */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="card-ivory p-10 mb-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div
                  className="w-24 h-24 rounded-3xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #0F2535, #1A7A8A)' }}
                >
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h2 className="text-3xl font-bold" style={{ color: 'var(--forest)' }}>HR Systems</h2>
                  <span
                    className="px-3 py-1 text-sm font-semibold rounded-full"
                    style={{ background: 'var(--olive-light)', color: 'var(--forest)' }}
                  >
                    Primary Integration
                  </span>
                </div>
                <p className="text-lg mb-6 leading-relaxed" style={{ color: 'rgba(15,37,53,0.8)' }}>
                  Your HR system is used for two things only: verifying that an employee is eligible and inviting them to sign up. It is never used to read or pass along anything about their budget.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  {[
                    { name: 'Eligibility check', desc: 'Confirms who may enroll' },
                    { name: 'Invitations', desc: 'Sends the sign-up invite' },
                    { name: 'Employer ID', desc: 'Links an employee to your benefit' },
                    { name: 'Work email', desc: 'Where the invite is sent' },
                    { name: 'Access updates', desc: 'Reflects who is still eligible' },
                    { name: 'Nothing else', desc: 'No budget or goal data' },
                  ].map(item => (
                    <div key={item.name} className="p-4 rounded-2xl" style={{ background: 'rgba(15,37,53,0.04)' }}>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full" style={{ background: 'var(--olive)' }} />
                        <p className="text-sm font-semibold" style={{ color: 'var(--forest)' }}>{item.name}</p>
                      </div>
                      <p className="text-xs" style={{ color: 'rgba(15,37,53,0.7)' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div
                  className="p-4 rounded-2xl flex items-start gap-3"
                  style={{ background: 'var(--olive-light)', border: '1px solid var(--olive-mid)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F2535" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <p className="text-sm" style={{ color: 'var(--forest)' }}>
                    <strong>Eligibility and invitations only.</strong> Your HR system tells us who may sign up. It does not receive anything an employee enters.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Other integrations */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: 'Calendar Export',
                desc: 'Employees can add budget review and goal update reminders to the calendar they already use.',
                examples: ['Monthly budget review', 'Goal progress check-in', 'Budget Challenge dates'],
                path: 'M3 4h18v18H3zM16 2v4M8 2v4M3 10h18',
              },
              {
                title: 'Email Invitations',
                desc: 'Invitations go to the work email addresses on the eligibility list you provide.',
                examples: ['Invite with Employer ID', 'Sign-up instructions', 'Account notices'],
                path: 'M4 4h16v16H4zM4 7l8 6 8-6',
              },
              {
                title: 'Text Reminders',
                desc: 'Optional texts that employees choose to receive, separate from their sign-up. They can opt out at any time.',
                examples: ['Budget review reminders', 'Goal progress reminders', 'Optional feature and challenge news'],
                path: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
              },
            ].map(item => (
              <div key={item.title} className="card-ivory p-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: 'var(--olive-light)' }}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0F2535" strokeWidth="1.5">
                    <path d={item.path} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--forest)' }}>{item.title}</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: 'rgba(15,37,53,0.75)' }}>{item.desc}</p>
                <ul className="space-y-1">
                  {item.examples.map(e => (
                    <li key={e} className="flex items-center gap-2 text-xs" style={{ color: 'rgba(15,37,53,0.7)' }}>
                      <div className="w-1 h-1 rounded-full" style={{ background: 'var(--olive)' }} />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Important note */}
          <div className="card-ivory p-8 text-center">
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--forest)' }}>What We Do Not Connect</h3>
            <p className="max-w-2xl mx-auto" style={{ color: 'rgba(15,37,53,0.8)' }}>
              Balanced Pathway has no connections to financial institutions or payroll data. Budgets and goals are built only from numbers employees type in themselves.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--forest)' }}>
              How the setup works.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Share eligibility', desc: 'Your HR team provides the list of employees who may enroll.' },
              { step: '2', title: 'Invitations go out', desc: 'Eligible employees receive an invitation with their Employer ID.' },
              { step: '3', title: 'Employees sign up', desc: 'Each employee creates an account and enters their own budget and goals.' },
              { step: '4', title: 'Reminders, if wanted', desc: 'Employees choose calendar exports or text reminders for themselves.' },
            ].map(item => (
              <div key={item.step} className="card-ivory p-6 text-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4"
                  style={{ background: 'var(--forest)', color: '#FFFFFF' }}
                >
                  {item.step}
                </div>
                <h3 className="font-bold mb-2" style={{ color: 'var(--forest)' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'rgba(15,37,53,0.75)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="card-ivory p-8">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--forest)' }}>Privacy &amp; permissions</h2>
            <div className="space-y-4">
              {[
                { title: 'Employees enter their own numbers', desc: 'Nothing is pulled in from outside accounts or systems.' },
                { title: 'HR data stays limited', desc: 'Eligibility and invitation details are all we use from your HR system.' },
                { title: 'Employers see aggregates only', desc: 'Employers never see individual budgets or goals, only anonymous usage trends.' },
                { title: 'Reminders are optional', desc: 'Text reminders require separate opt-in and can be stopped by replying STOP.' },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl" style={{ background: 'rgba(15,37,53,0.04)' }}>
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
            <div className="mt-6 text-center">
              <Link href="/privacy" className="text-sm font-semibold" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>
                Read our full privacy policy →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--forest)' }}>Ready to get started?</h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(15,37,53,0.75)' }}>
            Employees need an Employer ID from their HR team to sign up.
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
