"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Camera, GitBranch, Mail, Send } from "lucide-react";
import { profile, socialLinks } from "../portfolio-data";

const socialIcons = {
  GitHub: GitBranch,
  LinkedIn: BriefcaseBusiness,
  Instagram: Camera,
};

// Membuat tautan Gmail dengan penerima dan isi opsional yang sudah diisi.
function getGmailComposeUrl({ subject = "", body = "" } = {}) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: profile.email,
    su: subject,
    body,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}

// Mengubah data formulir menjadi email baru di aplikasi email pengunjung.
function handleContactSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "");
  const message = String(formData.get("message") ?? "");
  const subject = `Pesan portofolio dari ${name}`;
  const body = `Nama: ${name}\nEmail: ${email}\n\n${message}`;

  // Buka Gmail dengan penerima, subjek, dan pesan yang diisi dari formulir.
  window.location.href = getGmailComposeUrl({ subject, body });
}

// Menampilkan informasi kontak, tautan sosial, dan formulir pesan.
export default function Contact() {
  return (
    <section
      aria-labelledby="contact-title"
      className="section-block section-shell"
      id="kontak"
    >
      {/* Judul dan penjelasan singkat tujuan bagian kontak. */}
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
      >
        <span className="eyebrow">03 / Mari terhubung</span>
        <h2 id="contact-title">
          Punya ide? Mari kita <span className="gradient-text">wujudkan.</span>
        </h2>
        <p>
          Ceritakan apa yang sedang Anda pikirkan. Saya terbuka untuk
          kolaborasi, proyek menarik, atau sekadar obrolan.
        </p>
      </motion.div>

      <div className="contact-grid">
        {/* Kartu berisi email dan akun sosial yang dapat dihubungi. */}
        <motion.aside
          className="glass-card contact-info"
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <span className="eyebrow">Kontak & sosial</span>
          <h3>Selalu senang berkenalan.</h3>
          <p>
            Kirim email atau temukan saya di platform sosial pilihan Anda.
          </p>
          <div className="contact-links">
            <a
              aria-label={`Kirim email ke ${profile.email}`}
              href={getGmailComposeUrl()}
              rel="noreferrer"
              target="_blank"
            >
              <Mail aria-hidden="true" size={17} /> {profile.email}
              <ArrowUpRight aria-hidden="true" className="contact-link-arrow" size={14} />
            </a>
            {socialLinks.map(({ name, href }) => {
              const Icon = socialIcons[name];
              return (
                <a href={href} key={name} rel="noreferrer" target="_blank">
                  <Icon aria-hidden="true" size={17} /> {name}
                  <ArrowUpRight aria-hidden="true" className="contact-link-arrow" size={14} />
                </a>
              );
            })}
          </div>
        </motion.aside>

        {/* Formulir memvalidasi nama, email, dan pesan sebelum membuka email. */}
        <motion.form
          className="glass-card contact-form"
          initial={{ opacity: 0, x: 18 }}
          onSubmit={handleContactSubmit}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.08, duration: 0.55 }}
        >
          {/* Field wajib untuk data pengirim dan isi pesan. */}
          <label>
            Nama
            <input autoComplete="name" name="name" placeholder="Nama Anda" required />
          </label>
          <label>
            Email
            <input
              autoComplete="email"
              name="email"
              placeholder="nama@email.com"
              required
              type="email"
            />
          </label>
          <label>
            Pesan
            <textarea
              name="message"
              placeholder="Ceritakan sedikit tentang ide Anda..."
              required
              rows={4}
            />
          </label>
          <motion.button
            className="button button-primary"
            type="submit"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            Kirim pesan <Send aria-hidden="true" size={16} />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
