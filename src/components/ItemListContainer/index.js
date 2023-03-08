import "./styles.scss";
import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import products from "../../products/products";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../products/products.js")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log("json", json);
        setProducts(json.data);
      });
  }, []);

  return (
    <>
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;
