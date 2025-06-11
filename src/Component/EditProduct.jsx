import React, { useState } from 'react';

const initialData = {
  nama: '',
  deskripsi: '',
  url: '',
};

const EditProduct = ({ showEditProduct }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      ...formData,
      id: Date.now(),
    };
    // handleAddProduct(newData);
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
          <label htmlFor="url">URL Gambar</label>
          <input
            name="url"
            placeholder="URL"
            type="text"
            required
            value={formData.url}
            onChange={handleChange}
          ></input>
          {/* <button onClick={showEditProduct}>submit</button> */}
          <input type="submit"></input>
          <button onClick={showEditProduct}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
