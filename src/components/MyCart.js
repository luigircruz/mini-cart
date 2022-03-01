import { Menu } from "@headlessui/react";
import { useContext } from "react";
import { CartContext } from "../lib/CartContext";
import CartItem from "./CartItem";

const MyCart = () => {
  const { value } = useContext(CartContext);
  return (
    <div className="p-2">
      <Menu as="div" className="relative">
        <Menu.Button
          as="div"
          className="cursor-pointer text-sm text-secondary duration-200 ease-in hover:text-primary"
        >
          My Cart ({value.quantity})
        </Menu.Button>
        <Menu.Items
          as="div"
          className="absolute right-0 flex w-40 justify-center border border-secondary"
        >
          {({ active }) => <CartItem />}
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default MyCart;
