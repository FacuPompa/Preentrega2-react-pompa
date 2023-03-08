import "./styles.scss";
import { useState, useEffect } from "react";
import products from "../../products/products";
import { useParams } from "react-router-dom";

function ItemDetailContainer({ greeting }) {
  const [product, setProduct] = useState({});

  const params = useParams();
  const idProducts = params.idProducts;

  useEffect(() => {
    const promesaItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        let encontrado = products.find((item) => item.id === Number(idProducts));
        resolve(encontrado);
      }, 2000);
    });

    promesaItem.then((respuesta) => setProduct(respuesta));
  }, []);

  return (
    <>
      <div className="item-list-container">
        <h2>{greeting}</h2>

        <ul className="item-list">
          <li className="item-card" key={product.id}>
            <img src={product.img} alt={product.nombre} />
            <h4>{`${product.nombre}`}</h4>
            <small>{product.editorial}</small>
            <p>${`${product.precio}`}</p>
            <button>Agregar al carrito</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ItemDetailContainer;
