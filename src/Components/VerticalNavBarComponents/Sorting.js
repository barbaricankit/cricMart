import { useCart } from "../../cart-context/cart-context";

export const Sorting = () => {
  const { cartState, cartDispatch } = useCart();
  return (
    <>
      <div
        className='opt-clear-all'
        onClick={() => cartDispatch({ type: "CLEARALLFILTERS" })}>
        Clear All Filters
      </div>
      <div>
        <legend>Sort By</legend>
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
                  type: "sortByPrice",
                  payload: "Price_High_to_Low",
                })
              }
            />
            Price High to Low
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
                  type: "sortByPrice",
                  payload: "Price_Low_to_High",
                })
              }
            />
            Price Low to High
          </label>
        </div>
      </div>
    </>
  );
};
