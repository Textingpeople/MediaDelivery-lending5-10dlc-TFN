'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';

function Spinner({ size = 20, color = 'var(--olive)' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      role="status"
      aria-label="Loading"
      style={{ animation: 'bp-spin 0.8s linear infinite' }}
    >
      <circle cx="12" cy="12" r="9" opacity="0.25" />
      <path d="M21 12a9 9 0 0 0-9-9" />
    </svg>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'var(--ivory)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <style>{`@keyframes bp-spin { to { transform: rotate(360deg); } }`}</style>
      {children}
    </main>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '420px',
        background: '#FFFFFF',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 40px rgba(15,37,53,0.12)',
        textAlign: 'center',
      }}
    >
      <div style={{ height: '6px', background: 'var(--olive)' }} />
      <div style={{ padding: '2.5rem 2rem 1.5rem' }}>{children}</div>
      <p style={{ color: '#6B7280', fontSize: '0.75rem', padding: '0 2rem 1.5rem' }}>
        Secured by Balanced Pathway
      </p>
    </div>
  );
}

function VerifyContent() {
  const searchParams = useSearchParams();
  const phone = searchParams.get('phone');
  const destination = searchParams.get('destination');

  const [phoneValue, setPhoneValue] = useState(phone ?? '');
  const [focused, setFocused] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [error, setError] = useState('');

  if (!phone) {
    return (
      <Shell>
        <Card>
          <p style={{ color: 'var(--forest)', fontSize: '0.95rem' }}>
            Invalid verification link. Phone number is missing.
          </p>
        </Card>
      </Shell>
    );
  }

  if (!destination) {
    return (
      <Shell>
        <Card>
          <p style={{ color: 'var(--forest)', fontSize: '0.95rem' }}>
            Invalid verification link. Destination is missing.
          </p>
        </Card>
      </Shell>
    );
  }

  const handleVerify = () => {
    let url: URL;
    try {
      url = new URL(destination);
    } catch {
      setError('Invalid verification link. Destination is not a valid URL.');
      return;
    }
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      setError('Invalid verification link. Destination must be an http or https URL.');
      return;
    }
    setError('');
    setRedirecting(true);
    searchParams.forEach((value, key) => {
      if (key !== 'phone' && key !== 'destination') {
        url.searchParams.append(key, value);
      }
    });
    window.location.href = url.toString();
  };

  return (
    <Shell>
      <Card>
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'var(--forest)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem',
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 style={{ color: 'var(--forest)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>
          Validate your number.
        </h1>
        <input
          type="tel"
          value={phoneValue}
          onChange={e => setPhoneValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-label="Phone number"
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            borderRadius: '10px',
            border: `1px solid ${focused ? 'var(--olive)' : '#D1D5DB'}`,
            outline: 'none',
            fontSize: '1rem',
            color: 'var(--charcoal)',
            marginBottom: '1rem',
            fontFamily: 'Inter, sans-serif',
          }}
        />
        {error && (
          <p style={{ color: '#dc2626', fontSize: '0.8rem', marginBottom: '0.75rem' }}>{error}</p>
        )}
        <button
          type="button"
          onClick={handleVerify}
          disabled={redirecting}
          style={{
            width: '100%',
            background: 'var(--forest)',
            color: '#FFFFFF',
            fontWeight: 600,
            fontSize: '0.95rem',
            padding: '0.85rem 1rem',
            borderRadius: '10px',
            border: 'none',
            cursor: redirecting ? 'not-allowed' : 'pointer',
            opacity: redirecting ? 0.85 : 1,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
          }}
        >
          {redirecting ? (
            <>
              <Spinner size={18} color="#FFFFFF" />
              Redirecting...
            </>
          ) : (
            'Verify Number'
          )}
        </button>
      </Card>
    </Shell>
  );
}

export default function VerifyPage() {
  return (
    <Suspense
      fallback={
        <Shell>
          <Spinner size={32} />
        </Shell>
      }
    >
      <VerifyContent />
    </Suspense>
  );
}
