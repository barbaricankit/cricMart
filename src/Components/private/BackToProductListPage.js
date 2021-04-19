import { NavLink } from "react-router-dom";

const BackToProductListPage = () => {
  return (
    <NavLink to='/products/All' style={{ float: "right" }}>
      <button className='btn-text'>Back to Product List</button>
    </NavLink>
  );
};
export default BackToProductListPage;
