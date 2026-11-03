import {
  Blocks,
  BriefcaseBusiness,
  Camera,
  Code2,
  GitBranch,
  Laptop,
  Network,
  Wrench,
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
    "Lulusan S1 Teknik Informatika dari Universitas Nasional dengan IPK 3.74 yang memiliki keahlian dalam Pengembangan Perangkat Lunak, Network Engineering, dan Administrasi Sistem. Berpengalaman teknis dalam mengelola infrastruktur jaringan lokal serta penanganan troubleshooting hardware/software saat magang sebagai Network Engineer di kantor kelurahan. Memiliki latar belakang pelayanan pelanggan dan pengelolaan transaksi pembayaran di PT Pos Indonesia dengan tingkat akurasi yang tinggi. Membangun aplikasi web interaktif, berorientasi pada detail, dan siap memberikan kontribusi profesional di industri IT.",
  roles: ["Software Developer", "Network Engineer", "System Administrator"],
};

export const education = {
  institution: "Universitas Nasional",
  degree: "S1 Teknik Informatika",
  status: "Lulus",
  gpa: "3.74 / 4.00",
};

export const experience = [
  {
    organization: "Kantor Kelurahan",
    role: "Network Engineer (Magang)",
    highlights: [
      "Mengonfigurasi, memelihara, dan memantau stabilitas jaringan lokal (LAN/WLAN) untuk mendukung kelancaran pelayanan publik.",
      "Melakukan pemeliharaan dan troubleshooting rutin perangkat keras (PC/Printer), instalasi sistem operasi, serta perangkat lunak pendukung kerja pegawai.",
      "Mengelola pengabelan jaringan, termasuk crimping kabel UTP, patching, dan pengujian koneksi internet.",
      "Membantu dokumentasi inventarisasi aset TI serta pemetaan topologi jaringan internal kelurahan.",
    ],
  },
  {
    organization: "PT Pos Indonesia",
    role: "Pelayanan Pembayaran / Customer Service",
    highlights: [
      "Melayani transaksi pembayaran tagihan harian (PLN, PDAM, BPJS, multifinance, dan lainnya) serta pengiriman uang pelanggan secara akurat.",
      "Mengoperasikan sistem transaksi internal perusahaan serta menyusun rekapitulasi laporan kas dan keuangan harian.",
      "Memberikan pelayanan prima dan menangani keluhan serta pertanyaan pelanggan dengan ramah dan solutif.",
    ],
  },
];

// Konten proyek akademik yang ditampilkan pada bagian Proyek.
export const projects = [
  {
    number: "01",
    title: "Pengembangan Website Toko Online Sederhana",
    category: "Proyek akademik",
    description:
      "Membangun aplikasi web toko online dari tahap perancangan hingga implementasi, dengan basis data untuk mengelola katalog produk, keranjang belanja, dan formulir pemesanan.",
    stack: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
    highlights: [
      "Mengembangkan aplikasi web toko online dari tahap perancangan hingga implementasi.",
      "Mengintegrasikan MySQL untuk katalog produk, shopping cart, dan formulir pemesanan.",
    ],
  },
];

// Keterampilan dikelompokkan sesuai kategori pada ringkasan profil.
export const skills = [
  {
    category: "Mata Kuliah Relevan",
    icon: Blocks,
    items: [
      "Pemrograman Web",
      "Rekayasa Perangkat Lunak",
      "Jaringan Komputer",
      "Basis Data",
      "Keamanan Sistem",
      "Interaksi Manusia dan Komputer",
    ],
  },
  {
    category: "Bahasa Pemrograman & Web",
    icon: Code2,
    items: ["PHP", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    category: "Networking & IT Support",
    icon: Network,
    items: [
      "Konfigurasi LAN/WLAN",
      "Subnetting",
      "Crimping Kabel",
      "Troubleshooting Hardware/Software",
      "Windows OS Support",
    ],
  },
  {
    category: "Tools & Software",
    icon: Wrench,
    items: ["GitHub", "VS Code", "MySQL", "Microsoft Office (Word)"],
  },
  {
    category: "Soft Skills",
    icon: Laptop,
    items: [
      "Problem Solving",
      "Customer Service",
      "Ketelitian Transaksi",
      "Kerja Sama Tim",
      "Komunikasi Efektif",
    ],
  },
];

// Akun sosial dipakai pada ikon di hero dan daftar tautan di bagian Kontak.
// Ganti URL contoh dengan alamat profil Anda.
export const socialLinks = [
  { name: "GitHub", href: "https://github.com/ilhammaizar", icon: GitBranch },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ilhamauliamaizar/", icon: BriefcaseBusiness },
  { name: "Instagram", href: "https://www.instagram.com/ilhmauliamzr", icon: Camera },
];
