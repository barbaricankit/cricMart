// import CartPageButtons from "../ProductCard/CartPageButtons";
// import { ProductCard } from "../ProductCard/ProductCard";
import CartCard from "./CartCard";

const CartPageCard = ({ product, quantity }) => {
  return (
    <div key={product._id} className='card horizontal-card-with-text'>
      <CartCard product={product} />
    </div>
  );
};

export default CartPageCard;
