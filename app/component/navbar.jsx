"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "../portfolio-data";

// Tujuan tautan navigasi digunakan ulang pada menu desktop dan mobile.
const navigation = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Proyek", href: "#proyek" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Saat drawer terbuka, kunci scroll halaman dan dukung tombol Escape untuk
  // menutupnya; cleanup menghapus class dan listener saat komponen dilepas.
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    function closeOnEscape(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  // Tutup drawer bila ukuran layar berubah ke desktop, tempat menu mobile tidak dipakai.
  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 900px)");
    const closeOnDesktop = (event) => {
      if (event.matches) setMenuOpen(false);
    };

    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <>
      {/* Header tetap terlihat saat scroll dan memuat brand, tautan, serta CTA. */}
      <header className="site-header">
        <div className="header-inner">
          <a
            aria-label={`${profile.name}, kembali ke beranda`}
            className="wordmark"
            href="#beranda"
            onClick={() => setMenuOpen(false)}
          >
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

          <nav aria-label="Navigasi utama" className="desktop-nav">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="header-cta" href="#kontak">
            Mari ngobrol <ArrowUpRight aria-hidden="true" size={15} />
          </a>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
          </button>
        </div>
      </header>

      {/* Drawer hanya dirender saat dibuka dan dianimasikan saat masuk/keluar. */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            animate={{ opacity: 1, y: 0 }}
            aria-label="Navigasi mobile"
            className="mobile-menu"
            id="mobile-navigation"
            initial={{ opacity: 0, y: "-4%" }}
            exit={{ opacity: 0, y: "-4%" }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mobile-menu-label">Jelajahi portofolio</span>
            <div className="mobile-nav-links">
              {navigation.map((item, index) => (
                <a
                  href={item.href}
                  key={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="mobile-nav-index">0{index + 1}</span>
                  <span>{item.label}</span>
                  <ArrowUpRight aria-hidden="true" size={24} />
                </a>
              ))}
            </div>
            <p className="mobile-menu-footer">
              Portofolio pribadi · {profile.location}
            </p>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
