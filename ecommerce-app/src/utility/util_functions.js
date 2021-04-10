export const manageCart = (state, fruitObj, incOrDec) => {
  return {
    ...state,
    cartItems: state.cartItems.map((fruit) =>
      fruitObj.id === fruit.id
        ? { ...fruit, quantity: fruit.quantity + incOrDec }
        : fruit
    ),
  };
};

export const removeItemFromCart = (state, action) => {
  return {
    ...state,
    cartItems: state.cartItems.map((fruit) =>
      fruit.id === action.item.id ? { ...fruit, quantity: 0 } : fruit
    )
  };
};

export const manageWishList = (state, fruitObj) => {
  return {
    ...state,
    cartItems: state.cartItems.map((fruit) =>
      fruitObj.id === fruit.id
        ? { ...fruit, isWishListed: !fruit.isWishListed }
        : fruit
    ),
  };
};

export const sortingByPrice = (cartState, productArray) => {
  switch (cartState.sortByPrice) {
    case "Price_High_to_Low":
      return productArray.sort((a, b) => b.price - a.price);

    case "Price_Low_to_High":
      return productArray.sort((a, b) => a.price - b.price);
    default:
      return productArray;
  }
};

export const filterByStockAndDelivery = ({ sortedArray, cartState }) => {
  const outOfStockProducts = cartState.showAllProducts
    ? sortedArray
    : sortedArray.filter((item) => !item.inStock);
  return !cartState.fastDelivery
    ? outOfStockProducts
    : outOfStockProducts.filter((item) => !item.isFastDeliveryAvailable);
};

export const showPriceRange = (state, data) => {
  return data.filter(
    (product) => Number(product.price) < state.priceRangeMaxValue
  );
};

export const searchFilter = (state, data) => {
  if (state.searchText === "") return data;
  return data.filter(
    (product) =>
      product.name.toLowerCase().includes(state.searchText.toLowerCase()) ||
      product.category.toLowerCase().includes(state.searchText.toLowerCase())
  );
};
