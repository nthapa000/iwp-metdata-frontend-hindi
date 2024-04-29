import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "India Water Portal - Met Data For Everyone",
  description: "Visualize and Analyze the data collected over 100 years for more than 12 meterological parameters",
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
