import React from 'react';
import '../sectionBodySlider/SliderStyle.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PlaceRating from './PlaceRating';
import UserReview from './UserReview';

const StyleReviewsCard = styled.div`
  max-width: 400px;
  background-color: ${(props) => props.theme.colors.secondaryMain};
`;

function ReviewsCard(props) {
  return (
    <StyleReviewsCard>
      <PlaceRating userReviews={props.userReviews} />
      <UserReview userReviews={props.userReviews} />
    </StyleReviewsCard>
  );
}

ReviewsCard.propTypes = {
  userReviews: PropTypes.shape({
    ratedPlaceImageUrl: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    placeName: PropTypes.string.isRequired,
    placeLocation: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    reviewsAmount: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userCountry: PropTypes.string.isRequired,
    countryFlag: PropTypes.string.isRequired,
    reviewText: PropTypes.string.isRequired,
  }),
};
export default ReviewsCard;
