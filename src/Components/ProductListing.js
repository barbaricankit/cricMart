import { useParams } from "react-router";
import { useCart } from "../cart-context";
import { AddtoCart } from "./AddtoCartComponent";
import { ProductCard } from "./ProductCard";
import { ShowQuantityOption } from "./ShowQuantityComponent";
import { VerticalNavBar } from "./VerticalNavBarComponents/VerticalNavBar";
export const ProductListing = () => {
  const {filteredArray, cartState } = useCart();
  const { categoryName } = useParams();
  return (
    <>
      <VerticalNavBar />
      <div
        className='component-details'
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}>
        {filteredArray.map((product) => {
          if (product.category === categoryName || categoryName === "All")
            return (
              <div key={product.id} className='card card-with-text'>
                <div style={{ flexGrow: "1" }}>
                  <ProductCard
                    product={product}
                    cartItems={cartState.cartItems}
                  />
                </div>
                <div>
                  {cartState.cartItems.map((cartProduct,index) => {
                    if (cartProduct.id === product.id)
                      return cartProduct.quantity !== 0 ? (
                        <ShowQuantityOption
                          product={product}
                          cartProduct={cartProduct}
                          key={index}
                        />
                      ) : (
                        <AddtoCart product={product} key={index} />
                      );
                    return "";
                  })}
                </div>
              </div>
            );
          return "";
        })}
      </div>
    </>
  );
};
