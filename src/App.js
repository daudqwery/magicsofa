import React, { useEffect, useState } from 'react';

function App() {
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60);

  // Fungsi Countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/6281234567890?text=Halo%20Ramdani%20Souvenir%2C%20saya%20tertarik%20dengan%20produknya', '_blank');
  };

  return (
    <div style={{ backgroundColor: '#FAFAFA', color: '#334155', fontFamily: 'Inter, sans-serif' }}>
      
      {/* URGENCY BAR */}
      <div style={{
        background: 'white', borderBottom: '1px solid #E2E8F0', textAlign: 'center',
        padding: '0.75rem 0', fontWeight: '500', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999
      }}>
        <strong>Diskon 25% Terbatas!</strong> Stok tersisa 
        <span style={{
          background: '#A5B4FC', color: '#6366F1', padding: '0.25rem 0.75rem',
          borderRadius: '9999px', marginLeft: '0.5rem', fontWeight: '600'
        }}>
          {formatTime(timeLeft)}
        </span>
      </div>

      {/* NAVBAR */}
      <nav style={{
        position: 'fixed', top: '60px', width: '100%', background: 'white',
        zIndex: 1000, borderBottom: '1px solid #F1F5F9', height: '60px', display: 'flex', alignItems: 'center'
      }}>
        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '0 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0F172A' }}>Ramdani Souvenir</div>
          <button onClick={openWhatsApp} style={{
            background: '#6366F1', color: 'white', padding: '0.6rem 1.5rem',
            borderRadius: '9999px', border: 'none', fontWeight: 600, cursor: 'pointer'
          }}>Pesan Sekarang</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={{ paddingTop: '180px', paddingBottom: '100px', paddingLeft: '5%', paddingRight: '5%', background: 'white' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>
            Souvenir Eksklusif <br/> untuk Momen Spesial
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#64748B', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto' }}>
            Pusat produk oleh-oleh dan souvenir berkualitas tinggi dengan desain premium.
            Gratis ongkir dan garansi kepuasan pelanggan.
          </p>
          <button onClick={openWhatsApp} style={{
            padding: '1.2rem 3rem', background: '#6366F1', color: 'white',
            borderRadius: '16px', border: 'none', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer'
          }}>
            Hubungi Kami via WhatsApp
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0F172A', color: 'white', padding: '50px 5%', textAlign: 'center' }}>
        <p>© 2026 Ramdani Souvenir. Semua Hak Dilindungi.</p>
      </footer>

    </div>
  );
}

export default App;
