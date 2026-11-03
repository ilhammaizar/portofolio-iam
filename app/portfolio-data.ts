import {
  Braces,
  BriefcaseBusiness,
  Camera,
  Code2,
  GitBranch,
  Palette,
  Wind,
} from "lucide-react";

// Identitas utama situs yang dipakai ulang oleh hero, navigasi, kontak, dan footer.
export const profile = {
  name: "Ilham Aulia Maizar",
  initials: "IAM",
  title: "Creative Developer",
  email: "ilham.maizar2506@gmail.com",
  location: "Indonesia",
  availability: "Terbuka untuk peluang baru",
  cvUrl: "/CV-%20Ilham%20Aulia%20Maizar.pdf",
  profileImageUrl: "/Foto-Ilham.jpg",
  description:
    "Saya merancang dan membangun pengalaman digital yang memadukan desain yang thoughtful dengan teknologi yang tepat.",
  roles: ["Frontend Developer", "UI Engineer", "Creative Coder"],
};

// Konten kartu proyek: nomor, kategori, deskripsi, teknologi, dan tautan.
// Ganti data contoh ini dengan proyek milik Anda.
export const projects = [
  {
    number: "01",
    title: "Lumina Finance",
    category: "Dashboard keuangan",
    description:
      "Dashboard finansial yang membantu pengguna memahami arus kas lewat visualisasi data yang jernih.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/ilhammaizar",
    demoUrl: "https://example.com/",
  },
  {
    number: "02",
    title: "Forma Studio",
    category: "Website kreatif",
    description:
      "Pengalaman web editorial untuk studio kreatif dengan interaksi lembut dan tipografi ekspresif.",
    stack: ["React", "Framer Motion", "CSS"],
    githubUrl: "https://github.com/ilhammaizar  ",
    demoUrl: "https://example.com/",
  },
  {
    number: "03",
    title: "Orbit Notes",
    category: "Produktivitas",
    description:
      "Ruang kerja digital yang sederhana untuk menyimpan ide, menghubungkan catatan, dan fokus berkarya.",
    stack: ["Next.js", "Supabase", "UI Design"],
    githubUrl: "https://github.com/ilhammaizar",
    demoUrl: "https://example.com/",
  },
];

// Nama keahlian dan ikon yang ditampilkan pada kartu Tools di bagian Tentang.
export const skills = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Braces },
  { name: "Tailwind CSS", icon: Wind },
  { name: "TypeScript", icon: Code2 },
  { name: "Figma", icon: Palette },
  { name: "UI Design", icon: Palette },
];

// Akun sosial dipakai pada ikon di hero dan daftar tautan di bagian Kontak.
// Ganti URL contoh dengan alamat profil Anda.
export const socialLinks = [
  { name: "GitHub", href: "https://github.com/ilhammaizar", icon: GitBranch },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ilhamauliamaizar/", icon: BriefcaseBusiness },
  { name: "Instagram", href: "https://www.instagram.com/ilhmauliamzr", icon: Camera },
];
