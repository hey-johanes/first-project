/* eslint-disable prettier/prettier */
import { useState, useContext, createContext } from 'react';
import { Products } from '../data/Products';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
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

  const value = {
    showAddProduct,
    showEditProduct,
    closeEditProduct,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    show,
    product,
    selectedEditId,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
