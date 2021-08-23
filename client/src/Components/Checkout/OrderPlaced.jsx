import { useNavigate } from 'react-router-dom'

const OrderPlaced = ({ cartItem }) => {
  const navigate = useNavigate()

  return (
    <div className="order_page">
      <h3>Your Order has been successfully placed</h3>
      <button className="buy_btn" onClick={() => navigate('/products/All')}>
        Continue Shopping
      </button>
    </div>
  )
}

export default OrderPlaced
