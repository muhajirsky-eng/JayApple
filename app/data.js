export const STORE_PHONE = '0895-4117-65065';
export const STORE_WHATSAPP = '62895411765065';
export const STORE_ADDRESS = 'Jl. Bojong Indah RT 01 / RW 06';
export const STORE_HOURS = '09.00 - 22.00 WIB';
export const STORE_BANK_NAME = 'BCA';
export const STORE_BANK_NUMBER = '2303175741';
export const STORE_BANK_HOLDER = 'Jayapple';

export function formatRupiah(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(amount);
}

export const products = [
  {
    id: 'iphone-16-pro-max',
    category: 'iphone',
    name: 'iPhone 16 Pro Max',
    image: '/images/Iphone18pro.jpg',
    tagline: 'Layar 6.9 inci ProMotion 120Hz, bodi titanium, dan kontrol kamera khusus.',
    chip: 'A18 Pro (3nm)',
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
    image: '/images/iphone 16 pro.jpg',
    tagline: 'Layar 6.3 inci ProMotion 120Hz, bodi titanium, dan tombol Camera Control.',
    chip: 'A18 Pro (3nm)',
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
    image: '/images/iphone_16_plus_ultramarine_01_3.jpeg',
    tagline: 'Warna ultramarine berani, chip A18, dan tombol Camera Control terintegrasi.',
    chip: 'A18 (3nm)',
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
    image: '/images/iphone air.webp',
    tagline: 'Desain titanium ultra tipis dengan profil ramping dan performa generasi baru.',
    chip: 'Apple A18 Pro Slim',
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
    image: '/images/IPHONE DUO.webp',
    tagline: 'Paket sepasang iPhone kurasi Jayapple untuk keluarga atau pasangan dengan garansi toko.',
    chip: 'A15 / A16 Bionic Dual Set',
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
    image: '/images/iphone-17-pro-silver-1000_1_2.webp',
    tagline: 'Layar 6.7 inci ProMotion 120Hz, bodi titanium, kamera telefoto 5x.',
    chip: 'A17 Pro (3nm)',
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
    image: '/images/iphone15pro.jpg',
    tagline: 'Desain titanium ringan, tombol Action terprogram, dan performa grafis pro.',
    chip: 'A17 Pro (3nm)',
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
    image: '/images/iphone_14_pro_deep_purple_1_1.jpg',
    tagline: 'Layar Always-On, Dynamic Island, dan sistem kamera pro 48MP.',
    chip: 'A16 Bionic',
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
    image: '/images/sierra_20blue-1.webp',
    tagline: 'Warna legendaris Sierra Blue dengan layar 120Hz ProMotion dan tiga kamera pro.',
    chip: 'A15 Bionic (GPU 5-core)',
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
    image: '/images/iPhone13Reg_4_251121211145_ll.jpg.jpg',
    tagline: 'Stabilisasi sensor-shift dan performa kencang untuk pemakaian jangka panjang.',
    chip: 'A15 Bionic',
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
    image: '/images/iphone11pro.jpg',
    tagline: 'Bodi kaca matte dengan tiga kamera pro, pilihan hemat berkualitas tinggi.',
    chip: 'A13 Bionic',
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
    image: '/images/iphone XR.jpg',
    tagline: 'Layar Liquid Retina 6.1 inci, baterai awet, dan pilihan warna ikonik serbaguna.',
    chip: 'A12 Bionic',
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
    image: '/images/mbp14-m4-2024.png',
    tagline: 'Layar Liquid Retina XDR, baterai hingga 24 jam, dan performa komputasi pro.',
    chip: 'Apple M4',
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
    image: '/images/MacbookM4.jpg',
    tagline: 'Performa workstation portabel untuk kompilasi kode dan pengolahan grafis berat.',
    chip: 'Apple M4 Pro',
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
    image: '/images/mackbookM3.jpg',
    tagline: 'Layar Liquid Retina XDR tajam dengan arsitektur GPU Dynamic Caching.',
    chip: 'Apple M3',
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
    image: '/images/mackbookpro5.jpg',
    tagline: 'Workstation mobile bertenaga monster untuk workflow kreatif paling menuntut.',
    chip: 'Apple M3 Max',
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
    image: '/images/mackbookair.jpg',
    tagline: 'Laptop paling tipis dengan chip M3, mendukung dua layar eksternal.',
    chip: 'Apple M3',
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
    image: '/images/macbook_air_m2_midnight_pdp_image_position-1__id_1_1.jpg',
    tagline: 'Bodi aluminium tipis tanpa kipas pendingin, MagSafe, dan layar Liquid Retina.',
    chip: 'Apple M2',
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
    image: '/images/ipadM4.jpg',
    tagline: 'Layar Ultra Retina XDR Tandem OLED 13 inci raksasa, kanvas kreatif utama.',
    chip: 'Apple M4',
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
    image: '/images/ipad11incM4.jpg',
    tagline: 'Layar Ultra Retina XDR Tandem OLED tertipis, mendukung Apple Pencil Pro.',
    chip: 'Apple M4',
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
    image: '/images/ipad11.jpg',
    tagline: 'Layar Liquid Retina cerah dengan kamera depan lanskap 12MP dan Touch ID.',
    chip: 'Apple M2',
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
    image: '/images/cat-ipad.png',
    tagline: 'Ukuran saku 8.3 inci Liquid Retina, praktis untuk mobilitas tinggi.',
    chip: 'A15 Bionic',
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
    image: '/images/Airpoods3.jpg',
    tagline: 'Audio Spasial personal dengan pelacakan kepala dinamis dan tahan keringat.',
    chip: 'Apple H1',
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
    image: '/images/airpods 4.webp',
    tagline: 'Desain open-ear dengan opsi Active Noise Cancellation dan port USB-C.',
    chip: 'Apple H2',
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
    image: '/images/airpods pro gen 2.jpg',
    tagline: 'Peredam kebisingan aktif hingga 2x lebih baik, Audio Adaptif, dan USB-C MagSafe.',
    chip: 'Apple H2',
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
    image: '/images/airpods pro 1.webp',
    tagline: 'Peredam kebisingan aktif dengan ujung silikon lembut dalam tiga ukuran.',
    chip: 'Apple H1',
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
    image: '/images/id-11134207-7r98w-lr8elkflm1jae2.jpg',
    tagline: 'Pengisian daya cepat efisien dan aman untuk iPhone, iPad, dan AirPods.',
    chip: 'Power Delivery 3.0',
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

export function getProductPrice(product, capacity, condition) {
  if (!product || !product.pricing) return 0;
  const capPricing = product.pricing[capacity] || Object.values(product.pricing)[0];
  if (!capPricing) return 0;
  const isSecond = condition && condition.toLowerCase().includes('second');
  return isSecond ? capPricing.second : capPricing.baru;
}

export function getStartingPrice(product) {
  if (!product || !product.pricing) return 0;
  const firstCap = Object.values(product.pricing)[0];
  return firstCap ? firstCap.baru : 0;
}
