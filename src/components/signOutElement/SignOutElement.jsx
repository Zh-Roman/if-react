import React from 'react';
import './SignOutElement.css';
import SpriteSVG from '../spriteSVG/SpriteSVG';
import useAuth from '../../hooks/useAuth';

function SignOutElement() {
  const { setUserAuthData } = useAuth();
  const userSignOut = () => {
    setUserAuthData({
      userData: null,
    });
  };
  return (
    <div className="sign_out" role="presentation" onClick={userSignOut}>
      <SpriteSVG className="sign_out_icon" name="sign_out_icon" />
      <p>Sign out</p>
    </div>
  );
}

export default SignOutElement;
