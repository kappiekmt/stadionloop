import { Link, useLocation } from 'react-router-dom';
import { B } from '../theme';

const items = [
  ['/', 'Home'],
  ['/veiling', 'Veiling'],
  ['/over', 'Stichting'],
  ['/partners', 'Partners'],
  ['/contact', 'Contact'],
];

export default function Nav() {
  const { pathname } = useLocation();
  const active = pathname === '/' ? '/' : '/' + pathname.split('/')[1];

  return (
    <nav style={{
      display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center',
      padding: '20px 48px', borderBottom: `1px solid ${B.rule}`,
      fontFamily: B.sans, fontSize: 13,
      position: 'sticky', top: 0,
      background: 'rgba(14,14,14,.85)', backdropFilter: 'blur(12px)', zIndex: 100,
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/logo.png" alt="Stadionloop" style={{ height: 44, width: 44, objectFit: 'contain' }} />
      </Link>

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

      <div style={{ display: 'flex', gap: 10, alignItems: 'center', justifyContent: 'flex-end' }}>
        <span style={{ fontFamily: B.mono, fontSize: 11, color: B.muted }}>NL</span>
        <button className="btn-accent" style={{
          background: B.accent, color: B.bg, border: 'none',
          padding: '10px 20px', fontSize: 12, letterSpacing: '.04em',
          fontFamily: B.sans, fontWeight: 700, borderRadius: 999,
        }}>Schrijf in</button>
      </div>
    </nav>
  );
}
