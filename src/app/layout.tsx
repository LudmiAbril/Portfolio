import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext"

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
      <ThemeProvider>
        <LangProvider>
          <body
            className={`${nunito.variable} antialiased box-border`}
          >
            {children}
          </body>
        </LangProvider>
      </ThemeProvider>
    </html>
  );
}
