import CartPageButtons from "../ProductCard/CartPageButtons";
import { ProductCard } from "../ProductCard/ProductCard";

const CartPageCard = ({ product, quantity }) => {
  return (
    <div key={product._id} className='card card-with-text'>
      <ProductCard product={product} />
      <CartPageButtons product={product} quantity={quantity} />
    </div>
  );
};

export default CartPageCard;
