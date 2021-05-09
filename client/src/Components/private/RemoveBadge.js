import { useCart } from "../../cart-context/cart-context";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import callServer from "../../api_calls/axios";
import { useAuth } from "../../Auth/auth-context";

export const RemoveBadge = ({ product_id }) => {
  const { cartDispatch } = useCart();
  const { state } = useAuth();

  return (
    <span
      onClick={() => {
        cartDispatch({ type: "REMOVE", item: product_id });
        callServer({
          url: `/${state.userId}/cart`,
          type: "POST",
          body: { productId: product_id, quantity: 0 },
        });
      }}>
      <FontAwesomeIcon icon={faTimes} className='badge-btn right' />
    </span>
  );
};
export default RemoveBadge;
