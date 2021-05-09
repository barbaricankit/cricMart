const TotalCartValue = ({ cartItem }) => {
  const totalCartValue = cartItem.reduce(
    (total, { price, quantity }) => (total += price * quantity),
    0
  );
  return totalCartValue !== 0 ? (
    <div className='total-cart-value'>Total Cart Value: {totalCartValue}</div>
  ) : (
    <div className='item-count-zero'>Add items to the cart to order</div>
  );
};
export default TotalCartValue;
