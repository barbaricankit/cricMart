import { useCart } from "../cart-context";

export const AddtoCart = ({ product }) => {
  const {  dispatch } = useCart();
  return <button
    key={product.id}
    className='btn-primary'
    onClick={() => dispatch({ type: "INCREMENT", item: product })}>
    Add to Cart
  </button>;
};
