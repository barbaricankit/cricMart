import WishListButton from "../ProductCard/WishListButton";
import ProductCardDetails from "../ProductCard/ProductCardDetails";
import ProductCardImage from "../ProductCard/ProductCardImage";
import RemoveBadge from "./RemoveBadge";
import CartPageButtons from "../ProductCard/CartPageButtons";

const CartCard = ({ product }) => {
  return (
    <>
      <div className='image_with_badges'>
        <ProductCardImage product={product} />
        <WishListButton
          product_id={product._id}
          wishlist={product.isWishListed}
        />
        <RemoveBadge product_id={product._id} />
      </div>
      <div className='horizontal-card-details'>
        <div className='product-card-detail'>
          <ProductCardDetails
            id={product._id}
            name={product.name}
            price={product.price}
            category={product.category_name}
            quantity={product.quantity}
          />
        </div>
        <CartPageButtons product={product} quantity={product.quantity} />
      </div>
    </>
  );
};
export default CartCard;
