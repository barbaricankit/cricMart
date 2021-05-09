import { useNavigate } from "react-router";
import callServer from "../../api_calls/axios";
import { useAuth } from "../../Auth/auth-context";
import { useCart } from "../../cart-context/cart-context";

export const AddtoCart = ({ product_id }) => {
  const { cartDispatch } = useCart();
  const { state } = useAuth();
  const navigate = useNavigate();
  const addToCart = async () => {
    if (state.login) {
      const {
        success,
        updatedCart: { products },
      } = await callServer({
        url: `/${state.userId}/cart`,
        type: "POST",
        body: { productId: product_id, quantity: 1 },
      });
      if (success) {
        cartDispatch({ type: "SET_CART_ITEMS", products });
      }
    } else {
      navigate("/signin");
    }
  };
  return (
    <button
      key={product_id}
      className='btn-primary btn-bg-color left-margin'
      onClick={() => addToCart()}>
      Add to Cart
    </button>
  );
};
