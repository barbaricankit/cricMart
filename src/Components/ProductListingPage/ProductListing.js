import { useParams } from "react-router";
import { useCart } from "../../cart-context/cart-context";
import ProductPageCard from "./ProductListingPageCard";
import { VerticalNavBar } from "../VerticalNavBarComponents/VerticalNavBar";
export const ProductListing = () => {
  const { filteredArray } = useCart();
  const { categoryName } = useParams();

  const products =
    categoryName === "All"
      ? filteredArray
      : filteredArray.filter((item) => item.category_name === categoryName);

  return (
    <>
      <VerticalNavBar />
      <div
        className='component-details'
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}>
        {products.map((product) => (
          <ProductPageCard product={product} key={product._id} />
        ))}
      </div>
    </>
  );
};
