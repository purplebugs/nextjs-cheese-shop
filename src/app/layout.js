import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Image from "next/image";
import beams from "@/public/beams.jpg";

export const metadata = {
  title: "🧀 The Purple Cheese Shop 🛍️",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col justify-top overflow-hidden bg-gray-50 py-6 sm:py-12">
          <Image
            src={beams}
            alt="Background beams"
            className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "100%",
              height: "auto",
            }}
          />

          <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <div className="mx-auto max-w-md">
              <header className="pb-8">
                <h1 className="h-6">🧀 The Purple Cheese Shop 🛍️</h1>
              </header>
              <main>{children}</main>
              <footer className="pt-8">
                <p>© Copyright 2050 by nobody. All rights reversed.</p>
              </footer>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
