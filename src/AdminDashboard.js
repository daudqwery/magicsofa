import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from './ProductContext';

const AdminDashboard = () => {
  const { products, setProducts, currentProduct, setCurrentProduct } = useContext(ProductContext);
  
  // State untuk form produk
  const [productData, setProductData] = useState({ 
    name: '', 
    description: '', 
    benefits: '', 
    variations: [] 
  });

  // State bantuan untuk input variasi baru
  const [newVar, setNewVar] = useState({ color: '', size: '', image: '' });

  useEffect(() => {
    if (currentProduct) setProductData(currentProduct);
  }, [currentProduct]);

  // Fungsi Tambah Variasi ke List Sementara
  const addVariation = () => {
    if (newVar.color && newVar.size) {
      setProductData({
        ...productData,
        variations: [...productData.variations, { ...newVar, id: Date.now() }]
      });
      setNewVar({ color: '', size: '', image: '' }); // Reset input variasi
    }
  };

  // Fungsi Simpan Produk (Tambah Baru atau Update)
  const handleSaveProduct = () => {
    if (currentProduct) {
      setProducts(products.map(p => p.id === currentProduct.id ? productData : p));
      setCurrentProduct(null);
    } else {
      setProducts([...products, { ...productData, id: Date.now() }]);
    }
    setProductData({ name: '', description: '', benefits: '', variations: [] });
  };

  // Lanjut ke bagian tampilan (UI) di bawah...
// Fungsi Hapus Produk
  const handleDeleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  // Fungsi Hapus Variasi
  const removeVariation = (varId) => {
    setProductData({
      ...productData,
      variations: productData.variations.filter(v => v.id !== varId)
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>{currentProduct ? 'Edit Produk' : 'Tambah Produk Baru'}</h2>
      
      {/* Form Produk Utama */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '500px', marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Nama Produk (Misal: Nussa Sofa)" 
          value={productData.name}
          onChange={(e) => setProductData({...productData, name: e.target.value})}
          style={{ padding: '8px' }}
        />
        <textarea 
          placeholder="Deskripsi Produk" 
          value={productData.description}
          onChange={(e) => setProductData({...productData, description: e.target.value})}
          style={{ padding: '8px', minHeight: '80px' }}
        />
        <textarea 
          placeholder="Kelebihan (Pisahkan dengan koma)" 
          value={productData.benefits}
          onChange={(e) => setProductData({...productData, benefits: e.target.value})}
          style={{ padding: '8px', minHeight: '80px' }}
        />
      </div>

      {/* Form Tambah Variasi */}
      <div style={{ border: '1px solid #ccc', padding: '15px', maxWidth: '500px', marginBottom: '20px' }}>
        <h3>Tambah Variasi (Warna & Ukuran)</h3>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <input 
            type="text" 
            placeholder="Warna" 
            value={newVar.color}
            onChange={(e) => setNewVar({...newVar, color: e.target.value})}
            style={{ padding: '8px', flex: 1 }}
          />
          <input 
            type="text" 
            placeholder="Ukuran" 
            value={newVar.size}
            onChange={(e) => setNewVar({...newVar, size: e.target.value})}
            style={{ padding: '8px', flex: 1 }}
          />
          <input 
            type="text" 
            placeholder="URL Gambar" 
            value={newVar.image}
            onChange={(e) => setNewVar({...newVar, image: e.target.value})}
            style={{ padding: '8px', flex: 1 }}
          />
        </div>
        <button onClick={addVariation} style={{ padding: '8px', cursor: 'pointer' }}>Tambah Variasi</button>

        {/* List Variasi Sementara di Form */}
        <ul style={{ marginTop: '15px', paddingLeft: '20px' }}>
          {productData.variations.map(v => (
            <li key={v.id} style={{ marginBottom: '5px' }}>
              {v.color} - {v.size} (Gambar: {v.image || 'Kosong'}) 
              <button onClick={() => removeVariation(v.id)} style={{ marginLeft: '10px', color: 'red', cursor: 'pointer', border: 'none', background: 'none', fontWeight: 'bold' }}>X</button>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={handleSaveProduct} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        {currentProduct ? 'Update Produk' : 'Simpan Produk Baru'}
      </button>
      
      {currentProduct && (
        <button onClick={() => setCurrentProduct(null)} style={{ marginLeft: '10px', padding: '10px 20px', cursor: 'pointer' }}>Batal Edit</button>
      )}

      <hr style={{ margin: '30px 0' }} />

      {/* Daftar Produk Tersimpan */}
      <h2>Daftar Produk di Landing Page</h2>
      {products.length === 0 ? <p>Belum ada produk.</p> : (
        products.map(p => (
          <div key={p.id} style={{ border: '1px solid #eee', padding: '15px', marginBottom: '10px', borderRadius: '4px' }}>
            <h3 style={{ marginTop: 0 }}>{p.name}</h3>
            <p>{p.description}</p>
            <p><strong>Variasi:</strong> {p.variations.length} jenis</p>
            <button onClick={() => setCurrentProduct(p)} style={{ marginRight: '10px', padding: '5px 15px', cursor: 'pointer' }}>Edit</button>
            <button onClick={() => handleDeleteProduct(p.id)} style={{ padding: '5px 15px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Hapus</button>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminDashboard;
