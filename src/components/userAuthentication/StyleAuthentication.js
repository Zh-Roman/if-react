import styled from 'styled-components';
import backgroundImg from '../../assets/images/topSectionBackground/background_picture.jpg';

export const StyleAuthentication = styled.div`
  min-height: 100vh;
  background: url(${backgroundImg}) center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .offscreen {
    position: absolute;
    left: -9999px;
  }

  .err_msg {
    text-align: center;
    color: firebrick;
    font-weight: 700;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .show_pwd {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: ${(props) => props.theme.colors.primaryAccent};
  }
`;
export const ErrorMessage = styled.p``;
export const AuthForm = styled.form`
  width: 400px;
  border: 1px solid ${(props) => props.theme.colors.primaryAccent};
  background-color: ${(props) => props.theme.colors.primaryMain};
  padding: 40px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    width: 300px;
    padding: 16px;
    border-radius: 8px;
  }
`;
export const AuthTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 40px;
  color: ${(props) => props.theme.colors.primaryText};
  @media screen and (max-width: 480px) {
    margin-bottom: 16px;
    font-size: 22px;
    line-height: 24px;
  }
`;
export const AuthText = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.primaryText};

  .hide {
    display: none;
  }

  .valid {
    color: greenyellow;
    margin-left: 0.25rem;
  }

  .invalid {
    color: red;
    margin-left: 0.25rem;
  }
`;
export const AuthInstructions = styled.p`
  padding: 4px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.primaryText};
  color: ${(props) => props.theme.colors.primaryMain};

  & > svg {
    margin-right: 4px;
  }
`;
export const AuthInput = styled.input`
  border: 2px solid ${(props) => props.theme.colors.secondaryText};
  border-radius: 8px;
  line-height: 40px;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 400;
  padding-left: 5px;
  color: ${(props) => props.theme.colors.primaryText};
  background-color: ${(props) => props.theme.colors.primaryMain};
`;
export const AuthLabelInput = styled.label`
  display: flex;
  flex-direction: column;
`;
export const AuthIcon = styled.span``;
export const AuthButton = styled.button`
  height: 48px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin: 16px 0;
  color: ${(props) => props.theme.colors.primaryMain};
  ${(props) => (props.disabledButton ? `
   background-color: ${props.theme.colors.secondaryText};
  border: 3px ${props.theme.colors.secondaryText} solid;
  ` : `
  background-color: ${props.theme.colors.primaryAccent};
  border: 3px ${props.theme.colors.primaryAccent} solid;
  &:hover {
    box-shadow: 0 0 10px 0 ${props.theme.colors.primaryAccent} inset, 0 0 10px 4px ${props.theme.colors.primaryAccent};
  }`)};

  @media screen and(max-width: 480px) {
    margin-top: 16px;
    font-size: 22px;
    line-height: 24px;
    height: 45px;
  }
`;
export const Registered = styled.p`
  display: block;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.colors.primaryText};
  
  & a{
    font-weight: 400;
    color: ${(props) => props.theme.colors.primaryAccent};
  }
`;
export const SuccessWindow = styled.div`
  background-color: ${(props) => props.theme.colors.primaryMain};
  opacity: 0.85;
  border: 3px ${(props) => props.theme.colors.primaryAccent} solid;
  border-radius: 50%;
  padding: 64px;
  display: block;
  text-align: center;
  & a{
    font-weight: 500;
    font-size: 24px;
    color: ${(props) => props.theme.colors.primaryAccent};
  }
`;
