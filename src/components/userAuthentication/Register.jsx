import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  faCheck, faTimes, faInfoCircle, faEye, faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ErrorMessage,
  AuthLabelInput,
  AuthButton,
  AuthForm,
  AuthInput,
  AuthText,
  AuthTitle,
  StyleAuthentication,
  AuthIcon,
  AuthInstructions,
  Registered, SuccessWindow,
} from './StyleAuthentication';

const USER_REGEX = /^[a-zA-Z][a-zA-Z\d-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%]).{8,24}$/;

function Register() {
  const userRef = useRef();
  const errRef = useRef();

  const [userName, setUserName] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(userName);
    setValidName(result);
  }, [userName]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);
  useEffect(() => {
    setErrMsg('');
  }, [userName, pwd, matchPwd]);
  const disabledButton = !validName || !validPwd || !validMatch;

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid1 = USER_REGEX.test(userName);
    const valid2 = PWD_REGEX.test(pwd);
    if (!valid1 || !valid2) {
      setErrMsg('Invalid Entry');
      return;
    }
    localStorage.setItem('userName', userName);
    localStorage.setItem('pwd', pwd);
    setSuccess(true);
  };
  return (
    <>
      {success ? (
        <StyleAuthentication>
          <SuccessWindow>
            <AuthTitle>Success!</AuthTitle>
            <Link to="/login">Sign in</Link>
          </SuccessWindow>

        </StyleAuthentication>
      ) : (
        <StyleAuthentication>
          <AuthForm onSubmit={handleSubmit}>
            <ErrorMessage
              ref={errRef}
              className={errMsg ? 'err_msg' : 'offscreen'}
              aria-live="assertive"
            >
              {errMsg}
            </ErrorMessage>
            <AuthTitle>
              Register
            </AuthTitle>
            <AuthLabelInput htmlFor="username">
              <AuthText>
                Username:
                {' '}
                <AuthIcon className={validName ? 'valid' : 'hide'}>
                  <FontAwesomeIcon icon={faCheck} />
                </AuthIcon>
                <AuthIcon className={validName || !userName ? 'hide' : 'invalid'}>
                  <FontAwesomeIcon icon={faTimes} />
                </AuthIcon>
              </AuthText>
              <AuthInput
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                required
                aria-invalid={validName ? 'false' : 'true'}
                aria-describedby="uid_note"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <AuthInstructions
                id="uid_note"
                className={userFocus && userName
            && !validName ? null : 'offscreen'}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.
                <br />
                Must begin with a letter.
                {' '}
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </AuthInstructions>
            </AuthLabelInput>
            <AuthLabelInput htmlFor="password">
              <AuthText>
                Password:
                {' '}
                <AuthIcon className={validPwd ? 'valid' : 'hide'}>
                  <FontAwesomeIcon icon={faCheck} />
                </AuthIcon>
                <AuthIcon className={validPwd || !pwd ? 'hide' : 'invalid'}>
                  <FontAwesomeIcon icon={faTimes} />
                </AuthIcon>
              </AuthText>
              <AuthInput
                type={showPassword ? 'text' : 'password'}
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPwd ? 'false' : 'true'}
                aria-describedby="pwd_note"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <AuthInstructions
                id="pwd_note"
                className={pwdFocus && !validPwd ? null : 'offscreen'}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.
                <br />
                Must includes uppercase and lowercase letters, a number and a special character.
                {' '}
                <br />
                Allowed special characters:
                {' '}
                <span aria-label="exclamation mark">!</span>
                {' '}
                <span
                  aria-label="at symbol"
                >
                  @
                </span>
                {' '}
                <span aria-label="hashtag">#</span>
                {' '}
                <span aria-label="dollar sign">$</span>
                <span aria-label="percent">%</span>
              </AuthInstructions>
            </AuthLabelInput>

            <AuthLabelInput htmlFor="confirm_pwd">
              <AuthText>
                Confirm Password:
                {' '}
                <AuthIcon className={validMatch && matchPwd ? 'valid' : 'hide'}>
                  <FontAwesomeIcon icon={faCheck} />
                </AuthIcon>
                <AuthIcon className={validMatch || !matchPwd ? 'hide' : 'invalid'}>
                  <FontAwesomeIcon icon={faTimes} />
                </AuthIcon>
              </AuthText>
              <AuthInput
                type={showPassword ? 'text' : 'password'}
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? 'false' : 'true'}
                aria-describedby="confirm_note"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <AuthInstructions
                id="confirm_note"
                className={matchFocus && !validMatch ? null : 'offscreen'}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </AuthInstructions>
            </AuthLabelInput>
            <AuthIcon role="presentation" className="show_pwd" onClick={() => setShowPassword(!showPassword)}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              <p>show password</p>
            </AuthIcon>
            <AuthButton
              disabledButton={disabledButton}
              disabled={disabledButton}
            >
              Sign up
            </AuthButton>
            <Registered>
              Already registered?
              <br />
              <Link to="/login">Sign in</Link>
            </Registered>
          </AuthForm>
        </StyleAuthentication>
      )}
    </>
  );
}

export default Register;
