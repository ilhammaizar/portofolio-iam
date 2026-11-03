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
          Senang membuat hal digital terasa <span className="gradient-text">lebih manusiawi.</span>
        </h2>
        <p>
          Perpaduan rasa ingin tahu, desain yang matang, dan kode yang mudah
          dirawat adalah cara saya mengubah ide menjadi pengalaman.
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
          <h3>Sedikit tentang saya</h3>
          <p>
            Halo, saya {profile.name}, seorang {profile.title.toLowerCase()} yang
            senang mengerjakan produk digital dari ide awal hingga detail
            interaksi. Saya percaya website yang baik harus terasa cepat,
            inklusif, dan menyenangkan digunakan.
          </p>
          <div className="about-facts">
            {/* Fakta profil dibuat terpisah agar mudah ditambah atau diubah. */}
            <div className="about-fact">
              <span>Lokasi</span>
              <strong><MapPin aria-hidden="true" size={13} /> {profile.location}</strong>
            </div>
            <div className="about-fact">
              <span>Fokus</span>
              <strong><Sparkles aria-hidden="true" size={13} /> Web experience</strong>
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
          <h3>Tools yang saya gunakan</h3>
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
