import { B } from '../theme';

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${B.rule}`, padding: '56px 48px 32px', background: B.bg }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
        <div>
          <div style={{
            fontFamily: B.display, fontSize: 80, fontWeight: 900,
            lineHeight: .85, letterSpacing: '-.03em', textTransform: 'uppercase', marginBottom: 18,
          }}>
            Stadion<br /><span style={{ color: B.accent }}>loop.</span>
          </div>
          <div style={{ maxWidth: 300, lineHeight: 1.55, color: B.muted, fontSize: 13 }}>
            Een initiatief van Stichting Home of Football. Voor de stad, voor de jeugd, voor de liefde voor het spel.
          </div>
        </div>
        {[
          ['Evenement', ['Inschrijven', 'Parcours', 'Tijdschema', 'FAQ']],
          ['Stichting', ['Over ons', 'Bestuur', 'ANBI', 'Jaarverslag']],
          ['Volg', ['Instagram', 'Strava', 'LinkedIn', 'Newsletter']],
        ].map(([title, links]) => (
          <div key={title}>
            <div style={{ fontFamily: B.mono, fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: B.muted, marginBottom: 14 }}>{title}</div>
            <div style={{ lineHeight: 2, fontSize: 14 }}>
              {links.map((link) => <div key={link}>{link}</div>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{
        borderTop: `1px solid ${B.rule}`, paddingTop: 24,
        display: 'flex', justifyContent: 'space-between',
        fontFamily: B.mono, fontSize: 11, letterSpacing: '.1em', color: B.muted, textTransform: 'uppercase',
      }}>
        <span>© 2026 · Stichting Home of Football · KvK 92847661</span>
        <span>De Adelaarshorst, Deventer</span>
      </div>
    </footer>
  );
}
