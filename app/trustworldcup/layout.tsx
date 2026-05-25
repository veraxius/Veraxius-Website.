import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust World Cup™ | Founding Trust Operatives",
  description:
    "Five hundred founding operatives. One World Cup. Millions of signals. Join the experiment.",
};

export default function TrustWorldCupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
