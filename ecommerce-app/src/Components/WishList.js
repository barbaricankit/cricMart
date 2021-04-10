import { useCart } from "../cart-context";
import { AddtoCart } from "./AddtoCartComponent";
import { ShowQuantityOption } from "./ShowQuantityComponent";
import { ProductCard } from "./ProductCard";
export const WishList = () => {
  const { cartState, dispatch } = useCart();
  return (
    <div style={{ marginTop: "5rem" }}>
      {cartState.cartItems.find(({ isWishListed }) => isWishListed) ? (
        cartState.cartItems.map((product) =>
          product.isWishListed ? (
            <div key={product.id} className='card card-with-text'>
              <div style={{ flexGrow: "1" }}>
                <ProductCard product={product} />
              </div>
              <div>
                {product.quantity !== 0 ? (
                  <>
                    <ShowQuantityOption product={product} />
                  </>
                ) : (
                  <AddtoCart product={product} />
                )}
              </div>
            </div>
          ) : (
            ""
          )
        )
      ) : (
        <div style={{ margin: "18vh 23vw" }}>
          Add your wishes into the wishlist
        </div>
      )}
    </div>
  );
};
