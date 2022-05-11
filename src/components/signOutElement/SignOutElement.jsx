import React from 'react';
import './SignOutElement.css';
import { useDispatch } from 'react-redux';
import SpriteSVG from '../spriteSVG/SpriteSVG';
import actionUserAuth from '../../ducks/userAuthorization/actions';

function SignOutElement() {
  const dispatch = useDispatch();
  const userSignOut = () => {
    dispatch(actionUserAuth(null));
  };
  return (
    <div className="sign_out" role="presentation" onClick={userSignOut}>
      <SpriteSVG className="sign_out_icon" name="sign_out_icon" />
      <p>Sign out</p>
    </div>
  );
}

export default SignOutElement;
