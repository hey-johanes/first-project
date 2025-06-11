import { React, useState } from 'react';
import { Trash2 } from 'lucide-react';
import EditProduct from './EditProduct';
import { Pencil } from 'lucide-react';

const ProductCard = ({ nama, deskripsi, url, showEditProduct, Showedit }) => {
  const [amount, setAmount] = useState(0);

  const addAmount = () => {
    setAmount((amount) => amount + 1);
  };
  const minAmount = () => {
    setAmount((amount) => amount - 1);
  };
  const defaulValue = () => {
    setAmount(0);
  };
  return (
    <div className="card">
      {Showedit ? (
        <>
          <EditProduct showEditProduct={showEditProduct} />
        </>
      ) : (
        <>
          <Pencil onClick={showEditProduct} />
          <div className="card">
            <img className="card-img" alt="gambar" src={url}></img>
            <div className="container">
              <h4>{nama}</h4>
              <p>{deskripsi}</p>
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
