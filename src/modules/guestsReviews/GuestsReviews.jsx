import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import ReviewsCard from '../../components/reviewsCard/ReviewsCard';
import useWindowSize from '../../hooks/useWindowSize';
import SpriteSVG from '../../components/spriteSVG/SpriteSVG';

const StyleGuestsReviews = styled.div`
  background-color: ${(props) => props.theme.colors.primaryMain};
`;
const GuestsReviewsBody = styled.div`
  margin: 104px auto 0;
  @media screen and (min-width: 875px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 8px;
  }
  @media screen and (max-width: 875px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 1024px) {
    margin: 80px 0 0;
  }
  @media screen and (max-width: 768px) {
    margin: 40px 0 0;
  }
`;
const Pagination = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
`;
const PaginationEllipse = styled.div`
  .pagination_ellipse {
    width: 12px;
    height: 12px;
    fill: ${(props) => props.theme.colors.primaryMain};
  }

  .active_ellipse {
    fill: ${(props) => props.theme.colors.primaryAccent};
  }

  padding: 5px;
`;

function GuestsReviews() {
  const windowWidth = useWindowSize();
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
  const [userReviewToShow, setUserReviewToShow] = useState(userReviews.userOne);
  const firstUserReview = () => {
    setUserReviewToShow(userReviews.userOne);
  };
  const secondUserReview = () => {
    setUserReviewToShow(userReviews.userTwo);
  };
  const thirdUserReview = () => {
    setUserReviewToShow(userReviews.userThree);
  };
  return (
    <StyleGuestsReviews>
      <div className="_container">
        <SectionTitle>Guests reviews</SectionTitle>
        {windowWidth >= 875 && (
          <GuestsReviewsBody>
            <ReviewsCard userReviews={userReviews.userOne} />
            <ReviewsCard userReviews={userReviews.userTwo} />
            <ReviewsCard userReviews={userReviews.userThree} />
          </GuestsReviewsBody>
        )}
        {windowWidth < 875 && (
          <GuestsReviewsBody>
            <ReviewsCard userReviews={userReviewToShow} />
            <Pagination>
              <PaginationEllipse onClick={firstUserReview}>
                <SpriteSVG
                  className={(userReviewToShow.userName === userReviews.userOne.userName) ? 'pagination_ellipse active_ellipse' : 'pagination_ellipse'}
                  name="pagination_ellipse"
                />
              </PaginationEllipse>
              <PaginationEllipse onClick={secondUserReview}>
                <SpriteSVG
                  className={userReviewToShow.userName === userReviews.userTwo.userName ? 'pagination_ellipse active_ellipse' : 'pagination_ellipse'}
                  name="pagination_ellipse"
                />
              </PaginationEllipse>
              <PaginationEllipse onClick={thirdUserReview}>
                <SpriteSVG
                  className={userReviewToShow.userName === userReviews.userThree.userName ? 'pagination_ellipse active_ellipse' : 'pagination_ellipse'}
                  name="pagination_ellipse"
                />
              </PaginationEllipse>
            </Pagination>
          </GuestsReviewsBody>
        )}
      </div>
    </StyleGuestsReviews>
  );
}

export default GuestsReviews;
