import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIM Program | Veraxius AIM Signal Operators Program",
  description:
    "A 6-month operator program where you generate integrity, break it, and prove it inside a live system.",
};

export default function AimProgramLayout({ children }: { children: React.ReactNode }) {
  return children;
}
