import { B } from '../theme';
import { unsplash } from '../utils';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { ETAPPES, TOTAL_TARGET, TOTAL_RAISED } from '../data/etappes';

export default function Barometers() {
  const { isMobile, isTablet } = useBreakpoint();
  const pad = isMobile ? '20px' : isTablet ? '32px' : '48px';
  const totalPct = Math.round((TOTAL_RAISED / TOTAL_TARGET) * 100);

  return (
    <div style={{ background: B.bg, color: B.ink, fontFamily: B.sans, minHeight: '100vh' }}>
      <Nav />

      {/* Hero */}
      <section style={{ padding: isMobile ? '48px 20px 40px' : isTablet ? '64px 32px 48px' : '80px 48px 56px' }}>
        <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.18em', color: B.accent, textTransform: 'uppercase', marginBottom: 24 }}>★ Live · Editie 03 · 2026</div>
        <h1 style={{ fontFamily: B.display, fontSize: 'clamp(64px, 12vw, 180px)', fontWeight: 900, lineHeight: .82, letterSpacing: '-.04em', textTransform: 'uppercase', margin: '0 0 40px' }}>
          BARO<br /><span style={{ color: B.accent }}>METERS.</span>
        </h1>

        {/* Total progress bar */}
        <div style={{ background: B.surface, borderRadius: 12, padding: isMobile ? 24 : 36 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
            <div>
              <div style={{ fontFamily: B.mono, fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: B.muted, marginBottom: 8 }}>Totaal ingezameld</div>
              <div style={{ fontFamily: B.display, fontSize: isMobile ? 40 : 64, fontWeight: 900, letterSpacing: '-.04em', lineHeight: 1, color: B.accent }}>
                € {TOTAL_RAISED.toLocaleString('nl-NL')}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: B.display, fontSize: isMobile ? 28 : 40, fontWeight: 900, letterSpacing: '-.03em', color: B.muted }}>{totalPct}%</div>
              <div style={{ fontFamily: B.mono, fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: B.muted }}>van € {TOTAL_TARGET.toLocaleString('nl-NL')}</div>
            </div>
          </div>
          <div style={{ height: 6, background: B.rule, borderRadius: 999, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${totalPct}%`, background: B.accent, borderRadius: 999 }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: B.rule, borderRadius: 8, overflow: 'hidden', marginTop: 20 }}>
            {[
              [ETAPPES.filter(e => e.raised > 0).length + ' / 28', 'Actieve barometers'],
              ['€ ' + Math.max(...ETAPPES.map(e => e.raised)).toLocaleString('nl-NL'), 'Hoogste etappe'],
              [ETAPPES.filter(e => e.raised === 0).length, 'Nog te starten'],
            ].map(([n, l]) => (
              <div key={l} style={{ background: B.bg, padding: isMobile ? '14px 12px' : '18px 20px' }}>
                <div style={{ fontFamily: B.display, fontSize: isMobile ? 18 : 24, fontWeight: 900, letterSpacing: '-.02em', color: B.ink }}>{n}</div>
                <div style={{ fontFamily: B.mono, fontSize: 9, letterSpacing: '.12em', textTransform: 'uppercase', color: B.muted, marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Barometer list — full-width cards like original */}
      <section style={{ padding: `0 ${pad} 80px` }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {ETAPPES.map((e) => {
            const pct = Math.min(100, Math.round((e.raised / e.target) * 100));
            return (
              <div key={e.id} style={{ borderRadius: 10, overflow: 'hidden', background: B.surface }}>
                {/* Image with overlay */}
                <div style={{ position: 'relative' }}>
                  <img
                    src={unsplash(e.img, 1200, 480)}
                    alt={e.stadium}
                    style={{ width: '100%', height: isMobile ? 200 : 320, objectFit: 'cover', display: 'block' }}
                  />
                  {/* Sponsor name watermark */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'linear-gradient(180deg, rgba(14,14,14,.15) 0%, rgba(14,14,14,.7) 100%)',
                  }}>
                    <span style={{
                      fontFamily: B.display,
                      fontSize: isMobile ? 40 : 80,
                      fontWeight: 900,
                      letterSpacing: '-.04em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.12)',
                      textAlign: 'center',
                      padding: '0 20px',
                      userSelect: 'none',
                    }}>{e.sponsor}</span>
                  </div>
                  {/* Etappe number badge */}
                  <div style={{
                    position: 'absolute', top: 16, left: 16,
                    fontFamily: B.mono, fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase',
                    background: 'rgba(14,14,14,.75)', backdropFilter: 'blur(8px)',
                    padding: '5px 12px', borderRadius: 999, color: B.ink,
                  }}>Etappe {String(e.id).padStart(2, '0')}</div>
                  {/* Date badge */}
                  <div style={{
                    position: 'absolute', top: 16, right: 16,
                    fontFamily: B.mono, fontSize: 11, letterSpacing: '.1em',
                    background: 'rgba(14,14,14,.75)', backdropFilter: 'blur(8px)',
                    padding: '5px 12px', borderRadius: 999, color: B.muted,
                  }}>{e.date}</div>
                </div>

                {/* Dark amount bar */}
                <div style={{
                  background: '#111',
                  padding: isMobile ? '20px 20px 12px' : '28px 36px 16px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: B.muted, marginBottom: 8 }}>
                    {e.stadium} · {e.city}
                  </div>
                  <div style={{ fontFamily: B.display, fontSize: isMobile ? 40 : 64, fontWeight: 900, letterSpacing: '-.04em', lineHeight: 1, color: B.ink }}>
                    <span style={{ color: B.accent }}>€</span> {e.raised.toLocaleString('nl-NL')}
                  </div>
                  <div style={{ fontFamily: B.mono, fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: B.muted, marginTop: 6 }}>ingezameld</div>
                </div>

                {/* Progress bar */}
                <div style={{ background: '#111', padding: '0 0 4px' }}>
                  <div style={{ height: 6, background: B.rule, margin: '0 0 0 0' }}>
                    <div style={{
                      height: '100%',
                      width: `${pct}%`,
                      background: pct === 0 ? 'transparent' : B.accent,
                      transition: 'width 0.8s ease',
                    }} />
                  </div>
                </div>

                {/* Goal + CTA row */}
                <div style={{
                  background: B.surface,
                  padding: isMobile ? '14px 20px' : '16px 36px',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
                }}>
                  <div style={{ fontFamily: B.mono, fontSize: 11, color: B.muted, letterSpacing: '.1em' }}>
                    Doel € {e.target.toLocaleString('nl-NL')} · {pct}%
                    {e.sponsor && <span style={{ marginLeft: 16, opacity: .6 }}>{e.sponsor}</span>}
                  </div>
                  <Link to="/sponsoren" style={{ textDecoration: 'none', flexShrink: 0 }}>
                    <button className="btn-accent" style={{
                      background: pct >= 100 ? B.rule : B.accent,
                      color: pct >= 100 ? B.muted : B.bg,
                      border: 'none', padding: '10px 20px', borderRadius: 999,
                      fontSize: 12, fontFamily: B.sans, fontWeight: 700,
                      letterSpacing: '.04em', cursor: 'pointer',
                    }}>
                      {pct >= 100 ? 'Vol ✓' : 'Doneer →'}
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
