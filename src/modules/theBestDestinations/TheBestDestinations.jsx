import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import TabMenu from '../../components/tabMenu/TabMenu';
import SliderWithFourItems from '../../components/sectionBodySlider/SliderWithFourItems';
import DestinationOpener from '../../components/destinationOpener/DestinationOpener';

const StyleTheBestDestinations = styled.div`
  background-color: ${(props) => props.theme.colors.primaryMain};
`;

function TheBestDestinations() {
  const [destinationSection, setDestinationSection] = useState('regions');
  const [destinationOpener, setDestinationOpener] = useState(false);
  const regions = [
    [
      {
        id: 1,
        name: 'Island',
        imageUrl: require('../../assets/images/destinationsSection/regions/Island.png'),
      },
      {
        id: 2,
        name: 'Maldives',
        imageUrl: require('../../assets/images/destinationsSection/regions/Maldives.png'),
      },
      {
        id: 3,
        name: 'Norway',
        imageUrl: require('../../assets/images/destinationsSection/regions/Norway.png'),
      },
      {
        id: 4,
        name: 'Spain',
        imageUrl: require('../../assets/images/destinationsSection/regions/Spain.png'),
      },
    ], [
      {
        id: 1,
        name: 'Japan',
        imageUrl: require('../../assets/images/destinationsSection/regions/Japan.png'),
      },
      {
        id: 2,
        name: 'Russia',
        imageUrl: require('../../assets/images/destinationsSection/regions/Russia.png'),
      },
      {
        id: 3,
        name: 'Scotland',
        imageUrl: require('../../assets/images/destinationsSection/regions/Scotland.png'),
      },
      {
        id: 4,
        name: 'France',
        imageUrl: require('../../assets/images/destinationsSection/regions/France.png'),
      },
    ],
  ];
  const cities = [
    [
      {
        id: 1,
        name: 'Paris, France',
        imageUrl: require('../../assets/images/destinationsSection/cities/Paris.png'),
      },
      {
        id: 2,
        name: 'Berlin, Germany',
        imageUrl: require('../../assets/images/destinationsSection/cities/Berlin.png'),
      },
      {
        id: 3,
        name: 'Budapest, Hungary',
        imageUrl: require('../../assets/images/destinationsSection/cities/Budapest.png'),
      },
      {
        id: 4,
        name: 'London, United Kingdom',
        imageUrl: require('../../assets/images/destinationsSection/cities/London.png'),
      },
    ], [
      {
        id: 1,
        name: 'Barcelona, Spain',
        imageUrl: require('../../assets/images/destinationsSection/cities/Barcelona.png'),
      },
      {
        id: 2,
        name: 'Tbilisi, Georgia',
        imageUrl: require('../../assets/images/destinationsSection/cities/Tbilisi.png'),
      },
      {
        id: 3,
        name: 'Moscow, Russia',
        imageUrl: require('../../assets/images/destinationsSection/cities/Moscow.png'),
      },
      {
        id: 4,
        name: 'Amsterdam, Netherlands',
        imageUrl: require('../../assets/images/destinationsSection/cities/Amsterdam.png'),
      },
    ],
  ];
  const places = [
    [
      {
        id: 1,
        name: 'Edinburgh Castle, UK',
        imageUrl: require('../../assets/images/destinationsSection/places/EdinburghCastle.png'),
      },
      {
        id: 2,
        name: 'Neuschwanstein, Germany',
        imageUrl: require('../../assets/images/destinationsSection/places/Neuschwanstein.png'),
      },
      {
        id: 3,
        name: 'Big Ben, UK',
        imageUrl: require('../../assets/images/destinationsSection/places/BigBen.png'),
      },
      {
        id: 4,
        name: 'Colosseum, Italy',
        imageUrl: require('../../assets/images/destinationsSection/places/Colosseum.png'),
      },
    ], [
      {
        id: 1,
        name: 'Matterhorn, Switzerland',
        imageUrl: require('../../assets/images/destinationsSection/places/Matterhorn.png'),
      },
      {
        id: 2,
        name: 'Morskie Oko, Poland',
        imageUrl: require('../../assets/images/destinationsSection/places/MorskieOko.png'),
      },
      {
        id: 3,
        name: 'Krka, Croatia',
        imageUrl: require('../../assets/images/destinationsSection/places/Krka.png'),
      },
      {
        id: 4,
        name: 'Cabo da roca, Portugal',
        imageUrl: require('../../assets/images/destinationsSection/places/Cabo_da_roca.png'),
      },
    ],
  ];
  const tabMenuItem = (index) => {
    switch (destinationSection) {
      case 'regions': {
        return regions[index];
      }
      case 'cities': {
        return cities[index];
      }
      case 'places': {
        return places[index];
      }
      default:
        return regions[index];
    }
  };

  return (
    <StyleTheBestDestinations>
      <div className="_container">
        <SectionTitle>The best destinations</SectionTitle>
        <TabMenu setDestinationSection={setDestinationSection} className="tab_menu" />
        <SliderWithFourItems data={tabMenuItem(0)} resetMargin="reset_margin" />
        {destinationOpener
          || (
            <DestinationOpener
              name="arrow_down"
              setDestinationOpener={setDestinationOpener}
              destinationOpener={destinationOpener}
            />
          )}
        {destinationOpener && (
          <div>
            <SliderWithFourItems
              data={tabMenuItem(1)}
              resetMargin="reset_margin"
            />
            <DestinationOpener
              name="arrow_up"
              setDestinationOpener={setDestinationOpener}
              destinationOpener={destinationOpener}
            />
          </div>
        )}

      </div>
    </StyleTheBestDestinations>

  );
}

export default TheBestDestinations;
