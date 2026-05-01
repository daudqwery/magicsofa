import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    // Contoh data produk awal
    {
      id: 1,
      name: 'Sofa Minimalis Premium',
      description: 'Desain minimalis modern...',
      variations: [
        { color: 'Abu-abu', size: '3 Seater', image: 'url_gambar_1' },
        { color: 'Cokelat', size: '2 Seater', image: 'url_gambar_2' },
      ],
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
