import React from 'react';
import PropTypes from 'prop-types';
import {
  ReviewPic,
  StylePlaceRating,
  ReviewPicImg,
  ReviewPrice,
  ReviewPriceText,
  PlaceInfo,
  RatedPlaceName,
  RatedPlaceLocation,
  Rating,
  RatingIcon,
  ReviewsAmount,
} from './StylePlaceRating';

function PlaceRating(props) {
  return (
    <StylePlaceRating>
      <ReviewPic>
        <ReviewPicImg src={props.userReviews.ratedPlaceImageUrl} alt={props.userReviews.placeName} />
        <ReviewPrice>
          <ReviewPriceText>
            From
            {' '}
            {props.userReviews.price}
          </ReviewPriceText>
        </ReviewPrice>
      </ReviewPic>
      <PlaceInfo>
        <div>
          <RatedPlaceName>{props.userReviews.placeName}</RatedPlaceName>
          <RatedPlaceLocation>{props.userReviews.placeLocation}</RatedPlaceLocation>
        </div>
        <Rating>
          <RatingIcon>{props.userReviews.rating}</RatingIcon>
          <ReviewsAmount>{props.userReviews.reviewsAmount}</ReviewsAmount>
        </Rating>
      </PlaceInfo>
    </StylePlaceRating>
  );
}

PlaceRating.propTypes = {
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
export default PlaceRating;
