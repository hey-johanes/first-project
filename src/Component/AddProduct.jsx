import { React, useState } from 'react';
import { useProductContext } from '../context/ProductContext';

const initialData = {
  nama: '',
  deskripsi: '',
  harga: null,
  url: '',
};

const AddProduct = () => {
  const { handleAddProduct } = useProductContext();
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      ...formData,
      id: Date.now().toString,
    };
    handleAddProduct(newData);
    setFormData(initialData);
  };

  return (
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
          name="url"
          placeholder="URL"
          type="text"
          required
          value={formData.url}
          onChange={handleChange}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default AddProduct;
