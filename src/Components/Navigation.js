import {
  faFutbol,
  faHeart,
  faSearch,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export const Navigation = () => {
  return (
    <>
      <nav className='fixed-horizontal-bar horizontal-nav-bar'>
        <NavLink
          end
          className='navigation-top'
          activeStyle={{ color: "lightblue" }}
          to='/'>
          <div className='logo-text'>
            <FontAwesomeIcon icon={faFutbol} className='logo' />
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
            <span>
              <FontAwesomeIcon icon={faShoppingBag} className='action-icons' />
            </span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};
