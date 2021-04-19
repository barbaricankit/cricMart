import { useCart } from "../../cart-context/cart-context";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import callServer from "../../api_calls/axios";
import { useAuth } from "../../Auth/auth-context";

export const WishListButton = ({ product_id, wishlist }) => {
  const { cartDispatch } = useCart();
  const { state } = useAuth();
  return (
    <span
      onClick={() => {
        cartDispatch({
          type: "WISHLIST",
          item: product_id,
        });
        callServer({
          url: `/${state.userId}/wishlist`,
          type: "POST",
          body: { productId: product_id },
        });
      }}>
      <FontAwesomeIcon
        icon={faHeart}
        size='2x'
        className='dismiss-badge'
        style={
          wishlist
            ? { color: "var(--horizontal-navbar-background-color)" }
            : { color: "gray" }
        }
      />
    </span>
  );
};
export default WishListButton;
