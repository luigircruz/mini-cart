import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";

const product = {
  name: "Classic Tee",
  price: "$75.00",
  images: [
    {
      id: 1,
      src: "/images/classic-tee.jpg",
      alt: "A Classic light brown tee shirt.",
    },
  ],
  description: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `,
};

const Product = () => {
  return (
    <div className="mt-10 flex">
      <ProductImage images={product.images} />
      <ProductDetails
        name={product.name}
        description={product.description}
        price={product.price}
      />
    </div>
  );
};

export default Product;
