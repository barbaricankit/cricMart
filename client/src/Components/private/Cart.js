import { useCart } from '../../cart-context/cart-context'
import BuyNow from '../Checkout/BuyNow'
import BackToProductListPage from './BackToProductListPage'
import CartPageCard from './CartPageCard'

export const Cart = () => {
  const { filteredArray } = useCart()

  const cartItem = filteredArray.filter((product) => product.quantity)

  return (
    <div className="page-cart">
      <BackToProductListPage />
      <BuyNow cartItem={cartItem} />

      {cartItem.map((product) => (
        <CartPageCard
          key={product._id}
          product={product}
          quantity={product.quantity}
        />
      ))}
    </div>
  )
}
