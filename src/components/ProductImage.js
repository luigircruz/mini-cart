const ProductImage = ({ images }) => {
  return (
    <div className="flex-1">
      {images.map((image) => (
        <div key={image.id} className="flex justify-end">
          <img className="w-3/4" src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default ProductImage;
