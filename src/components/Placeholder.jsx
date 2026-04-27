const tones = {
  warm:  { bg1: '#e8e2d6', bg2: '#dcd3c2', fg: 'rgba(60,45,30,.55)' },
  dark:  { bg1: '#1c1c1c', bg2: '#262626', fg: 'rgba(255,235,200,.55)' },
  cream: { bg1: '#f4efe5', bg2: '#ebe4d4', fg: 'rgba(60,45,30,.5)'  },
  red:   { bg1: '#3a0d0a', bg2: '#4a1612', fg: 'rgba(255,210,180,.6)' },
  gold:  { bg1: '#f4d96a', bg2: '#eccd55', fg: 'rgba(60,40,10,.65)' },
};

export default function Placeholder({ label = 'foto', tone = 'warm', ratio = '4 / 3', radius = 0, style = {} }) {
  const t = tones[tone] || tones.warm;
  return (
    <div style={{
      aspectRatio: ratio,
      background: `repeating-linear-gradient(135deg, ${t.bg1} 0 14px, ${t.bg2} 14px 28px)`,
      borderRadius: radius,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: t.fg,
      fontFamily: '"Geist Mono", ui-monospace, monospace',
      fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase',
      ...style,
    }}>{label}</div>
  );
}
