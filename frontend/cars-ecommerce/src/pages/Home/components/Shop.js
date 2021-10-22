import React, { useEffect, useState } from 'react';
const axios = require('axios').default;


export default function Shop() {
  const [cars, setCars] = useState([]);
  console.log(cars)

  useEffect(() => {
    axios.get('http://localhost:3000/cars')
    .then(({data}) => setCars(data));

  }, []);

  return (
    <div>
      
    </div>
  )
}
