import { B } from '../theme';
import { unsplash } from '../utils';
import { useBreakpoint } from '../hooks/useBreakpoint';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { AUCTION_ITEMS, formatEUR } from '../data/auctionItems';

const FILTERS = ['Alle (12)', 'Matchworn', 'Memorabilia', 'Ervaringen', 'Kunst'];
const COUNTDOWN = [['07', 'D'], ['14', 'U'], ['22', 'M'], ['08', 'S']];

export default function Auction() {
  const { isMobile, isTablet } = useBreakpoint();
  const pad = isMobile ? '20px' : isTablet ? '32px' : '48px';

  return (
    <div style={{ background: B.bg, color: B.ink, fontFamily: B.sans, minHeight: '100vh' }}>
      <Nav />

      {/* Hero */}
      <section style={{ padding: pad, display: 'grid', gridTemplateColumns: isTablet ? '1fr' : '1.4fr 1fr', gap: 32, alignItems: 'end' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
            <span style={{ display: 'inline-block', width: 8, height: 8, background: B.accent, borderRadius: '50%', boxShadow: `0 0 16px ${B.accent}` }} />
            <span style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.18em', color: B.accent, textTransform: 'uppercase' }}>Live · 12 lots open · sluit 11.06.2026 21:00</span>
          </div>
          <h1 style={{ fontFamily: B.display, fontSize: 'clamp(64px, 12vw, 180px)', fontWeight: 900, lineHeight: .82, letterSpacing: '-.04em', textTransform: 'uppercase', margin: '0 0 24px' }}>
            DE<br /><span style={{ color: B.accent }}>VEILING.</span>
          </h1>
          <p style={{ fontSize: isMobile ? 15 : 17, lineHeight: 1.55, color: B.muted, maxWidth: 520, margin: 0 }}>
            Twaalf unieke Go Ahead Eagles-kavels. Bied op een stuk geschiedenis en steun rechtstreeks de jeugd van Deventer.
          </p>
        </div>

        {/* Countdown */}
        <div style={{ background: B.surface, padding: isMobile ? 20 : 32, borderRadius: 8, marginTop: isTablet ? 32 : 0 }}>
          <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.16em', color: B.muted, textTransform: 'uppercase', marginBottom: 20 }}>Veiling sluit over</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: isMobile ? 8 : 12 }}>
            {COUNTDOWN.map(([n, l], i) => (
              <div key={i} style={{ background: B.bg, padding: isMobile ? '14px 6px' : '20px 8px', textAlign: 'center', borderRadius: 6 }}>
                <div style={{ fontFamily: B.display, fontSize: isMobile ? 36 : 48, fontWeight: 900, letterSpacing: '-.03em', lineHeight: 1, color: i === 0 ? B.accent : B.ink }}>{n}</div>
                <div style={{ fontFamily: B.mono, fontSize: 10, color: B.muted, marginTop: 6, letterSpacing: '.1em' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section style={{ padding: isMobile ? '8px 20px 24px' : '8px 48px 32px' }}>
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4, WebkitOverflowScrolling: 'touch' }}>
          {FILTERS.map((f, i) => (
            <span key={f} className="filter-chip" style={{
              padding: '10px 18px', borderRadius: 999, fontSize: 12.5, whiteSpace: 'nowrap',
              fontWeight: i === 0 ? 600 : 500,
              background: i === 0 ? B.ink : B.surface,
              color: i === 0 ? B.bg : B.muted,
              cursor: 'pointer', flexShrink: 0,
            }}>{f}</span>
          ))}
        </div>
        {!isMobile && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 12, fontFamily: B.mono, fontSize: 11, color: B.muted, letterSpacing: '.12em', textTransform: 'uppercase' }}>Sorteer · Eindigend ↓</div>
        )}
      </section>

      {/* Item grid */}
      <section style={{ padding: isMobile ? '0 20px 56px' : isTablet ? '0 32px 64px' : '8px 48px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3,1fr)', gap: isMobile ? 16 : 24 }}>
          {AUCTION_ITEMS.map((it, i) => (
            <article key={it.id} className="auction-card" style={{ background: B.surface, borderRadius: 10, overflow: 'hidden', cursor: 'pointer' }}>
              <div style={{ position: 'relative' }}>
                <img
                  src={unsplash(it.img, 600, 450)}
                  alt={it.title}
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', top: 14, left: 14, padding: '5px 10px', background: 'rgba(14,14,14,.7)', backdropFilter: 'blur(8px)', borderRadius: 999, fontFamily: B.mono, fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: B.ink }}>
                  Lot {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ position: 'absolute', top: 14, right: 14, padding: '5px 10px', background: B.accent, borderRadius: 999, fontFamily: B.mono, fontSize: 10, letterSpacing: '.1em', fontWeight: 600, color: B.bg }}>
                  {it.ends}
                </div>
              </div>
              <div style={{ padding: '20px 22px 22px' }}>
                <h3 style={{ fontFamily: B.display, fontSize: isMobile ? 18 : 20, fontWeight: 700, letterSpacing: '-.005em', margin: '0 0 6px', lineHeight: 1.2, textTransform: 'uppercase', color: B.ink }}>{it.title}</h3>
                <p style={{ fontSize: 13, color: B.muted, margin: '0 0 18px' }}>{it.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: `1px solid ${B.rule}` }}>
                  <div>
                    <div style={{ fontFamily: B.mono, fontSize: 10, color: B.muted, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 4 }}>Bod · {it.bids}</div>
                    <div style={{ fontFamily: B.display, fontSize: isMobile ? 22 : 28, fontWeight: 800, letterSpacing: '-.01em', color: B.ink }}>{formatEUR(it.bid)}</div>
                  </div>
                  <button className="btn-accent" style={{ background: B.accent, color: B.bg, border: 'none', padding: '12px 18px', fontSize: 12, letterSpacing: '.04em', fontWeight: 600, borderRadius: 999 }}>Bied →</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
