import React, { useEffect, useState } from "react";
import "../styles/FeaturedCategories.css";

const FeaturedCategories = () => {
  const [hotProducts, setHotProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const hot = data.products
          .filter(
            (product) => product.rating > 4.0 || product.discountPercentage > 15
          )
          .sort((a, b) => b.rating - a.rating) // sort by rating descending
          .slice(0, 5); // take top 5
        setHotProducts(hot);
      });
  }, []);

  return (
    <section className="featured-categories">
      <h2 className="section-title">Hot Picks Just for You</h2>
      <div className="category-grid">
        {hotProducts.map((item) => (
          <div className="category-card" key={item.id}>
            <img
              src={item.thumbnail}
              alt={item.title}
              className="category-img"
            />
            <h3 className="category-name">{item.title}</h3>
            <p>Rating: ⭐ {item.rating}</p>
            <p>Discount: {item.discountPercentage}%</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
