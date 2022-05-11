import React from 'react';
import './PlaceRating.css';

function PlaceRating(props) {
  return (
    <div className="place_rating">
      <div className="review_pic">
        <img src={props.userReviews.ratedPlaceImageUrl} alt={props.userReviews.placeName} />
        <div className="review_price">
          <p>
            From
            <span>{props.userReviews.price}</span>
          </p>
        </div>
      </div>
      <div className="place_info">
        <div className="place_name">
          <p>{props.userReviews.placeName}</p>
          <span>{props.userReviews.placeLocation}</span>
        </div>
        <div className="rating">
          <div>{props.userReviews.rating}</div>
          <p>{props.userReviews.reviewsAmount}</p>
        </div>
      </div>
    </div>
  );
}

export default PlaceRating;
