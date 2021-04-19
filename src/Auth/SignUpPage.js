import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useReducer } from "react";
import { useNavigate } from "react-router";
import callServer from "../api_calls/axios";
import { useAuth } from "./auth-context";

const manageUser = (state, action) => {
  switch (action.type) {
    case "FIRST_NAME":
      return { ...state, firstName: action.value };
    case "LAST_NAME":
      return { ...state, lastName: action.value };
    case "EMAIL":
      return { ...state, email: action.value };
    case "USER_NAME":
      return { ...state, userName: action.value };
    case "PASSWORD":
      return { ...state, password: action.value };
    case "RE_ENTER_PASSWORD":
      return { ...state, re_enterPassword: action.value };
    default:
      return state;
  }
};
const SignUpPage = () => {
  const { dispatch } = useAuth();
  const navigate = useNavigate();
  const [
    { firstName, lastName, email, userName, password, re_enterPassword },
    setUserDetails,
  ] = useReducer(manageUser, {
    firstName: null,
    lastName: null,
    email: null,
    userName: null,
    password: null,
    re_enterPassword: null,
  });
  const signup = async () => {
    const { success, data } = await callServer({
      url: "/user/signup",
      type: "POST",
      body: {
        firstname: firstName,
        lastname: lastName,
        email,
        username: userName,
        password,
      },
    });
    if (success) {
      dispatch({
        type: "SET_CREDENTIALS",
        userId: data.user_id,
        username: data.user_name,
      });
      dispatch({
        type: "LOGIN",
      });
      localStorage.setItem(
        "user",
        JSON.stringify({
          userId: data.user_id,
          isUserLoggedIn: true,
          wishList: data.wishlist,
          cart: data.cart,
        })
      );
      navigate("/");
    }
  };
  return (
    <div className='signin-form'>
      <input
        type='text'
        placeholder='First Name'
        className='inputbox'
        value={firstName}
        onChange={(e) =>
          setUserDetails({ type: "FIRST_NAME", value: e.target.value })
        }
      />
      <input
        type='text'
        placeholder='Last Name'
        className='inputbox'
        value={lastName}
        onChange={(e) =>
          setUserDetails({ type: "LAST_NAME", value: e.target.value })
        }
      />
      <input
        type='email'
        placeholder='Email Id'
        className='inputbox'
        value={email}
        onChange={(e) =>
          setUserDetails({ type: "EMAIL", value: e.target.value })
        }
      />
      <input
        type='text'
        placeholder='Username'
        className='inputbox'
        value={userName}
        onChange={(e) =>
          setUserDetails({ type: "USER_NAME", value: e.target.value })
        }
      />
      <div className='password-textbox'>
        <input
          type='password'
          placeholder='Enter Password'
          className='inputbox filled'
          value={password}
          onChange={(e) =>
            setUserDetails({ type: "PASSWORD", value: e.target.value })
          }
        />
        <span className='btn-show-password'>
          <FontAwesomeIcon icon={faEye} size='1x' />
        </span>
      </div>

      <div className='password-textbox'>
        <input
          type='password'
          placeholder='Re-Enter Password'
          className='inputbox filled'
          value={re_enterPassword}
          onChange={(e) =>
            setUserDetails({ type: "RE_ENTER_PASSWORD", value: e.target.value })
          }
        />
        <span className='btn-show-password'>
          <FontAwesomeIcon icon={faEye} size='1x' />
        </span>
      </div>

      <div>
        <button className='btn-primary' onClick={() => signup()}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
