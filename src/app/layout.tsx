import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LanguageContext";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ludmila Pereyra - Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LangProvider>
        <body
          className={`${nunito.variable} antialiased box-border`}
        >
          {children}
        </body>
      </LangProvider>
    </html>
  );
}
