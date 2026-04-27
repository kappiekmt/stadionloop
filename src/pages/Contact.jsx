import { useState } from 'react';
import { B } from '../theme';
import { useBreakpoint } from '../hooks/useBreakpoint';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const TOPICS = [
  'Selecteer onderwerp',
  'Inschrijving & deelname',
  'Sponsoring & etappe adopteren',
  'Pers & media',
  'Vrijwilligers',
  'Veiling',
  'Overig',
];

const SOCIALS = [
  ['Instagram', '@stadionloop', 'https://instagram.com/stadionloop'],
  ['Strava', 'Stadionloop Club', 'https://strava.com'],
  ['LinkedIn', 'Stichting Home of Football', 'https://linkedin.com'],
];

const INFO = [
  ['Locatie', 'De Adelaarshorst\nLooierstraat 4\n7415 BZ Deventer'],
  ['E-mail', 'info@stadionloop.nl'],
  ['KvK', '92847661'],
];

export default function Contact() {
  const { isMobile, isTablet } = useBreakpoint();
  const pad = isMobile ? '56px 20px' : isTablet ? '64px 32px' : '80px 48px';

  const [form, setForm] = useState({ naam: '', email: '', onderwerp: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ background: B.bg, color: B.ink, fontFamily: B.sans, minHeight: '100vh' }}>
      <Nav />

      {/* Hero */}
      <section style={{ padding: isMobile ? '48px 20px 40px' : isTablet ? '64px 32px 48px' : '80px 48px 64px' }}>
        <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.18em', color: B.accent, textTransform: 'uppercase', marginBottom: 24 }}>★ Neem contact op</div>
        <h1 style={{ fontFamily: B.display, fontSize: 'clamp(64px, 12vw, 180px)', fontWeight: 900, lineHeight: .82, letterSpacing: '-.04em', textTransform: 'uppercase', margin: '0 0 24px' }}>
          CONTACT.
        </h1>
        <p style={{ fontSize: isMobile ? 15 : 17, lineHeight: 1.6, color: B.muted, maxWidth: 560, margin: 0 }}>
          Vragen over inschrijven, sponsoring of de veiling? We horen het graag. Gemiddelde reactietijd: één werkdag.
        </p>
      </section>

      {/* Main: form + info */}
      <section style={{ padding: isMobile ? '0 20px 64px' : isTablet ? '0 32px 80px' : '0 48px 96px', borderTop: `1px solid ${B.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: isTablet ? '1fr' : '1.4fr 1fr', gap: isTablet ? 48 : 80, paddingTop: isMobile ? 48 : 64 }}>

          {/* Form */}
          <div>
            {sent ? (
              <div style={{ background: B.surface, borderRadius: 12, padding: isMobile ? 32 : 48, textAlign: 'center' }}>
                <div style={{ fontFamily: B.display, fontSize: 48, fontWeight: 900, color: B.accent, marginBottom: 16 }}>✓</div>
                <h2 style={{ fontFamily: B.display, fontSize: 28, fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase', margin: '0 0 12px' }}>Verstuurd!</h2>
                <p style={{ fontSize: 15, color: B.muted, lineHeight: 1.6, margin: 0 }}>We nemen zo snel mogelijk contact met je op.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: B.mono, fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: B.muted, marginBottom: 8 }}>Naam</label>
                    <input
                      required
                      value={form.naam}
                      onChange={set('naam')}
                      placeholder="Jouw naam"
                      style={{ width: '100%', background: B.surface, border: `1px solid ${B.rule}`, borderRadius: 8, padding: '14px 16px', fontSize: 14, color: B.ink, fontFamily: B.sans, outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: B.mono, fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: B.muted, marginBottom: 8 }}>E-mail</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={set('email')}
                      placeholder="jouw@email.nl"
                      style={{ width: '100%', background: B.surface, border: `1px solid ${B.rule}`, borderRadius: 8, padding: '14px 16px', fontSize: 14, color: B.ink, fontFamily: B.sans, outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: B.mono, fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: B.muted, marginBottom: 8 }}>Onderwerp</label>
                  <select
                    required
                    value={form.onderwerp}
                    onChange={set('onderwerp')}
                    style={{ width: '100%', background: B.surface, border: `1px solid ${B.rule}`, borderRadius: 8, padding: '14px 16px', fontSize: 14, color: form.onderwerp ? B.ink : B.muted, fontFamily: B.sans, outline: 'none', boxSizing: 'border-box', appearance: 'none', cursor: 'pointer' }}
                  >
                    {TOPICS.map((t, i) => <option key={t} value={i === 0 ? '' : t} disabled={i === 0}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: B.mono, fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: B.muted, marginBottom: 8 }}>Bericht</label>
                  <textarea
                    required
                    value={form.bericht}
                    onChange={set('bericht')}
                    rows={6}
                    placeholder="Schrijf hier je bericht..."
                    style={{ width: '100%', background: B.surface, border: `1px solid ${B.rule}`, borderRadius: 8, padding: '14px 16px', fontSize: 14, color: B.ink, fontFamily: B.sans, outline: 'none', resize: 'vertical', boxSizing: 'border-box', lineHeight: 1.6 }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-accent"
                  style={{ background: B.accent, color: B.bg, border: 'none', padding: '16px 32px', fontSize: 13, letterSpacing: '.06em', fontWeight: 700, textTransform: 'uppercase', borderRadius: 999, alignSelf: 'flex-start', cursor: 'pointer' }}
                >
                  Verstuur bericht →
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {INFO.map(([label, value]) => (
                <div key={label}>
                  <div style={{ fontFamily: B.mono, fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: B.muted, marginBottom: 8 }}>{label}</div>
                  <div style={{ fontSize: 14, lineHeight: 1.7, color: B.ink, whiteSpace: 'pre-line' }}>{value}</div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ borderTop: `1px solid ${B.rule}` }} />

            {/* Socials */}
            <div>
              <div style={{ fontFamily: B.mono, fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: B.muted, marginBottom: 16 }}>Volg ons</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {SOCIALS.map(([platform, handle]) => (
                  <div key={platform} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', background: B.surface, borderRadius: 8 }}>
                    <span style={{ fontFamily: B.display, fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-.005em' }}>{platform}</span>
                    <span style={{ fontFamily: B.mono, fontSize: 11, color: B.muted, letterSpacing: '.06em' }}>{handle}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: `1px solid ${B.rule}` }} />

            {/* Sponsor CTA */}
            <div style={{ background: B.accent, borderRadius: 12, padding: 28 }}>
              <div style={{ fontFamily: B.mono, fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: B.bg, opacity: .7, marginBottom: 12 }}>Sponsoring</div>
              <h3 style={{ fontFamily: B.display, fontSize: 24, fontWeight: 900, lineHeight: .95, letterSpacing: '-.02em', textTransform: 'uppercase', color: B.bg, margin: '0 0 12px' }}>
                Adopteer een etappe.
              </h3>
              <p style={{ fontSize: 13, color: B.bg, opacity: .8, lineHeight: 1.6, margin: '0 0 20px' }}>
                Zichtbaarheid + maatschappelijke impact. Vanaf € 500.
              </p>
              <button className="btn-dark" style={{ background: B.bg, color: B.ink, border: 'none', padding: '12px 22px', borderRadius: 999, fontWeight: 700, fontSize: 12, letterSpacing: '.04em', cursor: 'pointer' }}>
                Meer over sponsoring →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: isMobile ? '48px 20px 64px' : isTablet ? '64px 32px 80px' : '80px 48px 96px', borderTop: `1px solid ${B.rule}` }}>
        <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.18em', color: B.muted, textTransform: 'uppercase', marginBottom: 32 }}>★ Veelgestelde vragen</div>
        <div style={{ display: 'grid', gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr', gap: 1, background: B.rule }}>
          {[
            ['Hoe schrijf ik me in?', 'Inschrijving voor editie 03 opent op 1 maart 2026. Je ontvangt een bevestiging per e-mail met alle praktische informatie.'],
            ['Welke afstanden zijn er?', 'Je kunt kiezen uit 10 km, 5 km of de 1 km Familieloop. Alle afstanden starten en eindigen op De Adelaarshorst.'],
            ['Hoe werkt een etappe sponsoren?', 'Je adopteert één van de 28 etappes. Jouw naam of merk staat op alle communicatie rondom die etappe. We sturen je een sponsorpakket toe.'],
            ['Wanneer is de veiling?', 'De veiling start op 4 juni 2026 en loopt t/m 11 juni 21:00. Bieden kan via deze website, geen account nodig.'],
            ['Kan ik als vrijwilliger helpen?', 'Jazeker! Stuur een berichtje via het contactformulier met als onderwerp "Vrijwilligers". We nemen binnen 2 werkdagen contact op.'],
            ['Waar gaat de opbrengst naartoe?', '100% van de netto-opbrengst gaat naar jeugdprojecten in Deventer via Stichting Home of Football (ANBI-gecertificeerd, KvK 92847661).'],
          ].map(([q, a]) => (
            <div key={q} style={{ background: B.bg, padding: isMobile ? 24 : 32 }}>
              <h3 style={{ fontFamily: B.display, fontSize: 17, fontWeight: 700, letterSpacing: '-.01em', margin: '0 0 10px', color: B.ink }}>{q}</h3>
              <p style={{ fontSize: 14, color: B.muted, lineHeight: 1.65, margin: 0 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
