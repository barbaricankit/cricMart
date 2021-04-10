import { useCart } from "../cart-context";
import { ProductCard } from "./ProductCard";
import { ShowQuantityOption } from "./ShowQuantityComponent";

export const Cart = () => {
  const { cartState, dispatch } = useCart();
  const totalCartValue = cartState.cartItems.reduce(
    (accumulator, { price, quantity }) => (accumulator += price * quantity),
    0
  );
  return (
    <div style={{ marginTop: "5rem" }}>
      {totalCartValue !== 0 ? (
        <div>Total Cart Value: {totalCartValue}</div>
      ) : (
        <div style={{ margin: "18vh 23vw" }}>
          Add items to the cart to order
        </div>
      )}
      {cartState.cartItems.map((product) => {
        if (product.quantity !== 0)
          return (
            <div key={product.id} className='card card-with-text'>
              <div style={{ flexGrow: "1" }}>
                <ProductCard cartItems={product} />
                <div>
                  <ShowQuantityOption product={product} />
                  <p>Total Rs.{product.quantity * product.price}</p>
                  <div>
                    <button
                      className='btn-primary'
                      onClick={() =>
                        dispatch({ type: "REMOVE", item: product })
                      }>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        return "";
      })}
    </div>
  );
};
