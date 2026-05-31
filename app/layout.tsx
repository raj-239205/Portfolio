import type { Metadata } from "next";
import { Orbitron, Poppins } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rajveer Choudhary — AI/ML Engineer & Python Developer",
  description: "3rd Year Engineering Student passionate about AI, Machine Learning, and Python development. Building intelligent systems for real-world impact.",
  keywords: ["Rajveer Choudhary", "AI Engineer", "ML Engineer", "Python Developer", "Portfolio", "Solo Leveling portfolio"],
  authors: [{ name: "Rajveer Choudhary" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${poppins.variable} scroll-smooth`}>
      <body className="bg-bg-primary text-text-primary font-body antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
