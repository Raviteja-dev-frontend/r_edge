import React from "react";
import screen1 from "../assets/screen1.png";
import screen2 from "../assets/screen2.png";
import screen3 from "../assets/screen3.png";
import screen4 from "../assets/screen4.png";
import screen5 from "../assets/screen5.png";
import screen6 from "../assets/screen6.png";
import screen7 from "../assets/screen7.png";
import screen8 from "../assets/screen8.png";
import screen9 from "../assets/screen9.png";

const Demo = () => {
  const screenshots = [
    { src: screen1, title: "Admin Login Screenshot" },
    { src: screen2, title: "Dashboard Overview" },
    { src: screen3, title: "Product Management" },
    { src: screen4, title: "Add Product Form" },
    { src: screen5, title: "Order List" },
    { src: screen6, title: "Category Management" },
    { src: screen7, title: "User Management" },
    { src: screen8, title: "Reports" },
    { src: screen9, title: "Settings Page" },
  ];

  return (
    <div>
      <h2>Project Screenshots</h2>
      {screenshots.map((shot, index) => (
        <div key={index} style={{ marginBottom: "30px" }}>
          <h3>{shot.title}</h3>
          <img
            src={shot.src}
            alt={shot.title}
            style={{ width: "100%", maxWidth: "600px", borderRadius: "8px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default Demo;

