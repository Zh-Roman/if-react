import styled from 'styled-components';

export const StyleAdvantagesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .content_icon {
    display: block;
    margin-bottom: 48px;
    height: 100px;
    width: 100px;
    fill: ${(props) => props.theme.colors.primaryAccent};
    @media screen and (max-width: 1024px) {
      margin-bottom: 24px;
      height: 80px;
      width: 80px;
    }
    @media screen and (max-width: 768px) {
      height: 80px;
      width: 80px;
    }
    @media screen and (max-width: 480px) {
      height: 70px;
      width: 70px;
    }
  }
`;
export const AdvantagesCardText = styled.p`
  color: ${(props) => props.theme.colors.primaryText};
  @media screen and (max-width: 1024px) {
    font-size: 20px;
    line-height: 24px;
  }
  @media screen and (max-width: 900px) {
    font-size: 17px;
    line-height: 19px;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
    line-height: 18px;
  }
`;
