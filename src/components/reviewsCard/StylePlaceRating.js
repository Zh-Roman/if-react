import styled from 'styled-components';

export const StylePlaceRating = styled.div``;
export const ReviewPic = styled.div`
  position: relative;
  max-width: 100%;
  max-height: 400px;
`;
export const ReviewPicImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const ReviewPrice = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3;
  height: 48px;
  width: 100%;
  background-color: rgba(56, 56, 56, 0.7);
  @media screen and (max-width: 1024px) {
    @media screen and (min-width: 875px) {
      height: 40px;
      bottom: 3px
    }
  }
`;
export const ReviewPriceText = styled.p`
  padding-left: 24px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
`;
export const PlaceInfo = styled.div`
  margin: 24px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    margin: 12px;
  }
`;
export const RatedPlaceName = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: ${(props) => props.theme.colors.primaryAccent};
  @media screen and (max-width: 1024px) {
    font-size: 16px;
    line-height: 18px;
  }
  @media screen and (max-width: 875px) {
    font-size: 18px;
    line-height: 21px;
  }
`;
export const RatedPlaceLocation = styled.span`
  font-size: 18px;
  line-height: 21px;
  color: ${(props) => props.theme.colors.primaryAccent};
  display: block;
  margin-top: 16px;
  font-weight: 400;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
    line-height: 16px;
    margin-top: 12px;
  }
  @media screen and (max-width: 875px) {
    font-size: 18px;
    line-height: 21px;
  }
`;
export const Rating = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;
export const RatingIcon = styled.div`
  background-color: ${(props) => props.theme.colors.tertiaryAccent};
  border-radius: 8px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
  padding: 4px 11px;
  width: fit-content;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
    line-height: 18px;
  }
  @media screen and (max-width: 875px) {
    font-size: 18px;
    line-height: 21px;
  }
`;
export const ReviewsAmount = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.theme.colors.secondaryText};
  margin-right: -6px;
  @media screen and (max-width: 1024px) {
    font-size: 12px;
    line-height: 14px;
  }
  @media screen and (max-width: 875px) {
    font-size: 14px;
    line-height: 16px;
  }
`;
