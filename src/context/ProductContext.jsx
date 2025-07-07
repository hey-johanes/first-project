/* eslint-disable prettier/prettier */
import { useState, useContext, createContext, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState([]);
  const [selectedEditId, setSelectedEditId] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await axios.get('http://localhost:8000/products');
        setProduct(response.data);
      } catch (error) {
        console.log(error.toJson());
      }
    }
    fetchApi();
  }, []);

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
    const postProduct = async () => {
      try {
        await axios.post('http://localhost:8000/products', newData);
        setProduct((product) => [...product, newData]);
        setShow(false);
      } catch (error) {
        console.log(error.response.error);
      }
    };

    postProduct();
  };

  const handleDeleteProduct = (id) => {
    const deleteProduct = async () => {
      try {
        await axios.delete(`http://localhost:8000/products/${id}`);
        setProduct((prevProducts) =>
          prevProducts.filter((item) => item.id !== id)
        );
      } catch (error) {
        console.log(error.response.error);
      }
    };
    deleteProduct();
  };

  const handleEditProduct = (id, formData) => {
    const editProduct = async () => {
      try {
        await axios.patch(`http://localhost:8000/products/${id}`, formData);
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
      } catch (error) {
        console.log(error);
      }
    };

    editProduct();
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
