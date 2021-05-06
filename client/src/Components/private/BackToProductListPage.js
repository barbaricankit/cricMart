import { NavLink } from "react-router-dom";

const BackToProductListPage = () => {
  return (
    <NavLink to='/products/All' className='btn-back-to-product-list'>
      <button className='btn-text'>Back to Product List</button>
    </NavLink>
  );
};
export default BackToProductListPage;
