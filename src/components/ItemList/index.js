import React from "react";
import { Link } from "react-router-dom";

export default function ItemList({ products }) {
  return (
    <div className="item-list-container">
      <ul className="item-list">
        {products.map((product) => (

          <li className="item-card" key={product.id}>
            <img src={product.imagen} alt={product.nombre} />
            <h4>{`${product.nombre}`}</h4>
            <small>{product.editorial}</small>
            <br />

            <Link to={`/detalle/${product.id}`}>
              <button>Ver más</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
