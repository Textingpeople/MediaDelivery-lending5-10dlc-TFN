import { SAMPLE_ACCOUNT_MESSAGES, SAMPLE_PROMO_MESSAGES } from '../lib/legal';

// Rendered on both /terms and /privacy so the sample messages are identical.
export default function SampleMessages() {
  const promoStart = SAMPLE_ACCOUNT_MESSAGES.length;

  return (
    <div>
      <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Sample Messages</p>

      <p className="mb-1" style={{ fontWeight: 600, color: 'var(--forest)' }}>Account Notifications</p>
      <div className="space-y-2 mb-4">
        {SAMPLE_ACCOUNT_MESSAGES.map((message, i) => (
          <p key={message}>{`${i + 1}. ${message}`}</p>
        ))}
      </div>

      <p className="mb-1" style={{ fontWeight: 600, color: 'var(--forest)' }}>Promotional</p>
      <div className="space-y-2">
        {SAMPLE_PROMO_MESSAGES.map((message, i) => (
          <p key={message}>{`${promoStart + i + 1}. ${message}`}</p>
        ))}
      </div>
    </div>
  );
}
