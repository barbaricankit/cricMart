import { useCart } from "../cart-context";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const ShowQuantityOption = ({ product, cartProduct }) => {
  const { dispatch } = useCart();
  return (
    <>
      <button
        className='btn-primary'
        onClick={() => dispatch({ type: "INCREMENT", item: product })}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <span>
        {" "}
        {cartProduct === undefined
          ? product.quantity
          : cartProduct.quantity}{" "}
      </span>
      <button
        className='btn-primary'
        onClick={() => dispatch({ type: "DECREMENT", item: product })}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
    </>
  );
};
