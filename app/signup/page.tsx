'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

// Generate a random Employer ID for demo/validation purposes
function generateEmployerId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let id = 'BP-';
  for (let i = 0; i < 4; i++) id += chars[Math.floor(Math.random() * chars.length)];
  id += '-';
  for (let i = 0; i < 4; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}

const inputStyle = {
  background: 'rgba(15,37,53,0.04)',
  border: '1px solid rgba(15,37,53,0.2)',
  color: 'var(--charcoal)',
  outline: 'none',
  fontFamily: 'Inter, sans-serif',
};

const labelStyle = { color: 'var(--olive)', fontSize: '0.6rem' };
const bodyTextStyle = { color: 'rgba(15,37,53,0.75)', fontSize: '0.85rem', lineHeight: 1.7 };
const consentTextStyle = { fontSize: '0.72rem', color: 'rgba(15,37,53,0.75)', lineHeight: 1.6 };
const backButtonStyle = {
  border: '1px solid rgba(15,37,53,0.3)',
  color: 'var(--forest)',
  fontSize: '0.65rem',
  background: 'transparent',
  cursor: 'pointer',
};

// Step indicator
function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center font-mono-label transition-all"
            style={{
              background: i < current ? 'var(--olive)' : i === current ? 'var(--forest)' : 'rgba(15,37,53,0.1)',
              color: i <= current ? 'white' : 'rgba(15,37,53,0.65)',
              fontSize: '0.55rem',
            }}
          >
            {i < current ? (
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <path d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              i + 1
            )}
          </div>
          {i < total - 1 && (
            <div
              className="w-8 h-px"
              style={{ background: i < current ? 'var(--olive)' : 'rgba(15,37,53,0.2)' }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// Email validation
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Phone validation: exactly 10 digits once formatting is removed
function isValidPhone(phone: string) {
  return phone.replace(/\D/g, '').length === 10;
}

export default function SignupPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', employerId: '', phone: '' });
  const [emailError, setEmailError] = useState('');
  const [employerIdError, setEmployerIdError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [validEmployerId, setValidEmployerId] = useState('');
  const [accountNotifications, setAccountNotifications] = useState(false);
  const [customerCare, setCustomerCare] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  // Generate a valid employer ID on mount (simulating what HR would provide)
  useEffect(() => {
    setValidEmployerId(generateEmployerId());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'email') setEmailError('');
    if (name === 'employerId') setEmployerIdError('');
    if (name === 'phone') setPhoneError('');
  };

  const handleStep1Continue = () => {
    if (!formData.name) return;
    if (!isValidEmail(formData.email)) {
      setEmailError('Please enter a valid email address (e.g. jane@company.com)');
      return;
    }
    setStep(1);
  };

  const handleStep2Continue = () => {
    if (formData.employerId.trim() !== validEmployerId) {
      setEmployerIdError(`Invalid Employer ID. Please check your onboarding email and try again.`);
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const smsOptIn = accountNotifications || customerCare;
    if (smsOptIn && !isValidPhone(formData.phone)) {
      setPhoneError('Enter a valid mobile number to receive texts.');
      return;
    }
    setPhoneError('');
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
    }, 1500);
  };

  const steps = [
    { label: 'Your Info', desc: 'Tell us who you are' },
    { label: 'Employer', desc: 'Connect your employer' },
    { label: 'Text Reminders', desc: 'Choose optional texts' },
  ];

  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      <div className="min-h-screen grid md:grid-cols-2">

        {/* ── LEFT: Forest panel ── */}
        <div
          className="relative hidden md:flex flex-col justify-between p-12 pt-32"
          style={{ background: 'linear-gradient(135deg, #0A1A26 0%, #0F2535 50%, #123040 100%)' }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(26,122,138,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(26,122,138,0.15) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

          <div className="relative z-10">
            <p className="font-mono-label mb-8" style={{ color: 'rgba(240,248,250,0.75)', fontSize: '0.65rem' }}>
              Employee Sign Up
            </p>
            <h2 className="headline-lg text-white mb-6" style={{ maxWidth: '380px' }}>
              Your budget and goals
              <br />
              <em className="italic-accent">start here.</em>
            </h2>
            <p style={{ color: 'rgba(240,248,250,0.85)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '340px' }}>
              Create your Balanced Pathway account with the Employer ID from your onboarding email. It takes about three short steps.
            </p>
          </div>

          {/* Steps overview */}
          <div className="relative z-10 space-y-4">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-mono-label"
                  style={{
                    background: i < step ? 'var(--olive)' : i === step ? 'rgba(240,248,250,0.2)' : 'rgba(240,248,250,0.08)',
                    border: i === step ? '1px solid rgba(240,248,250,0.5)' : 'none',
                    color: 'white',
                    fontSize: '0.6rem',
                  }}
                >
                  {i < step ? (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <div>
                  <p style={{ color: i <= step ? '#FFFFFF' : 'rgba(240,248,250,0.7)', fontWeight: 600, fontSize: '0.85rem' }}>
                    {s.label}
                  </p>
                  <p style={{ color: 'rgba(240,248,250,0.7)', fontSize: '0.75rem' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Form panel ── */}
        <div className="flex flex-col justify-center px-6 py-24 md:px-12 lg:px-16" style={{ background: 'var(--ivory)' }}>
          <div className="max-w-md w-full mx-auto">

            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: 'rgba(26,122,138,0.15)' }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--olive)" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="headline-md mb-4" style={{ color: 'var(--forest)' }}>
                  You&apos;re all set.
                </h2>
                <p style={{ color: 'rgba(15,37,53,0.75)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Your account has been created. Check your email for next steps to start your first monthly budget.
                </p>
                <Link href="/" className="btn-forest">
                  Back to Home
                </Link>
              </div>
            ) : (
              <>
                <StepIndicator current={step} total={3} />

                {/* ── STEP 0: Personal Info ── */}
                {step === 0 && (
                  <>
                    <p className="font-mono-label mb-4" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
                      Step 1 of 3 — Your Information
                    </p>
                    <h1 className="headline-md mb-2" style={{ color: 'var(--forest)', fontSize: '1.75rem' }}>
                      Let&apos;s start with
                      <br />
                      <em className="italic-accent">the basics.</em>
                    </h1>
                    <p style={{ ...bodyTextStyle, marginBottom: '2rem' }}>
                      Enter your name and work email to create your account.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <label className="font-mono-label block mb-2" style={labelStyle}>Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 rounded-xl text-sm"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label className="font-mono-label block mb-2" style={labelStyle}>Work Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@company.com"
                          className="w-full px-4 py-3 rounded-xl text-sm"
                          style={{ ...inputStyle, border: `1px solid ${emailError ? '#dc2626' : 'rgba(15,37,53,0.2)'}` }}
                        />
                        {emailError && (
                          <p style={{ fontSize: '0.72rem', color: '#dc2626', marginTop: '0.4rem' }}>{emailError}</p>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={handleStep1Continue}
                        className="btn-forest w-full justify-center mt-2"
                        style={{ opacity: formData.name && formData.email ? 1 : 0.5 }}
                      >
                        Continue
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </>
                )}

                {/* ── STEP 1: Employer ── */}
                {step === 1 && (
                  <>
                    <p className="font-mono-label mb-4" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
                      Step 2 of 3 — Employer Connection
                    </p>
                    <h1 className="headline-md mb-2" style={{ color: 'var(--forest)', fontSize: '1.75rem' }}>
                      Connect your
                      <br />
                      <em className="italic-accent">employer.</em>
                    </h1>
                    <p style={{ ...bodyTextStyle, marginBottom: '2rem' }}>
                      Enter the Employer ID from your onboarding email to join the budgeting benefit your company offers.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <label className="font-mono-label block mb-2" style={labelStyle}>Employer ID *</label>
                        <input
                          type="text"
                          name="employerId"
                          required
                          value={formData.employerId}
                          onChange={handleChange}
                          placeholder={validEmployerId}
                          className="w-full px-4 py-3 rounded-xl text-sm"
                          style={{
                            ...inputStyle,
                            border: `1px solid ${employerIdError ? '#dc2626' : 'rgba(15,37,53,0.2)'}`,
                            fontFamily: 'JetBrains Mono, monospace',
                            letterSpacing: '0.05em',
                          }}
                        />
                        {employerIdError ? (
                          <p style={{ fontSize: '0.72rem', color: '#dc2626', marginTop: '0.4rem' }}>{employerIdError}</p>
                        ) : (
                          <p style={{ fontSize: '0.7rem', color: 'rgba(15,37,53,0.7)', marginTop: '0.4rem' }}>
                            Find your Employer ID in your onboarding email or ask your HR team.
                          </p>
                        )}
                      </div>
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setStep(0)}
                          className="font-mono-label px-5 py-3 rounded-full transition-all"
                          style={backButtonStyle}
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={handleStep2Continue}
                          className="btn-forest flex-1 justify-center"
                          style={{ opacity: formData.employerId ? 1 : 0.5 }}
                        >
                          Continue
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {/* ── STEP 2: Text Reminders ── */}
                {step === 2 && (
                  <form onSubmit={handleSubmit}>
                    <p className="font-mono-label mb-4" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
                      Step 3 of 3 — Text Reminders
                    </p>
                    <h1 className="headline-md mb-2" style={{ color: 'var(--forest)', fontSize: '1.75rem' }}>
                      Reminders, if
                      <br />
                      <em className="italic-accent">you want them.</em>
                    </h1>
                    <p style={{ ...bodyTextStyle, marginBottom: '1.5rem' }}>
                      Balanced Pathway can text you budget review reminders, goal progress reminders and account notifications. Texts are optional, and you can finish sign-up without a phone number.
                    </p>

                    {/* What you'll receive */}
                    <div
                      className="rounded-xl p-4 mb-5"
                      style={{ background: 'rgba(26,122,138,0.08)', border: '1px solid rgba(26,122,138,0.25)' }}
                    >
                      <p className="font-mono-label mb-3" style={labelStyle}>
                        What Balanced Pathway will text you
                      </p>
                      <div className="space-y-2">
                        {[
                          { icon: '🗓️', text: 'Budget review reminders' },
                          { icon: '🎯', text: 'Goal progress reminders' },
                          { icon: '🔔', text: 'Account notifications and important updates' },
                          { icon: '✨', text: 'Promotional, if selected: new features and monthly Budget Challenges' },
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span style={{ fontSize: '0.85rem' }}>{item.icon}</span>
                            <p style={{ fontSize: '0.78rem', color: 'rgba(15,37,53,0.85)', lineHeight: 1.5 }}>{item.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="mb-5">
                      <label className="font-mono-label block mb-2" style={labelStyle}>
                        Mobile phone number (required only if you opt in to texts)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 555-5555"
                        className="w-full px-4 py-3 rounded-xl text-sm"
                        style={{ ...inputStyle, border: `1px solid ${phoneError ? '#dc2626' : 'rgba(15,37,53,0.2)'}` }}
                      />
                      {phoneError ? (
                        <p style={{ fontSize: '0.72rem', color: '#dc2626', marginTop: '0.4rem' }}>{phoneError}</p>
                      ) : (
                        <p style={{ fontSize: '0.7rem', color: 'rgba(15,37,53,0.7)', marginTop: '0.4rem' }}>
                          Used only to send the texts you opt in to below. Texts never include budget amounts, balances, account numbers or SSNs.
                        </p>
                      )}
                    </div>

                    {/* Terms */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="termsAgreement"
                          required
                          className="mt-1 w-4 h-4 rounded flex-shrink-0"
                          style={{ accentColor: 'var(--olive)' }}
                        />
                        <label htmlFor="termsAgreement" style={{ fontSize: '0.75rem', color: 'rgba(15,37,53,0.8)', lineHeight: 1.6 }}>
                          I have read and agree to the{' '}
                          <Link href="/privacy" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>Privacy Policy</Link>
                          {' '}and{' '}
                          <Link href="/terms" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>Terms of Service</Link>. *
                        </label>
                      </div>
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="accountNotifications"
                          checked={accountNotifications}
                          onChange={e => { setAccountNotifications(e.target.checked); setPhoneError(''); }}
                          className="mt-1 w-4 h-4 rounded flex-shrink-0"
                          style={{ accentColor: 'var(--olive)' }}
                        />
                        <label htmlFor="accountNotifications" style={consentTextStyle}>
                          By checking this box, I agree to receive Transactional Account Notification SMS messages from Balanced Pathway at the phone number provided. I understand I may opt out at any time by replying STOP. Reply HELP for help. Message and data rates may apply. Message frequency varies. Opting in is optional and not required to submit this form. Consent is not required as a condition of purchasing any products or services.
                        </label>
                      </div>
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="customerCare"
                          checked={customerCare}
                          onChange={e => { setCustomerCare(e.target.checked); setPhoneError(''); }}
                          className="mt-1 w-4 h-4 rounded flex-shrink-0"
                          style={{ accentColor: 'var(--olive)' }}
                        />
                        <label htmlFor="customerCare" style={consentTextStyle}>
                          By checking this box, I agree to receive Promotional Marketing SMS messages from Balanced Pathway at the phone number provided, including special offers and exclusive updates. I understand I may opt out at any time by replying STOP. Reply HELP for help. Message and data rates may apply. Message frequency varies. Opting in is optional and not required to submit this form. Consent is not required as a condition of purchasing any products or services.
                        </label>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="font-mono-label px-5 py-3 rounded-full transition-all"
                        style={backButtonStyle}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-forest flex-1 justify-center"
                        style={{ opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                      >
                        {isSubmitting ? 'Creating Account…' : 'Create Account'}
                        {!isSubmitting && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
