import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { B } from '../theme';
import { useBreakpoint } from '../hooks/useBreakpoint';

const items = [
  ['/', 'Home'],
  ['/veiling', 'Veiling'],
  ['/over', 'Stichting'],
  ['/partners', 'Partners'],
  ['/contact', 'Contact'],
];

export default function Nav() {
  const { pathname } = useLocation();
  const { isMobile } = useBreakpoint();
  const [open, setOpen] = useState(false);
  const active = pathname === '/' ? '/' : '/' + pathname.split('/')[1];

  return (
    <>
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: isMobile ? '14px 20px' : '20px 48px',
        borderBottom: `1px solid ${B.rule}`,
        fontFamily: B.sans, fontSize: 13,
        position: 'sticky', top: 0,
        background: 'rgba(14,14,14,.9)', backdropFilter: 'blur(12px)', zIndex: 200,
      }}>
        <Link to="/" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Stadionloop" style={{ height: 40, width: 40, objectFit: 'contain' }} />
        </Link>

        {!isMobile && (
          <div style={{ display: 'flex', gap: 6, background: B.surface, padding: 6, borderRadius: 999 }}>
            {items.map(([path, label]) => (
              <Link key={path} to={path} style={{
                color: active === path ? B.bg : B.muted,
                background: active === path ? B.ink : 'transparent',
                textDecoration: 'none', padding: '8px 18px', borderRadius: 999,
                fontWeight: active === path ? 600 : 500, fontSize: 12.5, letterSpacing: '.02em',
                transition: 'all .15s',
              }}>{label}</Link>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {!isMobile && (
            <>
              <span style={{ fontFamily: B.mono, fontSize: 11, color: B.muted }}>NL</span>
              <button className="btn-accent" style={{
                background: B.accent, color: B.bg, border: 'none',
                padding: '10px 20px', fontSize: 12, letterSpacing: '.04em',
                fontFamily: B.sans, fontWeight: 700, borderRadius: 999,
              }}>Schrijf in</button>
            </>
          )}
          {isMobile && (
            <button onClick={() => setOpen(v => !v)} style={{
              background: 'none', border: `1px solid ${B.rule}`, color: B.ink,
              width: 40, height: 40, borderRadius: 8, fontSize: 16,
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            }}>
              {open ? '✕' : '☰'}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {isMobile && open && (
        <div style={{
          position: 'fixed', inset: 0, background: B.bg, zIndex: 199,
          display: 'flex', flexDirection: 'column',
          padding: '80px 24px 40px',
        }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {items.map(([path, label]) => (
              <Link key={path} to={path} onClick={() => setOpen(false)} style={{
                display: 'block', padding: '20px 0',
                fontFamily: B.display, fontSize: 36, fontWeight: 900,
                letterSpacing: '-.02em', textTransform: 'uppercase',
                color: active === path ? B.accent : B.ink,
                borderBottom: `1px solid ${B.rule}`,
              }}>{label}</Link>
            ))}
          </div>
          <button className="btn-accent" style={{
            background: B.accent, color: B.bg, border: 'none',
            padding: '18px', fontSize: 14, letterSpacing: '.06em',
            fontFamily: B.sans, fontWeight: 700, borderRadius: 999,
            textTransform: 'uppercase', marginTop: 32, width: '100%',
          }}>Schrijf je in →</button>
        </div>
      )}
    </>
  );
}
