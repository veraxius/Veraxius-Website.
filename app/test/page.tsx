import type { Metadata } from "next";
import { TestContactForm } from "./test-contact-form";

export const metadata: Metadata = {
  title: "Test",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TestPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <TestContactForm />
    </main>
  );
}
