import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BuyNow = ({ cartItem }) => {
  const navigate = useNavigate()
  const [showMessage, setShowMessage] = useState(false)
  const totalCartValue = cartItem.reduce(
    (total, { price, quantity }) => (total += price * quantity),
    0,
  )
  const totalQuantity = cartItem.reduce(
    (total, { quantity }) => (total += quantity),
    0,
  )
  const buyProducts = () => {
    if (totalQuantity) {
      navigate('/addresses')
    } else {
      setShowMessage(true)
    }
  }
  return (
    <div className="buy_product">
      {totalQuantity && (
        <h3>
          SubTotal({totalQuantity} items): {totalCartValue}
        </h3>
      )}
      {showMessage && <div>Please atleast one item to checkout</div>}
      <button className="buy_btn" onClick={() => buyProducts()}>
        Proceed to Buy
      </button>
    </div>
  )
}

export default BuyNow
