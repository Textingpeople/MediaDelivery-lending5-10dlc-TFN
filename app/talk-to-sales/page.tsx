'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const inputStyle = {
  background: 'rgba(15,37,53,0.04)',
  border: '1px solid rgba(15,37,53,0.2)',
  color: 'var(--charcoal)',
  outline: 'none',
  fontFamily: 'Inter, sans-serif',
};

const labelStyle = { color: 'var(--olive)', fontSize: '0.6rem' };

export default function TalkToSalesPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', teamSize: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Talk to Sales
            </p>
            <h2 className="headline-lg text-white mb-6" style={{ maxWidth: '380px' }}>
              Offer a budgeting
              <br />
              <em className="italic-accent">benefit to your team.</em>
            </h2>
            <p style={{ color: 'rgba(240,248,250,0.85)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '340px' }}>
              Tell us a little about your organization and we will follow up to talk through how Balanced Pathway would work for your employees.
            </p>
          </div>

          <div className="relative z-10 space-y-6">
            {[
              { title: 'A walkthrough', desc: 'See the budget builder, goal tracker and monthly review.' },
              { title: 'A simple rollout', desc: 'Learn how eligibility checks and invitations work with your HR system.' },
              { title: 'Employee privacy', desc: 'Understand what employers see: anonymous, aggregate usage trends only.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#4BBFD4' }} />
                <div>
                  <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.2rem' }}>{item.title}</p>
                  <p style={{ color: 'rgba(240,248,250,0.75)', fontSize: '0.8rem', lineHeight: 1.6 }}>{item.desc}</p>
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
                  Thanks for reaching out.
                </h2>
                <p style={{ color: 'rgba(15,37,53,0.75)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  We received your message and will follow up by email or phone.
                </p>
                <Link href="/" className="btn-forest">
                  Back to Home
                </Link>
              </div>
            ) : (
              <>
                <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
                  Talk to Sales
                </p>
                <h1 className="headline-md mb-3" style={{ color: 'var(--forest)', fontSize: '2rem' }}>
                  Interested in offering
                  <br />
                  <em className="italic-accent">Balanced Pathway?</em>
                </h1>
                <p style={{ color: 'rgba(15,37,53,0.75)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                  Share a few details about your organization and we will be in touch.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
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

                  {/* Work Email */}
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
                      style={inputStyle}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="font-mono-label block mb-2" style={labelStyle}>Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={inputStyle}
                    />
                  </div>

                  {/* Team Size */}
                  <div>
                    <label className="font-mono-label block mb-2" style={labelStyle}>Team Size *</label>
                    <select
                      name="teamSize"
                      required
                      value={formData.teamSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={{ ...inputStyle, color: formData.teamSize ? 'var(--charcoal)' : 'rgba(15,37,53,0.6)' }}
                    >
                      <option value="" disabled>Select team size</option>
                      <option value="1-50">1–50 employees</option>
                      <option value="51-200">51–200 employees</option>
                      <option value="201-500">201–500 employees</option>
                      <option value="501-1000">501–1,000 employees</option>
                      <option value="1001+">1,000+ employees</option>
                    </select>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="font-mono-label block mb-2" style={labelStyle}>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 555-5555"
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={inputStyle}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-mono-label block mb-2" style={labelStyle}>Anything else we should know?</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your team or any questions..."
                      className="w-full px-4 py-3 rounded-xl text-sm resize-none"
                      style={inputStyle}
                    />
                  </div>

                  {/* Terms */}
                  <div className="flex items-start gap-3 pt-1">
                    <input
                      type="checkbox"
                      id="termsAgreement"
                      required
                      className="mt-1 w-4 h-4 rounded flex-shrink-0"
                      style={{ accentColor: 'var(--olive)' }}
                    />
                    <label htmlFor="termsAgreement" style={{ fontSize: '0.75rem', color: 'rgba(15,37,53,0.75)', lineHeight: 1.6 }}>
                      I have read and agree to the{' '}
                      <Link href="/privacy" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>Privacy Policy</Link>
                      {' '}and{' '}
                      <Link href="/terms" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>Terms of Service</Link>. *
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-forest w-full justify-center mt-2"
                    style={{ opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                  >
                    {isSubmitting ? 'Submitting…' : 'Talk to Sales'}
                    {!isSubmitting && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
