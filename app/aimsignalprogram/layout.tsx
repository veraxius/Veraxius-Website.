import type { Metadata } from "next";
import { routeMeta } from "@/lib/seo";

export const metadata: Metadata = routeMeta(
  "/aimsignalprogram",
  "AIM Signal Program | Veraxius",
  "A 6-month operator program where you generate integrity, break it, and prove it inside a live system.",
);

export default function AimSignalProgramLayout({ children }: { children: React.ReactNode }) {
  return children;
}
