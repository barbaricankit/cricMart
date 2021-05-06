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
      className='wishlist-btn'
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
        className={`badge-btn top-right ${wishlist && "fill-badge"}`}
      />
    </span>
  );
};
export default WishListButton;
