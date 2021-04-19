import WishListButton from "./WishListButton";
import ProductCardDetails from "./ProductCardDetails";
import ProductCardImage from "./ProductCardImage";

export const ProductCard = ({ product }) => {
  return (
    <div style={{ flexGrow: "1" }}>
      <ProductCardImage product={product} />
      <WishListButton
        product_id={product._id}
        wishlist={product.isWishListed}
      />
      <ProductCardDetails
        name={product.name}
        price={product.price}
        category={product.category_name}
      />
    </div>
  );
};
