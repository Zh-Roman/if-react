import styled from 'styled-components';

const StyleAdvantagesContent = styled.div`
  margin: 104px auto 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  @media screen and (max-width: 1024px) {
    margin: 80px auto 0;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 30px;
  }
  @media screen and (max-width: 480px) {
    margin: 40px auto 0;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default StyleAdvantagesContent;
