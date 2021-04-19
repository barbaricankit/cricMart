import { ProductCard } from "../ProductCard/ProductCard";
import ShowAddCartButton from "../ProductCard/ShowAddCartButton";

const ProductPageCard = ({ product }) => {
  return (
    <div key={product._id} className='card card-with-text'>
      <ProductCard product={product} />
      <ShowAddCartButton product_id={product._id} quantity={product.quantity} />
    </div>
  );
};

export default ProductPageCard;
