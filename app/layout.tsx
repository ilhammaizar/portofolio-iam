import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Memuat font utama dan mengeksposnya sebagai custom property CSS.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Font monospace untuk label teknis dan teks bergaya kode.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata yang dipakai browser dan preview tautan saat situs dibagikan.
export const metadata: Metadata = {
  title: "IAM — Portofolio",
  description:
    "Portofolio Ilham Aulia Maizar, lulusan S1 Teknik Informatika Universitas Nasional dengan IPK 3.74 dan fokus pada pengembangan perangkat lunak, jaringan, serta administrasi sistem.",
  applicationName: "Portfolio Ilham Aulia Maizar",
  openGraph: {
    title: "Ilham Aulia Maizar — Software Developer",
    description:
      "Lulusan Teknik Informatika dengan pengalaman pengembangan web, network engineering, administrasi sistem, dan pelayanan pelanggan.",
    type: "website",
    locale: "id_ID",
  },
};

// Kerangka HTML global: menetapkan bahasa dokumen dan membagikan font ke semua halaman.
// Tetap Server Component agar metadata dikelola oleh App Router.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
