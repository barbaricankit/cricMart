import * as util from "../utility/util_functions";
const manageProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART_ITEMS":
      return { ...state, cartItems: action.products };
    case "SET_WISHLISTED_ITEMS":
      return { ...state, wishList: action.products };
    case "INCREMENT":
      return util.manageCart(state, action.item, 1);
    case "DECREMENT":
      return util.manageCart(state, action.item, -1);
    case "REMOVE":
      return util.removeItemFromCart(state, action.item);
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
    case "SHOW_NAV":
      return {
        ...state,
        showNav: action.value !== undefined ? action.value : !state.showNav,
      };
    case "CLEARALLFILTERS":
      return {
        ...state,
        sortByPrice: null,
        fastDelivery: false,
        showAllProducts: true,
        priceRangeMaxValue: 50000,
      };

    default:
      return state;
  }
};

export default manageProductReducer;
