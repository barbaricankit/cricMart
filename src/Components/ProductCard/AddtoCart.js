import { useNavigate } from "react-router";
import callServer from "../../api_calls/axios";
import { useAuth } from "../../Auth/auth-context";
import { useCart } from "../../cart-context/cart-context";

export const AddtoCart = ({ product_id }) => {
  const { cartDispatch } = useCart();
  const { state } = useAuth();
  const navigate = useNavigate();
  return (
    <button
      key={product_id}
      className='btn-primary btn-bg-color left-margin'
      onClick={() => {
        if (state.login) {
          cartDispatch({ type: "INCREMENT", item: product_id });
          callServer({
            url: `/${state.userId}/cart`,
            type: "POST",
            body: { productId: product_id, quantity: 1 },
          });
        } else {
          navigate("/signin");
        }
      }}>
      Add to Cart
    </button>
  );
};
