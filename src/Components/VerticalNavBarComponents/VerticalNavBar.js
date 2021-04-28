import { useCart } from "../../cart-context/cart-context";
import { Categories } from "./CategoriesComponent";
import { Filtering } from "./Filtering";
import { Sorting } from "./Sorting";
export const VerticalNavBar = () => {
  const { navbar } = useCart();
  const {
    cartState: { showNav },
  } = useCart();

  return (
    <>
      <div ref={navbar} className={`nav__bar ${showNav ? "show-nav-bar" : ""}`}>
        <Sorting />
        <Filtering />
        <Categories />
      </div>
    </>
  );
};
