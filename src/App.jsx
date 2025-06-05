import { React } from 'react';
import './App.css';
import ProductCard from './Component/ProductCard';
import { Products } from './data/Products';

const App = () => {
  return (
    <div className="cards">
      {Products.map((item) => (
        <ProductCard
          key={item.id}
          nama={item.nama}
          deskripsi={item.deskripsi}
          url={item.imageURL}
        />
      ))}
    </div>
  );
};

export default App;
