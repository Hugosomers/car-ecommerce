import React from 'react';
import './css/SellCar.css';

export default function SellCar() {
  return (
    <div className="sell-car-container">
      <h1 id="sellCar-Title">Preencha as informações para anunciar seu carro</h1>
      <form className="sell-form">
        <label>
          <input 
            type="text"
            placeholder="Nome"
          />
        </label>

        <label>
          <input 
            type="text"
            placeholder="Marca"
          />
        </label>

        <label>
          <input type="number" min="1900" max="2099" step="1" placeholder="Ano" />
        </label>

        <label>
          <input type="number" min="1" step="any" placeholder="Preço"/>
        </label>

        <label>
          <select>
            <option value="BRL">BRL</option>
            <option value="DOL">DOL</option>
          </select>
        </label>

        <label>
          <input type="number" min="1" step="any" placeholder="KM"/>
        </label>
        
        <label>
          <input type="text" placeholder="Cor"/>
        </label>

        <label>
          <input type="text" placeholder="Transmissão"/>
        </label>

        <label>
          <textarea rows="5" cols="33" placeholder="Descrição adicional" />
        </label>

        <button type="text">Anunciar</button>

      </form>
    </div>
  )
}
