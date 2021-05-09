import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth/auth-context";

const HomepageSignInSignOut = () => {
  const { state, logoutFunction } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      {!state.login && (
        <NavLink to='/signin'>
          <button className='btn-primary btn-bg-color left-margin'>
            Sign In
          </button>
        </NavLink>
      )}
      {state.login && (
        <NavLink to='/'>
          <button
            className='btn-primary btn-bg-color left-margin'
            onClick={() => logoutFunction(navigate)}>
            Sign Out
          </button>
        </NavLink>
      )}
    </>
  );
};
export default HomepageSignInSignOut;
