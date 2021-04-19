import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth-context";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
      <h1>Sign In</h1>
      <div>
        <input
          type='text'
          placeholder='Enter Username'
          className='inputbox'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <div className='password-textbox'>
          <input
            type='password'
            placeholder='Enter Password'
            className='inputbox filled'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className='btn-show-password'>
            <FontAwesomeIcon icon={faEye} size='1x' />
          </span>
        </div>
      </div>
      <button className='btn-primary' onClick={() => loginHandler()}>
        Sign In
      </button>
      <p>
        New User? Click to <NavLink to='/signup'>Sign Up</NavLink>
      </p>
    </div>
  );
};
