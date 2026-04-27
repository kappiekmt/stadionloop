import { Link } from 'react-router-dom';
import { B } from '../theme';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Placeholder from '../components/Placeholder';

export default function Home() {
  return (
    <div style={{ background: B.bg, color: B.ink, fontFamily: B.sans, minHeight: '100vh' }}>
      <Nav />

      {/* Hero */}
      <section style={{ position: 'relative', height: 780, overflow: 'hidden' }}>
        <Placeholder label="hero · stadionloop, golden hour" tone="dark" ratio="auto" style={{ height: '100%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(14,14,14,.4) 0%, rgba(14,14,14,.1) 40%, rgba(14,14,14,.95) 100%)' }} />

        <div style={{ position: 'absolute', top: 32, left: 48, right: 48, display: 'flex', justifyContent: 'space-between', fontFamily: B.mono, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: B.ink }}>
          <span><span style={{ color: B.accent }}>●&nbsp;LIVE</span> · Editie 03 · 13.06.2026</span>
          <span>De Adelaarshorst · Deventer · NL</span>
        </div>

        <div style={{ position: 'absolute', left: 48, right: 48, bottom: 80 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: 48 }}>
            <div>
              <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.18em', color: B.accent, marginBottom: 16, textTransform: 'uppercase' }}>10 KM · 5 KM · 1 KM Familieloop</div>
              <h1 style={{
                fontFamily: B.display, fontSize: 'clamp(100px, 13vw, 200px)', lineHeight: .82,
                fontWeight: 900, letterSpacing: '-.04em', margin: 0, textTransform: 'uppercase',
              }}>
                De<br />
                <span style={{ WebkitTextStroke: `2px ${B.ink}`, color: 'transparent' }}>STADION{'\n'}LOOP.</span>
              </h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-end' }}>
              <button className="btn-accent" style={{ background: B.accent, color: B.bg, border: 'none', padding: '18px 32px', fontSize: 13, letterSpacing: '.06em', fontFamily: B.sans, fontWeight: 700, textTransform: 'uppercase', borderRadius: 999 }}>Schrijf je in →</button>
              <button className="btn-ghost" style={{ background: 'transparent', color: B.ink, border: `1px solid ${B.ink}`, padding: '18px 32px', fontSize: 13, letterSpacing: '.06em', fontFamily: B.sans, fontWeight: 600, textTransform: 'uppercase', borderRadius: 999 }}>Parcours bekijken</button>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, borderTop: `1px solid ${B.rule}`, background: 'rgba(14,14,14,.6)', backdropFilter: 'blur(8px)', padding: '14px 48px', display: 'flex', gap: 48, fontFamily: B.mono, fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: B.muted, overflow: 'hidden' }}>
          <span><span style={{ color: B.accent }}>★</span>&nbsp;&nbsp;Inschrijving open</span>
          <span>2400 lopers vorig jaar</span>
          <span>€ 87.000 opgehaald in 2025</span>
          <span><span style={{ color: B.accent }}>★</span>&nbsp;&nbsp;Eindstreep op de middencirkel</span>
          <span>3 afstanden</span>
          <span>Live tracking · Strava</span>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '80px 48px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: B.rule }}>
        {[['03', 'editie 2026'], ['10', 'kilometer'], ['2400', 'lopers, 2025'], ['87K', 'euro opgehaald']].map(([n, l], i) => (
          <div key={i} style={{ background: B.bg, padding: '4px 24px' }}>
            <div style={{ fontFamily: B.display, fontSize: 'clamp(64px, 8vw, 120px)', fontWeight: 900, letterSpacing: '-.04em', lineHeight: 1, color: i === 0 ? B.accent : B.ink }}>{n}</div>
            <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: B.muted, marginTop: 8 }}>{l}</div>
          </div>
        ))}
      </section>

      {/* Auction promo */}
      <section style={{ padding: '48px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24, background: B.bg }}>
        <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', minHeight: 520 }}>
          <Placeholder label="memorabilia · matchworn shirts" tone="red" ratio="auto" style={{ height: '100%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,.55), rgba(0,0,0,.1))' }} />
          <div style={{ position: 'absolute', top: 24, left: 24, fontFamily: B.mono, fontSize: 11, letterSpacing: '.18em', color: B.gold, textTransform: 'uppercase' }}>★ Coming soon</div>
          <div style={{ position: 'absolute', bottom: 32, left: 32, right: 32 }}>
            <div style={{ fontFamily: B.display, fontSize: 'clamp(48px, 5vw, 72px)', fontWeight: 900, lineHeight: .9, letterSpacing: '-.03em', textTransform: 'uppercase', marginBottom: 14 }}>
              The auction.<br /><span style={{ color: B.accent }}>Eagles edition.</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 24 }}>
          <div style={{ padding: 40, background: B.surface, borderRadius: 8, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.16em', color: B.muted, textTransform: 'uppercase', marginBottom: 16 }}>12 unieke kavels</div>
              <h3 style={{ fontFamily: B.display, fontSize: 'clamp(24px, 2.5vw, 36px)', fontWeight: 800, lineHeight: 1, letterSpacing: '-.02em', textTransform: 'uppercase', margin: 0 }}>Matchworn, gesigneerd, onmisbaar.</h3>
            </div>
            <div style={{ fontSize: 14, color: B.muted, lineHeight: 1.55, marginTop: 24 }}>Shirts, ballen, tribunestoelen en stadionervaringen. 100% van de opbrengst gaat naar projecten in Deventer.</div>
          </div>
          <div style={{ padding: 40, background: B.accent, color: B.bg, borderRadius: 8, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', opacity: .85 }}>Start veiling</div>
            <div style={{ fontFamily: B.display, fontSize: 'clamp(48px, 5vw, 64px)', fontWeight: 900, lineHeight: .9, letterSpacing: '-.03em', textTransform: 'uppercase' }}>04.06<br />2026</div>
            <Link to="/veiling">
              <button className="btn-dark" style={{ background: B.bg, color: B.ink, border: 'none', padding: '14px 24px', borderRadius: 999, fontWeight: 600, fontSize: 13, letterSpacing: '.04em' }}>Naar veiling →</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section style={{ padding: '120px 48px', borderTop: `1px solid ${B.rule}` }}>
        <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.18em', color: B.accent, textTransform: 'uppercase', marginBottom: 32 }}>§ Manifesto</div>
        <h2 style={{ fontFamily: B.display, fontSize: 'clamp(48px, 8vw, 128px)', fontWeight: 900, lineHeight: .88, letterSpacing: '-.04em', textTransform: 'uppercase', margin: 0, maxWidth: 1400 }}>
          Voetbal is meer dan negentig minuten. <span style={{ color: B.muted }}>De Stadionloop is meer dan tien kilometer.</span>
        </h2>
      </section>

      {/* Partners */}
      <section style={{ padding: '48px', borderTop: `1px solid ${B.rule}` }}>
        <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.16em', color: B.muted, textTransform: 'uppercase', marginBottom: 32 }}>★ Onze partners</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 1, background: B.rule }}>
          {['Go Ahead Eagles', 'Gem. Deventer', 'Run2Day', 'UNICEF', 'RaboBank'].map((p) => (
            <div key={p} style={{ background: B.bg, padding: '40px 24px', fontFamily: B.display, fontSize: 18, fontWeight: 700, letterSpacing: '.02em', textTransform: 'uppercase', color: B.muted }}>{p}</div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
