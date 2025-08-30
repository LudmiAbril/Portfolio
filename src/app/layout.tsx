import type { Metadata } from "next";
import { Montserrat, Nunito, Raleway } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext"

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

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
            className={`${nunito.variable} ${montserrat.variable} ${raleway.variable} antialiased box-border`}
          >
            {children}
          </body>
        </LangProvider>
      </ThemeProvider>
    </html>
  );
}
