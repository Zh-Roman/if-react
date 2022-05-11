import React from 'react';
import './ReviewsCard.css';
import PlaceRating from './PlaceRating';
import UserReview from './UserReview';

function ReviewsCard(props) {
  return (
    <div className="review_card">
      <PlaceRating userReviews={props.userReviews} />
      <UserReview userReviews={props.userReviews} />
    </div>
  );
}

export default ReviewsCard;
