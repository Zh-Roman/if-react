import React from 'react';
import './UserReview.css';
import SpriteSVG from '../spriteSVG/SpriteSVG';

function UserReview(props) {
  return (
    <div className="user_review">
      <div className="user_info">
        <div>
          <SpriteSVG className="accountCircleReview" name="accountCircle" />
        </div>
        <div>
          <p>{props.userReviews.userName}</p>
          <div className="country_info">
            <img src={props.userReviews.countryFlag} alt={`${props.userReviews.userCountry} flag`} />
            <span>{props.userReviews.userCountry}</span>
          </div>
        </div>
      </div>
      <div className="review">
        {props.userReviews.reviewText}
      </div>
    </div>
  );
}

export default UserReview;
