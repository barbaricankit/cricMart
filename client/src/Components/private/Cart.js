import { useCart } from "../../cart-context/cart-context";
import BackToProductListPage from "./BackToProductListPage";
import CartPageCard from "./CartPageCard";
import TotalCartValue from "./TotalCartValue";

export const Cart = () => {
  const { filteredArray } = useCart();

  const cartItem = filteredArray.filter((product) => product.quantity);

  return (
    <div className='page-cart'>
      <BackToProductListPage />
      <TotalCartValue cartItem={cartItem} />
      {cartItem.map((product) => (
        <CartPageCard
          key={product._id}
          product={product}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
};
