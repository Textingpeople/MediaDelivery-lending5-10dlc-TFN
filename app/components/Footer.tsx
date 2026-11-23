import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--forest)', color: 'var(--ivory)' }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Top row */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <span
                style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontWeight: 600,
                  fontSize: '1.4rem',
                  color: 'rgba(240,248,250,0.9)',
                  letterSpacing: '-0.01em',
                }}
              >
                Balanced Pathway
              </span>
            </div>
            <p
              className="headline-md italic-accent mb-6"
              style={{ color: 'rgba(240,248,250,0.8)', maxWidth: '320px', fontSize: '1.4rem' }}
            >
              Budgeting and goals, one month at a time.
            </p>
            <p style={{ color: 'rgba(240,248,250,0.6)', fontSize: '0.85rem', lineHeight: '1.7', maxWidth: '280px' }}>
              Budgeting and goal-tracking software that employers provide to their employees.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="font-mono-label mb-6" style={{ color: 'rgba(240,248,250,0.6)', fontSize: '0.65rem' }}>
              Product
            </p>
            <ul className="space-y-3">
              {[
                { label: 'For Employers', href: '/for-employers' },
                { label: 'Product', href: '/product' },
                { label: 'Employee Sign Up', href: '/signup' },
              ].map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{ color: 'rgba(240,248,250,0.75)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,248,250,0.75)')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-mono-label mb-6" style={{ color: 'rgba(240,248,250,0.6)', fontSize: '0.65rem' }}>
              Legal
            </p>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Contact', href: '/contact' },
              ].map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{ color: 'rgba(240,248,250,0.75)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,248,250,0.75)')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(240,248,250,0.12)', paddingTop: '2rem' }}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-2">
              <p className="font-mono-label" style={{ color: 'rgba(240,248,250,0.6)', fontSize: '0.65rem' }}>
                © {new Date().getFullYear()} Media Delivery Solutions LLC, d/b/a Balanced Pathway. All rights reserved.
              </p>
              <p style={{ color: 'rgba(240,248,250,0.6)', fontSize: '0.75rem' }}>
                9 Johnston Dr, Bloomsbury, NJ 08804, United States ·{' '}
                <a href="tel:+19083998307" style={{ color: 'rgba(240,248,250,0.8)', textDecoration: 'underline' }}>
                  (908) 399-8307
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-mono-label" style={{ color: 'rgba(240,248,250,0.6)', fontSize: '0.65rem' }}>
                thebalancedpathways.com
              </p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(240,248,250,0.1)', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(240,248,250,0.2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(240,248,250,0.1)')}
                aria-label="Balanced Pathway on LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
