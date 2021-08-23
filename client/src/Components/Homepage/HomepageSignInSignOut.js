import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Auth/auth-context'

const HomepageSignInSignOut = () => {
  const { state, logoutFunction, dispatch } = useAuth()
  const navigate = useNavigate()
  const loginHandler = () => {
    dispatch({
      type: 'SET_CREDENTIALS',
      username: 'aniket1234',
      password: 'Welcome',
      navigate: navigate,
      navigateTo: '/products/All',
    })
  }
  return (
    <>
      {!state.login && (
        <>
          <NavLink to="/signin">
            <button className="btn-primary btn-bg-color left-margin">
              Sign In
            </button>
          </NavLink>
          <NavLink to="/products/All">
            <button
              className="btn-primary btn-bg-color left-margin"
              onClick={() => loginHandler()}
            >
              Guest Login
            </button>
          </NavLink>
        </>
      )}
      {state.login && (
        <NavLink to="/">
          <button
            className="btn-primary btn-bg-color left-margin"
            onClick={() => logoutFunction(navigate)}
          >
            Sign Out
          </button>
        </NavLink>
      )}
    </>
  )
}
export default HomepageSignInSignOut
