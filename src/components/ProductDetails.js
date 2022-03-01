import { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
import SizeSelector from "./SizeSelector";

const ProductDetails = ({ name, description, price }) => {
  const [size, setSize] = useState(null);
  return (
    <div className="flex-1">
      {/* Product info */}
      <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
        <h1 className="text-xl font-normal text-primary">{name}</h1>

        <div className="mt-8">
          {/* screen readers */}
          <h2 className="sr-only">Product information</h2>
          <hr className="border-t border-border-light" />
          <h4 className="text-l py-2 font-semibold text-primary">{price}</h4>
          <hr className="border-t border-border-light" />
          <div
            className="mt-8 text-base text-secondary"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <SizeSelector size={size} setSize={setSize} />
        <AddToCartBtn size={size} />
      </div>
    </div>
  );
};

export default ProductDetails;
