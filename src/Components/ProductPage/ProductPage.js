import { useParams } from "react-router";
import { useCart } from "../../cart-context/cart-context";
import { AddtoCart } from "../ProductCard/AddtoCart";
import { AddMore } from "../ProductCard/AddMore";

export const ProductPage = () => {
  const {
    cartState: { cartItems: cart, wishList },
    filteredArray,
    cartDispatch,
  } = useCart();
  const { productId } = useParams();
  const product = filteredArray.find(({ _id }) => _id === productId);
  const isWishlisted = wishList.find((id) => id === productId);
  const isAddedToCart = cart.find(({ productId: id }) => id === productId);
  return (
    <div className='page-product'>
      <div className='product'>
        <div className='productImg'>
          <img src={product.img} alt={product.name} />
        </div>
        <div className='productDetails'>
          <p className='h1 btn-color'>{product.name}</p>

          <br />
          {product.desc.map((desc) => (
            <p className='h5'>{desc}</p>
          ))}
          <br />
          <p className='h5'>{product.offers}</p>
          <br />
          <p className='left-margin bold h5'>Rs. {product.price}</p>
          <div className='left-margin top-margin'>
            <button
              className='btn-secondary btn-color '
              onClick={() => cartDispatch({ type: "WISHLIST", item: product })}>
              {isWishlisted ? "Remove From Wishlist" : "Add to WishList"}
            </button>
            {isAddedToCart ? (
              <AddMore
                product_id={isAddedToCart.productId}
                quantity={isAddedToCart.quantity}
              />
            ) : (
              <AddtoCart product_id={productId} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
