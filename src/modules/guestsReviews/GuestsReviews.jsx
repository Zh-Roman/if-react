import React from 'react';
import './GuestsReviews.css';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import ReviewsCard from '../../components/reviewsCard/ReviewsCard';

function GuestsReviews() {
  const userReviews = {
    userOne: {
      ratedPlaceImageUrl: require('../../assets/images/guestsReviews/UbudBaliResort.png'),
      price: ' 250 USD',
      placeName: 'Ubud Bali Resort&SPA',
      placeLocation: 'Bali, Indonesia',
      rating: '9,4',
      reviewsAmount: '1324 reviews',
      userName: 'Hanna Ivanova',
      userCountry: 'Ukraine',
      countryFlag: require('../../assets/images/guestsReviews/Flags/UkraineFlagIcon.png'),
      reviewText: 'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. ',
    },
    userTwo: {
      ratedPlaceImageUrl: require('../../assets/images/guestsReviews/KingKongHostel.png'),
      price: ' 40 USD',
      placeName: 'King Kong Hostel',
      placeLocation: 'Rotterdam, Netherlands',
      rating: '8,9',
      reviewsAmount: '2016 reviews',
      userName: 'Adam Smith',
      userCountry: 'USA',
      countryFlag: require('../../assets/images/guestsReviews/Flags/UnitedStatesFlagIcon.png'),
      reviewText: 'I\'ve been in this hostel for a month and here is the best hostel of all.\n'
        + 'Excellent management of excellent and ethical staff and bedrooms Bathrooms are always clean and excellent\n'
        + 'Most importantly, those who work here are kind and good-natured.',
    },
    userThree: {
      ratedPlaceImageUrl: require('../../assets/images/guestsReviews/RokokoHotel.png'),
      price: ' 100 USD',
      placeName: 'Rokoko Hotel',
      placeLocation: 'Ourika, Marocco',
      rating: '9,1',
      reviewsAmount: '815 reviews',
      userName: 'Anika Messer',
      userCountry: 'Germany',
      countryFlag: require('../../assets/images/guestsReviews/Flags/DeutschlandGermanyIcon.png'),
      reviewText: 'Efficient, friendly, professional, and appropriately attentive. Great hotel in a great location. Easy access to all the surrounding historical sites. Staff is fantastic. Will definitely stay at this location during my next stay in Marocco.',
    },
  };
  return (
    <div className="guests_reviews">
      <div className="_container">
        <SectionTitle>Guests reviews</SectionTitle>
        <div className="guests_reviews_body">
          <ReviewsCard userReviews={userReviews.userOne} />
          <ReviewsCard userReviews={userReviews.userTwo} />
          <ReviewsCard userReviews={userReviews.userThree} />
        </div>

      </div>
    </div>
  );
}

export default GuestsReviews;
