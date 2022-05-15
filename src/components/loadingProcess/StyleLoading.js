import styled from 'styled-components';

export const StyleLoading = styled.div`
  display: ${(props) => props.showLoading};
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.secondaryMain};;
  position: relative;
`;
export const LoadingBody = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1280px) {
    flex-direction: column;
  }
`;
export const LoadingImageBlock = styled.img`
  max-height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.entering {
    animation: show_loader 0.5s forwards;
  }

  &.entered {
    animation: loading_spin 15s infinite;
  }

  &.exiting {
    animation: show_loader 0.5s reverse;
  }

  @keyframes loading_spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes show_loader {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 1280px) {
    max-width: 80%;
  }
`;
export const LoadingTitle = styled.h2`
  color: ${(props) => props.theme.colors.primaryText};
`;
