import { useCart } from "../cart-context";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export const ProductCard = ({ product, cartItems }) => {
  const { dispatch } = useCart();

  const isProductWishlisted = () => {
    let isWishlisted = false;
    if(product===undefined)
    {
      isWishlisted=cartItems.isWishListed;
    }
    else if (product.isWishListed === undefined) {
      isWishlisted = cartItems.find(({ id }) => id === product.id).isWishListed;
    } else {
      isWishlisted = product.isWishListed;
    }

    return isWishlisted ? { color: "blue" } : { color: "white" };
  };
  return (
    <>
      <NavLink
        to={`/products/product/${
          product === undefined ? cartItems.name : product.name
        }/${product === undefined ? cartItems.id : product.id}`}>
        <img
          className='card-img'
          src={product === undefined ? cartItems.image : product.image}
          alt={product === undefined ? cartItems.name : product.name}
        />
      </NavLink>
      <span
        onClick={() =>
          dispatch({
            type: "WISHLIST",
            item: product === undefined ? cartItems : product,
          })
        }>
        <FontAwesomeIcon
          icon={faHeart}
          className='dismiss-badge'
          style={isProductWishlisted()}
        />
      </span>
      <div className='card-details'>
        <p>{product === undefined ? cartItems.name : product.name}</p>
        <p>Rs. {product === undefined ? cartItems.price : product.price}</p>
      </div>
    </>
  );
};
