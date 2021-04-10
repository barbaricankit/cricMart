import { NavLink } from "react-router-dom";
export const Homepage = () => {
  return (
    <>
      <div style={{ margin: "1rem", padding: "1rem" }}>
        <h1 style={{ padding: "1rem" }}>Welcome to cricMart</h1>
        <img
          style={{ width: "100%" }}
          src='https://cdn.shopify.com/s/files/1/0506/5044/8050/collections/Cricket-Accessories_1000x.jpg?v=1606914358'
          alt='Cricket Accessories'
        />
        <div style={{ padding: "1rem" }}>
          You can find and buy anything related to cricket over here.
        </div>
        <div style={{ padding: "1rem" }}>
          We hope you have a great experience shopping from here
        </div>
        <NavLink to='/products/All'>
          <button
            style={{ cursor: "pointer", margin: "1rem", padding: "1rem" }}>
            Continue Shopping
          </button>
        </NavLink>
      </div>
    </>
  );
};
