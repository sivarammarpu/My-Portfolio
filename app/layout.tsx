import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "SIVIN · Sivaram Marpu – Engineering Student & Aspiring Full-Stack / Android Developer",
  description:
    "Portfolio of Sivaram Marpu (SIVIN), an engineering student and aspiring full-stack / Android developer from India. I build simple, practical apps while still in college — learning fast, shipping faster.",
  openGraph: {
    title: "SIVIN · Sivaram Marpu – Beginner, But Serious",
    description:
      "I build simple, practical Android and web apps while still in college. Open for internships, beginner roles, and real-world projects.",
    url: "https://your-deployment-url.example.com",
    type: "website",
    locale: "en_IN",
    siteName: "SIVIN · Sivaram Marpu"
  },
  metadataBase: new URL("https://your-deployment-url.example.com"),
  authors: [{ name: "Sivaram Marpu" }]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-sivin-bg text-slate-50 antialiased">
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-hero-gradient opacity-80" />
          <div className="pointer-events-none fixed inset-0 -z-20 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
          {children}
        </div>
      </body>
    </html>
  );
}


