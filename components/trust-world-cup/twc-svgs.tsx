/** Hero cinematic signal layer — abstract, not sports */
export function SvgSignalLayer() {
  return (
    <svg
      viewBox="0 0 400 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="h-full w-full twc-signal-drift"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="twc-glow-a" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="rgba(255, 184, 77, 0.12)" />
          <stop offset="100%" stopColor="rgba(255, 184, 77, 0)" />
        </radialGradient>
        <radialGradient id="twc-glow-b" cx="30%" cy="70%" r="40%">
          <stop offset="0%" stopColor="rgba(255, 184, 77, 0.06)" />
          <stop offset="100%" stopColor="rgba(255, 184, 77, 0)" />
        </radialGradient>
      </defs>
      <rect width="400" height="600" fill="url(#twc-glow-a)" />
      <rect width="400" height="600" fill="url(#twc-glow-b)" />
      {[80, 140, 200, 260, 320].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="400"
          y2={y}
          stroke="rgba(255, 255, 255, 0.04)"
          strokeWidth="1"
        />
      ))}
      {[80, 160, 240, 320].map((x) => (
        <line
          key={x}
          x1={x}
          y1="0"
          x2={x}
          y2="600"
          stroke="rgba(255, 255, 255, 0.04)"
          strokeWidth="1"
        />
      ))}
      <circle cx="200" cy="280" r="60" stroke="rgba(255, 184, 77, 0.2)" strokeWidth="1" />
      <circle cx="200" cy="280" r="100" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" />
      <circle cx="200" cy="280" r="140" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
      <line x1="200" y1="120" x2="200" y2="440" stroke="rgba(255, 184, 77, 0.15)" strokeWidth="1" />
      <line x1="60" y1="280" x2="340" y2="280" stroke="rgba(255, 184, 77, 0.15)" strokeWidth="1" />
      <circle cx="200" cy="280" r="4" fill="rgba(255, 184, 77, 0.6)" className="vasp-dot-pulse" />
      {[
        [120, 180],
        [280, 200],
        [160, 360],
        [300, 340],
        [100, 400],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="2"
          fill="rgba(255, 184, 77, 0.35)"
          style={{ animationDelay: `${i * 0.4}s` }}
        />
      ))}
    </svg>
  );
}

export function SvgIconAccess() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="11" width="18" height="10" rx="1" stroke="var(--amber)" strokeWidth="1.5" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SvgIconSignal() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="3" stroke="var(--amber)" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="7" stroke="rgba(255, 184, 77, 0.5)" strokeWidth="1" />
      <circle cx="12" cy="12" r="10" stroke="rgba(255, 184, 77, 0.25)" strokeWidth="1" />
    </svg>
  );
}

export function SvgIconMission() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2L14 8h6l-5 4 2 6-5-3-5 3 2-6-5-4h6z" stroke="var(--amber)" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function SvgIconChannel() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 6h16M4 12h10M4 18h14" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SvgIconScore() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 18V6M4 18h16M8 14V10M12 16V8M16 12v-2" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SvgIconArchive() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="4" width="16" height="4" rx="1" stroke="var(--amber)" strokeWidth="1.5" />
      <path d="M6 8v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" stroke="var(--amber)" strokeWidth="1.5" />
      <path d="M10 13h4" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SvgIconBriefing() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="var(--amber)" strokeWidth="1.5" />
      <path d="M12 7v5l3 2" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SvgIconPriority() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.5 7.1 18.2l.9-5.5-4-3.9 5.5-.8z" stroke="var(--amber)" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
