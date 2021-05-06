import { useCart } from "../../cart-context/cart-context";
import BackToProductListPage from "./BackToProductListPage";
import WishListPageCard from "./WishListPageCard";

export const WishList = () => {
  const { filteredArray } = useCart();
  const wishListedProducts = filteredArray.filter(
    ({ isWishListed }) => isWishListed
  );
  return (
    <div className='page-wishlist'>
      <BackToProductListPage />
      {!wishListedProducts && (
        <div className='item-count-zero'>Add your wishes into the wishlist</div>
      )}
      {wishListedProducts.map((product) => (
        <WishListPageCard product={product} key={product._id} />
      ))}
    </div>
  );
};
