import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientOnlyComponent from "@/HOCs/LennisHocs";

/* const inter = Inter({ subsets: ["latin"] }); */

const font = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

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
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
