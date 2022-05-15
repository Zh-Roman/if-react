import styled from 'styled-components';

const StyleMain = styled.main`
  flex: 1 1 auto;
  background-color: ${(props) => props.theme.colors.primaryMain};

  .swiper-pagination-bullet {
    background-color: ${(props) => props.theme.colors.primaryAccent};
  }
`;
export default StyleMain;
