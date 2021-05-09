import WishListButton from "./WishListButton";
import ProductCardDetails from "./ProductCardDetails";
import ProductCardImage from "./ProductCardImage";

export const ProductCard = ({ product }) => {
  return (
    <>
      <ProductCardImage product={product} />
      <WishListButton
        product_id={product._id}
        wishlist={product.isWishListed}
      />
      <div className='card-details'>
        <ProductCardDetails
          product={product}
          id={product._id}
          name={product.name}
          price={product.price}
          category={product.category_name}
          quantity={product.quantity}
        />
      </div>
    </>
  );
};
