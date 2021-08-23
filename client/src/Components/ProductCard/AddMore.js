import { useCart } from '../../cart-context/cart-context'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import callServer from '../../api_calls/axios'
import { useAuth } from '../../Auth/auth-context'
export const AddMore = ({ quantity, product_id, product }) => {
  const { cartDispatch } = useCart()
  const {
    state: { userId },
  } = useAuth()
  const modifyCart = async ({ incOrDec }) => {
    const {
      success,
      updatedCart: { products },
    } = await callServer({
      url: `/${userId}/cart`,
      type: 'POST',
      body: { productId: product_id, quantity: incOrDec },
    })
    if (success) {
      cartDispatch({ type: 'SET_CART_ITEMS', products })
    }
  }

  const isInStock = product?.stock_quantity === 0

  return (
    <>
      <button
        className="btn-primary btn-bg-color left-marginn"
        onClick={() => modifyCart({ incOrDec: -1 })}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <span className="text-lg btn-color"> {quantity} </span>
      <button
        className={`btn-primary btn-bg-color  ${isInStock && 'disabled'}`}
        disabled={isInStock}
        onClick={() => modifyCart({ incOrDec: 1 })}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </>
  )
}
