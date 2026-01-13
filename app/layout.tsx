import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pragati Distributors - Premium Kitchen Appliances",
  description: "Your trusted partner for premium kitchen appliances. Quality products, exceptional service. Explore our wide range of mixer grinders and kitchen solutions.",
  keywords: "kitchen appliances, mixer grinders, distributors, Pragati Distributors, wholesale kitchen appliances",
  openGraph: {
    title: "Pragati Distributors - Premium Kitchen Appliances",
    description: "Your trusted partner for premium kitchen appliances",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
