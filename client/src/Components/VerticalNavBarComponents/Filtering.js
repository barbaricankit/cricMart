import { useEffect, useState } from "react";
import { useCart } from "../../cart-context/cart-context";
export const Filtering = () => {
  const { cartState, cartDispatch } = useCart();
  const [inputPrice, setPrice] = useState(cartState.priceRangeMaxValue);

  useEffect(() => {
    setPrice(cartState.priceRangeMaxValue);
  }, [cartState.priceRangeMaxValue]);
  return (
    <>
      <div>
        <legend>
          <div className='h4'>Filters</div>
        </legend>
        <div className='filter-options'>
          <label>
            <input
              type='checkbox'
              checked={cartState.showAllProducts}
              onChange={() =>
                cartDispatch({
                  type: "SHOW_ALL_PRODUCTS",
                })
              }
            />
            <span className='input_field'>Include Out of Stock</span>
          </label>
        </div>
        <div className='filter-options'>
          <label>
            <input
              type='checkbox'
              checked={cartState.fastDelivery}
              onChange={() =>
                cartDispatch({
                  type: "FAST_DELIVERY",
                })
              }
            />
            <span className='input_field'>Fast Delivery Only</span>
          </label>
        </div>
      </div>
      <label className='price-range-label'>
        <div className='h4'>Price Range</div>
        <input
          type='range'
          min='0'
          max='50000'
          step='10'
          className='filter-options'
          value={inputPrice}
          onInput={(e) => {
            setPrice(e.target.value);
            cartDispatch({ type: "PRICE_RANGE", value: e.target.value });
          }}
        />
        <div>
          <label>
            <span className='filter-options'>Min</span>
            <input disabled type='number' value='0' className='min_range' />
            <span className='filter-options'>Max</span>
            <input
              onChange={(e) => {
                setPrice(e.target.value);
                cartDispatch({ type: "PRICE_RANGE", value: e.target.value });
              }}
              type='number'
              value={inputPrice}
              className='max_range'
            />
          </label>
        </div>
      </label>
    </>
  );
};
