import { B } from '../theme';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Placeholder from '../components/Placeholder';
import { AUCTION_ITEMS, formatEUR } from '../data/auctionItems';

const FILTERS = ['Alle (12)', 'Matchworn', 'Memorabilia', 'Ervaringen', 'Kunst'];
const COUNTDOWN = [['07', 'D'], ['14', 'U'], ['22', 'M'], ['08', 'S']];

export default function Auction() {
  return (
    <div style={{ background: B.bg, color: B.ink, fontFamily: B.sans, minHeight: '100vh' }}>
      <Nav />

      {/* Hero */}
      <section style={{ padding: '48px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32, alignItems: 'end' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
            <span style={{ display: 'inline-block', width: 8, height: 8, background: B.accent, borderRadius: '50%', boxShadow: `0 0 16px ${B.accent}` }} />
            <span style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.18em', color: B.accent, textTransform: 'uppercase' }}>Live · 12 lots open · sluit 11.06.2026 21:00</span>
          </div>
          <h1 style={{ fontFamily: B.display, fontSize: 'clamp(80px, 12vw, 180px)', fontWeight: 900, lineHeight: .82, letterSpacing: '-.04em', textTransform: 'uppercase', margin: '0 0 24px' }}>
            DE<br /><span style={{ color: B.accent }}>VEILING.</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.55, color: B.muted, maxWidth: 520, margin: 0 }}>
            Twaalf unieke Go Ahead Eagles-kavels. Bied op een stuk geschiedenis en steun rechtstreeks de jeugd van Deventer.
          </p>
        </div>

        {/* Countdown */}
        <div style={{ background: B.surface, padding: 32, borderRadius: 8 }}>
          <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.16em', color: B.muted, textTransform: 'uppercase', marginBottom: 20 }}>Veiling sluit over</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
            {COUNTDOWN.map(([n, l], i) => (
              <div key={i} style={{ background: B.bg, padding: '20px 8px', textAlign: 'center', borderRadius: 6 }}>
                <div style={{ fontFamily: B.display, fontSize: 48, fontWeight: 900, letterSpacing: '-.03em', lineHeight: 1, color: i === 0 ? B.accent : B.ink }}>{n}</div>
                <div style={{ fontFamily: B.mono, fontSize: 10, color: B.muted, marginTop: 6, letterSpacing: '.1em' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section style={{ padding: '8px 48px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {FILTERS.map((f, i) => (
            <span key={f} style={{
              padding: '10px 18px', borderRadius: 999, fontSize: 12.5,
              fontWeight: i === 0 ? 600 : 500,
              background: i === 0 ? B.ink : B.surface,
              color: i === 0 ? B.bg : B.muted,
              cursor: 'pointer',
            }}>{f}</span>
          ))}
        </div>
        <div style={{ fontFamily: B.mono, fontSize: 11, color: B.muted, letterSpacing: '.12em', textTransform: 'uppercase' }}>Sorteer · Eindigend ↓</div>
      </section>

      {/* Item grid */}
      <section style={{ padding: '8px 48px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {AUCTION_ITEMS.map((it, i) => (
            <article key={it.id} style={{ background: B.surface, borderRadius: 10, overflow: 'hidden', cursor: 'pointer' }}>
              <div style={{ position: 'relative' }}>
                <Placeholder label={it.title.split('—')[0]} tone={it.tone} ratio="4 / 3" />
                <div style={{ position: 'absolute', top: 14, left: 14, padding: '5px 10px', background: 'rgba(14,14,14,.7)', backdropFilter: 'blur(8px)', borderRadius: 999, fontFamily: B.mono, fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: B.ink }}>
                  Lot {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ position: 'absolute', top: 14, right: 14, padding: '5px 10px', background: B.accent, borderRadius: 999, fontFamily: B.mono, fontSize: 10, letterSpacing: '.1em', fontWeight: 600, color: B.bg }}>
                  {it.ends}
                </div>
              </div>
              <div style={{ padding: '20px 22px 22px' }}>
                <h3 style={{ fontFamily: B.display, fontSize: 20, fontWeight: 700, letterSpacing: '-.005em', margin: '0 0 6px', lineHeight: 1.2, textTransform: 'uppercase', color: B.ink }}>{it.title}</h3>
                <p style={{ fontSize: 13, color: B.muted, margin: '0 0 18px' }}>{it.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: `1px solid ${B.rule}` }}>
                  <div>
                    <div style={{ fontFamily: B.mono, fontSize: 10, color: B.muted, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 4 }}>Bod · {it.bids} biedingen</div>
                    <div style={{ fontFamily: B.display, fontSize: 28, fontWeight: 800, letterSpacing: '-.01em', color: B.ink }}>{formatEUR(it.bid)}</div>
                  </div>
                  <button style={{ background: B.accent, color: B.bg, border: 'none', padding: '12px 18px', fontSize: 12, letterSpacing: '.04em', fontWeight: 600, borderRadius: 999 }}>Bied →</button>
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
