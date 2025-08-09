import React from 'react';
import styled from 'styled-components';
import '../styles/Hero_page_categories.css';
import vegetables_icon from '../assets/Vegetables_icon.png';
import chicken_icon from '../assets/chicken_icon.png';
import milk_icon from '../assets/milk_icon.png';
import fruits_icon from '../assets/Fruits_icon.png';
const categories = [
  {
    name: "Fruit",
    role: "Fruit",
    image: fruits_icon,
  },
  {
    name: "Chicken Breast",
    role: "Chicken",
    image: chicken_icon,
  },
  {
    name: "Vegetables",
    role: "Vegetable",
    image: vegetables_icon,
  },
  {
    name: "Milk",
    role: "Dairy",
    image: milk_icon, 
  }
];




const Card = () => {
  return (

     <div className="hero-category-list">
      {categories.map((item, index) => (
        <div className="hero-category-wrapper" key={index}>
          <div className="hero-category-card">
            <div className="hero-category-image" style={{ backgroundImage: `url(${item.image})` }} />
            <div className="hero-category-info">
              <span>{item.name}</span>
             <span></span>
            </div>
            <a className="hero-category-button" href="#">Follow</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;


// import React from 'react';
// import "../styles/Testing.css";

// const Testing = () => {
//   return (
    // <div className="card-container-1">
    //   <div className="product-card-1">
    //     <div className="product-image-wrapper-1">
    //       <img src="/images/vests.png" alt="Set of Vests" />
    //     </div>
    //     <p className="product-title-1">Set of Vests</p>
    //     <p className="product-price-1">
    //       Starts @ <span className="price-highlight-1">99</span>
    //       <span className="price-arrow-1">&gt;</span>
    //     </p>
    //   </div>
    // </div>
//   );
// };

// export default Testing;
