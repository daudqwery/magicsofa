import React, { useState } from 'react';

const AdminPanel = () => {
  const [productData, setProductData] = useState({
    namaProduk: '',
    harga: '',
    videoUrl: '', // Untuk Link YouTube
    countdownDate: '', // Format: YYYY-MM-DD
    variasi: [{ warna: '', ukuran: '', gambar: null }],
    faq: [{ tanya: '', jawab: '' }],
    testimoni: [{ nama: '', foto: null, komentar: '' }]
  });

  // Fungsi Tambah Variasi
  const addVariasi = () => {
    setProductData({...productData, variasi: [...productData.variasi, { warna: '', ukuran: '', gambar: null }]});
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Pengaturan Landing Page</h2>
      
      {/* SEKSI PRODUK & VIDEO */}
      <section style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '10px' }}>
        <h3>Data Produk & Video</h3>
        <input type="text" placeholder="Nama Produk" style={inputStyle} />
        <input type="text" placeholder="Link YouTube (Contoh: https://youtube.com/...)" style={inputStyle} />
        <p>Atur Waktu Mundur (Countdown):</p>
        <input type="datetime-local" style={inputStyle} />
      </section>

      {/* SEKSI VARIASI GAMBAR */}
      <section style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '10px' }}>
        <h3>Gambar per Warna/Ukuran</h3>
        {productData.variasi.map((v, i) => (
          <div key={i} style={{ marginBottom: '10px' }}>
            <input type="text" placeholder="Warna (Misal: Merah)" style={{ marginRight: '5px' }} />
            <input type="file" accept="image/*" />
          </div>
        ))}
        <button onClick={addVariasi}>+ Tambah Variasi</button>
      </section>

      {/* SEKSI TESTIMONI */}
      <section style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '10px' }}>
        <h3>Testimoni Pelanggan</h3>
        <input type="file" accept="image/*" />
        <textarea placeholder="Komentar Pembeli" style={inputStyle}></textarea>
      </section>

      {/* SEKSI FAQ */}
      <section style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '10px' }}>
        <h3>Edit FAQ</h3>
        <input type="text" placeholder="Pertanyaan" style={inputStyle} />
        <textarea placeholder="Jawaban" style={inputStyle}></textarea>
      </section>

      <button style={{ backgroundColor: '#28a745', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
        Simpan Semua Perubahan
      </button>
    </div>
  );
};

const inputStyle = { display: 'block', width: '100%', marginBottom: '10px', padding: '8px' };

export default AdminPanel;
