import { useCart } from "../../cart-context/cart-context";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import callServer from "../../api_calls/axios";
import { useAuth } from "../../Auth/auth-context";
export const AddMore = ({ quantity, product_id }) => {
  const { cartDispatch } = useCart();
  const {
    state: { userId },
  } = useAuth();
  return (
    <div>
      <button
        className='btn-primary'
        onClick={() => {
          cartDispatch({ type: "INCREMENT", item: product_id });
          callServer({
            url: `/${userId}/cart`,
            type: "POST",
            body: { productId: product_id, quantity: quantity + 1 },
          });
        }}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <span> {quantity} </span>
      <button
        className='btn-primary'
        onClick={() => {
          cartDispatch({ type: "DECREMENT", item: product_id });
          callServer({
            url: `/${userId}/cart`,
            type: "POST",
            body: { productId: product_id, quantity: quantity - 1 },
          });
        }}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
    </div>
  );
};
