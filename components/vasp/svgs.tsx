import { ACCENT, BG, TEXT } from "./tokens";

/** Section 1 — crosshair */
export function SvgHeroCrosshair() {
  const c = 80;
  return (
    <svg
      width={160}
      height={160}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={true}
      className="mx-auto max-w-[min(100%,160px)] h-auto shrink-0"
    >
      <circle cx={c} cy={c} r={18} stroke={TEXT} strokeWidth={2} />
      <circle cx={c} cy={c} r={34} stroke={TEXT} strokeWidth={2} />
      <circle cx={c} cy={c} r={50} stroke={TEXT} strokeWidth={2} />
      <circle cx={c} cy={c} r={66} stroke={TEXT} strokeWidth={2} />
      <line x1={10} y1={c} x2={150} y2={c} stroke={ACCENT} strokeWidth={2} />
      <line x1={c} y1={10} x2={c} y2={150} stroke={ACCENT} strokeWidth={2} />
      <circle
        cx={c}
        cy={c}
        r={7}
        fill={ACCENT}
        className="vasp-dot-pulse"
      />
    </svg>
  );
}

/** Section 3 — broken shield */
export function SvgBrokenShield() {
  return (
    <svg
      width={160}
      height={160}
      viewBox="0 0 160 160"
      fill="none"
      aria-hidden={true}
      className="mx-auto max-w-[min(100%,160px)] h-auto"
    >
      <path
        d="M80 12 L128 28 L128 78 C128 112 104 138 80 148 C56 138 32 112 32 78 L32 28 Z"
        stroke={TEXT}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <path
        d="M78 28 L82 42 L76 56 L84 70 L78 84 L82 98 L78 112 L82 126"
        stroke={ACCENT}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x={80}
        y={92}
        textAnchor="middle"
        fill={ACCENT}
        fontSize={44}
        fontFamily="var(--font-syne), sans-serif"
        fontWeight={800}
      >
        !
      </text>
    </svg>
  );
}

/** Section 4 — isometric stacked layers */
export function SvgIsometricLayers() {
  return (
    <svg
      width={180}
      height={160}
      viewBox="0 0 180 160"
      fill="none"
      aria-hidden={true}
      className="mx-auto max-w-[min(100%,180px)] h-auto"
    >
      <defs>
        <pattern id="vasp-dot-grid" width={8} height={8} patternUnits="userSpaceOnUse">
          <circle cx={2} cy={2} r={0.75} fill="rgba(10,10,10,0.35)" />
        </pattern>
      </defs>
      {/* bottom */}
      <path
        d="M28 118 L108 98 L148 118 L68 138 Z"
        stroke={TEXT}
        strokeWidth={2}
        fill="transparent"
      />
      {/* middle */}
      <path
        d="M38 88 L118 68 L158 88 L78 108 Z"
        stroke={TEXT}
        strokeWidth={2}
        fill="transparent"
      />
      {/* top */}
      <path d="M48 58 L128 38 L168 58 L88 78 Z" fill={ACCENT} stroke={ACCENT} strokeWidth={2} />
      <path d="M48 58 L128 38 L168 58 L88 78 Z" fill="url(#vasp-dot-grid)" opacity={0.9} />
    </svg>
  );
}

/** Section 5 — hub network */
export function SvgHubNetwork() {
  const cx = 100;
  const cy = 100;
  return (
    <svg
      width={200}
      height={200}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden={true}
      className="mx-auto max-w-[min(100%,200px)] h-auto"
    >
      <circle
        cx={cx}
        cy={cy}
        r={52}
        stroke={ACCENT}
        strokeWidth={1.5}
        strokeDasharray="6 5"
        opacity={0.85}
      />
      {/* spokes */}
      <line x1={cx} y1={cy - 26} x2={cx} y2={38} stroke={TEXT} strokeWidth={1.5} />
      <line x1={cx + 26} y1={cy} x2={162} y2={cy} stroke={TEXT} strokeWidth={1.5} />
      <line x1={cx} y1={cy + 26} x2={cx} y2={162} stroke={TEXT} strokeWidth={1.5} />
      <line x1={cx - 26} y1={cy} x2={38} y2={cy} stroke={TEXT} strokeWidth={1.5} />
      {/* outer nodes */}
      <circle cx={cx} cy={36} r={18} stroke={TEXT} strokeWidth={2} />
      <circle cx={164} cy={cy} r={18} stroke={TEXT} strokeWidth={2} />
      <circle cx={cx} cy={164} r={18} stroke={TEXT} strokeWidth={2} />
      <circle cx={36} cy={cy} r={18} stroke={TEXT} strokeWidth={2} />
      {/* icons in outer */}
      <text x={cx} y={42} textAnchor="middle" fill={TEXT} fontSize={13} fontFamily="var(--font-dm-mono), monospace">
        {"</>"}
      </text>
      <path
        d="M154 94 L164 88 L174 94 L174 106 L164 112 L154 106 Z"
        stroke={TEXT}
        strokeWidth={1.8}
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx={100} cy={156} r={6} stroke={TEXT} strokeWidth={1.5} fill="none" />
      <path
        d="M92 164 Q100 146 108 164"
        stroke={TEXT}
        strokeWidth={1.5}
        strokeLinecap="round"
        fill="none"
      />
      <circle cx={94} cy={168} r={4} stroke={TEXT} strokeWidth={1.3} fill="none" />
      <circle cx={106} cy={168} r={4} stroke={TEXT} strokeWidth={1.3} fill="none" />
      <rect x={24} y={94} width={5} height={14} fill={TEXT} rx={1} />
      <rect x={32} y={88} width={5} height={20} fill={TEXT} rx={1} />
      <rect x={40} y={92} width={5} height={16} fill={TEXT} rx={1} />
      {/* center */}
      <circle cx={cx} cy={cy} r={26} stroke={ACCENT} strokeWidth={2.5} fill={BG} />
      <circle cx={cx} cy={cy - 6} r={7} stroke={ACCENT} strokeWidth={2} fill="none" />
      <path d="M86 112 L100 94 L114 112 Z" stroke={ACCENT} strokeWidth={2} strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/** Section 6 — open box + rays */
export function SvgOpenBoxRays() {
  return (
    <svg
      width={160}
      height={160}
      viewBox="0 0 160 160"
      aria-hidden={true}
      className="mx-auto max-w-[min(100%,160px)] h-auto"
    >
      <defs>
        <radialGradient id="vasp-ray-glow" cx="50%" cy="65%" r="55%">
          <stop offset="0%" stopColor={ACCENT} stopOpacity={0.35} />
          <stop offset="100%" stopColor={ACCENT} stopOpacity={0} />
        </radialGradient>
      </defs>
      <ellipse cx={80} cy={108} rx={56} ry={36} fill="url(#vasp-ray-glow)" />
      <line x1={44} y1={72} x2={28} y2={22} stroke={ACCENT} strokeWidth={2} />
      <line x1={62} y1={68} x2={54} y2={14} stroke={ACCENT} strokeWidth={2} />
      <line x1={80} y1={66} x2={80} y2={10} stroke={ACCENT} strokeWidth={2} />
      <line x1={98} y1={68} x2={106} y2={14} stroke={ACCENT} strokeWidth={2} />
      <line x1={116} y1={72} x2={132} y2={22} stroke={ACCENT} strokeWidth={2} />
      <line x1={128} y1={80} x2={148} y2={48} stroke={ACCENT} strokeWidth={1.5} />
      <line x1={32} y1={80} x2={12} y2={48} stroke={ACCENT} strokeWidth={1.5} />
      {/* box */}
      <path
        d="M36 124 L36 92 L80 76 L124 92 L124 124"
        stroke={TEXT}
        strokeWidth={2}
        fill="none"
        strokeLinejoin="round"
      />
      <path d="M36 92 L80 108 L124 92" stroke={TEXT} strokeWidth={2} fill="none" />
      <path d="M80 76 L80 108" stroke={TEXT} strokeWidth={2} />
    </svg>
  );
}

/** Section 7 — person in crosshair */
export function SvgPersonCrosshair() {
  const c = 90;
  const r = 62;
  return (
    <svg
      width={180}
      height={180}
      viewBox="0 0 180 180"
      fill="none"
      aria-hidden={true}
      className="mx-auto max-w-[min(100%,180px)] h-auto"
    >
      <circle cx={c} cy={c} r={r} stroke={TEXT} strokeWidth={2} />
      <line x1={c - r} y1={c} x2={c + r} y2={c} stroke={TEXT} strokeWidth={1.5} />
      <line x1={c} y1={c - r} x2={c} y2={c + r} stroke={TEXT} strokeWidth={1.5} />
      <circle cx={c} cy={c - 10} r={14} stroke={TEXT} strokeWidth={2} />
      <path
        d="M66 118 Q90 96 114 118"
        stroke={TEXT}
        strokeWidth={2}
        strokeLinecap="round"
        fill="none"
      />
      <g transform="translate(122 122)">
        <circle cx={0} cy={0} r={14} fill={ACCENT} />
        <path
          d="M-5 2 L-1 6 L6 -4"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
}

/** Section 8 — double chevrons */
export function SvgDoubleChevrons() {
  const chevRight = (ox: number, fill: string, i: number) => (
    <path key={`r-${i}`} d={`M${ox} 36 L${ox + 14} 60 L${ox} 84 Z`} fill={fill} />
  );
  const chevLeft = (ox: number, fill: string, i: number) => (
    <path
      key={`l-${i}`}
      d={`M${ox + 14} 36 L${ox} 60 L${ox + 14} 84 Z`}
      fill={fill}
    />
  );
  return (
    <svg
      width={240}
      height={120}
      viewBox="0 0 240 120"
      aria-hidden={true}
      className="mx-auto max-w-[min(100%,240px)] h-auto"
    >
      {[0, 1, 2].map((i) => chevRight(16 + i * 22, TEXT, i))}
      {[0, 1, 2].map((i) => chevLeft(154 + i * 22, ACCENT, i))}
    </svg>
  );
}

/** Section 9 — radial network */
export function SvgRadialNetwork() {
  return (
    <svg
      width={200}
      height={200}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden={true}
      className="mx-auto max-w-[min(100%,200px)] h-auto"
    >
      <circle
        cx={100}
        cy={100}
        r={36}
        stroke={ACCENT}
        strokeWidth={2}
        strokeDasharray="6 5"
      />
      <image
        href="/Veraxius%20AIM%20model%20Logo%20%26%20Icon.png"
        x={72}
        y={72}
        width={56}
        height={56}
        preserveAspectRatio="xMidYMid meet"
      />
      <line x1={100} y1={36} x2={100} y2={64} stroke={TEXT} strokeWidth={1.5} />
      <line x1={164} y1={100} x2={136} y2={100} stroke={TEXT} strokeWidth={1.5} />
      <line x1={100} y1={164} x2={100} y2={136} stroke={TEXT} strokeWidth={1.5} />
      <line x1={36} y1={100} x2={64} y2={100} stroke={TEXT} strokeWidth={1.5} />
      {[ [100, 28], [172, 100], [100, 172], [28, 100] ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={16} stroke={TEXT} strokeWidth={2} fill={BG} />
          <circle cx={x} cy={y - 4} r={5} stroke={TEXT} strokeWidth={1.5} fill="none" />
          <path
            d={`M${x - 6} ${y + 6} Q${x} ${y + 2} ${x + 6} ${y + 6}`}
            stroke={TEXT}
            strokeWidth={1.5}
            fill="none"
          />
        </g>
      ))}
    </svg>
  );
}

/** Section 10 — calendar */
export function SvgCalendarCheck() {
  const cells = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      cells.push(
        <rect
          key={`${row}-${col}`}
          x={44 + col * 22}
          y={58 + row * 18}
          width={16}
          height={14}
          stroke={TEXT}
          strokeWidth={1.2}
          fill="none"
          rx={2}
        />
      );
    }
  }
  return (
    <svg
      width={160}
      height={160}
      viewBox="0 0 160 160"
      fill="none"
      aria-hidden={true}
      className="mx-auto max-w-[min(100%,160px)] h-auto"
    >
      <rect x={32} y={44} width={96} height={96} rx={12} stroke={TEXT} strokeWidth={2} fill="none" />
      <rect x={52} y={32} width={14} height={18} rx={3} stroke={TEXT} strokeWidth={2} fill="none" />
      <rect x={94} y={32} width={14} height={18} rx={3} stroke={TEXT} strokeWidth={2} fill="none" />
      {cells}
      <circle cx={118} cy={118} r={14} fill={ACCENT} />
      <path
        d="M110 118 L114 122 L126 110"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/** Section 11 — mountain + flag */
export function SvgMountainFlag() {
  return (
    <svg
      width={200}
      height={160}
      viewBox="0 0 200 160"
      fill="none"
      aria-hidden={true}
      className="mx-auto max-w-[min(100%,200px)] h-auto"
    >
      <path d="M20 132 L52 72 L84 104 L120 44 L172 132" stroke={TEXT} strokeWidth={2} strokeLinejoin="round" fill="none" />
      <path d="M96 132 L132 72 L172 132" stroke={TEXT} strokeWidth={2} strokeLinejoin="round" fill="none" />
      <path
        d="M28 132 Q56 108 72 92 T108 56"
        stroke={ACCENT}
        strokeWidth={2.5}
        strokeLinecap="round"
        fill="none"
      />
      <line x1={108} y1={56} x2={108} y2={42} stroke={TEXT} strokeWidth={2} />
      <path d="M108 42 L126 50 L108 56 Z" fill={ACCENT} stroke={ACCENT} strokeWidth={1} />
    </svg>
  );
}
