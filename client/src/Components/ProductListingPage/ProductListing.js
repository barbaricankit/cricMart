import { useParams } from "react-router";
import { useCart } from "../../cart-context/cart-context";
import ProductPageCard from "./ProductListingPageCard";
import { VerticalNavBar } from "../VerticalNavBarComponents/VerticalNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
export const ProductListing = () => {
  const { filteredArray, cartState } = useCart();
  const { categoryName } = useParams();

  const products =
    categoryName === "All"
      ? filteredArray
      : filteredArray.filter((item) => item.category_name === categoryName);

  return (
    <div className='main-content'>
      <VerticalNavBar />
      <div className='content'>
        {cartState.showLoader && (
          <FontAwesomeIcon
            icon={faCircleNotch}
            size='4x'
            className='btn-color fa-spin'
          />
        )}
        <div className='cards'>
          {products.map((product) => (
            <ProductPageCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};
