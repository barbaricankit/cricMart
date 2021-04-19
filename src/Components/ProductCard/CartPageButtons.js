import RemoveProductFromCart from "./RemovePorductFromCart";
import ShowAddCartButton from "./ShowAddCartButton";

const CartPageButtons = ({ product, quantity }) => {
  return (
    <div>
      <p>Total Rs.{quantity * product.price}</p>
      <div>
        <ShowAddCartButton product_id={product._id} quantity={quantity} />
        <RemoveProductFromCart product_id={product._id} />
      </div>
    </div>
  );
};

export default CartPageButtons;
