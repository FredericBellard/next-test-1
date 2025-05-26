import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mon appli Next",
  description: "Créé par Fred",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <button className="bg-amber-700 m-4 p-4 rounded-2xl text-center font-bold">
          <Link href={"/"}>
            Retour à l&apos;accueil
          </Link>
        </button>
        {children}
      </body>
    </html>
  );
}
