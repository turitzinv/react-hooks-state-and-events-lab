import React, {useState} from "react";

function Item({ name, category }) {
const [cart, setCart] = useState(true)

function toggleCart(){
  setCart((cart) => !cart)
}
  const itemClass = cart ? "" : "in-cart"
  const cartAction = cart ? "Add to Cart" : "Remove From Cart"

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>{cartAction}</button>
    </li>
  );
}

export default Item;
