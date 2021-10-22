import React, { useEffect, useState } from 'react';
import Cars from './Cars';
import Loading from './Loading';
import '../css/Shop.css';
const axios = require('axios').default;


export default function Shop() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/cars')
    .then(({data}) => setCars(data));

  }, []);

  return (
    <div className="shop-container">
      {cars.length > 0 
        ? <Cars cars={cars} />
        : <Loading />
      }
    </div>
  )
}
