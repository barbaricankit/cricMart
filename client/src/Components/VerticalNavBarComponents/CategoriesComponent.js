import { NavLink } from "react-router-dom";
export const Categories = () => {
  const categories = ["CricketKit", "Bat", "Ball", "Gloves"];

  return (
    <nav className='categories-link'>
      <div className='h4'>Categories</div>
      <NavLink
        className='nav-link'
        activeStyle={{
          color: "#1E40AF",
        }}
        to='/products/All'>
        <span>All</span>
      </NavLink>
      {categories.map((category, index) => (
        <NavLink
          key={index}
          className='nav-link'
          activeStyle={{
            color: "#1E40AF",
          }}
          to={`/products/${category}`}>
          <span className='category-name'>{category}</span>
        </NavLink>
      ))}
    </nav>
  );
};
