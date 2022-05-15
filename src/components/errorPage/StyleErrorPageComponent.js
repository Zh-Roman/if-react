import styled from 'styled-components';
import errorBackground from '../../assets/images/loading_error_images/error_background.jpg';

export const StyleErrorPageComponent = styled.div`
  min-height: 100vh;
  background: url(${errorBackground}) center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ErrorLogo = styled.div`
  color: rgba(234, 240, 249, 0.6);
  font-size: 250px;
  font-weight: 800;
  @media screen and (max-width: 768px) {
    font-size: 150px;
  }
  @media screen and (max-width: 480px) {
    font-size: 100px;
  }
`;
export const ErrorMessage = styled.div`
  color: #EAF0F9;
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const ErrorToHome = styled.span`
  color: #F5BD41;
`;
