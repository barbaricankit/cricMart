import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import manageProductReducer from "./reducerFunction";
import { GetProductsList } from "../database/products.db";
import * as util from "../utility/util_functions";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { data, error, loader } = GetProductsList();
  const [productList, setProductList] = useState([]);
  const [cartState, cartDispatch] = useReducer(manageProductReducer, {
    cartItems: [],
    wishList: [],
    sortByPrice: null,
    fastDelivery: false,
    showAllProducts: true,
    totalCartValue: 0,
    priceRangeMaxValue: 50000,
    searchText: "",
    showLoader: loader,
    error: error,
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
    const { data: productList } = data;
    setProductList(productList || []);
  }, [data]);

  useEffect(() => {}, []);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch, filteredArray }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
