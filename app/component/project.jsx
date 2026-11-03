"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, GitBranch } from "lucide-react";
import { projects } from "../portfolio-data";

// Membuat preview dekoratif untuk tiap proyek tanpa memerlukan gambar screenshot.
function ProjectPreview({ index, title }) {
  return (
    <div
      aria-label={`Preview visual proyek ${title}`}
      className={`project-preview project-preview-${index + 1}`}
      role="img"
    >
      {/* Mockup jendela browser: toolbar, garis konten, dan panel ilustrasi. */}
      <div aria-hidden="true" className="preview-window">
        <div className="preview-toolbar"><i /><i /><i /></div>
        <div className="preview-content">
          <span className="preview-line" />
          <span className="preview-line short" />
          <div className="preview-panels"><span /><span /><span /></div>
        </div>
      </div>
      <span className="project-preview-label">PROJECT / 0{index + 1}</span>
    </div>
  );
}

// Menampilkan daftar proyek dari portfolio-data dalam kartu yang interaktif.
export default function Project() {
  return (
    <section aria-labelledby="projects-title" className="section-block section-shell" id="proyek">
      {/* Judul dan pengantar bagian proyek; animasi berjalan saat masuk viewport. */}
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
      >
        <span className="eyebrow">02 / Proyek pilihan</span>
        <h2 id="projects-title">
          Beberapa hal yang <span className="gradient-text">saya bangun.</span>
        </h2>
        <p>
          Eksplorasi singkat tentang produk dan pengalaman digital. Tautan di
          bawah adalah data contoh yang bisa Anda ganti.
        </p>
      </motion.div>

      {/* Membuat satu kartu untuk setiap proyek, beserta efek masuk dan hover. */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="glass-card project-card"
            initial={{ opacity: 0, y: 28 }}
            key={project.number}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.99 }}
          >
            <ProjectPreview index={index} title={project.title} />
            <div className="project-content">
              {/* Informasi ringkas proyek: kategori, nomor urut, judul, dan deskripsi. */}
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.number} / 03</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {/* Menampilkan teknologi yang dipakai sebagai label terpisah. */}
              <div aria-label="Teknologi yang digunakan" className="tech-list">
                {project.stack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              {/* Tautan menuju source code dan demo langsung proyek. */}
              <div className="project-links">
                <a href={project.githubUrl} rel="noreferrer" target="_blank">
                  <GitBranch aria-hidden="true" size={15} /> GitHub
                  <ArrowUpRight aria-hidden="true" size={13} />
                </a>
                <a href={project.demoUrl} rel="noreferrer" target="_blank">
                  <ExternalLink aria-hidden="true" size={15} /> Live Demo
                  <ArrowUpRight aria-hidden="true" size={13} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
