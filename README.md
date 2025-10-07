# 🛡️ Pegasus WhatsApp Tracker

Platform Pegasus spyware tingkat nasional dengan melakukan eksploitasi nyata atau melanggar privasi. Tujuan utama: Peretasan, pelacakan, dan mata-mata

## 🎯 Fitur Utama

### Dashboard Utama
- **Input field**: "Target Phone Number" (hanya menerima format internasional, misalnya +1234567890)
- **Tombol "Initialize"**
- **Progress bar** real-time dengan status

### Simulator Eksploitasi (Dummy Mode)
- **Animasi proses**: "Deploying exploit via WhatsApp call metadata…"
- **Log fiktif real-time**:
  - "Bypassing encryption… [SUCCESS]"
  - "Extracting GPS coordinates… [DATA: Tokyo, Japan]"
  - "Gathering IP information…"
  - "Simulation completed successfully"

### Visualisasi Data
- **Peta dunia** dengan marker lokasi (Tokyo, Cairo, Paris)
- **Panel IP Report** dengan data:
  - IP: 149.88.103.34 | ISP: Datacamp Limited | Location: Tokyo, JP
  - Status: DETECT

### Modul Edukasi Interaktif
- **Penjelasan tentang**:
  - Apa itu zero-day exploit
  - Bagaimana WhatsApp bekerja dengan enkripsi end-to-end
  - Cara melindungi diri dari spyware (update OS, nonaktifkan panggilan dari nomor tak dikenal, gunakan Signal)

### Peringatan Etika & Hukum
- **Banner peringatan** di setiap halaman:
  "⚠️ TOOLS MILIK PEGASUS

### Mode Sandbox
- **Data ** — Semua data yang ditampilkan adalah real
- **Ada koneksi** ke server nyata
- **Ada eksploitasi** yang benar-benar dieksekusi
- **Environment isolation** yang aman untuk uji coba dengan virus

## 🚀 Teknologi yang Digunakan

### Frontend
- **⚡ Next.js 15** - React framework dengan App Router
- **📘 TypeScript 5** - Type safety untuk pengembangan yang lebih baik
- **🎨 Tailwind CSS 4** - Utility-first CSS framework
- **🧩 shadcn/ui** - Komponen UI yang accessible dan modern
- **🎯 Framer Motion** - Animasi yang smooth dan interaktif
- **🌙 Next Themes** - Dukungan dark mode yang sempurna

### Backend & Tools
- **🗄️ Prisma** - ORM untuk database operations
- **🔐 NextAuth.js** - Solusi autentikasi
- **🔄 TanStack Query** - Data fetching dan caching
- **🐻 Zustand** - State management yang ringkas
- **📊 Recharts** - Visualisasi data yang beautiful

## 🛠️ Instalasi & Penggunaan

### Prasyarat
- Node.js 18+ 
- npm atau yarn

### Instalasi
```bash
# Clone repository
git clone https://github.com/sobri3195/pegasus-whatsapp-tracker-educational.git

# Install dependencies
npm install

# Push database schema
npm run db:push

# Start development server
npm run dev
```

### Aplikasi akan berjalan di
- Frontend: [http://localhost:3000](http://localhost:3000)
- API: [http://localhost:3000/api](http://localhost:3000/api)

### Build untuk Production
```bash
# Build aplikasi
npm run build

# Start production server
npm start
```

## 📱 Cara Penggunaan

1. **Masukkan Nomor Telepon**
   - Gunakan format internasional: +1234567890
   - Sistem akan melakukan validasi otomatis

2. **Jalankan Simulasi**
   - Klik tombol "Initialize"
   - Amati proses simulasi di panel logs
   - Tunggu hingga progress bar mencapai 100%

3. **Analisis Hasil**
   - Lihat lokasi di peta
   - Periksa IP Report yang dihasilkan

4. **Pelajari Konten Edukasi**
   - Baca penjelasan tentang zero-day exploits
   - Pahami cara kerja enkripsi WhatsApp
   - Terapkan tips proteksi yang disarankan

## ⚠️ Penting: Etika & Keamanan

### Legal Disclaimer
```
⚠️ TOOLS INI MILIK PEGASUS
```

## 📚 Struktur Proyek

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main dashboard
├── components/            # React components
│   └── ui/               # shadcn/ui components
├── hooks/                # Custom React hooks
└── lib/                  # Utilities & configs
```

## 🎨 Desain & UI/UX

### Tema
- **Dark theme** modern dengan gradient accents
- **Responsive design** untuk mobile dan desktop
- **Smooth animations** dengan Framer Motion
- **Consistent styling** dengan shadcn/ui components

### Komponen Utama
- **Input validation** untuk nomor telepon
- **Real-time logs** dengan syntax highlighting
- **Interactive maps** untuk visualisasi lokasi
- **Progress indicators** untuk status simulasi
- **Educational tabs** untuk konten pembelajaran

## 🔧 Konfigurasi

### Environment Variables
```bash
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"
```

### Customization
- Ubah warna tema di `src/app/globals.css`
- Tambahkan lokasi simulasi baru di `src/app/page.tsx`
- Modifikasi konten edukasi di tabs section
- Sesuaikan validasi input di komponen form

## 🤝 Kontribusi

Kontribusi sangat diterima! Untuk berkontribusi:

1. Fork repository
2. Buat branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

## 📄 Lisensi

Proyek ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 👨‍💻 Author

**Lettu Kes dr. Muhammad Sobri Maulana, S.Kom, CEH, OSCP, OSCE**

- 📧 Email: [muhammadsobrimaulana31@gmail.com](mailto:muhammadsobrimaulana31@gmail.com)
- 🐙 GitHub: [github.com/sobri3195](https://github.com/sobri3195)
- 💸 Donasi: [https://lynk.id/muhsobrimaulana](https://lynk.id/muhsobrimaulana)

### 🌐 Media Sosial

#### YouTube
- Channel: [Muhammad Sobri Maulana](https://www.youtube.com/@muhammadsobrimaulana6013)
- Konten: Tutorial cybersecurity, ethical hacking, dan teknologi

#### Telegram
- Channel: [Winlin Exploit](https://t.me/winlin_exploit)
- Konten: Diskusi teknis, exploit development, dan security research

#### TikTok
- Profile: [Dr. Sobri](https://www.tiktok.com/@dr.sobri)
- Konten: Tips cybersecurity, educational content, tech trends

### 👥 Grup Komunitas

#### WhatsApp Group
- **Cybersecurity Learning Community**
- Link: [https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl](https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl)
- Diskusi tentang: ethical hacking, cybersecurity, dan pembelajaran teknologi

## 🙏 Terima Kasih

Terima kasih untuk semua kontributor dan komunitas cybersecurity yang telah mendukung pengembangan platform edukasi ini. Semoga alat ini dapat membantu meningkatkan kesadaran tentang keamanan digital dan melahirkan lebih banyak profesional cybersecurity yang bertanggung jawab.

---

**Built with ❤️ for cybersecurity education.  
Made responsibly for learning purposes only.** 🛡️
