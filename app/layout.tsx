import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOC Consulting | Επιχειρηματικές & Στρατηγικές Συμβουλές",
  description:
    "Η SOC Consulting παρέχει υπηρεσίες επιχειρηματικών, στρατηγικών, χρηματοοικονομικών και τεχνολογικών συμβούλων.",
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#20182f",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="el" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
