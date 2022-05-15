import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import actionUserAuth from '../../ducks/userAuthorization/actions';
import {
  StyleLogin, LoginForm, LoginTitle, LabelInput, LoginText, LoginInput, LoginButton,
} from './StyleLogin';

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
    dispatch(actionUserAuth(loginValues));
    navigateToHomePage('/');
  };
  return (
    <StyleLogin>
      <LoginForm action="#" autoComplete="off" onSubmit={userAuth}>
        <LoginTitle>Sign in</LoginTitle>
        <LabelInput htmlFor="loginEmail">
          <LoginText>Email address</LoginText>
          <LoginInput
            id="loginEmail"
            type="email"
            name="email"
            value={loginValues.email}
            onChange={handleChange}
            required
          />
        </LabelInput>
        <LabelInput htmlFor="loginPassword">
          <LoginText>Password</LoginText>
          <LoginInput
            id="loginPassword"
            type="password"
            name="password"
            value={loginValues.password}
            onChange={handleChange}
            required
          />
        </LabelInput>
        <LoginButton type="submit">Sign in</LoginButton>
      </LoginForm>
    </StyleLogin>
  );
}

export default Login;
