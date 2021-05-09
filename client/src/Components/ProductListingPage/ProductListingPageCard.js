import { ProductCard } from "../ProductCard/ProductCard";

const ProductPageCard = ({ product }) => {
  return (
    <div key={product._id} className='card card-with-text'>
      <ProductCard product={product} />
    </div>
  );
};

export default ProductPageCard;
