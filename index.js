import React, { useState } from 'react';
import { 
  Heart, 
  Smartphone, 
  Music, 
  MapPin, 
  Calendar, 
  MessageSquare, 
  CheckCircle2, 
  Menu, 
  X, 
  Play, 
  ShoppingCart,
  ChevronRight
} from 'lucide-react';

// --- MOCK DATA ---

const THEMES = [
  {
    id: 1,
    title: 'Rustic Romance',
    category: 'Floral',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
    price: 'Rp 149.000',
    isNew: true
  },
  {
    id: 2,
    title: 'Minimalist Elegance',
    category: 'Minimalis',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80',
    price: 'Rp 99.000',
    isNew: false
  },
  {
    id: 3,
    title: 'Golden Glamour',
    category: 'Elegan',
    image: 'https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?auto=format&fit=crop&w=600&q=80',
    price: 'Rp 199.000',
    isNew: true
  },
  {
    id: 4,
    title: 'Watercolor Bliss',
    category: 'Floral',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=600&q=80',
    price: 'Rp 149.000',
    isNew: false
  },
  {
    id: 5,
    title: 'Modern Monochrome',
    category: 'Minimalis',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80',
    price: 'Rp 99.000',
    isNew: false
  },
  {
    id: 6,
    title: 'Classic Javanese',
    category: 'Tradisional',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80',
    price: 'Rp 199.000',
    isNew: false
  }
];

const FEATURES = [
  { icon: <Smartphone className="w-8 h-8 text-emerald-700" />, title: 'Responsif', desc: 'Tampilan undangan menyesuaikan otomatis di berbagai ukuran layar (HP, Tablet, PC).' },
  { icon: <Music className="w-8 h-8 text-emerald-700" />, title: 'Musik Latar', desc: 'Bebas pilih lagu favorit untuk diputar otomatis saat undangan dibuka.' },
  { icon: <MapPin className="w-8 h-8 text-emerald-700" />, title: 'Integrasi Peta', desc: 'Memudahkan tamu menemukan lokasi acara dengan navigasi Google Maps.' },
  { icon: <Calendar className="w-8 h-8 text-emerald-700" />, title: 'Hitung Mundur', desc: 'Fitur countdown timer untuk mengingatkan tamu kapan acara dimulai.' },
  { icon: <MessageSquare className="w-8 h-8 text-emerald-700" />, title: 'RSVP & Ucapan', desc: 'Tamu dapat mengonfirmasi kehadiran dan memberikan ucapan selamat.' },
  { icon: <Heart className="w-8 h-8 text-emerald-700" />, title: 'Galeri Foto', desc: 'Tampilkan momen pre-wedding terbaik Anda dalam galeri yang estetik.' }
];

const PACKAGES = [
  {
    name: 'Basic',
    price: '99',
    popular: false,
    features: [
      'Masa Aktif 3 Bulan',
      'Tema Terbatas',
      'Maksimal 5 Foto Galeri',
      'Hitung Mundur (Countdown)',
      'RSVP & Buku Tamu',
      'Navigasi Peta',
      'Tanpa Video',
      'Musik Default'
    ]
  },
  {
    name: 'Premium',
    price: '149',
    popular: true,
    features: [
      'Masa Aktif 6 Bulan',
      'Bebas Pilih Tema',
      'Maksimal 10 Foto Galeri',
      'Hitung Mundur (Countdown)',
      'RSVP & Buku Tamu',
      'Navigasi Peta',
      'Custom Musik Latar',
      'Fitur Kirim Kado/Angpao'
    ]
  },
  {
    name: 'Eksklusif',
    price: '199',
    popular: false,
    features: [
      'Masa Aktif 1 Tahun',
      'Bebas Pilih Semua Tema',
      'Maksimal 20 Foto Galeri',
      'Hitung Mundur (Countdown)',
      'RSVP & Buku Tamu Spesial',
      'Navigasi Peta',
      'Custom Musik & Autoplay',
      'Integrasi Video YouTube',
      'Custom Nama Domain (Subdomain)'
    ]
  }
];

// --- COMPONENTS ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', ...new Set(THEMES.map(theme => theme.category))];

  const filteredThemes = activeCategory === 'Semua' 
    ? THEMES 
    : THEMES.filter(theme => theme.category === activeCategory);

  return (
    <div className="font-sans text-gray-800 bg-stone-50 min-h-screen">
      
      {/* NAVBAR */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-stone-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <span className="font-serif text-2xl font-bold text-emerald-800 flex items-center gap-2">
                <Heart className="w-6 h-6 text-emerald-600 fill-emerald-600" />
                Danendra
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">Beranda</a>
              <a href="#fitur" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">Fitur</a>
              <a href="#tema" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">Katalog Tema</a>
              <a href="#harga" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">Harga</a>
              <a href="#kontak" className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg">
                Pesan Sekarang
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-emerald-700 focus:outline-none p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#beranda" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-md">Beranda</a>
              <a href="#fitur" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-md">Fitur</a>
              <a href="#tema" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-md">Katalog Tema</a>
              <a href="#harga" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-md">Harga</a>
              <a href="#kontak" onClick={() => setIsMenuOpen(false)} className="block w-full text-center mt-4 bg-emerald-700 text-white px-6 py-3 rounded-full font-medium">Pesan Sekarang</a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="beranda" className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-emerald-50/50 -z-10" />
        {/* Decorative elements */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-40 -right-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Bagikan Kabar Bahagia dengan <span className="text-emerald-700 italic">Lebih Elegan</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              Buat undangan pernikahan digital impianmu hanya dalam hitungan menit. Estetik, praktis, dan ramah lingkungan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#tema" className="w-full sm:w-auto px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                Lihat Katalog Tema <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#fitur" className="w-full sm:w-auto px-8 py-3.5 bg-white border border-emerald-200 hover:border-emerald-300 text-emerald-800 rounded-full font-medium transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                <Play className="w-4 h-4 fill-emerald-800" /> Cara Kerja
              </a>
            </div>
            
            {/* Hero Image Mockup */}
            <div className="mt-16 relative mx-auto max-w-4xl">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden border-8 border-white bg-white">
                 <img 
                   src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80" 
                   alt="Preview Undangan" 
                   className="w-full h-[300px] md:h-[500px] object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8">
                    <p className="text-white font-serif text-2xl md:text-3xl font-medium tracking-wide">Romeo & Juliet</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="fitur" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-emerald-700 font-semibold tracking-wider uppercase text-sm mb-2">Kenapa Memilih Kami?</h2>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fitur Lengkap untuk Momen Spesialmu</h3>
            <p className="text-gray-600">Semua yang kamu butuhkan untuk membagikan kabar bahagia ke orang-orang terdekat dengan cara yang modern.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feat, index) => (
              <div key={index} className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feat.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feat.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG SECTION */}
      <section id="tema" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-emerald-700 font-semibold tracking-wider uppercase text-sm mb-2">Koleksi Desain</h2>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pilih Tema Favoritmu</h3>
              <p className="text-gray-600">Beragam pilihan tema yang dirancang khusus untuk merepresentasikan kisah cinta kalian.</p>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category 
                    ? 'bg-emerald-700 text-white shadow-md' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-emerald-500 hover:text-emerald-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredThemes.map(theme => (
              <div key={theme.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img 
                    src={theme.image} 
                    alt={theme.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {theme.isNew && (
                    <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Baru
                    </div>
                  )}
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
                    <button className="bg-white text-gray-900 hover:text-emerald-700 p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                      <Play className="w-5 h-5 fill-current" />
                    </button>
                    <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100 flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4" /> Pesan
                    </button>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-emerald-600 font-medium mb-1">{theme.category}</div>
                  <h4 className="font-serif text-xl font-bold text-gray-900 mb-2">{theme.title}</h4>
                  <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-50">
                    <span className="text-gray-500 text-sm">Mulai dari</span>
                    <span className="font-bold text-lg text-emerald-800">{theme.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <button className="inline-flex items-center gap-2 text-emerald-700 font-medium hover:text-emerald-800 transition-colors">
               Lihat Semua Tema <ChevronRight className="w-4 h-4" />
             </button>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="harga" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-emerald-700 font-semibold tracking-wider uppercase text-sm mb-2">Paket & Harga</h2>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investasi Terjangkau untuk Momen Berharga</h3>
            <p className="text-gray-600">Pilih paket yang sesuai dengan kebutuhan pernikahan Anda. Bayar sekali, tanpa biaya langganan.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PACKAGES.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative rounded-3xl p-8 border ${
                  pkg.popular 
                  ? 'bg-emerald-800 text-white shadow-2xl border-emerald-800 scale-100 lg:scale-105 z-10' 
                  : 'bg-white text-gray-900 border-gray-200 shadow-sm hover:shadow-lg'
                } transition-all duration-300 flex flex-col`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Paling Laris
                  </div>
                )}
                
                <div className="mb-8">
                  <h4 className={`text-xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-medium">Rp</span>
                    <span className="text-4xl font-bold tracking-tight">{pkg.price}</span>
                    <span className={`text-sm ${pkg.popular ? 'text-emerald-200' : 'text-gray-500'}`}>.000</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${pkg.popular ? 'text-emerald-300' : 'text-emerald-600'}`} />
                      <span className={`text-sm ${pkg.popular ? 'text-emerald-50' : 'text-gray-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3.5 rounded-xl font-semibold transition-all ${
                  pkg.popular 
                  ? 'bg-white text-emerald-800 hover:bg-emerald-50' 
                  : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                }`}>
                  Pilih Paket Ini
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION / FOOTER */}
      <footer id="kontak" className="bg-gray-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand */}
            <div className="lg:col-span-1">
              <span className="font-serif text-3xl font-bold text-white flex items-center gap-2 mb-6">
                <Heart className="w-8 h-8 text-emerald-500 fill-emerald-500" />
                Danendra
              </span>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Platform pembuatan undangan pernikahan digital premium, cepat, dan mudah digunakan. Ciptakan kesan mendalam untuk tamu undangan Anda.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 font-serif">Layanan</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Katalog Tema</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Paket & Harga</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Cara Pemesanan</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Testimoni Klien</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-bold mb-6 font-serif">Bantuan</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Syarat & Ketentuan</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">FAQ (Tanya Jawab)</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6 font-serif">Hubungi Kami</h4>
              <p className="text-gray-400 text-sm mb-4">Punya pertanyaan atau butuh bantuan? Tim kami siap melayani Anda.</p>
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-medium transition-colors w-full"
              >
                <MessageSquare className="w-5 h-5" /> Chat WhatsApp
              </a>
            </div>

          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Danendra Digital Invitation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {/* Dummy Social Icons */}
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.047-1.379.06-3.808.06-2.43 0-2.784-.013-3.808-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
}