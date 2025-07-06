import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jenniffer Lino Ferreira - Desenvolvedora Full Stack",
  description:
    "Portfólio pessoal de Jenniffer Lino Ferreira, desenvolvedora full stack especializada em React, Node.js e tecnologias modernas.",
  keywords: [
    "desenvolvedor",
    "portfolio",
    "react",
    "nextjs",
    "typescript",
    "full stack",
  ],
  authors: [{ name: "Jenniffer Lino Ferreira" }],
  openGraph: {
    title: "Jenniffer Lino Ferreira - Desenvolvedora Full Stack",
    description: "Portfólio pessoal mostrando meu trabalho e experiência",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={montserrat.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="portfolio-theme"
        >
          <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
