import { NavLink } from "react-router-dom";
export const Categories = () => {
  const categories = ["CricketKit", "Bat", "Ball", "Gloves"];

  return (
    <nav className='categories-link'>
      <div>Categories</div>
      <NavLink
        className='nav-link'
        activeStyle={{ backgroundColor: "blue" }}
        to='/products/All'>
        <div>All</div>
      </NavLink>
      {categories.map((category, index) => (
        <NavLink
          key={index}
          className='nav-link'
          activeStyle={{ backgroundColor: "blue" }}
          to={`/products/${category}`}>
          <div style={{ cursor: "pointer" }}>{category}</div>
        </NavLink>
      ))}
    </nav>
  );
};
