import type { Metadata } from "next";
import {
  IBM_Plex_Sans,
  Kode_Mono,
  Space_Grotesk,
  Caveat,
  Bebas_Neue,
  Lora,
} from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibmPlex",
  subsets: ["latin"],
});
const kodeMono = Kode_Mono({
  variable: "--font-kodeMono",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-spaceGrotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-Caveat",
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-BebasNeue",
  weight: "400",
});

const lora = Lora({
  variable: "--font-Lora",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Human-Like AI Interviewer",
  description: "Human-Like AI Interviewer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${kodeMono.variable} ${spaceGrotesk.variable} ${caveat.variable} ${bebasNeue.variable} ${lora.variable} antialiased w-full h-full max-w-[88rem] mx-auto px-5 md:px-10`}
      >
        {children}
        <Toaster position="top-center" richColors closeButton theme="light" />
      </body>
    </html>
  );
}
