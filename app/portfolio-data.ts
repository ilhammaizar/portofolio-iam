import {
  Blocks,
  BriefcaseBusiness,
  Camera,
  Code2,
  Database,
  GitBranch,
  MousePointer2,
  Network,
  ShieldCheck,
} from "lucide-react";

// Identitas utama situs yang dipakai ulang oleh hero, navigasi, kontak, dan footer.
export const profile = {
  name: "Ilham Aulia Maizar",
  initials: "IAM",
  title: "Software Developer",
  email: "ilham.maizar2506@gmail.com",
  location: "Indonesia",
  availability: "Terbuka untuk peluang baru",
  cvUrl: "/CV-%20Ilham%20Aulia%20Maizar.pdf",
  profileImageUrl: "/Foto-Ilham.jpg",
  description:
    "Lulusan S1 Teknik Informatika Universitas Nasional dengan IPK 3.74, berfokus pada pengembangan perangkat lunak, jaringan komputer, dan administrasi sistem.",
  roles: ["Software Developer", "Network Engineer", "System Administrator"],
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

// Mata kuliah relevan dan ikon yang ditampilkan pada bagian Tentang.
export const skills = [
  { name: "Pemrograman Web", icon: Code2 },
  { name: "Rekayasa Perangkat Lunak", icon: Blocks },
  { name: "Jaringan Komputer", icon: Network },
  { name: "Basis Data", icon: Database },
  { name: "Keamanan Sistem", icon: ShieldCheck },
  { name: "Interaksi Manusia dan Komputer", icon: MousePointer2 },
];

// Akun sosial dipakai pada ikon di hero dan daftar tautan di bagian Kontak.
// Ganti URL contoh dengan alamat profil Anda.
export const socialLinks = [
  { name: "GitHub", href: "https://github.com/ilhammaizar", icon: GitBranch },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ilhamauliamaizar/", icon: BriefcaseBusiness },
  { name: "Instagram", href: "https://www.instagram.com/ilhmauliamzr", icon: Camera },
];
