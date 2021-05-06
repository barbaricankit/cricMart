import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import manageProductReducer from "./reducerFunction";
import * as util from "../utility/util_functions";
import callServer from "../api_calls/axios";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const navbar = useRef(null);
  const [cartState, cartDispatch] = useReducer(manageProductReducer, {
    cartItems: [],
    wishList: [],
    sortByPrice: null,
    fastDelivery: false,
    showAllProducts: true,
    totalCartValue: 0,
    priceRangeMaxValue: 50000,
    searchText: "",
    showLoader: true,
    error: "error",
    showNav: false,
  });

  const composedFunction = util.composeFunction(
    cartState,
    util.sortingByPrice,
    util.filterByStockAndDelivery,
    util.showPriceRange,
    util.searchFilter
  );

  const filteredArray = composedFunction(productList);

  filteredArray.forEach((product) => {
    const item = cartState.cartItems.find(
      (cartItem) => cartItem.productId === product._id
    );
    if (!item) {
      product.quantity = undefined;
    } else {
      product.quantity = item.quantity;
    }
  });
  filteredArray.forEach((product) => {
    const item = cartState.wishList.find((id) => id === product._id);
    if (item) {
      product.isWishListed = true;
    } else {
      product.isWishListed = false;
    }
  });

  useEffect(() => {
    (async () => {
      const { data: productList } = await callServer({
        url: "/products",
        type: "GET",
      });
      setProductList(productList || []);
      cartDispatch({ type: "SET_LOADER", value: false });
    })();
  }, []);
  return (
    <CartContext.Provider
      value={{ cartState, cartDispatch, filteredArray, navbar }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
