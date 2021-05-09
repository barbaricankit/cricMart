import { useNavigate, useParams } from "react-router";
import { useCart } from "../../cart-context/cart-context";
import { AddtoCart } from "../ProductCard/AddtoCart";
import { AddMore } from "../ProductCard/AddMore";
import { useAuth } from "../../Auth/auth-context";
import callServer from "../../api_calls/axios";
import BackToProductListPage from "../private/BackToProductListPage";
export const ProductPage = () => {
  const {
    cartState: { cartItems: cart, wishList },
    filteredArray,
    cartDispatch,
  } = useCart();
  const { state } = useAuth();
  const navigate = useNavigate();
  const { productId } = useParams();
  console.log(productId);
  const product = filteredArray.find(({ _id }) => _id === productId);
  const isWishlisted = wishList.find((id) => id === productId);
  const isAddedToCart = cart.find(({ productId: id }) => id === productId);
  return (
    <div className='page-product' key={productId}>
      <BackToProductListPage />
      <div className='product'>
        <div className='productImg'>
          <img src={product?.img} alt={product?.name} />
        </div>
        <div className='productDetails'>
          <p className='h1 btn-color'>{product?.name}</p>

          <br />
          {product?.desc.map((desc, index) => (
            <p className='h5' key={index}>
              {desc}
            </p>
          ))}
          <br />
          <p className='h5'>{product?.offers}</p>
          <br />
          <p className='left-margin bold h5'>Rs. {product?.price}</p>
          <div className='left-margin top-margin'>
            <button
              className='btn-secondary btn-color '
              onClick={() => {
                if (state.login) {
                  cartDispatch({
                    type: "WISHLIST",
                    item: productId,
                  });
                  callServer({
                    url: `/${state.userId}/wishlist`,
                    type: "POST",
                    body: { productId },
                  });
                } else {
                  navigate("/signin");
                }
              }}>
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
