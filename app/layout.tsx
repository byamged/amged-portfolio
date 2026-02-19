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
  title: "Amged | Software Engineer & CS Applicant (Germany)",
  description:
    "Amged is a high school student preparing for Computer Science studies in Germany, focused on Node.js, backend fundamentals, and disciplined engineering growth.",
  keywords: [
    "Amged",
    "Software Engineer",
    "Computer Science Germany",
    "Node.js Developer",
    "CS Applicant",
    "Backend Developer Student"
  ],
  authors: [{ name: "Amged" }],
  creator: "Amged",
  metadataBase: new URL("https://amged-portfolio.vercel.app"), // هنعدلها بعد النشر
  openGraph: {
    title: "Amged | Software Engineer & CS Applicant",
    description:
      "Future Computer Science student in Germany focused on backend development and engineering fundamentals.",
    type: "website",
    locale: "en_US",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
