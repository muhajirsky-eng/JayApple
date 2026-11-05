const WHATSAPP_NUMBER = '62895411765065';
const CART_STORAGE_KEY = 'jayapple_cart';
const ORDERS_STORAGE_KEY = 'jayapple_orders';

function formatRupiah(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(amount);
}

const products = [
  {
    id: 'iphone-16-pro-max',
    category: 'iphone',
    name: 'iPhone 16 Pro Max',
    image: 'images/Iphone18pro.jpg',
    tagline: 'Layar 6.9 inci ProMotion 120Hz, bodi titanium, dan kontrol kamera khusus.',
    chip: 'A18 Pro (3nm)',
    display: 'Super Retina XDR OLED 6.9 inci (120Hz)',
    camera: 'Triple 48MP Fusion + 48MP Ultrawide + 12MP Tele 5x',
    port: 'USB-C 3',
    material: 'Titanium Grade 5',
    capacities: ['256GB', '512GB', '1TB'],
    colors: ['Desert Titanium', 'Natural Titanium', 'White Titanium', 'Black Titanium'],
    badge: 'Terbaru',
    pricing: {
      '256GB': { baru: 24999000, second: 21500000 },
      '512GB': { baru: 28999000, second: 24800000 },
      '1TB': { baru: 32999000, second: 28000000 }
    }
  },
  {
    id: 'iphone-16-pro',
    category: 'iphone',
    name: 'iPhone 16 Pro',
    image: 'images/iphone 16 pro.jpg',
    tagline: 'Layar 6.3 inci ProMotion 120Hz, bodi titanium, dan tombol Camera Control.',
    chip: 'A18 Pro (3nm)',
    display: 'Super Retina XDR OLED 6.3 inci (120Hz)',
    camera: 'Triple 48MP Fusion + 48MP Ultrawide + 12MP Tele 5x',
    port: 'USB-C 3',
    material: 'Titanium Grade 5',
    capacities: ['128GB', '256GB', '512GB', '1TB'],
    colors: ['Desert Titanium', 'Natural Titanium', 'White Titanium', 'Black Titanium'],
    badge: 'Terbaru',
    pricing: {
      '128GB': { baru: 20999000, second: 17800000 },
      '256GB': { baru: 23499000, second: 19900000 },
      '512GB': { baru: 27499000, second: 23200000 },
      '1TB': { baru: 31499000, second: 26500000 }
    }
  },
  {
    id: 'iphone-16-plus',
    category: 'iphone',
    name: 'iPhone 16 Plus',
    image: 'images/iphone_16_plus_ultramarine_01_3.jpeg',
    tagline: 'Warna ultramarine berani, chip A18, dan tombol Camera Control terintegrasi.',
    chip: 'A18 (3nm)',
    display: 'Super Retina XDR OLED 6.7 inci (60Hz)',
    camera: 'Dual 48MP Fusion + 12MP Ultrawide',
    port: 'USB-C 2',
    material: 'Aluminium Dirgantara',
    capacities: ['128GB', '256GB', '512GB'],
    colors: ['Ultramarine', 'Teal', 'Pink', 'White', 'Black'],
    badge: 'Terbaru',
    pricing: {
      '128GB': { baru: 18499000, second: 15500000 },
      '256GB': { baru: 20999000, second: 17800000 },
      '512GB': { baru: 24999000, second: 21000000 }
    }
  },
  {
    id: 'iphone-air',
    category: 'iphone',
    name: 'iPhone Air',
    image: 'images/iphone air.webp',
    tagline: 'Desain titanium ultra tipis dengan profil ramping dan performa generasi baru.',
    chip: 'Apple A18 Pro Slim',
    display: 'Super Retina XDR OLED 6.55 inci (120Hz)',
    camera: 'Single 48MP Fusion Kamera Canggih',
    port: 'USB-C 3',
    material: 'Titanium Grade 5',
    capacities: ['256GB', '512GB'],
    colors: ['Space Black', 'Natural Titanium', 'Cloud White'],
    badge: 'Edisi Khusus',
    pricing: {
      '256GB': { baru: 22999000, second: 19500000 },
      '512GB': { baru: 26999000, second: 22800000 }
    }
  },
  {
    id: 'iphone-duo-bundle',
    category: 'iphone',
    name: 'Paket Bundling iPhone Duo',
    image: 'images/IPHONE DUO.webp',
    tagline: 'Paket sepasang iPhone kurasi Jayapple untuk keluarga atau pasangan dengan garansi toko.',
    chip: 'A15 / A16 Bionic Dual Set',
    display: 'Dual Super Retina XDR OLED',
    camera: 'Dual Camera System Tiap Unit',
    port: 'Lightning / USB-C Set',
    material: 'Aluminium Dirgantara',
    capacities: ['Dual 128GB Set', 'Dual 256GB Set'],
    colors: ['Black & Starlight', 'Blue & Pink', 'Midnight & Purple'],
    badge: 'Paket Hemat',
    pricing: {
      'Dual 128GB Set': { baru: 21999000, second: 16500000 },
      'Dual 256GB Set': { baru: 25999000, second: 19800000 }
    }
  },
  {
    id: 'iphone-15-pro-max',
    category: 'iphone',
    name: 'iPhone 15 Pro Max',
    image: 'images/iphone-17-pro-silver-1000_1_2.webp',
    tagline: 'Layar 6.7 inci ProMotion 120Hz, bodi titanium, dan kamera telefoto 5x.',
    chip: 'A17 Pro (3nm)',
    display: 'Super Retina XDR OLED 6.7 inci (120Hz)',
    camera: 'Triple 48MP + 12MP Ultrawide + 12MP Tele 5x',
    port: 'USB-C 3',
    material: 'Titanium Grade 5',
    capacities: ['256GB', '512GB', '1TB'],
    colors: ['Natural Titanium', 'Black Titanium', 'White Titanium', 'Blue Titanium'],
    badge: 'Flagship',
    pricing: {
      '256GB': { baru: 20999000, second: 16800000 },
      '512GB': { baru: 24999000, second: 18900000 },
      '1TB': { baru: 28999000, second: 21500000 }
    }
  },
  {
    id: 'iphone-15-pro',
    category: 'iphone',
    name: 'iPhone 15 Pro',
    image: 'images/iphone15pro.jpg',
    tagline: 'Desain titanium ringan, tombol Action terprogram, dan performa grafis pro.',
    chip: 'A17 Pro (3nm)',
    display: 'Super Retina XDR OLED 6.1 inci (120Hz)',
    camera: 'Triple 48MP + 12MP Ultrawide + 12MP Tele 3x',
    port: 'USB-C 3',
    material: 'Titanium Grade 5',
    capacities: ['128GB', '256GB', '512GB', '1TB'],
    colors: ['Natural Titanium', 'Black Titanium', 'White Titanium', 'Blue Titanium'],
    badge: 'Pro Series',
    pricing: {
      '128GB': { baru: 17499000, second: 13900000 },
      '256GB': { baru: 19999000, second: 15400000 },
      '512GB': { baru: 23999000, second: 17200000 },
      '1TB': { baru: 27999000, second: 19500000 }
    }
  },
  {
    id: 'iphone-14-pro',
    category: 'iphone',
    name: 'iPhone 14 Pro',
    image: 'images/iphone_14_pro_deep_purple_1_1.jpg',
    tagline: 'Layar Always-On, Dynamic Island, dan sistem kamera pro 48MP.',
    chip: 'A16 Bionic',
    display: 'Super Retina XDR OLED 6.1 inci (120Hz)',
    camera: 'Triple 48MP + 12MP Ultrawide + 12MP Tele 3x',
    port: 'Lightning',
    material: 'Baja Tahan Karat',
    capacities: ['128GB', '256GB', '512GB', '1TB'],
    colors: ['Deep Purple', 'Space Black', 'Silver', 'Gold'],
    badge: 'Pro Series',
    pricing: {
      '128GB': { baru: 15200000, second: 11900000 },
      '256GB': { baru: 16900000, second: 13200000 },
      '512GB': { baru: 19500000, second: 14900000 },
      '1TB': { baru: 22000000, second: 16500000 }
    }
  },
  {
    id: 'iphone-13-pro',
    category: 'iphone',
    name: 'iPhone 13 Pro',
    image: 'images/sierra_20blue-1.webp',
    tagline: 'Warna legendaris Sierra Blue dengan layar 120Hz ProMotion dan tiga kamera pro.',
    chip: 'A15 Bionic (GPU 5-core)',
    display: 'Super Retina XDR OLED 6.1 inci (120Hz)',
    camera: 'Triple 12MP Utama + Ultrawide + Tele 3x',
    port: 'Lightning',
    material: 'Baja Tahan Karat',
    capacities: ['128GB', '256GB', '512GB', '1TB'],
    colors: ['Sierra Blue', 'Graphite', 'Gold', 'Silver'],
    badge: 'Best Value Pro',
    pricing: {
      '128GB': { baru: 12800000, second: 9800000 },
      '256GB': { baru: 14200000, second: 10900000 },
      '512GB': { baru: 16500000, second: 12400000 },
      '1TB': { baru: 18900000, second: 13900000 }
    }
  },
  {
    id: 'iphone-13',
    category: 'iphone',
    name: 'iPhone 13',
    image: 'images/iPhone13Reg_4_251121211145_ll.jpg.jpg',
    tagline: 'Stabilisasi sensor-shift dan performa kencang untuk pemakaian jangka panjang.',
    chip: 'A15 Bionic',
    display: 'Super Retina XDR OLED 6.1 inci (60Hz)',
    camera: 'Dual 12MP Utama + 12MP Ultrawide',
    port: 'Lightning',
    material: 'Aluminium Dirgantara',
    capacities: ['128GB', '256GB', '512GB'],
    colors: ['Midnight', 'Starlight', 'Blue', 'Green'],
    badge: 'Teruji',
    pricing: {
      '128GB': { baru: 9499000, second: 7200000 },
      '256GB': { baru: 11999000, second: 8500000 },
      '512GB': { baru: 14999000, second: 9800000 }
    }
  },
  {
    id: 'iphone-11-pro',
    category: 'iphone',
    name: 'iPhone 11 Pro',
    image: 'images/iphone11pro.jpg',
    tagline: 'Bodi kaca matte dengan tiga kamera pro, pilihan hemat berkualitas tinggi.',
    chip: 'A13 Bionic',
    display: 'Super Retina XDR OLED 5.8 inci',
    camera: 'Triple 12MP Kamera Pro',
    port: 'Lightning',
    material: 'Baja Tahan Karat',
    capacities: ['64GB', '256GB', '512GB'],
    colors: ['Midnight Green', 'Space Grey', 'Silver', 'Gold'],
    badge: 'Budget Flagship',
    pricing: {
      '64GB': { baru: 6900000, second: 4900000 },
      '256GB': { baru: 8200000, second: 5800000 },
      '512GB': { baru: 9500000, second: 6800000 }
    }
  },
  {
    id: 'iphone-xr',
    category: 'iphone',
    name: 'iPhone XR',
    image: 'images/iphone XR.jpg',
    tagline: 'Layar Liquid Retina 6.1 inci, baterai awet, dan pilihan warna ikonik serbaguna.',
    chip: 'A12 Bionic',
    display: 'Liquid Retina HD 6.1 inci',
    camera: 'Kamera Belakang 12MP Wide',
    port: 'Lightning',
    material: 'Aluminium Dirgantara',
    capacities: ['64GB', '128GB'],
    colors: ['Black', 'White', 'Blue', 'Yellow', 'Coral', 'Red'],
    badge: 'Entry Level',
    pricing: {
      '64GB': { baru: 4200000, second: 2900000 },
      '128GB': { baru: 4900000, second: 3400000 }
    }
  },
  {
    id: 'macbook-pro-14-m4',
    category: 'macbook',
    name: 'MacBook Pro 14 M4',
    image: 'images/mbp14-m4-2024.png',
    tagline: 'Layar Liquid Retina XDR, baterai hingga 24 jam, dan performa komputasi pro.',
    chip: 'Apple M4',
    display: 'Liquid Retina XDR 14.2 inci (120Hz ProMotion)',
    camera: 'Kamera 12MP Center Stage',
    port: '3x Thunderbolt 4, HDMI, SDXC, MagSafe 3',
    material: 'Aluminium Daur Ulang 100%',
    capacities: ['16GB / 512GB SSD', '16GB / 1TB SSD', '24GB / 1TB SSD'],
    colors: ['Space Black', 'Silver'],
    badge: 'Powerhouse',
    pricing: {
      '16GB / 512GB SSD': { baru: 27999000, second: 23900000 },
      '16GB / 1TB SSD': { baru: 31499000, second: 26500000 },
      '24GB / 1TB SSD': { baru: 34999000, second: 29500000 }
    }
  },
  {
    id: 'macbook-pro-16-m4-pro',
    category: 'macbook',
    name: 'MacBook Pro 16 M4 Pro',
    image: 'images/MacbookM4.jpg',
    tagline: 'Performa workstation portabel untuk kompilasi kode dan pengolahan grafis berat.',
    chip: 'Apple M4 Pro',
    display: 'Liquid Retina XDR 16.2 inci (120Hz ProMotion)',
    camera: 'Kamera 12MP Center Stage',
    port: '3x Thunderbolt 5, HDMI, SDXC, MagSafe 3',
    material: 'Aluminium Daur Ulang',
    capacities: ['24GB / 512GB SSD', '48GB / 1TB SSD', '48GB / 2TB SSD'],
    colors: ['Space Black', 'Silver'],
    badge: 'Flagship Mac',
    pricing: {
      '24GB / 512GB SSD': { baru: 39999000, second: 34500000 },
      '48GB / 1TB SSD': { baru: 46999000, second: 40500000 },
      '48GB / 2TB SSD': { baru: 53999000, second: 46000000 }
    }
  },
  {
    id: 'macbook-pro-14-m3',
    category: 'macbook',
    name: 'MacBook Pro 14 M3',
    image: 'images/mackbookM3.jpg',
    tagline: 'Layar Liquid Retina XDR tajam dengan arsitektur GPU Dynamic Caching.',
    chip: 'Apple M3',
    display: 'Liquid Retina XDR 14.2 inci',
    camera: 'Kamera FaceTime HD 1080p',
    port: '2x Thunderbolt / USB 4, HDMI, SDXC',
    material: 'Aluminium Unibody',
    capacities: ['8GB / 512GB SSD', '16GB / 1TB SSD'],
    colors: ['Space Grey', 'Silver'],
    badge: 'M3 Edition',
    pricing: {
      '8GB / 512GB SSD': { baru: 24500000, second: 20200000 },
      '16GB / 1TB SSD': { baru: 28900000, second: 24000000 }
    }
  },
  {
    id: 'macbook-pro-16-m3-max',
    category: 'macbook',
    name: 'MacBook Pro 16 M3 Max',
    image: 'images/mackbookpro5.jpg',
    tagline: 'Workstation mobile bertenaga monster untuk workflow kreatif paling menuntut.',
    chip: 'Apple M3 Max',
    display: 'Liquid Retina XDR 16.2 inci',
    camera: 'Kamera 1080p FaceTime HD',
    port: '3x Thunderbolt 4, HDMI, SDXC',
    material: 'Aluminium Unibody',
    capacities: ['36GB / 1TB SSD', '48GB / 1TB SSD'],
    colors: ['Space Black', 'Silver'],
    badge: 'Max Performance',
    pricing: {
      '36GB / 1TB SSD': { baru: 44900000, second: 37500000 },
      '48GB / 1TB SSD': { baru: 52000000, second: 43000000 }
    }
  },
  {
    id: 'macbook-air-13-m3',
    category: 'macbook',
    name: 'MacBook Air 13 M3',
    image: 'images/mackbookair.jpg',
    tagline: 'Laptop paling tipis dengan chip M3, mendukung dua layar eksternal.',
    chip: 'Apple M3',
    display: 'Liquid Retina 13.6 inci True Tone',
    camera: 'Kamera 1080p FaceTime HD',
    port: '2x Thunderbolt / USB 4, MagSafe 3',
    material: 'Aluminium Unibody',
    capacities: ['8GB / 256GB SSD', '16GB / 512GB SSD'],
    colors: ['Midnight', 'Starlight', 'Space Grey', 'Silver'],
    badge: 'M3 Edition',
    pricing: {
      '8GB / 256GB SSD': { baru: 17999000, second: 14800000 },
      '16GB / 512GB SSD': { baru: 22499000, second: 18500000 }
    }
  },
  {
    id: 'macbook-air-13-m2',
    category: 'macbook',
    name: 'MacBook Air 13 M2',
    image: 'images/macbook_air_m2_midnight_pdp_image_position-1__id_1_1.jpg',
    tagline: 'Bodi aluminium tipis tanpa kipas pendingin, MagSafe, dan layar Liquid Retina.',
    chip: 'Apple M2',
    display: 'Liquid Retina 13.6 inci True Tone',
    camera: 'Kamera FaceTime HD 1080p',
    port: '2x Thunderbolt / USB 4, MagSafe 3',
    material: 'Aluminium Unibody',
    capacities: ['8GB / 256GB SSD', '16GB / 512GB SSD'],
    colors: ['Midnight', 'Starlight', 'Space Grey', 'Silver'],
    badge: 'Ultra Portable',
    pricing: {
      '8GB / 256GB SSD': { baru: 15499000, second: 12200000 },
      '16GB / 512GB SSD': { baru: 19999000, second: 15800000 }
    }
  },
  {
    id: 'ipad-pro-13-m4',
    category: 'ipad',
    name: 'iPad Pro 13 M4',
    image: 'images/ipadM4.jpg',
    tagline: 'Layar Ultra Retina XDR Tandem OLED 13 inci raksasa, kanvas kreatif utama.',
    chip: 'Apple M4',
    display: 'Ultra Retina XDR Tandem OLED 13 inci (120Hz)',
    camera: 'Kamera Belakang 12MP + LiDAR',
    port: 'Thunderbolt / USB 4',
    material: 'Aluminium 100% Daur Ulang',
    capacities: ['256GB Wi-Fi', '512GB Wi-Fi', '1TB Wi-Fi + Seluler'],
    colors: ['Space Black', 'Silver'],
    badge: 'Ultra Screen',
    pricing: {
      '256GB Wi-Fi': { baru: 22999000, second: 18900000 },
      '512GB Wi-Fi': { baru: 26499000, second: 21800000 },
      '1TB Wi-Fi + Seluler': { baru: 33999000, second: 27500000 }
    }
  },
  {
    id: 'ipad-pro-11-m4',
    category: 'ipad',
    name: 'iPad Pro 11 M4',
    image: 'images/ipad11incM4.jpg',
    tagline: 'Layar Ultra Retina XDR Tandem OLED tertipis, mendukung Apple Pencil Pro.',
    chip: 'Apple M4',
    display: 'Ultra Retina XDR Tandem OLED 11 inci (120Hz)',
    camera: 'Kamera Belakang 12MP + Pemindai LiDAR',
    port: 'Thunderbolt / USB 4',
    material: 'Aluminium 100% Daur Ulang',
    capacities: ['256GB Wi-Fi', '512GB Wi-Fi', '1TB Wi-Fi + Seluler'],
    colors: ['Space Black', 'Silver'],
    badge: 'Pro Tablet',
    pricing: {
      '256GB Wi-Fi': { baru: 17499000, second: 14500000 },
      '512GB Wi-Fi': { baru: 20999000, second: 17200000 },
      '1TB Wi-Fi + Seluler': { baru: 27999000, second: 22500000 }
    }
  },
  {
    id: 'ipad-air-11-m2',
    category: 'ipad',
    name: 'iPad Air 11 M2',
    image: 'images/ipad11.jpg',
    tagline: 'Layar Liquid Retina cerah dengan kamera depan lanskap 12MP dan Touch ID.',
    chip: 'Apple M2',
    display: 'Liquid Retina 11 inci IPS LED',
    camera: 'Kamera Depan Lanskap 12MP Center Stage',
    port: 'USB-C',
    material: 'Aluminium Unibody',
    capacities: ['128GB Wi-Fi', '256GB Wi-Fi', '512GB Wi-Fi + Seluler'],
    colors: ['Space Grey', 'Starlight', 'Blue', 'Purple'],
    badge: 'Serbaguna',
    pricing: {
      '128GB Wi-Fi': { baru: 10999000, second: 8800000 },
      '256GB Wi-Fi': { baru: 12999000, second: 10400000 },
      '512GB Wi-Fi + Seluler': { baru: 17499000, second: 13900000 }
    }
  },
  {
    id: 'ipad-mini-6',
    category: 'ipad',
    name: 'iPad Mini 6',
    image: 'images/cat-ipad.png',
    tagline: 'Ukuran saku 8.3 inci Liquid Retina, praktis untuk mobilitas tinggi.',
    chip: 'A15 Bionic',
    display: 'Liquid Retina 8.3 inci True Tone',
    camera: 'Kamera Belakang 12MP Wide',
    port: 'USB-C',
    material: 'Aluminium Unibody',
    capacities: ['64GB Wi-Fi', '256GB Wi-Fi'],
    colors: ['Space Grey', 'Starlight', 'Pink', 'Purple'],
    badge: 'Kompak',
    pricing: {
      '64GB Wi-Fi': { baru: 7999000, second: 5900000 },
      '256GB Wi-Fi': { baru: 10999000, second: 8200000 }
    }
  },
  {
    id: 'airpods-3',
    category: 'airpods',
    name: 'AirPods Generasi ke-3',
    image: 'images/Airpoods3.jpg',
    tagline: 'Audio Spasial personal dengan pelacakan kepala dinamis dan tahan keringat.',
    chip: 'Apple H1',
    display: 'Driver Khusus Apple Ekskursi Tinggi',
    camera: 'Mikrofon Ganda Pembentuk Berkas Sinyal',
    port: 'Lightning / MagSafe Qi',
    material: 'Plastik Polikarbonat Mengkilap',
    capacities: ['Casing Pengisian Lightning', 'Casing Pengisian MagSafe'],
    colors: ['Putih'],
    badge: 'Audio Resmi',
    pricing: {
      'Casing Pengisian Lightning': { baru: 2499000, second: 1650000 },
      'Casing Pengisian MagSafe': { baru: 2999000, second: 1950000 }
    }
  },
  {
    id: 'airpods-4',
    category: 'airpods',
    name: 'AirPods 4',
    image: 'images/airpods 4.webp',
    tagline: 'Desain open-ear dengan opsi Active Noise Cancellation dan port USB-C.',
    chip: 'Apple H2',
    display: 'Driver Khusus Apple Ekskursi Tinggi',
    camera: 'Mikrofon Pembentuk Berkas Sinyal Ganda',
    port: 'USB-C',
    material: 'Plastik Polikarbonat Mengkilap',
    capacities: ['Standar USB-C', 'Dengan Active Noise Cancellation'],
    colors: ['Putih'],
    badge: 'Terbaru',
    pricing: {
      'Standar USB-C': { baru: 2299000, second: 1700000 },
      'Dengan Active Noise Cancellation': { baru: 2999000, second: 2250000 }
    }
  },
  {
    id: 'airpods-pro-2',
    category: 'airpods',
    name: 'AirPods Pro Generasi ke-2',
    image: 'images/airpods pro gen 2.jpg',
    tagline: 'Peredam kebisingan aktif hingga 2x lebih baik, Audio Adaptif, dan USB-C MagSafe.',
    chip: 'Apple H2',
    display: 'Driver Khusus Apple Ekskursi Tinggi',
    camera: 'Mikrofon Ganda Hadap ke Dalam dan Luar',
    port: 'MagSafe USB-C',
    material: 'Plastik Polikarbonat Mengkilap',
    capacities: ['Casing MagSafe USB-C'],
    colors: ['Putih'],
    badge: 'Pro Audio',
    pricing: {
      'Casing MagSafe USB-C': { baru: 3799000, second: 2800000 }
    }
  },
  {
    id: 'airpods-pro-1',
    category: 'airpods',
    name: 'AirPods Pro Generasi ke-1',
    image: 'images/airpods pro 1.webp',
    tagline: 'Peredam kebisingan aktif dengan ujung silikon lembut dalam tiga ukuran.',
    chip: 'Apple H1',
    display: 'Driver Khusus Apple Ekskursi Tinggi',
    camera: 'Mikrofon Ganda Berkas Sinyal',
    port: 'Casing Pengisian Nirkabel Lightning',
    material: 'Plastik Polikarbonat Mengkilap',
    capacities: ['Casing Pengisian Nirkabel'],
    colors: ['Putih'],
    badge: 'Best Deal',
    pricing: {
      'Casing Pengisian Nirkabel': { baru: 2600000, second: 1850000 }
    }
  },
  {
    id: 'apple-charging-adapter',
    category: 'aksesoris',
    name: 'Adaptor Daya USB-C 20W Original Apple',
    image: 'images/id-11134207-7r98w-lr8elkflm1jae2.jpg',
    tagline: 'Pengisian daya cepat efisien dan aman untuk iPhone, iPad, dan AirPods.',
    chip: 'Power Delivery 3.0',
    display: 'Indikator Daya LED Presisi',
    camera: 'Kompatibilitas Luas Seluruh Seri',
    port: 'USB-C Port 20 Watt Fast Charging',
    material: 'Polikarbonat Tahan Panas Resmi Apple',
    capacities: ['Adaptor 20W Saja', 'Adaptor + Kabel USB-C 1M', 'Adaptor + Kabel USB-C 2M'],
    colors: ['Putih'],
    badge: 'Aksesoris Resmi',
    pricing: {
      'Adaptor 20W Saja': { baru: 450000, second: 300000 },
      'Adaptor + Kabel USB-C 1M': { baru: 650000, second: 450000 },
      'Adaptor + Kabel USB-C 2M': { baru: 750000, second: 550000 }
    }
  }
];

function getProductPrice(product, capacity, condition) {
  if (!product || !product.pricing) return 0;
  const capPricing = product.pricing[capacity] || Object.values(product.pricing)[0];
  if (!capPricing) return 0;
  const isSecond = condition && condition.toLowerCase().includes('second');
  return isSecond ? capPricing.second : capPricing.baru;
}

function getStartingPrice(product) {
  if (!product || !product.pricing) return 0;
  const firstCap = Object.values(product.pricing)[0];
  return firstCap ? firstCap.baru : 0;
}

let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
let activeProductId = null;
let latestInvoiceMessage = '';

const $ = (selector) => document.querySelector(selector);
const productGrid = $('#product-grid');
const searchInput = $('#product-search-input');
const searchClearBtn = $('#search-clear-btn');
const catalogCountInfo = $('#catalog-count-info');
const cartDrawer = $('#cart-drawer');
const cartBackdrop = $('#cart-backdrop');
const variantModal = $('#variant-modal');
const variantBackdrop = $('#variant-backdrop');
const checkoutModal = $('#checkout-modal');
const checkoutBackdrop = $('#checkout-backdrop');
const invoiceModal = $('#invoice-modal');
const invoiceBackdrop = $('#invoice-backdrop');
const menuToggle = $('.menu-toggle');
const siteNav = $('#site-nav');
const compareSelect1 = $('#compare-select-1');
const compareSelect2 = $('#compare-select-2');
const compareResultBox = $('#compare-result-box');

function persistCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function getFilteredProducts() {
  const activeCategory = $('.filter-chip.active')?.dataset.category || 'all';
  const query = (searchInput.value || '').trim().toLowerCase();

  return products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesQuery = !query || product.name.toLowerCase().includes(query) || product.tagline.toLowerCase().includes(query) || product.chip.toLowerCase().includes(query) || product.capacities.some((c) => c.toLowerCase().includes(query));
    return matchesCategory && matchesQuery;
  });
}

function renderProducts() {
  const visibleProducts = getFilteredProducts();
  const condition = $('#condition-filter').value;
  catalogCountInfo.textContent = `Menampilkan ${visibleProducts.length} perangkat tersedia`;

  if (!visibleProducts.length) {
    productGrid.innerHTML = `
      <div class="empty-state">
        <h3>Tidak ada perangkat yang cocok dengan pencarian.</h3>
        <p>Coba kata kunci lain atau pilih opsi Semua Produk pada filter kategori.</p>
        <button class="button button-quiet" type="button" id="reset-filter-btn">Reset Filter & Pencarian</button>
      </div>
    `;
    $('#reset-filter-btn')?.addEventListener('click', resetFilters);
    return;
  }

  productGrid.innerHTML = visibleProducts.map((product) => {
    const startPrice = getStartingPrice(product);
    return `
      <article class="product-card" data-product-id="${product.id}">
        <div class="product-card-banner">
          <img class="product-card-image" src="${product.image}" alt="Foto ${product.name}" width="480" height="360" loading="lazy">
          <span class="product-badge-pill">${product.badge}</span>
        </div>
        <div class="product-card-content">
          <p class="product-series">${product.category.toUpperCase()} SERIES</p>
          <h3>${product.name}</h3>
          <p class="product-tagline">${product.tagline}</p>
          <div class="product-specs-chips">
            <span class="spec-chip">${product.chip}</span>
            <span class="spec-chip">${product.port}</span>
          </div>
          <div class="product-meta">
            <span>Pilihan: ${product.capacities.join(', ')}</span>
            <span>Garansi: ${condition === 'all' ? 'Resmi / Toko' : condition}</span>
          </div>
          <div class="product-card-footer">
            <div class="price-container">
              <span class="price-label">Mulai dari:</span>
              <strong class="product-price">${formatRupiah(startPrice)}</strong>
            </div>
            <div class="product-actions-cluster">
              <button class="button button-primary choose-variant" type="button" data-product-id="${product.id}">Pilih Varian</button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  productGrid.querySelectorAll('.choose-variant').forEach((button) => {
    button.addEventListener('click', () => openVariantModal(button.dataset.productId));
  });
}

function resetFilters() {
  searchInput.value = '';
  searchClearBtn.hidden = true;
  document.querySelectorAll('.filter-chip').forEach((chip) => chip.classList.remove('active'));
  $('[data-category="all"]').classList.add('active');
  $('#condition-filter').value = 'all';
  renderProducts();
}

function getTotalCartPrice() {
  return cart.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
}

function updateCartBadge() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = getTotalCartPrice();
  $('#cart-count-badge').textContent = count;
  $('#cart-toggle-btn').setAttribute('aria-label', `Buka keranjang belanja, ${count} unit senilai ${formatRupiah(totalPrice)}`);
  $('#cart-total-qty').textContent = `${count} unit`;
  $('#drawer-item-count').textContent = `${count} unit dipilih`;
}

function renderCart() {
  const container = $('#cart-items-container');
  if (!cart.length) {
    container.innerHTML = `
      <div class="empty-state cart-empty">
        <div class="empty-icon" aria-hidden="true">🛒</div>
        <h3>Keranjang belanja Jayapple masih kosong.</h3>
        <p>Silakan jelajahi etalase dan pilih varian perangkat yang Anda inginkan.</p>
        <button class="button button-primary" type="button" data-action="close-cart">Jelajahi Produk</button>
      </div>
    `;
    $('#open-checkout-btn').disabled = true;
    $('#clear-cart-btn').disabled = true;
  } else {
    container.innerHTML = cart.map((item, index) => `
      <article class="cart-item">
        <div class="cart-item-image" role="img" aria-label="Ikon ${item.name}">
          <span>📱</span>
        </div>
        <div class="cart-item-info">
          <h3>${item.name}</h3>
          <div class="cart-item-tags">
            <span class="tag-pill">${item.capacity}</span>
            <span class="tag-pill">${item.condition}</span>
            <span class="tag-pill">${item.color}</span>
          </div>
          <div class="cart-item-price-block">
            <span>${formatRupiah(item.unitPrice)}</span>
            <strong class="cart-item-price">Subtotal: ${formatRupiah(item.unitPrice * item.quantity)}</strong>
          </div>
          <div class="cart-item-actions">
            <div class="qty-control compact">
              <button class="qty-btn cart-qty-minus" type="button" aria-label="Kurangi kuantitas ${item.name}" data-index="${index}">-</button>
              <span class="qty-display">${item.quantity}</span>
              <button class="qty-btn cart-qty-plus" type="button" aria-label="Tambah kuantitas ${item.name}" data-index="${index}">+</button>
            </div>
            <button class="remove-item" type="button" data-index="${index}">Hapus</button>
          </div>
        </div>
      </article>
    `).join('');
    $('#open-checkout-btn').disabled = false;
    $('#clear-cart-btn').disabled = false;
  }
  updateCartBadge();
  const totalPrice = getTotalCartPrice();
  $('#cart-total-price').textContent = formatRupiah(totalPrice);
  bindCartControls();
}

function bindCartControls() {
  $('.cart-empty [data-action="close-cart"]')?.addEventListener('click', closeCart);
  document.querySelectorAll('.cart-qty-minus').forEach((button) => {
    button.addEventListener('click', () => changeCartQuantity(Number(button.dataset.index), -1));
  });
  document.querySelectorAll('.cart-qty-plus').forEach((button) => {
    button.addEventListener('click', () => changeCartQuantity(Number(button.dataset.index), 1));
  });
  document.querySelectorAll('.remove-item').forEach((button) => {
    button.addEventListener('click', () => removeCartItem(Number(button.dataset.index)));
  });
}

function changeCartQuantity(index, amount) {
  cart[index].quantity += amount;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  persistCart();
  renderCart();
}

function removeCartItem(index) {
  cart.splice(index, 1);
  persistCart();
  renderCart();
}

function openLayer(layer, backdrop) {
  layer.hidden = false;
  backdrop.hidden = false;
  document.body.classList.add('modal-open');
}

function closeLayer(layer, backdrop) {
  layer.hidden = true;
  backdrop.hidden = true;
  if ([cartDrawer, variantModal, checkoutModal, invoiceModal].every((item) => item.hidden)) {
    document.body.classList.remove('modal-open');
  }
}

function openCart() {
  renderCart();
  openLayer(cartDrawer, cartBackdrop);
  $('#cart-toggle-btn').setAttribute('aria-expanded', 'true');
  $('#close-cart-btn').focus();
}

function closeCart() {
  closeLayer(cartDrawer, cartBackdrop);
  $('#cart-toggle-btn').setAttribute('aria-expanded', 'false');
}

function updateVariantPreview() {
  const product = products.find((item) => item.id === activeProductId);
  if (!product) return;
  const capacity = $('#modal-capacity-select').value;
  const condition = $('#modal-condition-select').value;
  const color = $('#modal-color-select').value;
  const quantity = Number($('#modal-quantity-input').value);
  const unitPrice = getProductPrice(product, capacity, condition);
  const totalPrice = unitPrice * quantity;

  $('#variant-selection-preview').innerHTML = `
    <span>${product.name} | ${capacity} | ${condition} | Warna ${color}</span><br>
    <strong>Harga Satuan: ${formatRupiah(unitPrice)} | Total (${quantity}x): ${formatRupiah(totalPrice)}</strong>
  `;
}

function openVariantModal(productId) {
  activeProductId = productId;
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  $('#variant-modal-title').textContent = `Konfigurasi ${product.name}`;
  $('#variant-product-desc').textContent = `${product.tagline} Prosesor: ${product.chip}. Port: ${product.port}.`;
  $('#modal-capacity-select').innerHTML = product.capacities.map((c) => `<option value="${c}">${c}</option>`).join('');
  $('#modal-condition-select').value = 'Baru Segel Resmi';
  $('#modal-color-select').innerHTML = product.colors.map((col) => `<option value="${col}">${col}</option>`).join('');
  $('#modal-quantity-input').value = '1';
  updateVariantPreview();
  openLayer(variantModal, variantBackdrop);
  $('#close-variant-btn').focus();
}

function closeVariantModal() {
  closeLayer(variantModal, variantBackdrop);
  activeProductId = null;
}

function addActiveVariantToCart() {
  const product = products.find((item) => item.id === activeProductId);
  if (!product) return;
  const capacity = $('#modal-capacity-select').value;
  const condition = $('#modal-condition-select').value;
  const color = $('#modal-color-select').value;
  const quantity = Number($('#modal-quantity-input').value);
  const unitPrice = getProductPrice(product, capacity, condition);

  const item = {
    productId: product.id,
    name: product.name,
    capacity,
    condition,
    color,
    quantity,
    unitPrice
  };

  const existing = cart.find((c) => c.productId === item.productId && c.capacity === item.capacity && c.condition === item.condition && c.color === item.color);
  if (existing) {
    existing.quantity += item.quantity;
    existing.unitPrice = unitPrice;
  } else {
    cart.push(item);
  }

  persistCart();
  renderCart();
  closeVariantModal();
  openCart();
}

function openCheckout() {
  if (!cart.length) return;
  const totalPrice = getTotalCartPrice();
  $('#checkout-items-list').innerHTML = cart.map((item) => `
    <div class="checkout-item">
      <div class="checkout-item-title">
        <strong>${item.name} (${item.capacity})</strong>
        <span class="checkout-item-qty">${item.quantity}x @ ${formatRupiah(item.unitPrice)}</span>
      </div>
      <span class="checkout-item-sub">${item.condition} | Warna: ${item.color} | Subtotal: ${formatRupiah(item.unitPrice * item.quantity)}</span>
    </div>
  `).join('');
  $('#checkout-units-count').textContent = `${cart.reduce((total, item) => total + item.quantity, 0)} unit`;
  $('#checkout-total-price-display').textContent = formatRupiah(totalPrice);
  closeCart();
  openLayer(checkoutModal, checkoutBackdrop);
  $('#customer-name').focus();
}

function closeCheckout() {
  closeLayer(checkoutModal, checkoutBackdrop);
}

function createInvoiceNumber() {
  const date = new Date();
  const datePart = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
  const randomPart = Math.floor(1000 + Math.random() * 9000);
  return `#INV-${datePart}-${randomPart}`;
}

function createInvoiceMessage(data, invoiceNumber, grandTotal) {
  const items = cart.map((item) => `- ${item.name} x${item.quantity} : ${formatRupiah(item.unitPrice * item.quantity)}\n  Varian: ${item.capacity}, ${item.condition}, ${item.color}`).join('\n');
  return `*FORMULIR PEMESANAN - JAYAPPLE*\n----------------------------------\n*Nama Lengkap:* ${data.customerName}\n*Nomor WhatsApp Aktif:* ${data.customerPhone}\n*Daftar Pesanan:*\n${items}\n*Metode Pengambilan / Pengiriman:* ${data.deliveryMethod}\n*Alamat Lengkap:* ${data.customerAddress || 'Ambil langsung di outlet Jayapple (Jl. Bojong Indah RT 01 / RW 06)'}\n*Metode Pembayaran:* ${data.paymentMethod}\n*Instruksi Khusus:* ${data.orderNote || 'Tidak ada'}\n----------------------------------\n*Subtotal:* ${formatRupiah(grandTotal)}\n*Diskon:* Rp0\n*Total Bayar:* ${formatRupiah(grandTotal)}\n----------------------------------\nMohon konfirmasi pesanan saya. Terima kasih!`;
}

function renderInvoice(data, invoiceNumber) {
  const grandTotal = getTotalCartPrice();
  $('#invoice-number-display').textContent = invoiceNumber;
  $('#invoice-date-display').textContent = new Date().toLocaleString('id-ID');
  $('#invoice-customer-display').textContent = data.customerName;
  $('#invoice-phone-display').textContent = data.customerPhone;
  $('#invoice-delivery-display').textContent = data.deliveryMethod;
  $('#invoice-payment-display').textContent = data.paymentMethod;
  $('#invoice-table-body').innerHTML = cart.map((item) => `
    <tr>
      <td><strong>${item.name}</strong><br><small>${item.capacity}</small></td>
      <td>${item.condition}<br><small>Warna: ${item.color}</small></td>
      <td>${item.quantity} unit x ${formatRupiah(item.unitPrice)}</td>
      <td><strong>${formatRupiah(item.unitPrice * item.quantity)}</strong></td>
    </tr>
  `).join('');
  latestInvoiceMessage = createInvoiceMessage(data, invoiceNumber, grandTotal);

  try {
    const orders = JSON.parse(localStorage.getItem(ORDERS_STORAGE_KEY) || '[]');
    orders.unshift({
      invoiceNumber,
      createdAt: new Date().toLocaleString('id-ID'),
      customerName: data.customerName,
      customerPhone: data.customerPhone,
      deliveryMethod: data.deliveryMethod,
      totalAmount: grandTotal,
      items: [...cart]
    });
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
  } catch {}
}

function submitCheckout(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const feedback = $('#checkout-feedback');
  const data = Object.fromEntries(new FormData(form).entries());
  feedback.className = 'form-feedback';
  const isPickup = data.deliveryMethod.includes('Ambil Sendiri');

  if (!data.customerName.trim() || !data.customerPhone.trim() || !data.deliveryMethod || !data.paymentMethod || (!isPickup && !data.customerAddress.trim())) {
    feedback.textContent = 'Harap isi nama, nomor WhatsApp aktif, metode pengiriman, dan alamat tujuan.';
    feedback.classList.add('error');
    return;
  }

  const invoiceNumber = createInvoiceNumber();
  renderInvoice(data, invoiceNumber);
  closeCheckout();
  openLayer(invoiceModal, invoiceBackdrop);
  $('#close-invoice-btn').focus();
  sendWhatsApp(latestInvoiceMessage, $('#invoice-feedback'));
}

function sendWhatsApp(message, feedbackElement) {
  if (!WHATSAPP_NUMBER) {
    feedbackElement.textContent = 'Nomor WhatsApp admin dapat dibuka langsung. Anda juga dapat menyalin teks faktur ini ke clipboard.';
    feedbackElement.className = 'form-feedback success';
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
}

function updateMenu(open) {
  siteNav.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? 'Tutup' : 'Menu';
}

function closeAllOverlays() {
  if (!variantModal.hidden) closeVariantModal();
  if (!checkoutModal.hidden) closeCheckout();
  if (!invoiceModal.hidden) closeLayer(invoiceModal, invoiceBackdrop);
  if (!cartDrawer.hidden) closeCart();
  updateMenu(false);
}

function updateShippingAddress() {
  const isPickup = $('#delivery-method').value.includes('Ambil Sendiri');
  $('#shipping-address-group').hidden = isPickup;
  $('#customer-address').required = !isPickup;
  $('#shipping-fee-label').textContent = isPickup ? 'Bebas Biaya (Ambil di Outlet)' : 'Dihitung Sesuai Ekspedisi';
}

function initCompareSelectors() {
  const options = products.map((p) => `<option value="${p.id}">[${p.category.toUpperCase()}] ${p.name}</option>`).join('');
  compareSelect1.innerHTML = options;
  compareSelect2.innerHTML = options;
  compareSelect1.value = 'iphone-15-pro';
  compareSelect2.value = 'macbook-pro-14-m4';
  renderComparison();

  compareSelect1.addEventListener('change', renderComparison);
  compareSelect2.addEventListener('change', renderComparison);
}

function renderComparison() {
  const p1 = products.find((p) => p.id === compareSelect1.value);
  const p2 = products.find((p) => p.id === compareSelect2.value);
  if (!p1 || !p2) return;

  const p1Price = getStartingPrice(p1);
  const p2Price = getStartingPrice(p2);

  compareResultBox.innerHTML = `
    <table class="compare-table">
      <thead>
        <tr>
          <th scope="col" class="param-col">Parameter Perangkat</th>
          <th scope="col">
            <span class="compare-head-badge">${p1.badge}</span>
            <strong class="compare-head-name">${p1.name}</strong>
            <p class="compare-head-price">Mulai dari ${formatRupiah(p1Price)}</p>
            <button class="button button-quiet compare-pick-btn" type="button" data-pick="${p1.id}">Konfigurasi Unit Ini</button>
          </th>
          <th scope="col">
            <span class="compare-head-badge">${p2.badge}</span>
            <strong class="compare-head-name">${p2.name}</strong>
            <p class="compare-head-price">Mulai dari ${formatRupiah(p2Price)}</p>
            <button class="button button-quiet compare-pick-btn" type="button" data-pick="${p2.id}">Konfigurasi Unit Ini</button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Kategori & Seri</th>
          <td><strong>${p1.category.toUpperCase()}</strong></td>
          <td><strong>${p2.category.toUpperCase()}</strong></td>
        </tr>
        <tr>
          <th scope="row">Kisaran Harga Pasar</th>
          <td><strong class="compare-price-val">${formatRupiah(p1Price)}</strong></td>
          <td><strong class="compare-price-val">${formatRupiah(p2Price)}</strong></td>
        </tr>
        <tr>
          <th scope="row">Prosesor / Chipset</th>
          <td><strong>${p1.chip}</strong></td>
          <td><strong>${p2.chip}</strong></td>
        </tr>
        <tr>
          <th scope="row">Layar & Tampilan</th>
          <td>${p1.display}</td>
          <td>${p2.display}</td>
        </tr>
        <tr>
          <th scope="row">Sistem Kamera / Sensor</th>
          <td>${p1.camera}</td>
          <td>${p2.camera}</td>
        </tr>
        <tr>
          <th scope="row">Port Konektivitas</th>
          <td>${p1.port}</td>
          <td>${p2.port}</td>
        </tr>
        <tr>
          <th scope="row">Material Fisik</th>
          <td>${p1.material}</td>
          <td>${p2.material}</td>
        </tr>
        <tr>
          <th scope="row">Opsi Kapasitas</th>
          <td>${p1.capacities.join(', ')}</td>
          <td>${p2.capacities.join(', ')}</td>
        </tr>
        <tr>
          <th scope="row">Inspeksi Standar</th>
          <td>25 Titik QC + Serial Resmi</td>
          <td>25 Titik QC + Serial Resmi</td>
        </tr>
      </tbody>
    </table>
  `;

  compareResultBox.querySelectorAll('.compare-pick-btn').forEach((btn) => {
    btn.addEventListener('click', () => openVariantModal(btn.dataset.pick));
  });
}

searchInput.addEventListener('input', () => {
  searchClearBtn.hidden = !searchInput.value.trim();
  renderProducts();
});

searchClearBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchClearBtn.hidden = true;
  searchInput.focus();
  renderProducts();
});

$('.filter-group-series').addEventListener('click', (event) => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  document.querySelectorAll('.filter-chip').forEach((chip) => chip.classList.remove('active'));
  button.classList.add('active');
  renderProducts();
});

$('#condition-filter').addEventListener('change', renderProducts);
$('#cart-toggle-btn').addEventListener('click', openCart);
$('#close-cart-btn').addEventListener('click', closeCart);
cartBackdrop.addEventListener('click', closeCart);
$('#clear-cart-btn').addEventListener('click', () => {
  cart = [];
  persistCart();
  renderCart();
});

$('#close-variant-btn').addEventListener('click', closeVariantModal);
variantBackdrop.addEventListener('click', closeVariantModal);
['modal-capacity-select', 'modal-condition-select', 'modal-color-select'].forEach((id) => {
  $(`#${id}`).addEventListener('change', updateVariantPreview);
});

$('#modal-qty-minus').addEventListener('click', () => {
  const input = $('#modal-quantity-input');
  input.value = Math.max(1, Number(input.value) - 1);
  updateVariantPreview();
});

$('#modal-qty-plus').addEventListener('click', () => {
  const input = $('#modal-quantity-input');
  input.value = Math.min(10, Number(input.value) + 1);
  updateVariantPreview();
});

$('#confirm-add-cart-btn').addEventListener('click', addActiveVariantToCart);
$('#open-checkout-btn').addEventListener('click', openCheckout);
$('#close-checkout-btn').addEventListener('click', closeCheckout);
checkoutBackdrop.addEventListener('click', closeCheckout);
$('#checkout-form').addEventListener('submit', submitCheckout);
$('#delivery-method').addEventListener('change', updateShippingAddress);
$('#close-invoice-btn').addEventListener('click', () => closeLayer(invoiceModal, invoiceBackdrop));
invoiceBackdrop.addEventListener('click', () => closeLayer(invoiceModal, invoiceBackdrop));

$('#compare-nav-btn').addEventListener('click', () => {
  $('#komparasi').scrollIntoView({ behavior: 'smooth' });
  compareSelect1.focus();
});

$('#invoice-whatsapp-btn').addEventListener('click', () => {
  sendWhatsApp(latestInvoiceMessage, $('#invoice-feedback'));
});

$('#invoice-print-btn').addEventListener('click', () => {
  window.print();
});

$('#invoice-copy-btn').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(latestInvoiceMessage);
    $('#invoice-feedback').textContent = 'Faktur pesanan berhasil disalin. Buka WhatsApp untuk mengirimkannya.';
    $('#invoice-feedback').className = 'form-feedback success';
  } catch {
    $('#invoice-feedback').textContent = 'Penyalinan otomatis tidak didukung peramban. Blok dan salin teks faktur secara manual.';
    $('#invoice-feedback').className = 'form-feedback error';
  }
});

menuToggle.addEventListener('click', () => updateMenu(!siteNav.classList.contains('open')));
siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => updateMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeAllOverlays();
});

$('#trade-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const feedback = $('#trade-feedback');
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  feedback.className = 'form-feedback';

  if (!data.oldDevice.trim() || !data.condition) {
    feedback.textContent = 'Harap isi model perangkat lama dan kondisi untuk menghitung taksiran awal.';
    feedback.classList.add('error');
    return;
  }

  feedback.textContent = 'Format trade-in siap dikirimkan. WhatsApp admin Jayapple akan terbuka.';
  feedback.classList.add('success');
  const message = `Halo Jayapple, saya ingin mengajukan trade-in unit:\nPerangkat lama: ${data.oldDevice}\nKondisi: ${data.condition}\nIncaran unit baru: ${data.targetModel}\nMohon taksiran harga pasar dan prosedur verifikasi fisik.`;
  sendWhatsApp(message, feedback);
});

$('#whatsapp-button').addEventListener('click', () => {
  sendWhatsApp('Halo Jayapple, saya ingin konsultasi mengenai ketersediaan stok perangkat Apple di outlet.', $('#contact-feedback'));
});

renderProducts();
renderCart();
updateShippingAddress();
initCompareSelectors();
