import "./styles.scss";
import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import products from "../../products/products";

function ItemListContainer({ greeting }) {
  const [listadoProductos, setListadoProductos] = useState([]);

  const getProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(products)
      }, 200);
    }
    )
  }

  useEffect(() => {
    getProductos()
      .then(res => setListadoProductos(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h2>{greeting}</h2>
<div>
      {listadoProductos.length>0?<ItemList products={listadoProductos} />:<h1>Cargando...</h1>}
</div>
    </>
  );
}

export default ItemListContainer;
