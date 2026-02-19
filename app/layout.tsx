import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amged | Software Engineer",
  description:
    "Personal portfolio of Amged. Focused on software engineering, backend systems, and clean development practices.",
  metadataBase: new URL("https://amged-portfolio-gamma.vercel.app"),
  openGraph: {
    title: "Amged | Software Engineer",
    description:
      "Personal portfolio. Software engineering, backend, and disciplined progress.",
    url: "https://amged-portfolio-gamma.vercel.app",
    siteName: "Amged Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amged | Software Engineer",
    description:
      "Personal portfolio. Software engineering, backend, and disciplined progress.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
