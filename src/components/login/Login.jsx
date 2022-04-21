import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ACTION_USER_AUTH } from '../../ducks/userAuthorization/actions';

function Login() {
  const dispatch = useDispatch();
  const navigateToHomePage = useNavigate();
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setLoginValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const userAuth = (e) => {
    e.preventDefault();
    dispatch(ACTION_USER_AUTH(loginValues));
    navigateToHomePage('/');
  };
  return (
    <div className="login_page">
      <form action="#" className="login_form" autoComplete="off" onSubmit={userAuth}>
        <h3 className="login_title">Sign in</h3>
        <label htmlFor="loginEmail" className="label_input">
          <p>Email address</p>
          <input
            id="loginEmail"
            type="email"
            name="email"
            value={loginValues.email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="loginPassword" className="label_input">
          <p>Password</p>
          <input
            id="loginPassword"
            type="password"
            name="password"
            value={loginValues.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="login_button">Sign in</button>
      </form>
    </div>
  );
}

export default Login;
