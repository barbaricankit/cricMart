import { useCart } from "../../cart-context/cart-context";

export const Sorting = () => {
  const { cartState, cartDispatch } = useCart();
  return (
    <>
      <div
        className='opt-clear-all'
        onClick={() => cartDispatch({ type: "CLEAR_ALL_FILTERS" })}>
        Clear All Filters
      </div>
      <div>
        <legend>
          <div className='h4'>Sort By</div>
        </legend>
        <div className='filter-options'>
          <label>
            <input
              type='radio'
              name='priceSort'
              checked={
                cartState.sortByPrice === "Price_High_to_Low" ? true : false
              }
              onChange={() =>
                cartDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "Price_High_to_Low",
                })
              }
            />
            <span className='input_field'>Price High to Low</span>
          </label>
        </div>
        <div className='filter-options'>
          <label>
            <input
              type='radio'
              name='priceSort'
              checked={
                cartState.sortByPrice === "Price_Low_to_High" ? true : false
              }
              onChange={() =>
                cartDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "Price_Low_to_High",
                })
              }
            />
            <span className='input_field'>Price Low to High</span>
          </label>
        </div>
      </div>
    </>
  );
};
