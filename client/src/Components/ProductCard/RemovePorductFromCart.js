import callServer from "../../api_calls/axios";
import { useAuth } from "../../Auth/auth-context";
import { useCart } from "../../cart-context/cart-context";
const RemoveProductFromCart = ({ product_id }) => {
  const { cartDispatch } = useCart();
  const {
    state: { userId },
  } = useAuth();
  return (
    <button
      className='btn-secondary btn-color left-margin'
      onClick={() => {
        cartDispatch({ type: "REMOVE", item: product_id });
        callServer({
          url: `/${userId}/cart`,
          type: "POST",
          body: { productId: product_id, quantity: 0 },
        });
      }}>
      Remove
    </button>
  );
};
export default RemoveProductFromCart;
