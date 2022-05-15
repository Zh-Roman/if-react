import React from 'react';
import PropTypes from 'prop-types';
import SpriteSVG from '../spriteSVG/SpriteSVG';
import {
  StyleUserReview,
  UserReviewInfo,
  AccountCircleReview,
  UserReviewsNameBlock,
  UserReviewsName,
  UserReviewsCountryInfo,
  UserReviewsCountryFlag,
  UserReviewsCountryName,
  UserReviewsText,
} from './StyleUserReview';

function UserReview(props) {
  return (
    <StyleUserReview>
      <UserReviewInfo>
        <AccountCircleReview>
          <SpriteSVG className="accountCircleReview" name="accountCircle" />
        </AccountCircleReview>
        <UserReviewsNameBlock>
          <UserReviewsName>{props.userReviews.userName}</UserReviewsName>
          <UserReviewsCountryInfo>
            <UserReviewsCountryFlag src={props.userReviews.countryFlag} alt={`${props.userReviews.userCountry} flag`} />
            <UserReviewsCountryName>{props.userReviews.userCountry}</UserReviewsCountryName>
          </UserReviewsCountryInfo>
        </UserReviewsNameBlock>
      </UserReviewInfo>
      <UserReviewsText>
        {props.userReviews.reviewText}
      </UserReviewsText>
    </StyleUserReview>
  );
}

UserReview.propTypes = {
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
export default UserReview;
