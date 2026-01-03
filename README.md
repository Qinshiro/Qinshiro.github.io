# GitHub Pages Portfolio: Discord Bot Developer

## 🌟 **Ashknight — Mid Bot Developer Portfolio**

Portfolio website untuk Discord Bot Developer dengan spesialisasi JavaScript, Node.js, dan Discord.js. Website ini menampilkan kemampuan, proyek, dan layanan pengembangan bot Discord dengan tampilan dinamis dan modern.

## 🚀 **Fitur Utama**

### 🎨 **Tampilan & UI**
- **Dual Theme System**: Tema gelap dan terang yang bisa di-toggle
- **Particles Background**: Animasi partikel interaktif di background
- **Typing Animation**: Efek mengetik dinamis di hero section
- **Responsive Design**: Tampilan optimal di semua device (desktop, tablet, mobile)
- **Smooth Animations**: Transisi dan animasi halus di seluruh halaman

### ⚡ **Fitur Dinamis**
- **Interactive Skill Bars**: Animasi progress bar untuk skill dengan trigger scroll
- **Project Cards**: Kartu proyek dengan status dan teknologi yang digunakan
- **Contact Form**: Form kontak dengan validasi dan notifikasi
- **Navigation System**: Navigasi smooth scroll dengan indikator aktif
- **Mobile Menu**: Menu hamburger untuk tampilan mobile

### 🔧 **Teknologi yang Digunakan**
- **Frontend**: HTML5, CSS3 (CSS Variables, Grid, Flexbox), Vanilla JavaScript
- **Libraries**: Particles.js untuk background, Font Awesome untuk ikon
- **Hosting**: GitHub Pages
- **Build Tools**: Jekyll (untuk konfigurasi YAML)

## 📁 **Struktur Proyek**

```
repository/
├── myTheme/
│   └── V1/
│       └── Assets/
│           └── background.png
├── _config.yml
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🛠️ **Instalasi & Setup**

### **Langkah 1: Fork/Clone Repository**

```bash
# Clone repository
git clone https://github.com/username/username.github.io.git

# Masuk ke direktori
cd username.github.io
```

### **Langkah 2: Konfigurasi Personal**

1. **Edit `_config.yml`**:
   - Ganti `username` dengan GitHub username Anda
   - Update informasi personal (nama, lokasi, bio)
   - Ganti link social media dengan milik Anda
   - Tambahkan/ubah data proyek bot di bagian `bots`

2. **Custom Assets**:
   - Ganti `background.png` di `myTheme/V1/Assets/` dengan gambar Anda
   - Ukuran rekomendasi: 1920x1080px

### **Langkah 3: Deploy ke GitHub Pages**

1. **Push ke GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Aktifkan GitHub Pages**:
   - Buka repository di GitHub
   - Navigasi ke **Settings > Pages**
   - Pilih **Branch: main** dan **Folder: /root**
   - Klik **Save**

3. **Akses Website**:
   - Buka `https://username.github.io`
   - Website akan live dalam 1-2 menit

## ⚙️ **Customisasi Lanjutan**

### **1. Mengubah Warna Theme**
Edit variabel CSS di `style.css` bagian `:root`:

```css
:root {
    --primary-color: #5865F2;     /* Warna utama (Discord Blurple) */
    --secondary-color: #57F287;   /* Warna sekunder (Discord Green) */
    --dark-color: #2C2F33;        /* Warna dark mode */
    --darker-color: #23272A;      /* Warna darker mode */
}
```

### **2. Menambah/Mengurangi Skill**
Edit bagian skills di `index.html`:

```html
<div class="skill-item">
    <span>Nama Skill</span>
    <div class="skill-bar">
        <div class="skill-level" data-level="90"></div>
    </div>
</div>
```

### **3. Menambah Proyek Bot**
Edit `_config.yml` bagian `bots`:

```yaml
bots:
  - name: "Nama Bot"
    description: "Deskripsi bot"
    status: "Aktif"  # atau "Dalam Pengembangan"
```

### **4. Mengatur Particles Background**
Edit konfigurasi particles di `script.js` fungsi `initParticles()`:

```javascript
particles: {
    number: {
        value: 80,  // Jumlah partikel
        density: {
            enable: true,
            value_area: 800
        }
    },
    color: {
        value: "#5865F2"  // Warna partikel
    }
}
```

## 📱 **Sections Website**

### **1. Hero Section**
- Nama dan title dengan typing animation
- Background particles interaktif
- Call-to-action buttons
- Bot avatar dengan animasi morphing

### **2. About Section**
- Deskripsi tentang diri
- Statistik (bot terpasang, uptime, support)
- Informasi lokasi dan teknologi

### **3. Skills Section**
- Progress bars untuk skill teknis
- Kategori skill: Core Technologies, Database & Tools, Bot Features
- Animasi saat scroll

### **4. Projects Section**
- Kartu proyek dengan status
- Tag teknologi yang digunakan
- Tombol demo dan source code
- Opsi custom bot development

### **5. Contact Section**
- Multiple contact methods (Email, Discord, Instagram, GitHub)
- Form kontak dengan validasi
- Discord server widget
- Notifikasi setelah submit form

## 🎯 **SEO Optimization**

Website sudah dioptimalkan untuk SEO dengan:

1. **Meta Tags** di `index.html`
2. **Structured Data** melalui Jekyll
3. **Sitemap** otomatis (via Jekyll)
4. **Open Graph tags** untuk social media sharing
5. **Mobile-first** responsive design

## 🔍 **Testing & Validation**

### **Browser Compatibility**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### **Performance**
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: < 3s
- **Mobile Responsive**: 100%

### **Validation**
```bash
# HTML Validation
https://validator.w3.org/

# CSS Validation
https://jigsaw.w3.org/css-validator/
```

## 🐛 **Troubleshooting**

### **1. GitHub Pages Tidak Update**
```bash
# Clear cache dan force push
git commit --amend -m "Update portfolio"
git push -f origin main
```

### **2. Images Tidak Muncul**
- Pastikan path gambar benar
- Gunakan relative path: `myTheme/V1/Assets/background.png`
- Format gambar: PNG, JPG, atau WebP

### **3. JavaScript Tidak Berjalan**
- Cek browser console untuk errors
- Pastikan file `script.js` ter-load
- Nonaktifkan ad-blocker untuk testing

### **4. Form Tidak Bekerja**
- Form menggunakan JavaScript client-side
- Untuk production, integrasikan dengan:
  - Formspree
  - Netlify Forms
  - EmailJS

## 📞 **Contact Integration**

### **Formspree Integration**
1. Daftar di [Formspree](https://formspree.io)
2. Ganti form action di `index.html`:
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

### **EmailJS Integration**
1. Daftar di [EmailJS](https://www.emailjs.com)
2. Tambahkan script di `index.html`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

## 🚀 **Deployment Alternatives**

### **1. Netlify**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### **2. Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### **3. Cloudflare Pages**
- Drag & drop folder ke Cloudflare Pages
- Otomatis deploy dengan Git integration

## 📈 **Analytics Integration**

### **Google Analytics**
Tambahkan di `index.html` sebelum `</head>`:
```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### **Hotjar**
Tambahkan di `index.html` sebelum `</head>`:
```html
<!-- Hotjar Tracking Code -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:XXXXXX,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

## 🤝 **Contributing**

1. Fork repository
2. Buat feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit pull request

## 📄 **License**

MIT License - lihat [LICENSE](LICENSE) file untuk detail

## 🙏 **Credits**

- **Particles.js** oleh Vincent Garreau
- **Font Awesome** untuk ikon
- **Google Fonts** (Poppins, JetBrains Mono)
- **Discord** untuk warna brand
- **Jekyll** untuk static site generation

## 📧 **Contact**

- **GitHub**: [@Qinshiro](https://github.com/Qinshiro)
- **Discord**: [Join Server](https://discord.gg/WkGYZYZ3Sn)
- **Instagram**: [@sancayw_](https://instagram.com/sancayw_)
- **Email**: [gtpsash@gmail.com](mailto:gtpsash@gmail.com)

---

⭐ **Jika Anda menyukai proyek ini, jangan lupa beri star di GitHub!** ⭐
