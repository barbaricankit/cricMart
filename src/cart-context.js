import { createContext, useContext, useReducer } from "react";
import * as util from "./utility/util_functions";
const CartContext = createContext();

const manageFruitReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return util.manageCart(state, action.item, 1);
    case "DECREMENT":
      return util.manageCart(state, action.item, -1);
    case "REMOVE":
      return util.removeItemFromCart(state, action);
    case "WISHLIST":
      return util.manageWishList(state, action.item);
    case "sortByPrice":
      return { ...state, sortByPrice: action.payload };
    case "SHOWALLPRODUCTS":
      return { ...state, showAllProducts: !state.showAllProducts };
    case "FASTDELIVERY":
      return { ...state, fastDelivery: !state.fastDelivery };
    case "PRICERANGE":
      return { ...state, priceRangeMaxValue: action.value };
    case "SEARCH_ACTION":
      return { ...state, searchText: action.value };
    case "CLEARALLFILTERS":
      return {
        ...state,
        sortByPrice: null,
        fastDelivery: false,
        showAllProducts: true,
        priceRangeMaxValue: 1000,
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children, item: { productLists } }) => {
  const [cartState, dispatch] = useReducer(manageFruitReducer, {
    cartItems: productLists,
    sortByPrice: null,
    fastDelivery: false,
    showAllProducts: true,
    totalCartValue: 0,
    priceRangeMaxValue: 1000,
    searchText: "",
  });
  const composedFunction = util.composeFunction(
    cartState,
    util.sortingByPrice,
    util.filterByStockAndDelivery,
    util.showPriceRange,
    util.searchFilter
  );
  const filteredArray = composedFunction(productLists);
  return (
    <CartContext.Provider value={{ cartState, dispatch, filteredArray }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
