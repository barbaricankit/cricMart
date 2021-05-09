import { NavLink } from "react-router-dom";

import HomepageSignInSignOut from "./HomepageSignInSignOut";

const HomepageButtons = () => {
  return (
    <>
      <NavLink to='/products/All'>
        <button className='btn-secondary btn-color'>Continue Shopping</button>
      </NavLink>
      <HomepageSignInSignOut />
    </>
  );
};

export default HomepageButtons;
