import { React, useState, useEffect } from 'react';
import { Trash2, Pencil } from 'lucide-react';
import EditProduct from './EditProduct';
import { useProductContext } from '../context/ProductContext';

const ProductCard = ({ id, nama, deskripsi, harga, url, isEditing }) => {
  const { showEditProduct, handleDeleteProduct } = useProductContext();

  const [amount, setAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addAmount = () => {
    setAmount((amount) => amount + 1);
  };
  const minAmount = () => {
    setAmount((amount) => amount - 1);
  };
  const defaulValue = () => {
    setAmount(0);
  };
  useEffect(() => {
    setTotalPrice(amount * harga);
  }, [amount, harga]);
  return (
    <div className="card">
      {isEditing ? (
        <>
          <EditProduct
            defaulValue={defaulValue}
            id={id}
            nama={nama}
            deskripsi={deskripsi}
            harga={harga}
            url={url}
          />
        </>
      ) : (
        <>
          <Pencil onClick={() => showEditProduct(id)} />
          <Trash2 onClick={() => handleDeleteProduct(id)}></Trash2>
          <div className="card">
            <img className="card-img" alt="gambar" src={url}></img>
            <div className="container">
              <h4>{nama}</h4>
              <p>{deskripsi}</p>
              <p>{harga}</p>
              {amount > 0 ? (
                <b>{`Total Harga ${nama}: Rp${totalPrice}`}</b>
              ) : (
                <></>
              )}
              <div className={`card-keranjang`}>
                {amount === 0 ? (
                  <button
                    className={`card-keranjang ${amount > 0 ? 'jumlah-product' : 'show-keranjang'}`}
                    onClick={addAmount}
                  >
                    Tambah Keranjang
                  </button>
                ) : (
                  <>
                    <button className="button" onClick={minAmount}>
                      -
                    </button>
                    <p>{amount}</p>
                    <button className="button" onClick={addAmount}>
                      +
                    </button>
                    <Trash2 onClick={defaulValue}></Trash2>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
