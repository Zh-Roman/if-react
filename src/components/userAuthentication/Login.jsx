import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  faEye, faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import actionUserAuth from '../../ducks/userAuthorization/actions';
import {
  StyleAuthentication,
  AuthForm,
  AuthTitle,
  AuthLabelInput,
  AuthText,
  AuthInput,
  AuthButton,
  AuthIcon,
  Registered,
  ErrorMessage,
} from './StyleAuthentication';

function Login() {
  const dispatch = useDispatch();
  const navigateToHomePage = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [loginValues, setLoginValues] = useState({
    userName: '',
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
    if (localStorage.getItem('userName') === loginValues.userName
      && localStorage.getItem('pwd') === loginValues.password) {
      dispatch(actionUserAuth(loginValues));
      navigateToHomePage('/');
    } else {
      setErrMsg('Missing Username or Password');
      setLoginValues({
        userName: '',
        password: '',
      });
    }
  };
  const disabledButton = !loginValues.userName || !loginValues.password;
  return (
    <StyleAuthentication>
      <AuthForm autoComplete="off" onSubmit={userAuth}>
        <ErrorMessage
          className={errMsg ? 'err_msg' : 'offscreen'}
          aria-live="assertive"
        >
          {errMsg}
        </ErrorMessage>
        <AuthTitle>Sign in</AuthTitle>
        <AuthLabelInput htmlFor="loginEmail">
          <AuthText>Username:</AuthText>
          <AuthInput
            id="loginEmail"
            type="text"
            name="userName"
            value={loginValues.userName}
            onChange={handleChange}
            required
          />
        </AuthLabelInput>
        <AuthLabelInput htmlFor="loginPassword">
          <AuthText>Password:</AuthText>
          <AuthInput
            id="loginPassword"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={loginValues.password}
            onChange={handleChange}
            required
          />
        </AuthLabelInput>
        <AuthIcon role="presentation" className="show_pwd" onClick={() => setShowPassword(!showPassword)}>
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          <p>show password</p>
        </AuthIcon>
        <AuthButton
          type="submit"
          disabledButton={disabledButton}
          disabled={disabledButton}
        >
          Sign in
        </AuthButton>
        <Registered>
          Need an Account?
          <br />
          <Link to="/register">Sign up</Link>
        </Registered>
      </AuthForm>
    </StyleAuthentication>
  );
}

export default Login;
