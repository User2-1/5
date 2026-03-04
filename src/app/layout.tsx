import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Leder Stoffe | European Automotive Interior Materials",
  description:
    "European partner for automotive interior materials. Reliable PU & PVC synthetic leather stocked in Austria and delivered across Europe.",
};

export const viewport: Viewport = {
  themeColor: "#0F1A28",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
