import { NavLink } from 'react-router-dom'

const ProductCardImage = ({ product }) => {
  const isInStock = product.stock_quantity === 0
  return (
    <NavLink state={product} to={`/product/${product._id}`}>
      <img
        className={`card-img ${isInStock && 'grayed-img'} `}
        src={product.img}
        alt={product.name}
      />
      {isInStock && <span className="overlay-text">OUT OF STOCK</span>}
    </NavLink>
  )
}

export default ProductCardImage
