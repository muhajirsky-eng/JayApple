import './globals.css';

export const metadata = {
  title: 'Jayapple | Apple Authorized & Pre-Owned Store',
  description: 'E-Commerce produk Apple terkurasi: iPhone, MacBook, iPad, dan AirPods dengan keranjang belanja dan invoice berbasis localStorage.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
