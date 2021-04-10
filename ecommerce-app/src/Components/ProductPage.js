import { useParams } from "react-router";
import { useCart } from "../cart-context";
import { AddtoCart } from "./AddtoCartComponent";
import { ShowQuantityOption } from "./ShowQuantityComponent";

export const ProductPage = () => {
  const {
    cartState: { cartItems: cart },
    filteredArray,
    dispatch,
  } = useCart();
  const { productId } = useParams();

  return (
    <>
      <div>
        <>
          {filteredArray.map((product) => {
            if (product.id !== productId) return <div></div>;
            return (
              <div className='main'>
                <div className='productImg'>
                  <img src={product.image} alt={product.name} />
                </div>
                <div
                  className='productDetails'
                  style={{ gridArea: "productdetails" }}>
                  <p>{product.name}</p>
                  <p>Rs. {product.price}</p>
                  <p>{product.desc}</p>
                  <p>Material -: {product.material}</p>
                  <p>Product Type-: {product.adjective}</p>
                  <div>
                    {cart.map((cartProduct) => {
                      if (cartProduct.id === product.id)
                        return cartProduct.quantity !== 0 ? (
                          <>
                            <ShowQuantityOption
                              product={product}
                              cartProduct={cartProduct}
                            />
                          </>
                        ) : (
                          <AddtoCart product={product} />
                        );
                      return "";
                    })}
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        dispatch({ type: "WISHLIST", item: product })
                      }>
                      {cart.map((cartProduct) => {
                        if (cartProduct.id === product.id)
                          return cartProduct.isWishListed
                            ? "Added to Wishlist"
                            : "Add to WishList";
                        return "";
                      })}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      </div>
    </>
  );
};
