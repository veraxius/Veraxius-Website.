/** VASP page palette — the Veraxius app's exact dark theme values */
export const BG = "#131316";
export const ACCENT = "#FFB84D";
export const TEXT = "#f5f5f7";
export const MUTED = "#98989d";

/** Minimal, subtle amber/blue mesh baked into the flat BG — same recipe as
 * the app's vx-home-surface, at low enough opacity to read as texture. */
export const MESH_BG =
  "radial-gradient(ellipse 70% 55% at 12% -15%, rgba(255, 184, 77, 0.05) 0%, transparent 60%), " +
  "radial-gradient(ellipse 60% 45% at 92% 105%, rgba(77, 163, 255, 0.04) 0%, transparent 60%), " +
  BG;
