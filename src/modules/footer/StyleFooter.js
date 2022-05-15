import styled from 'styled-components';

export const StyleFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.tertiaryAccent};
`;
export const FooterBody = styled.div`
  display: flex;
`;
export const FooterContainer = styled.div`
  @media screen and (max-width: 480px) {
    padding: 40px 73px;
  }
`;
export const FooterContent = styled.div`
  flex: 0 1 33.333%;
  justify-content: space-between;
  margin-bottom: 40px;

  & * {
    color: #FFFFFF;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 24px;
  }

  & p {
    font-weight: 500;
  }

  @media screen and (max-width: 480px) {
    &:not(:last-child) {
      margin-right: 16px;
    }

    text-align: center;
    text-decoration: underline;
    margin-bottom: 0;
    & p {
      font-size: 15px;
      line-height: 18px;
    }

    & * {
      margin-bottom: 0;
    }

    & li:nth-of-type(1n+2) {
      display: none;
    }
  }
`;
export const Copyright = styled.div`
  & p {
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    margin-top: 32px;
    font-size: 12px;
    line-height: 14px;
  }
`;
