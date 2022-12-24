import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import data from './data';

const itemWidth = Dimensions.get('window').width * 30;
const sliderWidth = Math.round(itemWidth * 0.8);

const SliderScreen = () => {
  const renderItems = ({item}) => {
    console.log(item);
    return (
      <View
        style={{
          padding: 20,
          backgroundColor: 'red',
          borderRadius: 20,
          alignItems: 'center',
        }}>
        <Image source={require(item.image)} style={{width: 200, height: 200}} />
        <Text>item.text</Text>
      </View>
    );
  };
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  return (
    <View>
      <Text>Hdfd</Text>
      {/* <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItems}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        // onSnapToItem={indexSnap => setIndex(indexSnap)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        containerStyle={{backgroundColor: 'transparent'}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 10,
          marginHorizontal: 8,
          backgroundColor: 'green',
        }}
      /> */}
    </View>
  );
};

export default SliderScreen;
