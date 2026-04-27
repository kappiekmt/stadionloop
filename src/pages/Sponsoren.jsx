import { Link } from 'react-router-dom';
import { B } from '../theme';
import { useBreakpoint } from '../hooks/useBreakpoint';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const PACKAGES = [
  {
    tier: 'Goud',
    price: '€ 5.000',
    sub: 'Hoofdsponsorpakket',
    accent: true,
    perks: [
      'Naam op alle 28 etappes & alle communicatie',
      'Logo op het startshirt van alle deelnemers',
      'Eigen etappe vernoemd naar jouw organisatie',
      '10 gratis startplaatsen (10 km)',
      'Toespraak op de officiële finishceremonie',
      'Prominente vermelding in de aftermovie',
      'Exclusieve social media spotlights per etappe',
      'ANBI-aftrekbare gift',
    ],
  },
  {
    tier: 'Etappe',
    price: '€ 1.500',
    sub: 'Adopteer één etappe',
    accent: false,
    perks: [
      'Etappe draagt de naam van jouw organisatie',
      'Logo op alle communicatie rond die etappe',
      '3 gratis startplaatsen',
      'Social media coverage op etappedag',
      'Vermelding in programmaboekje & aftermovie',
      'ANBI-aftrekbare gift',
    ],
  },
  {
    tier: 'Vrienden',
    price: '€ 500',
    sub: 'Supporterspakket',
    accent: false,
    perks: [
      'Naam in het programmaboekje',
      '1 gratis startplaats',
      'Social media shoutout',
      'Vermelding op de website',
      'ANBI-aftrekbare gift',
    ],
  },
];

const CURRENT_SPONSORS = [
  ['Go Ahead Eagles', 'Officiële club'],
  ['Gemeente Deventer', 'Gemeente'],
  ['Rabobank', 'Financieel partner'],
  ['Run2Day', 'Materiaalpartner'],
  ['UNICEF Nederland', 'Goed doel partner'],
  ['FlexPumps', 'Etappe 1 & 21'],
  ['ValidSign', 'Etappe 3 & 24'],
  ['Matrix Fitness', 'Etappe 9 & 19'],
  ['Bordex Group', 'Etappe 7 & 22'],
  ['TCR Tours', 'Etappe 5 & 20'],
];

export default function Sponsoren() {
  const { isMobile, isTablet } = useBreakpoint();
  const pad = isMobile ? '56px 20px' : isTablet ? '64px 32px' : '80px 48px';

  return (
    <div style={{ background: B.bg, color: B.ink, fontFamily: B.sans, minHeight: '100vh' }}>
      <Nav />

      {/* Hero */}
      <section style={{ padding: isMobile ? '48px 20px 40px' : isTablet ? '64px 32px 48px' : '80px 48px 64px', display: 'grid', gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr', gap: 48, alignItems: 'end' }}>
        <div>
          <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.18em', color: B.accent, textTransform: 'uppercase', marginBottom: 24 }}>★ Editie 03 · 2026</div>
          <h1 style={{ fontFamily: B.display, fontSize: 'clamp(64px, 11vw, 160px)', fontWeight: 900, lineHeight: .82, letterSpacing: '-.04em', textTransform: 'uppercase', margin: '0 0 24px' }}>
            SPON<br /><span style={{ color: B.accent }}>SOREN.</span>
          </h1>
          <p style={{ fontSize: isMobile ? 15 : 17, lineHeight: 1.6, color: B.muted, maxWidth: 520, margin: '0 0 32px' }}>
            Koppel jouw naam aan voetbal, beweging en impact. Alle opbrengsten gaan rechtstreeks naar jeugdprojecten in Deventer.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <Link to="/contact">
              <button className="btn-accent" style={{ background: B.accent, color: B.bg, border: 'none', padding: '16px 28px', fontSize: 13, letterSpacing: '.06em', fontWeight: 700, textTransform: 'uppercase', borderRadius: 999, cursor: 'pointer' }}>
                Neem contact op →
              </button>
            </Link>
            <a href="mailto:info@stadionloop.nl" style={{ textDecoration: 'none' }}>
              <button className="btn-ghost" style={{ background: 'transparent', color: B.ink, border: `1px solid ${B.rule}`, padding: '16px 28px', fontSize: 13, letterSpacing: '.06em', fontWeight: 600, textTransform: 'uppercase', borderRadius: 999, cursor: 'pointer' }}>
                info@stadionloop.nl
              </button>
            </a>
          </div>
        </div>

        {/* Key numbers */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: B.rule, borderRadius: 12, overflow: 'hidden', marginTop: isTablet ? 32 : 0 }}>
          {[
            ['28', 'Etappes te sponsoren'],
            ['2.500+', 'Verwachte deelnemers'],
            ['€ 87K', 'Opgehaald in 2025'],
            ['ANBI', 'Aftrekbaar'],
          ].map(([n, l]) => (
            <div key={l} style={{ background: B.surface, padding: isMobile ? '20px 18px' : '28px 24px' }}>
              <div style={{ fontFamily: B.display, fontSize: isMobile ? 32 : 44, fontWeight: 900, letterSpacing: '-.03em', lineHeight: 1, color: B.ink }}>{n}</div>
              <div style={{ fontFamily: B.mono, fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: B.muted, marginTop: 8 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section style={{ padding: isMobile ? '48px 20px 64px' : isTablet ? '64px 32px 80px' : '80px 48px 96px', borderTop: `1px solid ${B.rule}` }}>
        <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.18em', color: B.muted, textTransform: 'uppercase', marginBottom: 40 }}>★ Sponsorpakketten</div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(3,1fr)', gap: 16 }}>
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.tier}
              style={{
                background: pkg.accent ? B.accent : B.surface,
                borderRadius: 12,
                padding: isMobile ? 28 : 36,
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
              }}
            >
              <div style={{ fontFamily: B.mono, fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: pkg.accent ? B.bg : B.muted, opacity: pkg.accent ? .75 : 1, marginBottom: 10 }}>{pkg.sub}</div>
              <div style={{ fontFamily: B.display, fontSize: 48, fontWeight: 900, letterSpacing: '-.04em', lineHeight: .9, color: pkg.accent ? B.bg : B.ink, marginBottom: 8 }}>{pkg.tier}</div>
              <div style={{ fontFamily: B.display, fontSize: 28, fontWeight: 800, letterSpacing: '-.02em', color: pkg.accent ? B.bg : B.accent, marginBottom: 32 }}>{pkg.price}</div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {pkg.perks.map((p) => (
                  <div key={p} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ color: pkg.accent ? B.bg : B.accent, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ fontSize: 14, lineHeight: 1.5, color: pkg.accent ? B.bg : B.muted }}>{p}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <button
                  className={pkg.accent ? 'btn-dark' : 'btn-accent'}
                  style={{
                    width: '100%',
                    background: pkg.accent ? B.bg : B.accent,
                    color: pkg.accent ? B.ink : B.bg,
                    border: 'none',
                    padding: '14px 24px',
                    fontSize: 13, letterSpacing: '.06em', fontWeight: 700,
                    textTransform: 'uppercase', borderRadius: 999,
                    cursor: 'pointer', fontFamily: B.sans,
                  }}
                >
                  {pkg.tier} pakket aanvragen →
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Donateur option */}
        <div style={{ marginTop: 16, background: B.surface, borderRadius: 12, padding: isMobile ? '24px 28px' : '28px 36px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', gap: 20 }}>
          <div>
            <div style={{ fontFamily: B.mono, fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: B.muted, marginBottom: 8 }}>Geen sponsor, toch helpen?</div>
            <h3 style={{ fontFamily: B.display, fontSize: isMobile ? 20 : 26, fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase', margin: '0 0 6px' }}>Doneer als supporter</h3>
            <p style={{ fontSize: 13, color: B.muted, margin: 0 }}>€ 75 of € 150 — 100% naar jeugdprojecten. ANBI-aftrekbaar.</p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
            {['€ 75', '€ 150'].map(a => (
              <button key={a} className="btn-ghost" style={{ background: 'transparent', color: B.ink, border: `1px solid ${B.rule}`, padding: '12px 24px', borderRadius: 999, fontSize: 13, fontFamily: B.sans, fontWeight: 600, cursor: 'pointer' }}>{a} doneren →</button>
            ))}
          </div>
        </div>
      </section>

      {/* Current sponsors */}
      <section style={{ padding: isMobile ? '0 20px 80px' : isTablet ? '0 32px 96px' : '0 48px 96px', borderTop: `1px solid ${B.rule}` }}>
        <div style={{ paddingTop: isMobile ? 40 : 56 }}>
          <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.18em', color: B.muted, textTransform: 'uppercase', marginBottom: 32 }}>★ Onze huidige sponsors</div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : isTablet ? 'repeat(3,1fr)' : 'repeat(5,1fr)', gap: 1, background: B.rule, borderRadius: 10, overflow: 'hidden' }}>
            {CURRENT_SPONSORS.map(([name, role]) => (
              <div key={name} style={{ background: B.surface, padding: isMobile ? '20px 16px' : '28px 24px' }}>
                <div style={{ fontFamily: B.display, fontSize: isMobile ? 14 : 16, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-.005em', color: B.ink, marginBottom: 6 }}>{name}</div>
                <div style={{ fontFamily: B.mono, fontSize: 10, color: B.muted, letterSpacing: '.1em', textTransform: 'uppercase' }}>{role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
