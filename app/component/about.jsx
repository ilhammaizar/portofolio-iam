"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import { education, experience, profile, skills } from "../portfolio-data";

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
        <p>{profile.description}</p>
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
            Fokus pada pengembangan perangkat lunak, network engineering, dan
            administrasi sistem. Menggabungkan pengalaman teknis dengan
            pelayanan pelanggan yang akurat dan solutif.
          </p>
          <div className="about-facts">
            {/* Fakta profil dibuat terpisah agar mudah ditambah atau diubah. */}
            <div className="about-fact">
              <span>Lokasi</span>
              <strong><MapPin aria-hidden="true" size={13} /> {profile.location}</strong>
            </div>
            <div className="about-fact">
              <span>Pendidikan</span>
              <strong><Sparkles aria-hidden="true" size={13} /> {education.degree} · IPK {education.gpa.split(" /")[0]}</strong>
            </div>
          </div>
        </motion.article>

        <motion.article
          className="glass-card education-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.1, duration: 0.55 }}
        >
          <h3>Pendidikan</h3>
          <h4>{education.institution} — {education.degree}</h4>
          <p>{education.status} · IPK: {education.gpa}</p>
        </motion.article>
      </div>

      <div className="resume-section">
        <h3 className="resume-section-title">Pengalaman Kerja & Magang</h3>
        <div className="resume-grid">
          {experience.map((job, index) => (
            <motion.article
              className="glass-card resume-card"
              key={job.organization}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
            >
              <h4>{job.organization}</h4>
              <p className="resume-role">{job.role}</p>
              <ul>
                {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="resume-section">
        <h3 className="resume-section-title">Keterampilan</h3>
        <div className="resume-grid skills-groups">
          {skills.map(({ category, icon: Icon, items }, index) => (
            <motion.article
              className="glass-card skills-card"
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <h4><Icon aria-hidden="true" size={17} /> {category}</h4>
              <div className="skills-grid">
                {items.map((item) => <span className="skill-item" key={item}>{item}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
