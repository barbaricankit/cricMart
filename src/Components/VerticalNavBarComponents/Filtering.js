import { useCart } from "../../cart-context/cart-context";
export const Filtering = () => {
  const { cartState, cartDispatch } = useCart();
  return (
    <>
      <div>
        <legend>Filters</legend>
        <div className='filter-options'>
          <label>
            <input
              type='checkbox'
              checked={cartState.showAllProducts}
              onChange={() =>
                cartDispatch({
                  type: "SHOWALLPRODUCTS",
                })
              }
            />
            Include Out of Stock
          </label>
        </div>
        <div className='filter-options'>
          <label>
            <input
              type='checkbox'
              checked={cartState.fastDelivery}
              onChange={() =>
                cartDispatch({
                  type: "FASTDELIVERY",
                })
              }
            />
            Fast Delivery Only
          </label>
        </div>
      </div>
      <label style={{ display: "block", marginTop: "1rem" }}>
        Price Range
        <input
          type='range'
          min='0'
          max='1000'
          step='10'
          value={cartState.priceRangeMaxValue}
          onInput={(e) =>
            cartDispatch({ type: "PRICERANGE", value: e.target.value })
          }
        />
      </label>
    </>
  );
};
