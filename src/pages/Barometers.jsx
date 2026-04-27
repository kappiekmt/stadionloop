import { B } from '../theme';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { ETAPPES, TOTAL_TARGET, TOTAL_RAISED } from '../data/etappes';

function ProgressBar({ raised, target }) {
  const pct = target > 0 ? Math.min(100, Math.round((raised / target) * 100)) : 0;
  return (
    <div style={{ marginTop: 14 }}>
      <div style={{ height: 4, background: '#2e2b27', borderRadius: 999, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: pct >= 100 ? B.accent : pct > 50 ? B.accent : B.muted, borderRadius: 999, transition: 'width 0.6s ease', opacity: pct === 0 ? 0.3 : 1 }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
        <span style={{ fontFamily: B.mono, fontSize: 10, color: pct > 0 ? B.ink : B.muted, letterSpacing: '.08em' }}>€ {raised.toLocaleString('nl-NL')}</span>
        <span style={{ fontFamily: B.mono, fontSize: 10, color: B.muted, letterSpacing: '.08em' }}>{pct}%</span>
      </div>
    </div>
  );
}

export default function Barometers() {
  const { isMobile, isTablet } = useBreakpoint();
  const pad = isMobile ? '56px 20px' : isTablet ? '64px 32px' : '80px 48px';
  const totalPct = Math.round((TOTAL_RAISED / TOTAL_TARGET) * 100);

  return (
    <div style={{ background: B.bg, color: B.ink, fontFamily: B.sans, minHeight: '100vh' }}>
      <Nav />

      {/* Hero */}
      <section style={{ padding: isMobile ? '48px 20px 40px' : isTablet ? '64px 32px 48px' : '80px 48px 64px' }}>
        <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.18em', color: B.accent, textTransform: 'uppercase', marginBottom: 24 }}>★ Live · Editie 03 · 2026</div>
        <h1 style={{ fontFamily: B.display, fontSize: 'clamp(64px, 12vw, 180px)', fontWeight: 900, lineHeight: .82, letterSpacing: '-.04em', textTransform: 'uppercase', margin: '0 0 48px' }}>
          BARO<br /><span style={{ color: B.accent }}>METERS.</span>
        </h1>

        {/* Totaal barometer */}
        <div style={{ background: B.surface, borderRadius: 12, padding: isMobile ? 24 : 40 }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 32, alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: B.muted, marginBottom: 12 }}>Totaal ingezameld</div>
              <div style={{ fontFamily: B.display, fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 900, letterSpacing: '-.04em', lineHeight: 1, color: B.accent }}>
                € {TOTAL_RAISED.toLocaleString('nl-NL')}
              </div>
              <div style={{ fontFamily: B.mono, fontSize: 12, color: B.muted, marginTop: 8 }}>van € {TOTAL_TARGET.toLocaleString('nl-NL')} doel · {totalPct}% bereikt</div>
              <div style={{ height: 8, background: '#2e2b27', borderRadius: 999, overflow: 'hidden', marginTop: 20 }}>
                <div style={{ height: '100%', width: `${totalPct}%`, background: B.accent, borderRadius: 999 }} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: B.rule, borderRadius: 8, overflow: 'hidden' }}>
              {[
                [ETAPPES.filter(e => e.raised > 0).length, 'Actieve barometers'],
                [ETAPPES.filter(e => e.raised === 0).length, 'Nog te starten'],
                ['€ ' + Math.max(...ETAPPES.map(e => e.raised)).toLocaleString('nl-NL'), 'Hoogste etappe'],
                [28, 'Etappes totaal'],
              ].map(([n, l]) => (
                <div key={l} style={{ background: B.bg, padding: isMobile ? '16px 14px' : '20px 18px' }}>
                  <div style={{ fontFamily: B.display, fontSize: isMobile ? 22 : 28, fontWeight: 900, letterSpacing: '-.02em', color: B.ink }}>{n}</div>
                  <div style={{ fontFamily: B.mono, fontSize: 9, letterSpacing: '.12em', textTransform: 'uppercase', color: B.muted, marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Barometer grid */}
      <section style={{ padding: isMobile ? '0 20px 80px' : isTablet ? '0 32px 96px' : '0 48px 96px', borderTop: `1px solid ${B.rule}` }}>
        <div style={{ paddingTop: isMobile ? 40 : 56, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3,1fr)', gap: isMobile ? 12 : 16 }}>
          {ETAPPES.map((e) => {
            const pct = Math.min(100, Math.round((e.raised / e.target) * 100));
            return (
              <div key={e.id} style={{ background: B.surface, borderRadius: 10, padding: isMobile ? 20 : 24 }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <div style={{ fontFamily: B.display, fontSize: 28, fontWeight: 900, letterSpacing: '-.03em', lineHeight: 1, color: e.raised > 0 ? B.accent : '#3a3733' }}>
                      {String(e.id).padStart(2, '0')}
                    </div>
                  </div>
                  <div style={{ fontFamily: B.mono, fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: B.muted, textAlign: 'right' }}>{e.date}</div>
                </div>

                <div style={{ fontFamily: B.display, fontSize: 15, fontWeight: 700, letterSpacing: '-.01em', textTransform: 'uppercase', color: B.ink, marginBottom: 2 }}>{e.stadium}</div>
                <div style={{ fontFamily: B.mono, fontSize: 10, color: B.muted, letterSpacing: '.08em', marginBottom: 4 }}>{e.city} · {e.km} km</div>
                <div style={{ fontFamily: B.mono, fontSize: 10, color: B.muted, letterSpacing: '.08em', opacity: .7 }}>Sponsor: {e.sponsor}</div>

                <ProgressBar raised={e.raised} target={e.target} />

                <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontFamily: B.mono, fontSize: 10, color: B.muted, letterSpacing: '.1em', textTransform: 'uppercase' }}>
                    Doel € {e.target.toLocaleString('nl-NL')}
                  </div>
                  <Link to="/sponsoren" style={{ textDecoration: 'none' }}>
                    <button className="btn-accent" style={{ background: e.raised >= e.target ? B.surface : B.accent, color: e.raised >= e.target ? B.muted : B.bg, border: 'none', padding: '8px 14px', borderRadius: 999, fontSize: 11, fontFamily: B.sans, fontWeight: 600, letterSpacing: '.04em', cursor: 'pointer' }}>
                      {e.raised >= e.target ? 'Vol ✓' : 'Doneer →'}
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
