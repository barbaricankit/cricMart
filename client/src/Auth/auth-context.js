import { useEffect, useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import callServer from "../api_calls/axios";
import { useCart } from "../cart-context/cart-context";
import authReducer from "./auth_reducer";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { cartDispatch } = useCart();
  const [state, dispatch] = useReducer(authReducer, {
    login: false,
    username: null,
    password: null,
    navigate: null,
    navigateTo: "/",
    userId: null,
  });

  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem("user"));
    if (getUser?.isUserLoggedIn) {
      dispatch({ type: "LOGIN" });
      (async () => {
        const data = await callServer({
          url: `/user/${getUser.userId}`,
          type: "GET",
        });

        dispatch({ type: "LOGIN" });
        dispatch({
          type: "SET_CREDENTIALS",
          userId: data.user_id,
          password: null,
        });
        cartDispatch({
          type: "SET_WISHLISTED_ITEMS",
          products: data.wishlist,
        });
        cartDispatch({ type: "SET_CART_ITEMS", products: data.cart });
      })();
    } else {
      dispatch({ type: "LOGOUT" });
    }
  }, [cartDispatch]);

  useEffect(() => {
    (async () => {
      const data =
        state.username &&
        state.password &&
        (await callServer({
          url: "/user/signin",
          type: "POST",
          body: { username: state.username, password: state.password },
        }));

      if (data?.success) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            userId: data.user_id,
            isUserLoggedIn: true,
            wishList: data.wishlist,
            cart: data.cart,
          })
        );
        dispatch({
          type: "SET_CREDENTIALS",
          userId: data.user_id,
          navigate: state.navigate,
          navigateTo: state.navigateTo,
        });
        dispatch({ type: "LOGIN" });
        state.navigate(state.navigateTo ? state.navigateTo : "/");
        cartDispatch({ type: "SET_WISHLISTED_ITEMS", products: data.wishlist });
        cartDispatch({ type: "SET_CART_ITEMS", products: data.cart });
      }
    })();
  }, [state, cartDispatch]);

  const logoutFunction = (navigate) => {
    localStorage?.removeItem("user");
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  return (
    <AuthContext.Provider value={{ state, dispatch, logoutFunction }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
