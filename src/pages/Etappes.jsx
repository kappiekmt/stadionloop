import { useState } from 'react';
import { Link } from 'react-router-dom';
import { B } from '../theme';
import { useBreakpoint } from '../hooks/useBreakpoint';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { ETAPPES, TOTAL_KM } from '../data/etappes';

const FILTERS = ['Alle', 'Premium', 'Echopper', 'Vrienden'];
const TYPE_LABEL = { premium: 'Premium', echopper: 'E-Chopper', vrienden: 'Vrienden', standard: '' };

export default function Etappes() {
  const { isMobile, isTablet } = useBreakpoint();
  const pad = isMobile ? '56px 20px' : isTablet ? '64px 32px' : '80px 48px';
  const [active, setActive] = useState('Alle');

  const filtered = active === 'Alle'
    ? ETAPPES
    : ETAPPES.filter(e => e.type === active.toLowerCase());

  return (
    <div style={{ background: B.bg, color: B.ink, fontFamily: B.sans, minHeight: '100vh' }}>
      <Nav />

      {/* Hero */}
      <section style={{ padding: isMobile ? '48px 20px 40px' : isTablet ? '64px 32px 48px' : '80px 48px 64px', display: 'grid', gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr', gap: 48, alignItems: 'end' }}>
        <div>
          <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.18em', color: B.accent, textTransform: 'uppercase', marginBottom: 24 }}>★ Editie 03 · Sep–Nov 2026</div>
          <h1 style={{ fontFamily: B.display, fontSize: 'clamp(64px, 12vw, 180px)', fontWeight: 900, lineHeight: .82, letterSpacing: '-.04em', textTransform: 'uppercase', margin: '0 0 24px' }}>
            DE<br /><span style={{ color: B.accent }}>ETAPPES.</span>
          </h1>
          <p style={{ fontSize: isMobile ? 15 : 17, lineHeight: 1.6, color: B.muted, maxWidth: 480, margin: 0 }}>
            28 etappes. 18 Eredivisie-stadions. {TOTAL_KM} kilometer door Nederland — van Groningen tot Deventer.
          </p>
        </div>

        {/* Summary stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 1, background: B.rule, borderRadius: 10, overflow: 'hidden', marginTop: isTablet ? 32 : 0 }}>
          {[
            ['28', 'Etappes'],
            [TOTAL_KM, 'Kilometer totaal'],
            ['18', 'Eredivisie-stadions'],
            ['13 nov', 'Finishdatum'],
          ].map(([n, l]) => (
            <div key={l} style={{ background: B.surface, padding: isMobile ? '20px 18px' : '28px 24px' }}>
              <div style={{ fontFamily: B.display, fontSize: isMobile ? 36 : 48, fontWeight: 900, letterSpacing: '-.03em', lineHeight: 1, color: B.ink }}>{n}</div>
              <div style={{ fontFamily: B.mono, fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: B.muted, marginTop: 8 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Filters */}
      <section style={{ padding: isMobile ? '0 20px 24px' : isTablet ? '0 32px 32px' : '0 48px 40px' }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                padding: '10px 20px', borderRadius: 999, fontSize: 12.5, border: 'none', cursor: 'pointer',
                fontWeight: active === f ? 600 : 500, fontFamily: B.sans,
                background: active === f ? B.ink : B.surface,
                color: active === f ? B.bg : B.muted,
                transition: 'all .15s',
              }}
            >{f} {f === 'Alle' ? `(${ETAPPES.length})` : `(${ETAPPES.filter(e => e.type === f.toLowerCase()).length})`}</button>
          ))}
        </div>
      </section>

      {/* Etappe list */}
      <section style={{ padding: isMobile ? '0 20px 80px' : isTablet ? '0 32px 96px' : '0 48px 96px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: B.rule, borderRadius: 10, overflow: 'hidden' }}>
          {filtered.map((e) => (
            <div
              key={e.id}
              className="auction-card"
              style={{ background: B.surface, display: 'grid', gridTemplateColumns: isMobile ? '48px 1fr' : '64px 1fr auto', alignItems: 'center', gap: isMobile ? 16 : 24, padding: isMobile ? '18px 16px' : '20px 28px', cursor: 'default' }}
            >
              {/* Number */}
              <div style={{ fontFamily: B.display, fontSize: isMobile ? 28 : 36, fontWeight: 900, letterSpacing: '-.03em', lineHeight: 1, color: e.type === 'premium' ? B.accent : B.muted }}>
                {String(e.id).padStart(2, '0')}
              </div>

              {/* Info */}
              <div style={{ minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 4 }}>
                  <span style={{ fontFamily: B.display, fontSize: isMobile ? 15 : 17, fontWeight: 700, letterSpacing: '-.01em', textTransform: 'uppercase', color: B.ink }}>{e.stadium}</span>
                  {TYPE_LABEL[e.type] && (
                    <span style={{ fontFamily: B.mono, fontSize: 9, letterSpacing: '.12em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: 999, background: e.type === 'premium' ? B.accent : e.type === 'echopper' ? B.ink : B.rule, color: e.type === 'premium' ? B.bg : B.muted }}>
                      {TYPE_LABEL[e.type]}
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', gap: isMobile ? 12 : 20, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: B.mono, fontSize: 11, color: B.muted, letterSpacing: '.08em' }}>{e.city}</span>
                  <span style={{ fontFamily: B.mono, fontSize: 11, color: B.muted, letterSpacing: '.08em' }}>{e.date}</span>
                  <span style={{ fontFamily: B.mono, fontSize: 11, color: B.muted, letterSpacing: '.08em' }}>{e.km} km</span>
                  {!isMobile && <span style={{ fontFamily: B.mono, fontSize: 11, color: B.muted, letterSpacing: '.08em', opacity: .6 }}>Sponsor: {e.sponsor}</span>}
                </div>
              </div>

              {/* Right: raised + link */}
              {!isMobile && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexShrink: 0 }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: B.display, fontSize: 20, fontWeight: 800, letterSpacing: '-.01em', color: B.ink }}>€ {e.raised.toLocaleString('nl-NL')}</div>
                    <div style={{ fontFamily: B.mono, fontSize: 10, color: B.muted, letterSpacing: '.1em', textTransform: 'uppercase' }}>van € {e.target.toLocaleString('nl-NL')}</div>
                  </div>
                  <Link to="/barometers" style={{ textDecoration: 'none' }}>
                    <button className="btn-ghost" style={{ background: 'transparent', color: B.ink, border: `1px solid ${B.rule}`, padding: '10px 18px', borderRadius: 999, fontSize: 12, fontFamily: B.sans, fontWeight: 600, letterSpacing: '.04em', cursor: 'pointer' }}>
                      Barometer →
                    </button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
