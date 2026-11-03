// Route ini menyediakan CV PDF contoh untuk tombol unduh sampai CV asli ditambahkan.
export async function GET() {
  // Isi teks PDF satu halaman yang akan ditempatkan di dalam stream dokumen.
  const stream = [
    "BT",
    "/F1 20 Tf",
    "50 730 Td",
    "(CV PLACEHOLDER - GANTI DENGAN FILE ANDA) Tj",
    "/F1 12 Tf",
    "0 -30 Td",
    "(Nama Anda - Creative Developer) Tj",
    "ET",
    "",
  ].join("\n");

  // Objek dasar PDF: katalog, daftar halaman, halaman, font, dan konten halaman.
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    `<< /Length ${new TextEncoder().encode(stream).length} >>\nstream\n${stream}endstream`,
  ];

  let document = "%PDF-1.4\n";
  const offsets = [0];

  // Catat posisi byte tiap objek agar pembaca PDF dapat menemukannya.
  objects.forEach((object, index) => {
    offsets.push(new TextEncoder().encode(document).length);
    document += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = new TextEncoder().encode(document).length;
  document += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  // Tabel referensi silang dan trailer menutup struktur file PDF.
  document += offsets
    .slice(1)
    .map((offset) => `${String(offset).padStart(10, "0")} 00000 n \n`)
    .join("");
  document += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return new Response(new TextEncoder().encode(document), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="CV-placeholder.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
