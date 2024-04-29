import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "भारत जल पोर्टल - सभी के लिए मौसम संबंधी डेटा",
  description: "12 से अधिक मौसम संबंधी मापदंडों के लिए 100 वर्षों में एकत्र किए गए डेटा की कल्पना और विश्लेषण करें",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      <Suspense>
        {children}
        </Suspense>
      <Footer />
      </body>
    </html>
  );
}
