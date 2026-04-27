import { B } from '../theme';
import { useBreakpoint } from '../hooks/useBreakpoint';

export default function Footer() {
  const { isMobile, isTablet } = useBreakpoint();

  return (
    <footer style={{ borderTop: `1px solid ${B.rule}`, padding: isMobile ? '40px 20px 24px' : isTablet ? '48px 32px 24px' : '56px 48px 32px', background: B.bg }}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '2fr 1fr 1fr 1fr', gap: isMobile ? 40 : isTablet ? 32 : 40, marginBottom: 48 }}>
        <div>
          <div style={{ fontFamily: B.display, fontSize: isMobile ? 56 : 80, fontWeight: 900, lineHeight: .85, letterSpacing: '-.03em', textTransform: 'uppercase', marginBottom: 18 }}>
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
      <div style={{ borderTop: `1px solid ${B.rule}`, paddingTop: 24, display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: isMobile ? 8 : 0, fontFamily: B.mono, fontSize: 11, letterSpacing: '.1em', color: B.muted, textTransform: 'uppercase' }}>
        <span>© 2026 · Stichting Home of Football · KvK 92847661</span>
        <span>De Adelaarshorst, Deventer</span>
      </div>
    </footer>
  );
}
