import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/Hero.css";

import Card_1 from "../assets/Card_1.png";
import Card_2 from "../assets/Card_2.png";
import Card_3 from "../assets/Card_3.png";
import Card_4 from "../assets/Card_4.png";
import Mackupkit_icon_1 from "../assets/Mackupkit_icon_1.svg";
import perfume from "../assets/perfume.png";
import Groceries_icon from "../assets/Groceries_icon.png";
import Vegetables_icon from "../assets/Vegetables_icon.png";
import chicken_icon from "../assets/chicken_icon.png";
import juice_icon from "../assets/juices_icon.png";
import jewellery_icon from "../assets/necklace_icon.png";

const Hero = () => {
  const slides = [Card_1, Card_2, Card_3, Card_4];

  const categories = [
    { name: "Beauty", img: Mackupkit_icon_1 },
    { name: "Fragrances", img: perfume },
    { name: "Groceries", img: Groceries_icon },
    { name: "Fruits", img: "https://cdn-icons-png.flaticon.com/512/415/415682.png" },
    { name: "Juices", img: juice_icon },
    { name: "Jewellery", img: jewellery_icon },
    { name: "Vegetables", img: Vegetables_icon },
    { name: "Meat", img: chicken_icon },
  ];

  const bestSales = [
    {
      name: "Organic Apple",
      price: 99,
      original: 129,
      img: "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp",
    },
    {
      name: "Natural Perfume",
      price: 499,
      original: 899,
      img: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp",
    },
    {
      name: "Pure Honey Jar",
      price: 349,
      original: 499,
      img: "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp",
    },
    {
      name: "Fresh Kiwi Pack",
      price: 119,
      original: 199,
      img: "https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp",
    },
    {
      name: "Mixed Fruit Juice",
      price: 149,
      original: 249,
      img: "https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp",
    },
  ];

  return (
    <div className="container-fluid py-4 hero-section">
      <div className="row g-4">
        {/* Left: Carousel */}
        <div className="col-lg-4">
          <Carousel fade className="rounded overflow-hidden">
            {slides.map((img, i) => (
              <Carousel.Item key={i}>
                <img
                  src={img}
                  alt={`Slide ${i + 1}`}
                  className="d-block w-100 img-fluid object-fit-cover"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Right: Categories + Best Sales */}
        <div className="col-lg-8 d-flex flex-column gap-4 mt-5 pt-2">
          {/* Hot Categories */}
          <div className="row g-5">
            <div className="col-md-4">
              <img
                src="https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp"
                alt="Top Promo"
                className="img-fluid w-100 h-100 rounded border object-fit-cover"
              />
            </div>

            <div className="col-md-8 text-primary-slide_5">
              <h5 className="text-primary-slide_1 fw-semibold mb-3">Hot Categories</h5>
              <div className="d-flex flex-wrap hot-categories-1">
                {categories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="text-center d-flex flex-column align-items-center category-box"
                  >
                    <img src={cat.img} alt={cat.name} className="category-image" />
                    <p className="category-label mt-2 mb-0">{cat.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Best Sales Section */}
          <div className="text-primary-slide_3 rounded text-white border">
            <div className="d-flex justify-content-between align-items-center mb-3 p-3">
              <h4 className="fw-bold mb-0">Best Pick of the Week</h4>
              <a href="#" className="text-white text-decoration-none fw-semibold small">
                Shop More
              </a>
            </div>

            <div className="d-flex flex-wrap best-section_gap justify-content-start">
              {bestSales.map((item, idx) => (
                <div key={idx} className="text-center" style={{ width: "120px" }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="img-fluid best-sale-img"
                  />
                  <p className="small mb-1 mt-2">{item.name}</p>
                  <small className="text-decoration-line-through d-block">₹{item.original}</small>
                  <p className="text-warning fw-bold mb-0">₹{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
