import Image from "next/image";
import About from "./component/about";
import Contact from "./component/contact";
import Hero from "./component/hero";
import Navbar from "./component/navbar";
import Project from "./component/project";
import { profile } from "./portfolio-data";

// Jumlah jalur dan logo per kelompok untuk mengisi latar animasi di seluruh layar.
const logoRows = Array.from({ length: 10 }, (_, index) => index);
const logosPerGroup = Array.from({ length: 8 }, (_, index) => index);

// Membuat logo background berulang; dua grup identik menjaga pergeseran tiap baris tetap mulus.
function LogoBackground() {
  return (
    <div aria-hidden="true" className="logo-background">
      {logoRows.map((row) => (
        <div className="logo-row" key={row}>
          <div className="logo-track">
            {[0, 1].map((group) => (
              <div className="logo-group" key={group}>
                {logosPerGroup.map((logo) => (
                  <Image
                    alt=""
                    className="background-logo"
                    height={77}
                    key={logo}
                    src="/IAM-logo.png"
                    width={90}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Latar dekoratif ditempatkan terpisah dari konten agar tetap di belakang saat scroll. */}
      <LogoBackground />
      <div className="page-shell">
        <Navbar />
        <div aria-hidden="true" className="ambient-glow" />
        {/* Urutan section utama pada halaman portofolio. */}
        <main>
          <Hero />
          <About />
          <Project />
          <Contact />
        </main>
        {/* Footer mengulang brand dan menyediakan tautan kembali ke bagian awal. */}
        <footer className="site-footer section-shell">
          <a aria-label={`${profile.name}, kembali ke beranda`} className="wordmark" href="#beranda">
            <Image
              alt=""
              aria-hidden="true"
              className="wordmark-logo"
              height={116}
              src="/IAM-logo.png"
              width={136}
            />
            <span>{profile.name}</span>
          </a>
          <span>© 2026 · Dibuat dengan rasa ingin tahu.</span>
          <a className="footer-credit" href="#beranda">Kembali ke atas ↑</a>
        </footer>
      </div>
    </>
  );
}
