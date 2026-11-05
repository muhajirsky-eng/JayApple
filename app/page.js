'use client';

import { useEffect, useMemo, useState } from 'react';
import './globals.css';
import {
  products,
  formatRupiah,
  getProductPrice,
  getStartingPrice,
  STORE_PHONE,
  STORE_WHATSAPP,
  STORE_ADDRESS,
  STORE_HOURS,
  STORE_BANK_NAME,
  STORE_BANK_NUMBER,
  STORE_BANK_HOLDER
} from './data';

const CART_KEY = 'jayapple_cart';
const ORDERS_KEY = 'jayapple_orders';
const TRADEIN_KEY = 'jayapple_tradein_draft';

export default function HomePage() {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [variantCapacity, setVariantCapacity] = useState('');
  const [variantCondition, setVariantCondition] = useState('Baru Segel Resmi');
  const [variantColor, setVariantColor] = useState('');
  const [variantQuantity, setVariantQuantity] = useState(1);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [activeInvoice, setActiveInvoice] = useState(null);
  const [ordersDrawerOpen, setOrdersDrawerOpen] = useState(false);
  const [tradeFormState, setTradeFormState] = useState({ oldDevice: '', condition: '', targetModel: 'iPhone 15 Pro' });
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_KEY);
      if (savedCart) setCart(JSON.parse(savedCart));
      const savedOrders = localStorage.getItem(ORDERS_KEY);
      if (savedOrders) setOrders(JSON.parse(savedOrders));
      const savedTrade = localStorage.getItem(TRADEIN_KEY);
      if (savedTrade) setTradeFormState(JSON.parse(savedTrade));
    } catch {
      setCart([]);
      setOrders([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
    } catch {}
  }, [orders]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch = !q || product.name.toLowerCase().includes(q) || product.chip.toLowerCase().includes(q) || product.tagline.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const totalCartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const totalCartPrice = useMemo(() => {
    return cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  }, [cart]);

  function openVariantModal(product) {
    setSelectedProduct(product);
    setVariantCapacity(product.capacities[0]);
    setVariantColor(product.colors[0]);
    setVariantCondition('Baru Segel Resmi');
    setVariantQuantity(1);
  }

  function closeVariantModal() {
    setSelectedProduct(null);
  }

  const currentVariantUnitPrice = useMemo(() => {
    if (!selectedProduct) return 0;
    return getProductPrice(selectedProduct, variantCapacity, variantCondition);
  }, [selectedProduct, variantCapacity, variantCondition]);

  function handleAddToCart() {
    if (!selectedProduct) return;
    const unitPrice = getProductPrice(selectedProduct, variantCapacity, variantCondition);
    const newItem = {
      cartItemId: `${selectedProduct.id}-${variantCapacity}-${variantCondition}-${variantColor}`,
      productId: selectedProduct.id,
      name: selectedProduct.name,
      category: selectedProduct.category,
      image: selectedProduct.image,
      capacity: variantCapacity,
      condition: variantCondition,
      color: variantColor,
      quantity: variantQuantity,
      unitPrice
    };

    setCart((prev) => {
      const existingIndex = prev.findIndex((i) => i.cartItemId === newItem.cartItemId);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + newItem.quantity,
          unitPrice
        };
        return next;
      }
      return [...prev, newItem];
    });

    closeVariantModal();
    setCartDrawerOpen(true);
    setToastMessage(`${selectedProduct.name} ditambahkan ke keranjang.`);
  }

  function handleQuantityChange(cartItemId, delta) {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  }

  function handleRemoveItem(cartItemId) {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  }

  function handleClearCart() {
    setCart([]);
  }

  function handleCheckoutSubmit(event) {
    event.preventDefault();
    if (cart.length === 0) return;

    const formData = new FormData(event.currentTarget);
    const date = new Date();
    const dateFormatted = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
    const randomId = Math.floor(1000 + Math.random() * 9000);
    const invoiceNumber = `#INV-${dateFormatted}-${randomId}`;

    const newOrder = {
      invoiceNumber,
      createdAt: date.toLocaleString('id-ID'),
      customerName: formData.get('customerName'),
      customerPhone: formData.get('customerPhone'),
      deliveryMethod: formData.get('deliveryMethod'),
      address: formData.get('customerAddress') || `Ambil langsung di outlet Jayapple (${STORE_ADDRESS})`,
      paymentMethod: formData.get('paymentMethod'),
      orderNote: formData.get('orderNote') || 'Tidak ada instruksi khusus',
      items: [...cart],
      totalUnits: totalCartCount,
      totalAmount: totalCartPrice,
      status: 'Pesanan Terkonfirmasi'
    };

    setOrders((prev) => [newOrder, ...prev]);
    setActiveInvoice(newOrder);
    setCheckoutModalOpen(false);
    setCart([]);
    setToastMessage(`Pesanan ${invoiceNumber} otomatis dikonfirmasi ke WhatsApp Jayapple.`);

    const waUrl = getWhatsAppInvoiceUrl(newOrder);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }

  function getWhatsAppInvoiceUrl(order) {
    const itemList = order.items
      .map((item) => `- ${item.name} x${item.quantity} : ${formatRupiah(item.unitPrice * item.quantity)}\n  Varian: ${item.capacity}, ${item.condition}, ${item.color}`)
      .join('\n');

    const message = `*FORMULIR PEMESANAN - JAYAPPLE*\n----------------------------------\n*Nama Lengkap:* ${order.customerName}\n*Nomor WhatsApp Aktif:* ${order.customerPhone}\n*Daftar Pesanan:*\n${itemList}\n*Metode Pengambilan / Pengiriman:* ${order.deliveryMethod}\n*Alamat Lengkap:* ${order.address}\n*Metode Pembayaran:* ${order.paymentMethod}\n*Instruksi Khusus:* ${order.orderNote || 'Tidak ada'}\n----------------------------------\n*Subtotal:* ${formatRupiah(order.totalAmount)}\n*Diskon:* Rp0\n*Total Bayar:* ${formatRupiah(order.totalAmount)}\n----------------------------------\nMohon konfirmasi pesanan saya. Terima kasih!`;
    return `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(message)}`;
  }

  function handleTradeInSubmit(event) {
    event.preventDefault();
    try {
      localStorage.setItem(TRADEIN_KEY, JSON.stringify(tradeFormState));
    } catch {}
    const message = `Halo Jayapple, saya ingin konsultasi trade-in:\nPerangkat lama: ${tradeFormState.oldDevice}\nKondisi: ${tradeFormState.condition}\nIncaran unit baru: ${tradeFormState.targetModel}\nMohon taksiran harga pasar dan prosedur verifikasinya.`;
    window.open(`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Kembali ke beranda Jayapple">
          <img src="/images/logo.png" width="36" height="36" alt="Logo Jayapple" />
          <span>Jayapple</span>
        </a>

        <nav aria-label="Navigasi kategori utama">
          <a href="#katalog">Katalog</a>
          <a href="#inspeksi">Standar Kualitas</a>
          <a href="#trade-in">Trade-in</a>
          <a href="#kontak">Kontak</a>
        </nav>

        <div className="header-actions">
          <button
            className="action-btn"
            type="button"
            onClick={() => setOrdersDrawerOpen(true)}
            aria-label={`Riwayat pesanan, ${orders.length} transaksi`}
          >
            <span>Riwayat</span>
            <b>{orders.length}</b>
          </button>
          <button
            className="action-btn cart-btn"
            type="button"
            onClick={() => setCartDrawerOpen(true)}
            aria-label={`Buka keranjang belanja, ${totalCartCount} item senilai ${formatRupiah(totalCartPrice)}`}
          >
            <span>Keranjang</span>
            <b>{totalCartCount}</b>
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero shell">
          <div>
            <p className="eyebrow">APPLE AUTHORIZED & PRE-OWNED STORE</p>
            <h1>Ekosistem Apple lengkap dengan harga pasar transparan.</h1>
            <p className="lead">
              Temukan iPhone, MacBook, iPad, dan AirPods original di Jayapple. Harga tertera mengikuti kisaran pasar resmi Indonesia, dengan data pesanan tersimpan aman di peramban Anda.
            </p>
            <div className="actions">
              <a className="button primary" href="#katalog">Jelajahi Ekosistem</a>
              <a className="button secondary" href="#trade-in">Ajukan Tukar Tambah</a>
            </div>
            <div className="hero-points">
              <div>
                <strong>Harga Pasar Riil</strong>
                <span>Pilihan Baru dan Pre-Owned</span>
              </div>
              <div>
                <strong>Inspeksi 25 Titik</strong>
                <span>Pemeriksaan fisik dan fungsi</span>
              </div>
              <div>
                <strong>IMEI Terdaftar</strong>
                <span>Kemenperin dan Bea Cukai</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/iphone15pro.jpg" width="600" height="600" fetchPriority="high" alt="iPhone 15 Pro Titanium di Jayapple" />
            <span>Unit stok resmi Jayapple</span>
          </div>
        </section>

        <section id="katalog" className="shell section">
          <div className="section-heading">
            <p className="eyebrow">KATALOG PERANGKAT APPLE</p>
            <h2>Pilih lini produk yang Anda butuhkan.</h2>
            <p>Pilih kategori ekosistem di bawah atau gunakan kotak pencarian untuk menemukan spesifikasi idaman Anda.</p>
          </div>

          <div className="catalog-tools">
            <div className="category-pills" role="tablist" aria-label="Filter kategori produk">
              <button
                className={`pill-btn ${activeCategory === 'all' ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveCategory('all')}
              >
                Semua Produk
              </button>
              <button
                className={`pill-btn ${activeCategory === 'iphone' ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveCategory('iphone')}
              >
                iPhone
              </button>
              <button
                className={`pill-btn ${activeCategory === 'macbook' ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveCategory('macbook')}
              >
                MacBook
              </button>
              <button
                className={`pill-btn ${activeCategory === 'ipad' ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveCategory('ipad')}
              >
                iPad
              </button>
              <button
                className={`pill-btn ${activeCategory === 'airpods' ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveCategory('airpods')}
              >
                AirPods
              </button>
              <button
                className={`pill-btn ${activeCategory === 'aksesoris' ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveCategory('aksesoris')}
              >
                Aksesoris
              </button>
            </div>

            <div className="search-wrap">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari model, prosesor, atau kapasitas (misal: M4, 15 Pro, 256GB)..."
                aria-label="Cari produk Apple di Jayapple"
              />
            </div>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => {
              const startPrice = getStartingPrice(product);
              return (
                <article className="product-card" key={product.id}>
                  <div className="card-thumb">
                    <img src={product.image} width="480" height="360" loading="lazy" alt={product.name} />
                    <span className="badge">{product.badge}</span>
                  </div>
                  <div className="card-content">
                    <span className="card-category">{product.category.toUpperCase()}</span>
                    <h3>{product.name}</h3>
                    <p className="card-tagline">{product.tagline}</p>
                    <div className="spec-tags">
                      <span>{product.chip}</span>
                      <span>{product.capacities[0]}</span>
                    </div>
                    <div className="card-footer">
                      <div className="card-price-block">
                        <small className="price-lead">Mulai dari</small>
                        <strong className="price-val">{formatRupiah(startPrice)}</strong>
                      </div>
                      <button
                        className="button primary"
                        type="button"
                        onClick={() => openVariantModal(product)}
                      >
                        Pilih Varian
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          {filteredProducts.length === 0 && (
            <div className="empty-catalog">
              <p>Tidak ada perangkat yang cocok dengan kriteria pencarian Anda.</p>
              <button
                className="button secondary"
                type="button"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
              >
                Reset Filter
              </button>
            </div>
          )}
        </section>

        <section id="inspeksi" className="shell section dark-section">
          <p className="eyebrow">QUALITY CONTROL JAYAPPLE</p>
          <h2>Protokol inspeksi menyeluruh sebelum penyerahan unit.</h2>
          <div className="feature-grid">
            <div>
              <b>01</b>
              <h3>Harga Terbuka & Realistis</h3>
              <p>Daftar harga pasar Indonesia terperinci sesuai kapasitas memori dan status garansi resmi atau garansi toko.</p>
            </div>
            <div>
              <b>02</b>
              <h3>Inspeksi Perangkat 25 Titik</h3>
              <p>Pemeriksaan True Tone, Face ID, kondisi baterai, speaker, mikrofon, dan kelengkapan aksesoris resmi.</p>
            </div>
            <div>
              <b>03</b>
              <h3>Faktur Pesanan Rapi</h3>
              <p>Setiap transaksi mencetak nomor invoice dengan nominal terhitung otomatis, siap dicetak PDF atau diteruskan ke WhatsApp.</p>
            </div>
          </div>
        </section>

        <section id="trade-in" className="shell section tradein-section">
          <div className="tradein-intro">
            <p className="eyebrow">PROGRAM TUKAR TAMBAH JAYAPPLE</p>
            <h2>Upgrade perangkat lama Anda dengan estimasi adil.</h2>
            <p>Masukkan model lama Anda dan pilih unit incaran. Draf tersimpan di peramban Anda untuk dikonfirmasi bersama tim appraisal kami.</p>
          </div>
          <form className="tradein-form" onSubmit={handleTradeInSubmit}>
            <label htmlFor="trade-old">Perangkat Lama Anda</label>
            <input
              id="trade-old"
              required
              value={tradeFormState.oldDevice}
              onChange={(e) => setTradeFormState({ ...tradeFormState, oldDevice: e.target.value })}
              placeholder="Contoh: iPhone 11 128GB Black Ex-Resmi"
            />

            <label htmlFor="trade-cond">Kondisi dan Kelengkapan</label>
            <select
              id="trade-cond"
              required
              value={tradeFormState.condition}
              onChange={(e) => setTradeFormState({ ...tradeFormState, condition: e.target.value })}
            >
              <option value="">Pilih kondisi perangkat</option>
              <option value="Mulus Fullset">Mulus tanpa lecet, fungsi normal 100%, kotak lengkap</option>
              <option value="Pemakaian Wajar Unit Only">Pemakaian wajar, bodi mulus, unit batangan</option>
              <option value="Ada Minus Fisik atau Baterai">Ada lecet bodi atau baterai perlu servis</option>
            </select>

            <label htmlFor="trade-target">Unit Incaran di Jayapple</label>
            <select
              id="trade-target"
              value={tradeFormState.targetModel}
              onChange={(e) => setTradeFormState({ ...tradeFormState, targetModel: e.target.value })}
            >
              <option value="iPhone 15 Pro">iPhone 15 Pro</option>
              <option value="iPhone 15 Pro Max">iPhone 15 Pro Max</option>
              <option value="MacBook Pro 14 M4">MacBook Pro 14 M4</option>
              <option value="MacBook Air 13 M2">MacBook Air 13 M2</option>
              <option value="iPad Pro 11 M4">iPad Pro 11 M4</option>
              <option value="AirPods Generasi ke-3">AirPods Generasi ke-3</option>
            </select>

            <button className="button primary full" type="submit">
              Konsultasikan via WhatsApp
            </button>
          </form>
        </section>

        <section id="kontak" className="shell section contact-grid-section">
          <div>
            <p className="eyebrow">LAYANAN OUTLET JAYAPPLE</p>
            <h2>Kunjungi outlet kami atau konsultasi daring.</h2>
            <p>Anda dipersilakan memeriksa fisik unit, nomor seri, dan battery health langsung di outlet fisik kami.</p>
          </div>
          <div className="store-info-card">
            <div>
              <span>Alamat Outlet</span>
              <strong>{STORE_ADDRESS}</strong>
            </div>
            <div>
              <span>Jam Operasional</span>
              <strong>{STORE_HOURS}</strong>
            </div>
            <div>
              <span>Rekening Resmi Pembayaran</span>
              <strong>{STORE_BANK_NAME} {STORE_BANK_NUMBER} a/n {STORE_BANK_HOLDER}</strong>
            </div>
            <div>
              <span>WhatsApp / Telepon</span>
              <strong>{STORE_PHONE}</strong>
            </div>
            <a
              className="button primary full"
              href={`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent('Halo Jayapple, saya ingin menanyakan ketersediaan unit dan alamat outlet di ' + STORE_ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat WhatsApp ({STORE_PHONE})
            </a>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <div>
          <strong>Jayapple</strong>
          <p>{STORE_ADDRESS} | Buka: {STORE_HOURS} | Rek: {STORE_BANK_NAME} {STORE_BANK_NUMBER}</p>
        </div>
        <div>
          <span>© [TAHUN] Jayapple. Seluruh transaksi menggunakan invoice terverifikasi.</span>
        </div>
      </footer>

      {selectedProduct && (
        <div
          className="overlay"
          role="presentation"
          onMouseDown={(e) => e.target === e.currentTarget && closeVariantModal()}
        >
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="variant-modal-title">
            <button className="close" type="button" onClick={closeVariantModal} aria-label="Tutup pemilih varian">
              x
            </button>
            <img src={selectedProduct.image} width="360" height="240" alt={selectedProduct.name} />
            <p className="eyebrow">{selectedProduct.category.toUpperCase()}</p>
            <h2 id="variant-modal-title">{selectedProduct.name}</h2>
            <p>{selectedProduct.tagline}</p>

            <label htmlFor="variant-cap-select">Pilihan Kapasitas / Spesifikasi</label>
            <select
              id="variant-cap-select"
              value={variantCapacity}
              onChange={(e) => setVariantCapacity(e.target.value)}
            >
              {selectedProduct.capacities.map((cap) => (
                <option key={cap} value={cap}>
                  {cap}
                </option>
              ))}
            </select>

            <label htmlFor="variant-cond-select">Kondisi Garansi</label>
            <select
              id="variant-cond-select"
              value={variantCondition}
              onChange={(e) => setVariantCondition(e.target.value)}
            >
              <option value="Baru Segel Resmi">Baru Segel Resmi (Garansi 1 Tahun)</option>
              <option value="Second Mulus Garansi Toko">Second Mulus (Garansi Toko 1 Bulan)</option>
            </select>

            <label htmlFor="variant-col-select">Warna Fisik</label>
            <select
              id="variant-col-select"
              value={variantColor}
              onChange={(e) => setVariantColor(e.target.value)}
            >
              {selectedProduct.colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>

            <div className="qty-row">
              <label htmlFor="variant-qty-input">Jumlah Unit</label>
              <div className="qty-box">
                <button
                  type="button"
                  onClick={() => setVariantQuantity(Math.max(1, variantQuantity - 1))}
                  aria-label="Kurangi jumlah"
                >
                  -
                </button>
                <input
                  id="variant-qty-input"
                  type="number"
                  readOnly
                  value={variantQuantity}
                />
                <button
                  type="button"
                  onClick={() => setVariantQuantity(Math.min(10, variantQuantity + 1))}
                  aria-label="Tambah jumlah"
                >
                  +
                </button>
              </div>
            </div>

            <div className="variant-calc-box">
              <div className="variant-calc-row">
                <span>Harga Satuan:</span>
                <strong>{formatRupiah(currentVariantUnitPrice)}</strong>
              </div>
              <div className="variant-calc-row">
                <span>Total ({variantQuantity} unit):</span>
                <strong className="calc-total">{formatRupiah(currentVariantUnitPrice * variantQuantity)}</strong>
              </div>
            </div>

            <button className="button primary full" type="button" onClick={handleAddToCart}>
              Tambahkan ke Keranjang: {formatRupiah(currentVariantUnitPrice * variantQuantity)}
            </button>
          </section>
        </div>
      )}

      {cartDrawerOpen && (
        <div
          className="overlay"
          role="presentation"
          onMouseDown={(e) => e.target === e.currentTarget && setCartDrawerOpen(false)}
        >
          <aside className="drawer" role="dialog" aria-modal="true" aria-labelledby="cart-drawer-title">
            <div className="drawer-head">
              <h2 id="cart-drawer-title">Keranjang Belanja</h2>
              <button className="close" type="button" onClick={() => setCartDrawerOpen(false)} aria-label="Tutup keranjang">
                x
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="drawer-empty">
                <p>Keranjang belanja Jayapple Anda masih kosong.</p>
                <button
                  className="button primary"
                  type="button"
                  onClick={() => setCartDrawerOpen(false)}
                >
                  Mulai Belanja
                </button>
              </div>
            ) : (
              <>
                <div className="drawer-items">
                  {cart.map((item) => (
                    <article className="cart-card" key={item.cartItemId}>
                      <img src={item.image} width="64" height="64" alt={item.name} />
                      <div className="cart-card-info">
                        <strong>{item.name}</strong>
                        <span>{item.capacity} | {item.color}</span>
                        <small>{item.condition}</small>
                        <div className="cart-price-tag">
                          <span>{formatRupiah(item.unitPrice)}</span>
                          <strong className="cart-item-subtotal">Subtotal: {formatRupiah(item.unitPrice * item.quantity)}</strong>
                        </div>
                        <div className="cart-card-actions">
                          <div className="qty-box compact">
                            <button
                              type="button"
                              onClick={() => handleQuantityChange(item.cartItemId, -1)}
                              aria-label="Kurangi"
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => handleQuantityChange(item.cartItemId, 1)}
                              aria-label="Tambah"
                            >
                              +
                            </button>
                          </div>
                          <button
                            className="remove-btn"
                            type="button"
                            onClick={() => handleRemoveItem(item.cartItemId)}
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="drawer-foot">
                  <div className="summary-line">
                    <span>Total Unit</span>
                    <strong>{totalCartCount} item</strong>
                  </div>
                  <div className="summary-line total-price-line">
                    <span>Total Estimasi Belanja</span>
                    <strong>{formatRupiah(totalCartPrice)}</strong>
                  </div>
                  <button
                    className="button primary full"
                    type="button"
                    onClick={() => {
                      setCartDrawerOpen(false);
                      setCheckoutModalOpen(true);
                    }}
                  >
                    Lanjut ke Checkout: {formatRupiah(totalCartPrice)}
                  </button>
                  <button
                    className="button secondary full"
                    type="button"
                    onClick={handleClearCart}
                  >
                    Kosongkan Keranjang
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}

      {checkoutModalOpen && (
        <div
          className="overlay"
          role="presentation"
          onMouseDown={(e) => e.target === e.currentTarget && setCheckoutModalOpen(false)}
        >
          <form className="modal" onSubmit={handleCheckoutSubmit}>
            <button
              className="close"
              type="button"
              onClick={() => setCheckoutModalOpen(false)}
              aria-label="Tutup form checkout"
            >
              x
            </button>
            <p className="eyebrow">FORMULIR PESANAN JAYAPPLE</p>
            <h2>Informasi Penerima & Pembayaran</h2>

            <label htmlFor="cust-name">Nama Lengkap</label>
            <input id="cust-name" name="customerName" required placeholder="Nama pemesan sesuai KTP" />

            <label htmlFor="cust-phone">Nomor WhatsApp Aktif</label>
            <input id="cust-phone" name="customerPhone" required type="tel" placeholder="08xxxxxxxxxx" />

            <label htmlFor="del-method">Metode Pengambilan / Pengiriman</label>
            <select id="del-method" name="deliveryMethod" required>
              <option value={`Ambil Langsung di Outlet Jayapple (${STORE_ADDRESS})`}>Ambil Langsung di Outlet Jayapple ({STORE_ADDRESS})</option>
              <option value="Kurir Ekspedisi JNE YES Asuransi">Kurir Ekspedisi JNE YES (Asuransi)</option>
              <option value="Kurir Ekspedisi J&T Express Asuransi">Kurir Ekspedisi J&T Express (Asuransi)</option>
              <option value="Kurir Ekspedisi SiCepat BEST">Kurir Ekspedisi SiCepat BEST</option>
            </select>

            <label htmlFor="cust-addr">Alamat Lengkap (Kosongkan jika ambil di outlet)</label>
            <textarea
              id="cust-addr"
              name="customerAddress"
              rows="3"
              placeholder="Alamat jalan, nomor rumah, kota, dan kode pos"
            />

            <label htmlFor="pay-method">Metode Pembayaran</label>
            <select id="pay-method" name="paymentMethod" required>
              <option value={`Transfer Bank BCA (${STORE_BANK_NUMBER} a/n ${STORE_BANK_HOLDER})`}>Transfer Bank BCA ({STORE_BANK_NUMBER} a/n {STORE_BANK_HOLDER})</option>
              <option value="QRIS Pembayaran Digital Terverifikasi">QRIS Pembayaran Digital Terverifikasi</option>
              <option value="Bayar Tunai / EDC di Outlet Jayapple">Bayar Tunai / EDC di Outlet Jayapple</option>
            </select>

            <label htmlFor="order-note">Instruksi Khusus (Opsional)</label>
            <input id="order-note" name="orderNote" placeholder="Misal: packing kayu tambahan" />

            <div className="checkout-summary-box">
              <div className="checkout-summary-row">
                <span>Jumlah Perangkat:</span>
                <strong>{totalCartCount} unit</strong>
              </div>
              <div className="checkout-summary-row">
                <span>Total Biaya Perangkat:</span>
                <strong className="checkout-total-val">{formatRupiah(totalCartPrice)}</strong>
              </div>
            </div>

            <button className="button primary full btn-wa-checkout" type="submit">
              <svg className="wa-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.13.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.19-.06-.1-.23-.17-.48-.29z"/>
              </svg>
              <span>Konfirmasi Pesanan via WhatsApp: {formatRupiah(totalCartPrice)}</span>
            </button>
          </form>
        </div>
      )}

      {activeInvoice && (
        <div
          className="overlay"
          role="presentation"
          onMouseDown={(e) => e.target === e.currentTarget && setActiveInvoice(null)}
        >
          <section className="modal invoice-modal" role="dialog" aria-modal="true" aria-labelledby="inv-modal-title">
            <button className="close" type="button" onClick={() => setActiveInvoice(null)} aria-label="Tutup invoice">
              x
            </button>
            <div className="inv-badge">FAKTUR PESANAN RESMI JAYAPPLE</div>
            <h2 id="inv-modal-title">{activeInvoice.invoiceNumber}</h2>
            <div className="inv-meta">
              <div>
                <span>Waktu Transaksi</span>
                <strong>{activeInvoice.createdAt}</strong>
              </div>
              <div>
                <span>Nama Pemesan</span>
                <strong>{activeInvoice.customerName}</strong>
              </div>
              <div>
                <span>WhatsApp</span>
                <strong>{activeInvoice.customerPhone}</strong>
              </div>
              <div>
                <span>Total Pembayaran</span>
                <strong className="inv-total-price">{formatRupiah(activeInvoice.totalAmount)}</strong>
              </div>
            </div>

            <div className="inv-table-wrap">
              <table className="inv-table">
                <thead>
                  <tr>
                    <th>Perangkat</th>
                    <th>Spesifikasi</th>
                    <th>Harga</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {activeInvoice.items.map((item, idx) => (
                    <tr key={idx}>
                      <td><strong>{item.name}</strong></td>
                      <td>{item.capacity} ({item.condition}, {item.color})</td>
                      <td>{formatRupiah(item.unitPrice)} x {item.quantity}</td>
                      <td><strong>{formatRupiah(item.unitPrice * item.quantity)}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="inv-grand-total">
              <span>Grand Total Pembayaran:</span>
              <strong>{formatRupiah(activeInvoice.totalAmount)}</strong>
            </div>

            <div className="inv-bank-box">
              <span>Rekening Resmi Pembayaran:</span>
              <strong>{STORE_BANK_NAME} {STORE_BANK_NUMBER} a/n {STORE_BANK_HOLDER}</strong>
              <small>Jam Operasional: {STORE_HOURS} | Outlet: {STORE_ADDRESS}</small>
            </div>

            <div className="inv-actions">
              <a
                className="button primary full"
                href={getWhatsAppInvoiceUrl(activeInvoice)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Kirimkan Faktur ke WhatsApp Jayapple
              </a>
              <button
                className="button secondary full"
                type="button"
                onClick={() => window.print()}
              >
                Cetak / Simpan PDF
              </button>
            </div>
          </section>
        </div>
      )}

      {ordersDrawerOpen && (
        <div
          className="overlay"
          role="presentation"
          onMouseDown={(e) => e.target === e.currentTarget && setOrdersDrawerOpen(false)}
        >
          <aside className="drawer" role="dialog" aria-modal="true" aria-labelledby="history-drawer-title">
            <div className="drawer-head">
              <h2 id="history-drawer-title">Riwayat Faktur Pesanan</h2>
              <button className="close" type="button" onClick={() => setOrdersDrawerOpen(false)} aria-label="Tutup riwayat">
                x
              </button>
            </div>
            {orders.length === 0 ? (
              <div className="drawer-empty">
                <p>Belum ada riwayat faktur yang diterbitkan di peramban ini.</p>
              </div>
            ) : (
              <div className="drawer-items">
                {orders.map((order) => (
                  <article className="order-history-card" key={order.invoiceNumber}>
                    <div className="order-history-top">
                      <strong>{order.invoiceNumber}</strong>
                      <small>{order.createdAt}</small>
                    </div>
                    <p>{order.items.map((i) => `${i.name} (${i.quantity}x)`).join(', ')}</p>
                    <div className="order-history-footer">
                      <span className="order-total-tag">{formatRupiah(order.totalAmount || 0)}</span>
                      <button
                        className="button secondary"
                        type="button"
                        onClick={() => {
                          setActiveInvoice(order);
                          setOrdersDrawerOpen(false);
                        }}
                      >
                        Buka Detail Faktur
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </aside>
        </div>
      )}

      {toastMessage && (
        <aside className="toast" role="status" aria-live="polite">
          <span>{toastMessage}</span>
          <button type="button" onClick={() => setToastMessage('')} aria-label="Tutup notifikasi">
            x
          </button>
        </aside>
      )}
    </>
  );
}
