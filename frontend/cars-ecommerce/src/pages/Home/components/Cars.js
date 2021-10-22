import React from 'react';
import '../css/Cars.css';

export default function Cars({cars}) {
  console.log(cars)
  return (
    <>
      { cars.map((item) => (
        <div key={item._id} className="car-card">
          <h3>{item.brand} {item.name}</h3>
          <p>{item.kilometers} KM</p>
          <div className="cars-buy-button-section">
            <h3>{item.price} {item.currency}</h3>
            <button type="button" className="buy-button">Comprar</button>
          </div>
        </div>
      )) }
    </>
  )
}
