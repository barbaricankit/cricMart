import {
  faFutbol,
  faHeart,
  faSearch,
  faShoppingBag,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/auth-context";
import { SearchBar } from "../Components/ProductListingPage/SearchBar";

export const Navigation = () => {
  const { state, logoutFunction } = useAuth();
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <nav className='fixed-horizontal-bar horizontal-nav-bar'>
        <NavLink
          end
          className='navigation-top'
          activeStyle={{ color: "lightblue" }}
          to='/'>
          <div className='logo-text'>
            <FontAwesomeIcon icon={faFutbol} className='logo-icon' size='2x' />
            <span className='h1'> cricMart</span>
          </div>
        </NavLink>
        <SearchBar />
        <div className='cart-wishlist'>
          <NavLink
            activeStyle={{ color: "blue" }}
            style={{ color: "black" }}
            to='/search'>
            <FontAwesomeIcon
              className='srch-icon action-icons'
              icon={faSearch}
            />
          </NavLink>
          <NavLink
            activeStyle={{ color: "white" }}
            style={{ color: "black" }}
            to='/wishlist'>
            <span
              style={{
                marginRight: "1rem",
              }}>
              <FontAwesomeIcon icon={faHeart} className='action-icons' />
            </span>
          </NavLink>
          <NavLink
            activeStyle={{ color: "white" }}
            style={{ color: "black" }}
            to='/cart'>
            <span
              style={{
                marginRight: "1rem",
              }}>
              <FontAwesomeIcon icon={faShoppingBag} className='action-icons' />
            </span>
          </NavLink>
          {!state.login && (
            <NavLink
              activeStyle={{ color: "white" }}
              style={{ color: "black" }}
              to='/signin'>
              <FontAwesomeIcon icon={faSignInAlt} className='action-icons' />
            </NavLink>
          )}

          <div
            className='dropdown-nav'
            onClick={() => setShowOptions((showOptions) => !showOptions)}>
            {state.login && (
              <span className='avatar-double-letter action-icons nav-name'>
                AS
              </span>
            )}
            {showOptions && (
              <div className='dropdown-content'>
                <button className='dropdown-link btn-text'>Profile</button>
                <button className='dropdown-link btn-text'>
                  Manage Accounts
                </button>
                <button
                  className='dropdown-link btn-text'
                  onClick={() => {
                    logoutFunction(navigate);
                  }}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
