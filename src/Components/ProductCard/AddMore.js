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
  const modifyCart = async ({ incOrDec }) => {
    const {
      success,
      updatedCart: { products },
    } = await callServer({
      url: `/${userId}/cart`,
      type: "POST",
      body: { productId: product_id, quantity: quantity + incOrDec },
    });
    if (success) {
      cartDispatch({ type: "SET_CART_ITEMS", products });
    }
  };
  return (
    <>
      <button
        className='btn-primary btn-bg-color left-margin'
        onClick={() => modifyCart({ incOrDec: 1 })}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <span className='text-lg btn-color'> {quantity} </span>
      <button
        className='btn-primary btn-bg-color'
        onClick={() => modifyCart({ incOrDec: -1 })}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
    </>
  );
};
