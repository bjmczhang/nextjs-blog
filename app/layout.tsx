import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Markdown Blog",
  description:
    "Benjamin Zhang's personal blog built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="text-black bg-white">
      <body className="min-h-screen antialiased max-w-3xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto leading-7">
        <main className="w-full">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
