import { React, useState } from 'react';
import './App.css';
import ProductCard from './Component/ProductCard';
import AddProduct from './Component/AddProduct';
import { Products } from './data/Products';

const App = () => {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState(Products);
  const [selectedEditId, setSelectedEditId] = useState(null);

  const showAddProduct = () => {
    setShow((prevShow) => !prevShow);
  };

  const showEditProduct = (id) => {
    setSelectedEditId(id);
  };

  const closeEditProduct = () => {
    setSelectedEditId(null);
  };

  const handleAddProduct = (newData) => {
    setProduct((product) => [...product, newData]);
    setShow(false);
  };

  const handleDeleteProduct = (id) => {
    setProduct((prevProducts) => prevProducts.filter((item) => item.id !== id));
  };

  const handleEditProduct = (id, formData) => {
    setProduct((prevProducts) =>
      prevProducts.map((item) =>
        item.id === id
          ? {
              ...item,
              nama: formData.nama,
              harga: formData.harga,
              deskripsi: formData.deskripsi,
              imageURL: formData.url,
            }
          : item
      )
    );
    setSelectedEditId(null);
  };

  return (
    <div>
      <div>
        <div className="app-title">List Mobil</div>
        {show ? (
          <>
            <AddProduct handleAddProduct={handleAddProduct}></AddProduct>
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
            showEditProduct={showEditProduct}
            handleEditProduct={handleEditProduct}
            closeEditProduct={closeEditProduct}
            handleDeleteProduct={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
