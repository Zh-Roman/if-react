import styled from 'styled-components';

export const StyleItemForSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SectionImageBox = styled.div`
  height: 292px;
  width: 292px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 768px) {
    height: 250px;
    width: 250px;
  }
  @media screen and (max-width: 640px) {
    height: 200px;
    width: 200px;
  }
  @media screen and (max-width: 530px) {
    height: 180px;
    width: 180px;
  }
  @media screen and (max-width: 480px) {
    height: 155px;
    width: 155px;
  }
  @media screen and (max-width: 400px) {
    height: 125px;
    width: 125px;
  }
`;
export const ContentImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HoverEffect = styled.div`
  opacity: 0;
  transition: all 1s ease-in 0.5s;

  &:hover {
    opacity: 1;
  }
`;
export const ReservationShadow = styled.div`
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(56, 56, 56, 0.4);
  box-shadow: 0 4px 70px 0 rgba(56, 56, 56, 0.5) inset;
`;
export const BookingButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primaryMain};
  border-radius: 8px;
  border: 1px ${(props) => props.theme.colors.primaryAccent} solid;
  width: 128px;
  height: 48px;
`;
export const BookingButtonLink = styled.a`
  color: ${(props) => props.theme.colors.primaryText};
`;
export const PlaceName = styled.p`
  align-self: flex-start;
  color: ${(props) => props.theme.colors.primaryAccent};
  margin-top: 24px;
  font-size: 24px;
  line-height: 28px;
  max-width: 292px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    max-width: 250px;
    margin-top: 16px;
  }
  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 20px;
    max-width: 200px;
    margin-top: 12px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
    line-height: 14px;
    max-width: 155px;
    margin-top: 8px;
  }
`;
export const PlaceLocation = styled.p`
  align-self: flex-start;
  color: ${(props) => props.theme.colors.secondaryText};
  margin-top: 24px;
  font-size: 24px;
  line-height: 28px;
  max-width: 292px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    max-width: 250px;
    margin-top: 16px;
  }
  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 20px;
    max-width: 200px;
    margin-top: 12px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
    line-height: 14px;
    max-width: 155px;
    margin-top: 8px;
  }
`;
