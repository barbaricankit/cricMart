import { useCart } from "../../cart-context/cart-context";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import callServer from "../../api_calls/axios";
import { useAuth } from "../../Auth/auth-context";
import { useNavigate } from "react-router";

export const WishListButton = ({ product_id, wishlist }) => {
  const { cartDispatch } = useCart();
  const { state } = useAuth();
  const navigate = useNavigate();
  return (
    <span
      onClick={() => {
        if (state.login) {
          cartDispatch({
            type: "WISHLIST",
            item: product_id,
          });
          callServer({
            url: `/${state.userId}/wishlist`,
            type: "POST",
            body: { productId: product_id },
          });
        } else {
          navigate("/signin");
        }
      }}>
      <FontAwesomeIcon
        icon={faHeart}
        className='badge-btn top-right'
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
