import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const script = Mrs_Saint_Delafield({
  variable: "--font-mrs",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Victoria Candle — Velas aromáticas artesanais",
  description:
    "Velas aromáticas, wax melts e aromatizadores feitos à mão. Uma vela aromática é o melhor remédio para desacelerar.",
  openGraph: {
    title: "Victoria Candle",
    description: "Velas aromáticas artesanais feitas à mão.",
    images: ["/images/signature-tampa-dourada.jpg"],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${serif.variable} ${sans.variable} ${script.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
