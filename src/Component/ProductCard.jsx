import React from 'react';
import { useState } from 'react';

const ProductCard = ({ nama, deskripsi, url }) => {
  const [amount, setAmount] = useState(0);
  const addAmount = () => {
    setAmount(amount + 1);
  };
  const minAmount = () => {
    setAmount(amount - 1);
  };
  return (
    <div className="card">
      <img
        style={{
          width: '100%',
          height: '200px',
          borderRadius: '10px 10px 0px 0px',
        }}
        alt="gambar"
        src={url}
      ></img>
      <div className="container">
        <h4>{nama}</h4>
        <p>{deskripsi}</p>
        <div>
          <button className="add-toggle" onClick={addAmount}>
            +
          </button>
          <button className="add-toggle" onClick={minAmount}>
            -
          </button>
          <p>{amount}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
