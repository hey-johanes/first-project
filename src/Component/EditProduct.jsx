import React, { useState } from 'react';
import { useProductContext } from '../context/ProductContext';

const EditProduct = ({ id, nama, deskripsi, harga, url, defaulValue }) => {
  const { handleEditProduct, closeEditProduct } = useProductContext();
  const [formData, setFormData] = useState({
    nama: nama,
    deskripsi: deskripsi,
    harga: harga,
    imageURL: url,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProduct(id, formData);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nama">Nama</label>
          <input
            name="nama"
            placeholder="nama"
            type="text"
            maxLength={30}
            required
            value={formData.nama}
            onChange={handleChange}
          ></input>
          <label htmlFor="deskripsi">Deskripsi</label>
          <textarea
            name="deskripsi"
            placeholder="deskripsi"
            type="text"
            maxLength={200}
            rows={10}
            required
            value={formData.deskripsi}
            onChange={handleChange}
          ></textarea>
          <label htmlFor="harga">Harga</label>
          <input
            name="harga"
            placeholder="Harga"
            type="number"
            maxLength={200}
            rows={10}
            required
            value={formData.harga}
            onChange={handleChange}
          ></input>
          <label htmlFor="url">URL Gambar</label>
          <input
            name="imageURL"
            placeholder="URL"
            type="text"
            required
            value={formData.imageURL}
            onChange={handleChange}
          ></input>
          <input onClick={defaulValue} type="submit"></input>
          <button onClick={closeEditProduct}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
