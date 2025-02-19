'use client'
import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from "./components/partials/Header";
// import "@/app/styles/globals.css";
import "../app/styles/globals.css"
import "../app/styles/style.css"
 
const inter = Inter({ subsets: ['latin'] })
 

 const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <style jsx global>{`
    html {
      font-family: ${inter.style.fontFamily};
    }
  `}</style>
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
    </>
  );
}
