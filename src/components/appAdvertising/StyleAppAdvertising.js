import styled from 'styled-components';

export const StyleAppAdvertising = styled.div`
  display: ${(props) => props.showComponent};
  background-color: ${(props) => props.theme.colors.secondaryMain};
  padding: 36px;
  justify-content: space-between;
  align-items: center;
  max-width: fit-content;
  margin: 5px auto;
  box-shadow: 0 10px 6px -6px ${(props) => props.theme.colors.primaryText};
  position: relative;
`;
export const AppIcon = styled.div`
  background-color: #3077C6;
  height: 90px;
  width: 90px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 6px -6px ${(props) => props.theme.colors.primaryText};

  .app_logo {
    width: 80px;
    height: 16px;
    fill: #FFFFFF;
  }

  @media screen and (max-width: 1024px) {
    height: 80px;
    width: 80px;
    .app_logo {
      width: 70px;
      height: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    height: 70px;
    width: 70px;
    .app_logo {
      width: 60px;
      height: 12px;
    }
  }
  @media screen and (max-width: 665px) {
    border-radius: 4px;
    min-height: 60px;
    min-width: 60px;
    .app_logo {
      width: 50px;
      height: 10px;
    }
  }
`;
export const AdvOffer = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: ${(props) => props.theme.colors.primaryText};
  margin: 8px;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
    line-height: 24px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 20px;
  }
  @media screen and (max-width: 665px) {
    font-size: 12px;
    line-height: 14px;
  }
`;
export const InstallButton = styled.p`
  font-weight: 400;
  font-size: 36px;
  line-height: 40px;
  color: ${(props) => props.theme.colors.primaryAccent};

  @media screen and (max-width: 1024px) {
    font-size: 30px;
    line-height: 34px;
  }
  @media screen and (max-width: 768px) {
    font-size: 26px;
    line-height: 30px;
  }
  @media screen and (max-width: 665px) {
    font-size: 14px;
    line-height: 16px;
  }
`;
export const CloseButton = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;

  .close_button_icon {
    height: 24px;
    width: 24px;
  }
`;
