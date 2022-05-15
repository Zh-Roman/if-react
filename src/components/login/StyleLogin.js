import styled from 'styled-components';
import backgroundImg from '../../assets/images/topSectionBackground/background_picture.jpg';

export const StyleLogin = styled.div`
  min-height: 100vh;
  background: url(${backgroundImg}) center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoginForm = styled.form`
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
export const LoginTitle = styled.h3`
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
export const LoginText = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.primaryText};
`;
export const LoginInput = styled.input`
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
export const LabelInput = styled.label`
  display: flex;
  flex-direction: column;
`;
export const LoginButton = styled.button`
  height: 48px;
  background-color: ${(props) => props.theme.colors.primaryAccent};
  border: 3px ${(props) => props.theme.colors.primaryAccent} solid;
  border-radius: 8px;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: ${(props) => props.theme.colors.primaryMain};
  margin-top: 24px;

  &:hover {
    box-shadow: 0 0 10px 0 ${(props) => props.theme.colors.primaryAccent} inset, 0 0 10px 4px ${(props) => props.theme.colors.primaryAccent};
  }

  @media screen and (max-width: 480px) {
    margin-top: 16px;
    font-size: 22px;
    line-height: 24px;
    height: 45px;
  }
`;
