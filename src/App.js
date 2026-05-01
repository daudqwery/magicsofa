import React, { useState, useEffect } from 'react';

function App() {
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60);

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
    return { h, m, s };
  };

  const { h, m, s } = formatTime(timeLeft);

  const openWhatsApp = () => {
    window.open('https://wa.me/6281234567890?text=Halo%20Nussa%20Home%2C%20saya%20mau%20pesan%20sofa%20premium%20modernnya%20🛋️', '_blank');
  };

  return (
    <div style={{ backgroundColor: '#FAFAFA', color: '#334155', fontFamily: "'Inter', sans-serif" }}>
      
      {/* CSS Injected */}
      <style>{`
        .urgency-bar { background: #FFFFFF; border-bottom: 1px solid #E2E8F0; text-align: center; padding: 0.75rem 0; font-weight: 500; position: fixed; top: 0; left: 0; right: 0; z-index: 9999; box-shadow: 0 1px 2px rgb(0 0 0 / 0.05); }
        .countdown { background: #A5B4FC; color: #6366F1; padding: 0.25rem 0.75rem; border-radius: 9999px; font-weight: 600; margin-left: 0.5rem; display: inline-flex; gap: 0.25rem; font-size: 0.9rem; }
        .navbar { position: fixed; top: 60px; width: 100%; background: #FFFFFF; z-index: 1000; border-bottom: 1px solid #F1F5F9; height: 60px; display: flex; align-items: center; }
        .btn-primary { background: #6366F1; color: #FFFFFF; padding: 1rem 2.5rem; border-radius: 16px; font-weight: 600; border: none; cursor: pointer; transition: 0.3s; display: inline-flex; align-items: center; gap: 0.75rem; text-decoration: none; }
        .btn-primary:hover { background: #0F172A; transform: translateY(-2px); }
        .hero { padding: 180px 5% 100px; background: white; min-height: 90vh; display: flex; align-items: center; }
        .trust-badge { display: flex; align-items: center; gap: 0.75rem; background: #F8FAFC; padding: 1rem 1.5rem; border-radius: 16px; font-weight: 600; box-shadow: 0 1px 2px rgb(0 0 0 / 0.05); }
      `}</style>

      {/* URGENCY BAR */}
      <div className="urgency-bar">
        <strong>Diskon 25% Terbatas!</strong> Stok tersisa 
        <span className="countdown">
          <span>{h}</span>:<span>{m}</span>:<span>{s}</span>
        </span>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', padding: '0 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0F172A' }}>Nussa Home</div>
          <button onClick={openWhatsApp} style={{ background: '#6366F1', color: 'white', border: 'none', padding: '0.75rem 2rem', borderRadius: '9999px', fontWeight: 600, cursor: 'pointer' }}>
            <i className="fab fa-whatsapp"></i> Pesan
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1.1, color: '#0F172A', marginBottom: '1.5rem' }}>
              Rumah Lebih Nyaman<br/>dengan Sofa Premium
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#64748B', marginBottom: '3rem', maxWidth: '500px' }}>
              Desain minimalis modern dengan material terbaik. 
              Garansi 5 tahun, free ongkir, dan cicilan 0%.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <div className="trust-badge"><i className="fas fa-shopping-cart" style={{color:'#6366F1'}}></i> 1.2k+ Terjual</div>
              <div className="trust-badge"><i className="fas fa-star" style={{color:'#FBBF24'}}></i> 4.9/5 Rating</div>
              <div className="trust-badge"><i className="fas fa-shield-alt" style={{color:'#06B6D4'}}></i> Garansi 5 Thn</div>
            </div>
            <button onClick={openWhatsApp} className="btn-primary">
              <i className="fab fa-whatsapp"></i> Pesan via WhatsApp
            </button>
          </div>
          <div style={{ background: '#F1F5F9', borderRadius: '32px', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 40px rgb(0 0 0 / 0.1)' }}>
             <i className="fas fa-couch" style={{ fontSize: '10rem', color: '#CBD5E1' }}></i>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0F172A', color: '#94A3B8', padding: '60px 5%', textAlign: 'center' }}>
        <p>© 2026 Nussa Home - Sofa Minimalis Premium. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
