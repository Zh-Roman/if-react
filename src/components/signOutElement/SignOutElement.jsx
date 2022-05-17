import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import SpriteSVG from '../spriteSVG/SpriteSVG';
import actionUserAuth from '../../ducks/userAuthorization/actions';

const StyleSignOutElement = styled.div`
  width: 192px;
  height: 50px;
  position: absolute;
  bottom: -60px;
  right: 0;
  background-color: ${(props) => props.theme.colors.primaryMain};
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 16px;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  border: 1px solid ${(props) => props.theme.colors.primaryAccent};
  border-radius: 8px;

  .sign_out_icon {
    width: 20px;
    height: 18px;
    margin-right: 16px;
    @media screen and (max-width: 480px) {
      width: 16px;
      height: 15px;
      margin-right: 12px;
    }
  }

  @media screen and (max-width: 480px) {
    width: 116px;
    height: 30px;
    bottom: -45px;
    right: -40px;
    font-size: 15px;
    line-height: 18px;
    font-weight: 300;
  }
`;
const StyleSignOutElementText = styled.p`
  color: ${(props) => props.theme.colors.primaryText};`;

function SignOutElement() {
  const dispatch = useDispatch();
  const userSignOut = () => {
    dispatch(actionUserAuth(null));
  };
  return (
    <StyleSignOutElement role="presentation" onClick={userSignOut}>
      <SpriteSVG className="sign_out_icon" name="sign_out_icon" />
      <StyleSignOutElementText>Sign out</StyleSignOutElementText>
    </StyleSignOutElement>
  );
}

export default SignOutElement;
