import React from "react";
import { Carousel } from "react-responsive-carousel";

import photo_1 from "../img/miguelangel-miquelena.png";

const SimpleCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src={photo_1} alt="photo_1" />
        <p className="legend">Image 1</p>
      </div>
      <div>
        <img src={photo_1} alt="photo_2" />
        <p className="legend">Image 2</p>
      </div>
      <div>
        <img src={photo_1} alt="photo_3" />
        <p className="legend">Image 3</p>
      </div>
    </Carousel>
  );
};

export default SimpleCarousel;
