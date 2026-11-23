'use client';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SampleMessages from '../components/SampleMessages';
import { NO_SHARING, NO_SENSITIVE_IN_TEXTS, COMPANY_INTRO } from '../lib/legal';

const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const linkStyle = { color: 'var(--olive)', textDecoration: 'underline' };
const h2Style = { fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' };

export default function PrivacyPage() {
  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-40 pb-20 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-4xl mx-auto">
          <p className="font-mono-label mb-6" style={{ color: 'rgba(240,248,250,0.75)', fontSize: '0.65rem' }}>
            Legal
          </p>
          <h1 className="headline-xl text-white mb-4" style={{ maxWidth: '560px' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'rgba(240,248,250,0.8)', fontSize: '0.85rem' }}>
            Last Updated: {today}
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-20 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10" style={{ fontSize: '0.92rem', lineHeight: 1.8, color: 'rgba(15,37,53,0.85)' }}>

            {/* Intro */}
            <div>
              <p>
                {COMPANY_INTRO} is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our budgeting and goal-tracking software and website at <strong>thebalancedpathways.com</strong>. By using our service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* 1. Information We Collect */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>1. Information We Collect</h2>
              <p className="mb-3">When you create an account or use our service, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full name and work email address</li>
                <li>Employer ID (provided by your employer or HR team)</li>
                <li>Mobile phone number (only if you opt in to SMS notifications)</li>
                <li>Income, spending categories, budget amounts and goals that you enter yourself</li>
                <li>Goal progress and spending entries that you update yourself</li>
                <li>SMS opt-in consent preferences</li>
                <li>Usage data and device information (browser type, IP address, pages visited)</li>
              </ul>
              <p className="mt-3">
                We do not connect to any outside financial accounts. Everything in your budget and goals is information you type in.
              </p>
            </div>

            {/* 2. SMS Messaging */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>2. SMS Messaging</h2>
              <p className="mb-3">
                Balanced Pathway uses SMS messaging to send budget and goal reminders and account notifications to employees who opt in. The following terms apply to our SMS program:
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Types of Messages</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Account Notifications:</strong> Budget review reminders, goal progress reminders and account updates.</li>
                    <li><strong>Promotional:</strong> New features and monthly Budget Challenges.</li>
                  </ul>
                </div>

                <SampleMessages />

                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Opt-In</p>
                  <p>
                    You may opt in to receive SMS messages during sign-up by checking the applicable consent boxes. Opting in is entirely optional and is not required to use Balanced Pathway. Consent is not a condition of purchasing any products or services. A mobile number is required only if you opt in to at least one message type.
                  </p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Message Frequency</p>
                  <p>Message frequency varies.</p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Opt-Out</p>
                  <p>
                    You may opt out of SMS messages at any time by replying <strong>STOP</strong> to any message. You will receive a confirmation and no further messages will be sent. To re-subscribe, reply <strong>START</strong>.
                  </p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Help</p>
                  <p>
                    Reply <strong>HELP</strong> to any message for assistance, or contact us at <a href="mailto:support@thebalancedpathways.com" style={linkStyle}>support@thebalancedpathways.com</a>.
                  </p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Rates</p>
                  <p>Message and data rates may apply. Check with your mobile carrier for details.</p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Message Content</p>
                  <p>{NO_SENSITIVE_IN_TEXTS}</p>
                </div>

                <div
                  className="rounded-xl p-4"
                  style={{ background: 'rgba(26,122,138,0.08)', border: '1px solid rgba(26,122,138,0.2)' }}
                >
                  <p style={{ fontWeight: 600, color: 'var(--forest)', marginBottom: '0.5rem' }}>
                    No Mobile Data Sharing
                  </p>
                  <p>{NO_SHARING}</p>
                </div>
              </div>
            </div>

            {/* 3. How We Use Your Information */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To create and manage your Balanced Pathway account</li>
                <li>To connect your account to the budgeting benefit your employer offers</li>
                <li>To show you your own budget, goals and monthly budget review</li>
                <li>To send SMS messages you have opted into (reminders, account notifications, or promotional messages)</li>
                <li>To provide anonymous, aggregate usage trends to your employer (never individual budgets or goals)</li>
                <li>To improve our software</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            {/* 4. Employer Data Sharing */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>4. Employer Data Sharing</h2>
              <p className="mb-3">
                Balanced Pathway is designed with employee privacy at its core. Your budget and goal entries are private to you. They are never shared with your employer individually, and they are never sold.
              </p>
              <p>
                Employers receive only <strong>anonymous, aggregate usage trends</strong>, such as how many employees have enrolled and overall use of the tools. These trends cannot be traced back to any individual employee.
              </p>
            </div>

            {/* 5. Data Security */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information, including encryption in transit and at rest, access controls, and regular security reviews. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* 6. Your Rights */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>6. Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your account and associated data</li>
                <li>Opt out of SMS communications at any time by replying STOP</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at <a href="mailto:support@thebalancedpathways.com" style={linkStyle}>support@thebalancedpathways.com</a>.
              </p>
            </div>

            {/* 7. Contact */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>7. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
              <div className="mt-3 space-y-1">
                <p><strong>Media Delivery Solutions LLC, a Wyoming limited liability company</strong></p>
                <p>Address: 9 Johnston Dr, Bloomsbury, NJ 08804, United States</p>
                <p>Phone: <a href="tel:+19083998307" style={linkStyle}>(908) 399-8307</a></p>
                <p>Email: <a href="mailto:support@thebalancedpathways.com" style={linkStyle}>support@thebalancedpathways.com</a></p>
                <p>Website: <a href="https://thebalancedpathways.com" style={linkStyle}>thebalancedpathways.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
