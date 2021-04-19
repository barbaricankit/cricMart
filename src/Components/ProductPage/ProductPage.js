import { useParams } from "react-router";
import { useCart } from "../../cart-context/cart-context";
import { AddtoCart } from "../ProductCard/AddtoCart";
import { AddMore } from "../ProductCard/AddMore";

export const ProductPage = () => {
  const {
    cartState: { cartItems: cart },
    filteredArray,
    cartDispatch,
  } = useCart();
  const { productId } = useParams();
  const product = filteredArray.find(({ _id }) => _id == productId);
  return (
    <div className='page-product'>
      <div className='product'>
        <div className='productImg'>
          <img src={product.img} alt={product.name} />
        </div>
        <div className='productDetails'>
          <p className='h1'>{product.name}</p>

          <br />
          {product.desc.map((desc) => (
            <p className='h5'>{desc}</p>
          ))}
          <br />

          <p>Rs. {product.price}</p>
          <div>
            {cart.map((cartProduct) => {
              if (cartProduct.id === product.id)
                return cartProduct.quantity !== 0 ? (
                  <>
                    <AddMore product={product} cartProduct={cartProduct} />
                  </>
                ) : (
                  <AddtoCart product={product} />
                );
              return "";
            })}

            <button
              className='btn-secondary'
              onClick={() => cartDispatch({ type: "WISHLIST", item: product })}>
              {cart.map((cartProduct) => {
                if (cartProduct.id === product.id)
                  return cartProduct.isWishListed
                    ? "Remove From Wishlist"
                    : "Add to WishList";
                return "";
              })}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
