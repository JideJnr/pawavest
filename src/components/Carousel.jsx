import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


  
const Carousel = ({items}) => {
  return (
    <AliceCarousel
    autoplay
    mouseTracking items={items} 
    infinite
    disableDotsControls
    disableButtonsControls/>
  )
}

export default Carousel