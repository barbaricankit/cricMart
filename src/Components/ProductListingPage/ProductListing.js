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
    <div className='main-content'>
      <VerticalNavBar />
      <div className='content'>
        <div className='cards'>
          {products.map((product) => (
            <ProductPageCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};
