"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowDownToLine, ArrowUpRight, Sparkles } from "lucide-react";
import { profile, socialLinks } from "../portfolio-data";

// Bagian pembuka portofolio: perkenalan, aksi utama, sosial, dan visual profil.
export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState(profile.roles[0]);
  const [deleting, setDeleting] = useState(false);

  // Mengatur teks profesi yang berganti seperti efek mengetik; animasi berhenti
  // bila pengunjung meminta pengurangan gerakan di pengaturan perangkat.
  useEffect(() => {
    const roles = profile.roles;
    const currentRole = roles[roleIndex];
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) return;

    let delay = deleting ? 45 : 85;
    let timeout;

    if (!deleting && typedRole === currentRole) {
      delay = 1400;
      timeout = window.setTimeout(() => setDeleting(true), delay);
    } else if (deleting && typedRole.length === 0) {
      timeout = window.setTimeout(() => {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      }, 250);
    } else {
      timeout = window.setTimeout(() => {
        setTypedRole(
          deleting
            ? currentRole.slice(0, typedRole.length - 1)
            : currentRole.slice(0, typedRole.length + 1),
        );
      }, delay);
    }

    return () => window.clearTimeout(timeout);
  }, [deleting, roleIndex, typedRole]);

  return (
    <section aria-labelledby="hero-title" className="hero section-shell" id="beranda">
      {/* Salinan utama: status ketersediaan, nama, profesi, dan deskripsi. */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="hero-copy"
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="availability">
          <span aria-hidden="true" className="status-dot" />
          {profile.availability}
        </p>
        <h1 id="hero-title">
          Halo, saya <span className="gradient-text">{profile.name}</span>
        </h1>
        <p aria-live="polite" className="hero-role">
          {typedRole}
          <span aria-hidden="true" className="typing-cursor" />
        </p>
        <p className="hero-description">{profile.description}</p>

        {/* Tautan untuk mengunduh CV dan membuka bagian kontak. */}
        <div className="hero-actions">
          <motion.a
            className="button button-primary"
            download
            href={profile.cvUrl}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Download CV <ArrowDownToLine aria-hidden="true" size={17} />
          </motion.a>
          <motion.a
            className="button button-secondary"
            href="#kontak"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Me <ArrowUpRight aria-hidden="true" size={17} />
          </motion.a>
        </div>

        {/* Ikon sosial dibangkitkan dari daftar akun pada data profil. */}
        <div aria-label="Tautan media sosial" className="hero-socials">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <motion.a
              aria-label={`Kunjungi ${name}`}
              className="social-icon"
              href={href}
              key={name}
              rel="noreferrer"
              target="_blank"
              whileHover={{ y: -4, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
            >
              <Icon aria-hidden="true" size={17} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Area visual menampilkan foto profil atau inisial sebagai fallback. */}
      <motion.div
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ delay: 0.12, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <div aria-label={`Foto profil ${profile.name}`} className="profile-frame" role="img">
          {/* Ganti profileImageUrl di portfolio-data.ts dengan path foto lokal Anda. */}
          {profile.profileImageUrl ? (
            <Image
              alt={`Foto profil ${profile.name}`}
              className="profile-photo"
              fill
              priority
              sizes="(max-width: 640px) 90vw, (max-width: 900px) 40vw, 430px"
              src={profile.profileImageUrl}
            />
          ) : (
            <span aria-hidden="true" className="profile-placeholder">
              {profile.initials}
            </span>
          )}
          <div className="profile-caption">
            <span>CREATIVE PORTFOLIO</span>
            <span>2026</span>
          </div>
        </div>
        {/* Badge dekoratif dan tautan untuk lanjut ke bagian Tentang. */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          className="floating-badge"
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles aria-hidden="true" color="#c4b5fd" size={16} />
          <span>Membangun ide jadi nyata</span>
        </motion.div>
        <a aria-label="Lihat bagian tentang saya" className="hero-scroll" href="#tentang">
          <span>SCROLL UNTUK MENJELAJAH</span>
          <ArrowDown aria-hidden="true" size={14} />
        </a>
      </motion.div>
    </section>
  );
}
