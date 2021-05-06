export const manageCart = (state, product_id, incOrDec) => {
  return {
    ...state,
    cartItems: state.cartItems.find(({ productId }) => productId === product_id)
      ? state.cartItems.map(({ productId, quantity }) =>
          productId === product_id
            ? quantity + incOrDec
              ? { productId, quantity: quantity + incOrDec }
              : null
            : { productId, quantity }
        )
      : [...state.cartItems, { productId: product_id, quantity: 1 }],
  };
};

export const removeItemFromCart = (state, product_id) => {
  return {
    ...state,
    cartItems: state.cartItems.filter(
      (cartItem) => cartItem.productId !== product_id
    ),
  };
};

export const manageWishList = (state, product_id) => {
  return {
    ...state,
    wishList: state.wishList.find((id) => id === product_id)
      ? state.wishList.filter((id) => id !== product_id)
      : [...state.wishList, product_id],
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

export const filterByStockAndDelivery = (cartState, productArray) => {
  const outOfStockProducts = cartState.showAllProducts
    ? productArray
    : productArray.filter((item) => !item.inStock);
  return !cartState.fastDelivery
    ? outOfStockProducts
    : outOfStockProducts.filter((item) => !item.isFastDeliveryAvailable);
};

export const showPriceRange = (state, productArray) => {
  return productArray.filter(
    (product) => Number(product.price) < state.priceRangeMaxValue
  );
};

export const searchFilter = (state, data) => {
  if (state.searchText === "") return data;
  return data.filter(
    (product) =>
      product.name.toLowerCase().includes(state.searchText.toLowerCase()) ||
      product.category_name
        .toLowerCase()
        .includes(state.searchText.toLowerCase())
  );
};

export const composeFunction = (cartState, ...arrayOfFunctions) => (
  productArray
) => {
  return arrayOfFunctions.reduce((filteredArray, element) => {
    return element(cartState, filteredArray);
  }, productArray);
};
