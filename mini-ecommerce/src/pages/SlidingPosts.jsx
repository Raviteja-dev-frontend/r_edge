// AdvertisementSlider.js
import React from "react";
import Slider from "react-slick";
import "../styles/Sliding.css";

// Import images
import vegetablesFruits from "../assets/vegitables_fruits.png";
import lipsScreen from "../assets/lips_screen.png";

const AdvertisementSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // tablet & below
        settings: { arrows: false }
      }
    ]
  };

  const images = [vegetablesFruits, lipsScreen];

  return (
    <div className="advertisement-carousel-container my-5">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="ad-slide">
            <div
              className="ad-card"
              style={{ backgroundImage: `url(${img})` }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AdvertisementSlider;
