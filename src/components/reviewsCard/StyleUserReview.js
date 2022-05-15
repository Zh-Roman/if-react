import styled from 'styled-components';

export const StyleUserReview = styled.div`
  margin: 24px;
  @media screen and (max-width: 1024px) {
    margin: 12px;
  }
`;
export const UserReviewInfo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
    line-height: 18px;
  }
  @media screen and (max-width: 875px) {
    font-size: 18px;
    line-height: 21px;
  }
`;
export const AccountCircleReview = styled.div`
  .accountCircleReview {
    height: 54px;
    width: 54px;
    fill: ${(props) => props.theme.colors.secondaryText};
    margin-right: 16px;
    @media screen and (max-width: 1024px) {
      height: 44px;
      width: 44px;
    }
  }
`;
export const UserReviewsNameBlock = styled.div``;
export const UserReviewsName = styled.p`
  color: ${(props) => props.theme.colors.primaryText};
`;
export const UserReviewsCountryInfo = styled.div`
  display: flex;
  align-items: center;
`;
export const UserReviewsCountryFlag = styled.img`
  height: 24px;
  width: 24px;
`;
export const UserReviewsCountryName = styled.span`
  color: ${(props) => props.theme.colors.secondaryText};
  margin-left: 5px;
`;
export const UserReviewsText = styled.div`
  margin-top: 17px;
  white-space: pre-line;
  text-align: justify;
  color: ${(props) => props.theme.colors.primaryText};
  @media screen and (max-width: 1024px) {
    font-size: 14px;
    line-height: 18px;
  }
  @media screen and (max-width: 875px) {
    font-size: 18px;
    line-height: 21px;
  }
`;
