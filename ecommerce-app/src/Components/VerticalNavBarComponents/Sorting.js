import { useCart } from "../../cart-context";

export const Sorting = () => {
  const { cartState, dispatch } = useCart();
  return (
    <>
      <div
        style={{ color: "blue", cursor: "pointer" }}
        onClick={() => dispatch({ type: "CLEARALLFILTERS" })}>
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
                dispatch({
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
                dispatch({
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
