import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import ricePlate from '../img/rice-plate.png';
import puffPuffs from '../img/puff-puffs.png';
// You can import more images here...

const FoodCarousel = () => {
  return (
    <div className="px-6 mb-12">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
        className="rounded-xl shadow"
      >
        <div>
          <img src={ricePlate} alt="Rice Dish" />
        </div>
        <div>
          <img src={puffPuffs} alt="Puff Puffs" />
        </div>
        {/* Add more images here */}
      </Carousel>
    </div>
  );
};

export default FoodCarousel;
