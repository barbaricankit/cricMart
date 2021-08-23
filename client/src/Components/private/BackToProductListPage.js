import { NavLink } from 'react-router-dom'

const BackToProductListPage = () => {
  return (
    <NavLink to="/products/All" className="btn-back-to-product-list">
      <button className="btn-text">See Products</button>
    </NavLink>
  )
}
export default BackToProductListPage
