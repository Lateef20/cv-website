import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FooterWrapper from "@/components/FooterWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lateef Jawando",
  openGraph: {
    title: "Lateef Jawando",
    type: "website",
    url: "https://lateefjawando.com",
    images: [{ url: "https://lateefjawando.com/images/lateef-profile.jpg" }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6">
          {children}
        </main>
        <FooterWrapper />
      </body>
    </html>
  );
}
