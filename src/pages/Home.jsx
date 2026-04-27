import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { B } from '../theme';
import { unsplash } from '../utils';
import { useBreakpoint } from '../hooks/useBreakpoint';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function ManifestoSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const { isMobile, isTablet } = useBreakpoint();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words1 = 'Voetbal is meer dan negentig minuten.'.split(' ');
  const words2 = 'De Stadionloop is meer dan tien kilometer.'.split(' ');
  const all = [
    ...words1.map((w, i) => ({ w, muted: false, d: i * 0.07 })),
    ...words2.map((w, i) => ({ w, muted: true,  d: (words1.length + i) * 0.07 })),
  ];

  return (
    <section ref={ref} style={{ padding: isMobile ? '64px 20px' : isTablet ? '80px 32px' : '120px 48px', borderTop: `1px solid ${B.rule}` }}>
      <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.18em', color: B.accent, textTransform: 'uppercase', marginBottom: 32 }}>§ Manifesto</div>
      <h2 style={{ fontFamily: B.display, fontSize: 'clamp(40px, 7vw, 128px)', fontWeight: 900, lineHeight: .88, letterSpacing: '-.04em', textTransform: 'uppercase', margin: 0 }}>
        {all.map(({ w, muted, d }, i) => (
          <span key={i} style={{
            display: 'inline-block',
            color: muted ? B.muted : B.ink,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(32px)',
            transition: `opacity 0.75s ease ${d}s, transform 0.75s ease ${d}s`,
            marginRight: '0.22em',
          }}>{w}</span>
        ))}
      </h2>
    </section>
  );
}

export default function Home() {
  const { isMobile, isTablet } = useBreakpoint();
  const pad = isMobile ? '56px 20px' : isTablet ? '64px 32px' : '80px 48px';
  const padSm = isMobile ? '20px' : isTablet ? '32px' : '48px';

  return (
    <div style={{ background: B.bg, color: B.ink, fontFamily: B.sans, minHeight: '100vh' }}>
      <Nav />

      {/* Hero */}
      <section style={{ position: 'relative', height: isMobile ? '100svh' : 780, minHeight: isMobile ? 560 : 'auto', overflow: 'hidden' }}>
        <img
          src={unsplash('1522778526097-ce0a22ceb253', 1920, 780)}
          alt="Hardlopers in het stadion bij gouden uur"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(14,14,14,.55) 0%, rgba(14,14,14,.35) 30%, rgba(14,14,14,.82) 60%, rgba(14,14,14,.97) 100%)' }} />

        <div style={{ position: 'absolute', top: 24, left: isMobile ? 20 : isTablet ? 32 : 48, right: isMobile ? 20 : isTablet ? 32 : 48, display: 'flex', justifyContent: 'space-between', fontFamily: B.mono, fontSize: isMobile ? 10 : 11, letterSpacing: '.18em', textTransform: 'uppercase', color: B.ink }}>
          <span><span style={{ color: B.accent }}>●&nbsp;LIVE</span>{isMobile ? '' : ' · Editie 03 · 13.06.2026'}</span>
          {!isMobile && <span>De Adelaarshorst · Deventer · NL</span>}
        </div>

        <div style={{ position: 'absolute', left: isMobile ? 20 : isTablet ? 32 : 48, right: isMobile ? 20 : isTablet ? 32 : 48, bottom: isMobile ? 56 : 80 }}>
          <div style={{ display: isMobile ? 'flex' : 'grid', flexDirection: isMobile ? 'column' : undefined, gridTemplateColumns: isMobile ? undefined : '1fr auto', alignItems: isMobile ? 'flex-start' : 'end', gap: isMobile ? 20 : 48 }}>
            <div>
              {!isMobile && <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.18em', color: B.accent, marginBottom: 16, textTransform: 'uppercase' }}>10 KM · 5 KM · 1 KM Familieloop</div>}
              <h1 style={{ fontFamily: B.display, fontSize: isMobile ? 'clamp(64px, 17vw, 82px)' : 'clamp(72px, 13vw, 200px)', lineHeight: .85, fontWeight: 900, letterSpacing: '-.04em', margin: 0, textTransform: 'uppercase' }}>
                De<br />
                {isMobile
                  ? <span style={{ color: B.accent }}>Stadion<br />loop.</span>
                  : <span style={{ WebkitTextStroke: `2px ${B.ink}`, color: 'transparent' }}>Stadion<br />loop.</span>
                }
              </h1>
            </div>
            <div style={{ display: 'flex', flexDirection: isMobile ? 'row' : 'column', gap: 10, alignItems: 'flex-start' }}>
              <button className="btn-accent" style={{ background: B.accent, color: B.bg, border: 'none', padding: isMobile ? '16px 0' : '18px 32px', width: isMobile ? '100%' : 'auto', fontSize: isMobile ? 14 : 13, letterSpacing: '.06em', fontFamily: B.sans, fontWeight: 700, textTransform: 'uppercase', borderRadius: 999 }}>Inschrijven →</button>
              {!isMobile && <button className="btn-ghost" style={{ background: 'transparent', color: B.ink, border: `1px solid ${B.ink}`, padding: '18px 32px', fontSize: 13, letterSpacing: '.06em', fontFamily: B.sans, fontWeight: 600, textTransform: 'uppercase', borderRadius: 999 }}>Parcours bekijken</button>}
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, borderTop: `1px solid ${B.rule}`, background: 'rgba(14,14,14,.6)', backdropFilter: 'blur(8px)', padding: isMobile ? '12px 20px' : isTablet ? '14px 32px' : '14px 48px', display: 'flex', gap: isMobile ? 24 : 48, fontFamily: B.mono, fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: B.muted, overflow: 'hidden' }}>
          <span><span style={{ color: B.accent }}>★</span>&nbsp;&nbsp;Inschrijving open</span>
          {!isMobile && <span>2400 lopers vorig jaar</span>}
          <span>€ 87.000 opgehaald</span>
          {!isMobile && <span><span style={{ color: B.accent }}>★</span>&nbsp;&nbsp;Eindstreep middencirkel</span>}
          {!isMobile && <span>3 afstanden · Live tracking</span>}
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: isMobile ? '0' : '0', display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: 1, background: B.rule }}>
        {[['03', 'editie 2026'], ['10', 'kilometer'], ['2400', 'lopers, 2025'], ['87K', 'euro opgehaald']].map(([n, l], i) => (
          <div key={i} style={{ background: B.bg, padding: isMobile ? '20px 16px' : '4px 24px' }}>
            <div style={{ fontFamily: B.display, fontSize: 'clamp(48px, 8vw, 120px)', fontWeight: 900, letterSpacing: '-.04em', lineHeight: 1, color: i === 0 ? B.accent : B.ink }}>{n}</div>
            <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: B.muted, marginTop: 8, marginBottom: isMobile ? 8 : 0 }}>{l}</div>
          </div>
        ))}
      </section>

      {/* YouTube video */}
      <section style={{ padding: pad, borderTop: `1px solid ${B.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: isTablet ? '1fr' : '1fr 2fr', gap: isTablet ? 32 : 64, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.18em', color: B.accent, textTransform: 'uppercase', marginBottom: 16 }}>▶ In beeld</div>
            <h2 style={{ fontFamily: B.display, fontSize: 'clamp(32px, 4vw, 64px)', fontWeight: 900, lineHeight: .9, letterSpacing: '-.03em', textTransform: 'uppercase', margin: '0 0 16px' }}>
              De tocht in beeld.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: B.muted, margin: 0 }}>
              600 kilometer langs alle 18 Eredivisie-stadions. 28 etappes. Één missie: voetbal weer van iedereen maken.
            </p>
          </div>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 8, background: B.surface }}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/FmbgpDt8e0A?rel=0&modestbranding=1&color=white"
              title="Stadionloop 2025 — De tussenstand"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Auction promo */}
      <section style={{ padding: padSm, borderTop: `1px solid ${B.rule}`, display: 'grid', gridTemplateColumns: isTablet ? '1fr' : '1.2fr 1fr', gap: 24 }}>
        <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', minHeight: isMobile ? 320 : 520 }}>
          <img
            src={unsplash('1616124619460-ff4ed8f4683c', 900, 600)}
            alt="Go Ahead Eagles memorabilia"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,.6), rgba(0,0,0,.15))' }} />
          <div style={{ position: 'absolute', top: 24, left: 24, fontFamily: B.mono, fontSize: 11, letterSpacing: '.18em', color: B.gold, textTransform: 'uppercase' }}>★ Coming soon</div>
          <div style={{ position: 'absolute', bottom: 32, left: 32, right: 32 }}>
            <div style={{ fontFamily: B.display, fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 900, lineHeight: .9, letterSpacing: '-.03em', textTransform: 'uppercase', marginBottom: 14 }}>
              The auction.<br /><span style={{ color: B.accent }}>Eagles edition.</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateRows: isMobile ? 'auto auto' : '1fr 1fr', gap: 24 }}>
          <div style={{ padding: isMobile ? 24 : 40, background: B.surface, borderRadius: 8, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 16 }}>
            <div>
              <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.16em', color: B.muted, textTransform: 'uppercase', marginBottom: 16 }}>12 unieke kavels</div>
              <h3 style={{ fontFamily: B.display, fontSize: 'clamp(22px, 2.5vw, 36px)', fontWeight: 800, lineHeight: 1, letterSpacing: '-.02em', textTransform: 'uppercase', margin: 0 }}>Matchworn, gesigneerd, onmisbaar.</h3>
            </div>
            <div style={{ fontSize: 14, color: B.muted, lineHeight: 1.55 }}>Shirts, ballen, tribunestoelen en stadionervaringen. 100% van de opbrengst gaat naar projecten in Deventer.</div>
          </div>
          <div style={{ padding: isMobile ? 24 : 40, background: B.accent, color: B.bg, borderRadius: 8, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 16 }}>
            <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', opacity: .85 }}>Start veiling</div>
            <div style={{ fontFamily: B.display, fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 900, lineHeight: .9, letterSpacing: '-.03em', textTransform: 'uppercase' }}>04.06<br />2026</div>
            <Link to="/veiling">
              <button className="btn-dark" style={{ background: B.bg, color: B.ink, border: 'none', padding: '14px 24px', borderRadius: 999, fontWeight: 600, fontSize: 13, letterSpacing: '.04em' }}>Naar veiling →</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <ManifestoSection />

      {/* Pim Oostendorp */}
      <section style={{ padding: pad, borderTop: `1px solid ${B.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr', gap: isTablet ? 40 : 80, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.18em', color: B.accent, textTransform: 'uppercase', marginBottom: 24 }}>★ Het gezicht van de Stadionloop</div>
            <h2 style={{ fontFamily: B.display, fontSize: 'clamp(32px, 4vw, 64px)', fontWeight: 900, lineHeight: .92, letterSpacing: '-.03em', textTransform: 'uppercase', margin: '0 0 28px' }}>
              Pim (77) loopt voor de toekomst van anderen. Jij ook?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: B.muted, margin: '0 0 20px' }}>
              Loop mee. Of sponsor een etappe. Elke stap telt. Of je nu de wandelschoenen aantrekt of een etappe adopteert als sponsor — jij helpt mee om voetbal weer toegankelijk te maken voor iedereen.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: B.muted, margin: '0 0 36px' }}>
              Samen zorgen we ervoor dat niemand aan de zijlijn hoeft te staan. Niet in het stadion. En niet in het leven. Maak van voetbal weer iets van ons allemaal.
            </p>
            <button className="btn-accent" style={{ background: B.accent, color: B.bg, border: 'none', padding: '16px 32px', fontSize: 13, letterSpacing: '.06em', fontWeight: 700, textTransform: 'uppercase', borderRadius: 999 }}>
              Etappe sponsoren →
            </button>
          </div>
          <div style={{ borderRadius: 12, overflow: 'hidden', order: isTablet ? -1 : 0 }}>
            <img
              src="/pim-loopt.webp"
              alt="Pim Oostendorp loopt de Stadionloop"
              style={{ width: '100%', aspectRatio: isTablet ? '16/9' : '4/3', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section style={{ padding: pad, borderTop: `1px solid ${B.rule}` }}>
        <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.16em', color: B.muted, textTransform: 'uppercase', marginBottom: 32 }}>★ Onze partners</div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : isTablet ? 'repeat(3,1fr)' : 'repeat(5,1fr)', gap: 1, background: B.rule }}>
          {['Go Ahead Eagles', 'Gem. Deventer', 'Run2Day', 'UNICEF', 'RaboBank'].map((p) => (
            <div key={p} style={{ background: B.bg, padding: isMobile ? '24px 16px' : '40px 24px', fontFamily: B.display, fontSize: isMobile ? 14 : 18, fontWeight: 700, letterSpacing: '.02em', textTransform: 'uppercase', color: B.muted }}>{p}</div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
