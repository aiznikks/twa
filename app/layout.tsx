import type { Metadata, Viewport } from "next";
import { Sofia_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const sofia = Sofia_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ui",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Two Words Away — A table worth sitting at.",
    template: "%s — Two Words Away",
  },
  description:
    "Curated dinners and coffees with founders, investors, operators, and engineers who take the evening seriously.",
  openGraph: {
    title: "Two Words Away",
    description:
      "Curated dinners and coffees for people who take their career seriously.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f3f0ee",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sofia.variable}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
