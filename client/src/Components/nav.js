import {
  faBars,
  faChevronLeft,
  faFutbol,
  faHeart,
  faSearch,
  faShoppingCart,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../Auth/auth-context'
import { useCart } from '../cart-context/cart-context'

export const Navigation = () => {
  const [searchText, setSearchText] = useState('')
  const [showSearchBox, setShowSearchBox] = useState(false)
  const { state, logoutFunction } = useAuth()
  const {
    cartDispatch,
    navbar,
    cartState: { cartItems, wishList },
  } = useCart()
  const [showOptions, setShowOptions] = useState(false)
  const menuBtn = useRef(null)
  const navigate = useNavigate()

  const wishlist_count = wishList?.length ? wishList?.length : null
  const cart_count = cartItems?.length ? cartItems?.length : null
  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (
        menuBtn.current &&
        navbar.current &&
        !menuBtn.current.contains(e.target) &&
        !navbar.current.contains(e.target)
      )
        cartDispatch({ type: 'SHOW_NAV', value: false })
    })
    return () => cartDispatch({ type: 'SHOW_NAV', value: false })
  }, [cartDispatch, navbar])

  return (
    <header>
      <div className={`search_bar ${showSearchBox ? 'show-search_bar' : ''}`}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="back_icon"
          size="1x"
          onClick={() => setShowSearchBox(false)}
        />
        <input
          type="search"
          placeholder="Search your products..."
          className="search_text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
            cartDispatch({ type: 'SEARCH_ACTION', value: e.target.value })
          }}
        />
        <FontAwesomeIcon icon={faSearch} size="1x" className="srch-icon" />
      </div>
      <div className="page_header">
        <div className="menu_elem">
          <div className="menu__item menu-btn ">
            <div
              ref={menuBtn}
              onClick={() => cartDispatch({ type: 'SHOW_NAV' })}
            >
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
          <NavLink
            end
            className="menu__item nav__item"
            activeStyle={{ color: 'lightblue' }}
            to="/"
          >
            <div className="logo-details">
              <FontAwesomeIcon icon={faFutbol} className="logo" />
              <span className="logo-text">CRICMART</span>
            </div>
          </NavLink>
        </div>
        <div className="menu__item menu_search">
          <input
            type="search"
            placeholder="Search your products..."
            className="search_box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
              cartDispatch({ type: 'SEARCH_ACTION', value: e.target.value })
            }}
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <div className="menu_elem">
          <span className="menu__item nav__item">
            <span>
              <FontAwesomeIcon
                icon={faSearch}
                className="nav-icon"
                onClick={() => setShowSearchBox((prev) => !prev)}
              />
            </span>
          </span>
          <NavLink
            className="menu__item nav__item"
            activeStyle={{ color: '#06f' }}
            to="/wishlist"
          >
            <span className="badge-icon">
              <FontAwesomeIcon icon={faHeart} />
              {wishlist_count && (
                <span className="badge">{wishlist_count}</span>
              )}
            </span>
          </NavLink>

          <NavLink
            className="menu__item nav__item"
            activeStyle={{ color: '#06f' }}
            to="/cart"
          >
            <span className="badge-icon">
              <FontAwesomeIcon icon={faShoppingCart} />
              {cart_count && <span className="badge">{cart_count}</span>}
            </span>
          </NavLink>

          {!state.login && (
            <NavLink
              className="menu__item nav__item"
              activeStyle={{ color: '#06f' }}
              to="/signin"
            >
              <FontAwesomeIcon icon={faSignInAlt} />
            </NavLink>
          )}

          <div className="user">
            {state.login && (
              <span
                onClick={() => setShowOptions((showOptions) => !showOptions)}
              >
                <img
                  className="avatar-sm nav-avatar"
                  src="https://res.cloudinary.com/ankitneog/image/upload/v1627040297/My_Image_qtnqch.jpg"
                  alt="userimage"
                />
              </span>
            )}
            {showOptions && (
              <div className="user-menu">
                <div
                  className="user-sub-menu"
                  onClick={() => {
                    logoutFunction(navigate)
                  }}
                >
                  <div>Logout</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
