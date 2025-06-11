import { React, useState } from 'react';
import './App.css';
import ProductCard from './Component/ProductCard';
import AddProduct from './Component/AddProduct';
import { Products } from './data/Products';

const App = () => {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState(Products);
  const [Showedit, SetShowEdit] = useState(false);

  const showAddProduct = () => {
    setShow((prevShow) => !prevShow);
  };

  const showEditProduct = () => {
    SetShowEdit((prevShowEdit) => !prevShowEdit);
  };

  const handleAddProduct = (newData) => {
    setProduct((product) => [...product, newData]);
    setShow(false);
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
        {product.map((item) => (
          <ProductCard
            showEditProduct={showEditProduct}
            Showedit={Showedit}
            key={item.id}
            nama={item.nama}
            deskripsi={item.deskripsi}
            url={item.imageURL}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
