import { useContext } from "react";
import { CartContext } from "../lib/CartContext";

const CartItem = () => {
  const { value } = useContext(CartContext);

  if (value.quantity === 0) {
    return null;
  }

  return (
    <div className="">
      <h4>Classic Tee</h4>
      <div>{value.quantity}x $75.00</div>
      <div>Size: {value.size}</div>
    </div>
  );
};

export default CartItem;
