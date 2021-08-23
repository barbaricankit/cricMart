import { useNavigate } from 'react-router'
import callServer from '../../api_calls/axios'
import { useAuth } from '../../Auth/auth-context'
import { useCart } from '../../cart-context/cart-context'

export const AddtoCart = ({ product_id, product }) => {
  const { cartDispatch } = useCart()
  const { state } = useAuth()
  const navigate = useNavigate()
  const addToCart = async () => {
    if (state.login) {
      const {
        success,
        updatedCart: { products },
      } = await callServer({
        url: `/${state.userId}/cart`,
        type: 'POST',
        body: { productId: product_id, quantity: 1 },
      })
      if (success) {
        cartDispatch({ type: 'SET_CART_ITEMS', products })
      }
    } else {
      navigate('/signin')
    }
  }

  const isInStock = product?.stock_quantity === 0

  return (
    <button
      key={product_id}
      disabled={isInStock}
      className={`btn-primary btn-bg-color left-margin ${
        isInStock && 'disabled'
      } `}
      onClick={() => addToCart()}
    >
      Add to Cart
    </button>
  )
}
