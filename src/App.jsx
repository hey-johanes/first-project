import React from 'react';
import './App.css';
import ProductCard from './Component/ProductCard';
import AddProduct from './Component/AddProduct';
import { ProductProvider, useProductContext } from './context/ProductContext';

const AppContext = () => {
  const { show, product, selectedEditId, showAddProduct } = useProductContext();

  return (
    <div>
      <div>
        <div className="app-title">List Mobil</div>
        {show ? (
          <>
            <AddProduct></AddProduct>
            <button className="button-add-product" onClick={showAddProduct}>
              Close Add Product
            </button>
          </>
        ) : (
          <button className="button-add-product" onClick={showAddProduct}>
            Add Product
          </button>
        )}
      </div>
      <div className="cards">
        {product.map(({ id, deskripsi, nama, imageURL, harga }) => (
          <ProductCard
            key={id}
            id={id}
            deskripsi={deskripsi}
            nama={nama}
            url={imageURL}
            harga={harga}
            isEditing={selectedEditId === id}
          />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ProductProvider>
      <AppContext />
    </ProductProvider>
  );
};

export default App;
