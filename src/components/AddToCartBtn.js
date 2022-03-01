import { useContext } from "react";
import { CartContext } from "../lib/CartContext";

const AddToCartBtn = ({ size }) => {
  const { value, setValue } = useContext(CartContext);

  return (
    <div className="mt-8">
      <button
        onClick={() =>
          setValue({ ...value, quantity: value.quantity + 1, size: size })
        }
        className="inline-block cursor-pointer border-2 border-border-dark py-2 px-6 font-semibold uppercase text-primary duration-200 ease-in-out hover:bg-border-dark hover:text-gray-50"
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCartBtn;
