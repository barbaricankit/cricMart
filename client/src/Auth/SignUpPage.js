import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useReducer, useState } from "react";
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
  const [showPassword, setShowPassword] = useState(false);
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
      <div className='h1'>Sign Up</div>
      <label for='inputbox_1' className='text-label'>
        First Name<span className='red-color'>*</span>
      </label>
      <div>
        <input
          id='inputbox_1'
          className='textbox'
          type='text'
          placeholder='First Name'
          value={firstName}
          onChange={(e) =>
            setUserDetails({ type: "FIRST_NAME", value: e.target.value })
          }
        />
      </div>
      <br />
      <label for='inputbox_2' className='text-label'>
        Last Name<span className='red-color'>*</span>
      </label>
      <div>
        <input
          id='inputbox_2'
          className='textbox'
          type='text'
          placeholder='Last Name'
          value={lastName}
          onChange={(e) =>
            setUserDetails({ type: "LAST_NAME", value: e.target.value })
          }
        />
      </div>
      <br />
      <label for='inputbox_3' className='text-label'>
        Email Id<span className='red-color'>*</span>
      </label>
      <div>
        <input
          id='inputbox_3'
          className='textbox'
          type='email'
          placeholder='Email Id'
          value={email}
          onChange={(e) =>
            setUserDetails({ type: "EMAIL", value: e.target.value })
          }
        />
      </div>
      <br />
      <label for='inputbox_4' className='text-label'>
        Username<span className='red-color'>*</span>
      </label>
      <div>
        <input
          id='inputbox_4'
          className='textbox'
          type='text'
          placeholder='Enter Username'
          value={userName}
          onChange={(e) =>
            setUserDetails({ type: "USER_NAME", value: e.target.value })
          }
        />
      </div>
      <br />
      <label for='inputbox_4' className='text-label'>
        Enter Password<span className='red-color'>*</span>
      </label>
      <div className='password-textbox'>
        <input
          id='inputbox_4'
          className='textbox'
          type={showPassword ? "text" : "password"}
          placeholder='Enter Password'
          value={password}
          onChange={(e) =>
            setUserDetails({ type: "PASSWORD", value: e.target.value })
          }
        />
      </div>
      <br />
      <label for='inputbox_4' className='text-label'>
        Re-Enter Password<span className='red-color'>*</span>
      </label>
      <div className='password-textbox'>
        <input
          id='inputbox_4'
          className='textbox'
          type={showPassword ? "text" : "password"}
          placeholder='Re-Enter Password'
          value={re_enterPassword}
          onChange={(e) =>
            setUserDetails({ type: "RE_ENTER_PASSWORD", value: e.target.value })
          }
        />
        {password !== re_enterPassword && password && re_enterPassword && (
          <span class='error-text'>Passwords do not match</span>
        )}
        <span
          className='btn-show-password'
          onClick={() => setShowPassword((prevalue) => !prevalue)}>
          <FontAwesomeIcon icon={faEye} size='1x' />
        </span>
      </div>

      <div>
        <button className='btn-primary btn-bg-color' onClick={() => signup()}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
