import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth-context";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  const loginHandler = () => {
    dispatch({
      type: "SET_CREDENTIALS",
      username: username,
      password: password,
      navigate: navigate,
      navigateTo: state?.from,
    });
  };
  return (
    <div className='signin-form'>
      <div className='h1'>Sign In</div>

      <div>
        <label className='text-label'>
          Username<span className='red-color'>*</span>
        </label>
        <div>
          <input
            className='textbox'
            type='text'
            placeholder='Enter Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <br />
        <label className='text-label'>
          Enter Password<span className='red-color'>*</span>
        </label>
        <div className='password-textbox'>
          <input
            className='textbox'
            type={showPassword ? "text" : "password"}
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className='btn-show-password'
            onClick={() => setShowPassword((prevalue) => !prevalue)}>
            <FontAwesomeIcon icon={faEye} size='1x' />
          </span>
        </div>
        <br />
      </div>
      <button
        className='btn-primary btn-bg-color'
        onClick={() => loginHandler()}>
        Sign In
      </button>
      <p>
        New User? Click to <NavLink to='/signup'>Sign Up</NavLink>
      </p>
    </div>
  );
};
