"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import { profile, skills } from "../portfolio-data";

// Menampilkan ringkasan profil dan daftar skill dari data portfolio-data.
export default function About() {
  return (
    <section
      aria-labelledby="about-title"
      className="section-block section-shell"
      id="tentang"
    >
      {/* Judul dan pengantar bagian Tentang, dianimasikan saat masuk viewport. */}
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
      >
        <span className="eyebrow">01 / Tentang saya</span>
        <h2 id="about-title">
          Informatika, jaringan, dan sistem untuk <span className="gradient-text">solusi digital.</span>
        </h2>
        <p>
          Lulusan S1 Teknik Informatika Universitas Nasional dengan IPK 3.74,
          berpengalaman di bidang pengembangan perangkat lunak, jaringan, dan
          administrasi sistem.
        </p>
      </motion.div>

      <div className="about-grid">
        {/* Kartu biografi singkat dan fakta lokasi/fokus pemilik portofolio. */}
        <motion.article
          className="glass-card about-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <h3>Profil profesional</h3>
          <p>
            Berpengalaman teknis dalam mengelola infrastruktur jaringan lokal
            serta menangani troubleshooting hardware/software saat magang
            sebagai Network Engineer di kantor kelurahan. Memiliki latar
            belakang pelayanan pelanggan dan pengelolaan transaksi pembayaran
            di PT Pos Indonesia dengan tingkat akurasi yang tinggi. Membangun
            aplikasi web interaktif, berorientasi pada detail, dan siap
            memberikan kontribusi profesional di industri IT.
          </p>
          <div className="about-facts">
            {/* Fakta profil dibuat terpisah agar mudah ditambah atau diubah. */}
            <div className="about-fact">
              <span>Lokasi</span>
              <strong><MapPin aria-hidden="true" size={13} /> {profile.location}</strong>
            </div>
            <div className="about-fact">
              <span>Pendidikan</span>
              <strong><Sparkles aria-hidden="true" size={13} /> S1 Informatika · IPK 3.74</strong>
            </div>
          </div>
        </motion.article>

        {/* Kartu skill; setiap item mengambil nama dan ikon dari data skill. */}
        <motion.article
          className="glass-card skills-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.1, duration: 0.55 }}
        >
          <h3>Mata kuliah relevan</h3>
          <div className="skills-grid">
            {skills.map(({ name, icon: Icon }, index) => (
              <motion.div
                className="skill-item"
                key={name}
                whileHover={{ y: -3, borderColor: "rgba(167,139,250,.55)" }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon aria-hidden="true" size={17} />
                <span>{name}</span>
                <span className="sr-only">Skill {index + 1}</span>
              </motion.div>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
