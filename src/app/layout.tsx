import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luis Agreda | Front-End Developer",
  description:
    "Explore my projects and skills as a frontend developer specialized in Next.js and Tailwind CSS. Connect with me for collaborations or opportunities.",
  creator: "Luis Agreda",
  openGraph: {
    title: "Luis Agreda | Front-End Developer",
    description:
      "Explore my projects and skills as a frontend developer specialized in Next.js and Tailwind CSS. Connect with me for collaborations or opportunities.",
    type: "website",
    url: "https://luisagreda-portfolio.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
