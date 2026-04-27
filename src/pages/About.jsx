import { B } from '../theme';
import { unsplash } from '../utils';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const PILLARS = [
  ['01', 'Jeugd', 'Sport, talentbegeleiding en mentale steun voor jongeren in Deventer-Oost.', 'red'],
  ['02', 'Inclusie', 'Voetbal toegankelijk maken voor wie het anders niet zou bereiken.', 'dark'],
  ['03', 'Erfgoed', 'Het verhaal van De Adelaarshorst en Deventer voetbalcultuur bewaren.', 'gold'],
];

const BOARD = [
  ['Hannah van Dijk', 'voorzitter',      'uR3ncKqhA9M'],
  ['Ruben Pelser',    'penningmeester',  'DnIIvjC8C3Y'],
  ['Mariska Holt',    'secretaris',      'axCCLfPJGz4'],
  ['Joost Geesink',   'algemeen lid',    'mvYr0u6t3cA'],
];

export default function About() {
  return (
    <div style={{ background: B.bg, color: B.ink, fontFamily: B.sans, minHeight: '100vh' }}>
      <Nav />

      {/* Hero */}
      <section style={{ padding: '80px 48px 64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'end' }}>
        <div>
          <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.18em', color: B.accent, textTransform: 'uppercase', marginBottom: 24 }}>★ Stichting Home of Football · est. 2024</div>
          <h1 style={{ fontFamily: B.display, fontSize: 'clamp(72px, 10vw, 140px)', fontWeight: 900, lineHeight: .85, letterSpacing: '-.04em', textTransform: 'uppercase', margin: 0 }}>
            For the<br /><span style={{ color: B.accent }}>love</span><br />of the game.
          </h1>
        </div>
        <img
          src={unsplash('pbaDZJJOepI', 800, 600)}
          alt="Bestuur Stichting Home of Football"
          style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 8 }}
        />
      </section>

      {/* Mission */}
      <section style={{ padding: '80px 48px', borderTop: `1px solid ${B.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48 }}>
          <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.18em', color: B.muted, textTransform: 'uppercase' }}>§ Missie</div>
          <div>
            <p style={{ fontFamily: B.display, fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-.02em', margin: '0 0 24px', maxWidth: 900 }}>
              We geloven dat voetbal de stad sneller verbindt dan welk ander instrument dan ook.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: B.muted, maxWidth: 680 }}>
              Stichting Home of Football werd in 2024 opgericht. De Stadionloop is onze drager — de opbrengst stroomt direct naar projecten in jeugdzorg, onderwijs en de wijken van Deventer. In 2025 ondersteunden we tien initiatieven; in 2026 mikken we op vijftien.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section style={{ padding: '48px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        {PILLARS.map(([n, title, desc], i) => (
          <div key={i} style={{ background: B.surface, padding: 32, borderRadius: 8, position: 'relative', overflow: 'hidden', minHeight: 380, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: B.display, fontSize: 120, fontWeight: 900, letterSpacing: '-.04em', color: B.accent, lineHeight: .9 }}>{n}</div>
            <div>
              <h3 style={{ fontFamily: B.display, fontSize: 32, fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase', margin: '0 0 12px', color: B.ink }}>{title}</h3>
              <p style={{ fontSize: 14, color: B.muted, margin: 0, lineHeight: 1.6 }}>{desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Board */}
      <section style={{ padding: '80px 48px', borderTop: `1px solid ${B.rule}` }}>
        <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.18em', color: B.muted, textTransform: 'uppercase', marginBottom: 32 }}>★ Bestuur</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {BOARD.map(([name, role, imgId], i) => (
            <div key={i} style={{ background: B.surface, borderRadius: 8, overflow: 'hidden' }}>
              <img
                src={unsplash(imgId, 400, 533)}
                alt={name}
                style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
              />
              <div style={{ padding: '18px 20px 22px' }}>
                <div style={{ fontFamily: B.display, fontSize: 18, fontWeight: 700, letterSpacing: '-.005em', textTransform: 'uppercase', color: B.ink }}>{name}</div>
                <div style={{ fontFamily: B.mono, fontSize: 10, color: B.muted, letterSpacing: '.12em', textTransform: 'uppercase', marginTop: 6 }}>{role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
