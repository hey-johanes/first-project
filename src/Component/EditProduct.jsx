import React, { useState } from 'react';
import { useProductContext } from '../context/ProductContext';

const initialData = {
  nama: '',
  deskripsi: '',
  harga: null,
  imageURL: '',
};

const EditProduct = ({ id, defaulValue }) => {
  const { handleEditProduct, closeEditProduct } = useProductContext();
  const [formData, setFormData] = useState(initialData);

  const { nama, deskripsi, harga, imageURL } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProduct(id, formData);
    setFormData(initialData);
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
            value={nama}
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
            value={deskripsi}
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
            value={harga}
            onChange={handleChange}
          ></input>
          <label htmlFor="url">URL Gambar</label>
          <input
            name="imageURL"
            placeholder="URL"
            type="text"
            required
            value={imageURL}
            onChange={handleChange}
          ></input>
          {/* <button onClick={showEditProduct}>submit</button> */}
          <input onClick={defaulValue} type="submit"></input>
          <button onClick={closeEditProduct}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
