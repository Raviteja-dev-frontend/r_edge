import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import Hero from "../pages/Hero";
import Carousel from "react-bootstrap/Carousel";
import { FaMapMarkerAlt, FaBoxOpen, FaThumbsUp, FaPhone, FaHeart } from "react-icons/fa";
import Slider from "react-slick";
import vegitables_fruits from "../assets/vegitables_fruits.png";
import fruits from "../assets/fruits.png";
import SlidingPosts from "./SlidingPosts";
import all_store_pics from "../assets/all_store_pics.jpeg";
import Testing from "../pages/Testing";
import "../styles/Testing.css";
import Special_offer from "../assets/Special_offer.jpg";
// Removed: import styled from 'styled-components';
import DESKTOP_CATEGORY_BANNER from "../assets/DESKTOP_CATEGORY_BANNER.webp";
const Home = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  const offerEndTime = new Date().getTime() + 60 * 60 * 1000; // 1 hour from now

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = offerEndTime - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

 

    const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };



const brandLogos = [
  "https://www.bing.com/th/id/OIP.r5lFzQaIjUisxM5e-i_3GQHaE8?w=252&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  "https://www.bing.com/th/id/OIP.7xmZ3Wcl7sj-kFKDj_a5eQHaHa?w=202&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",

  "https://www.bing.com/th/id/OIP.HZPTnzKEkCPtOgie83EKyQHaFj?w=281&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  "https://www.bing.com/th/id/OIP.L3Uai0ArV-DmS4sOygVqnQAAAA?w=221&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
   "https://www.bing.com/th/id/OIP.r5lFzQaIjUisxM5e-i_3GQHaE8?w=252&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  "https://www.bing.com/th/id/OIP.7xmZ3Wcl7sj-kFKDj_a5eQHaHa?w=202&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",

  "https://www.bing.com/th/id/OIP.HZPTnzKEkCPtOgie83EKyQHaFj?w=281&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  "https://www.bing.com/th/id/OIP.L3Uai0ArV-DmS4sOygVqnQAAAA?w=221&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
   "https://www.bing.com/th/id/OIP.r5lFzQaIjUisxM5e-i_3GQHaE8?w=252&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  "https://www.bing.com/th/id/OIP.7xmZ3Wcl7sj-kFKDj_a5eQHaHa?w=202&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",

];

  const services = [
    {
      icon: <FaMapMarkerAlt color="#A78BFA" size={32} />,
      title: "Fast, Home Delivery",
      subtitle: "On order over 50"
    },
    {
      icon: <FaBoxOpen color="#A78BFA" size={32} />,
      title: "Next Day Delivery",
      subtitle: "Free – spend over 50"
    },
    {
      icon: <FaThumbsUp color="#A78BFA" size={32} />,
      title: "5-Day Free Returns",
      subtitle: "All shipping methods"
    },
    {
      icon: <FaPhone color="#A78BFA" size={32} />,
      title: "Expert Customer Service",
      subtitle: "Choose chat or call us"
    },
    {
      icon: <FaHeart color="#A78BFA" size={32} />,
      title: "Exclusive Brands",
      subtitle: "More exclusive products"
    }
  ];
const advertisements = [
  {
    id: 1,
    title: "Creative Tech Launch",
    description: "Discover futuristic gadgets & design-forward electronics today!",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/88cfbf231013573.Y3JvcCwxNTMzLDExOTksMCwyNTQ.png",
  },
  {
    id: 2,
    title: "End of Season Fashion Sale",
    description: "Trendy outfits and exclusive deals up to 60% off!",
    image: "https://cmsimages.shoppersstop.com/EOSS_preview_sale_app_a6b2e0f06d/EOSS_preview_sale_app_a6b2e0f06d.png",
  },
  {
    id: 3,
    title: "Modern Home Makeover",
    description: "Shop elegant home decor pieces to elevate your space.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThps9kgKRu59MltLb-27z-HgxV880FngN11Q&s",
  },
  {
    id: 4,
    title: "Urban Streetwear Drop",
    description: "New arrivals for the bold and trendy—shop now!",
    image: "https://img.pikbest.com/templates/20210923/bg/9ead90cdf1f0a.jpg!w700wp",
  },
  {
    id: 5,
    title: "Beauty Fest: Limited Deals",
    description: "Luxury cosmetics & skincare at amazing discounts!",
    image: "https://thumbs.dreamstime.com/b/cosmetics-beauty-products-make-up-sale-banner-glowing-neon-background-pink-sparkles-discount-off-promo-advertising-146396111.jpg",
  },
];

  const categories = [
    { name: 'Fashion', icon: 'fa-tshirt' },
    { name: 'Electronics', icon: 'fa-tv' },
    { name: 'Gifts', icon: 'fa-gift' },
    { name: 'Home Decor', icon: 'fa-couch' },
    { name: 'Books', icon: 'fa-book' },
    { name: 'Beauty', icon: 'fa-air-freshener' },
    { name: 'Toys', icon: 'fa-puzzle-piece' },
    { name: 'Groceries', icon: 'fa-apple-alt' }
  ];

const categoryList = [
  {
    name: "Fruits & Vegetables",
    icon: "https://cdn-icons-png.flaticon.com/512/415/415733.png",
  },
  {
    name: "Dairy Products",
    icon: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  },
  {
    name: "Bakery",
    icon: "https://cdn-icons-png.flaticon.com/512/685/685352.png",
  },
  {
    name: "Snacks",
    icon: "https://cdn-icons-png.flaticon.com/512/857/857681.png",
  },
  {
    name: "Meat & Fish",
    icon: "https://cdn-icons-png.flaticon.com/512/1046/1046786.png",
  },
];
const products = [
   {
    id: 1,
    image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    title: "eyeshadow-palette-mirror",
    price: 99,
  },
  {
    id: 2,
    image: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
    title: "powder-canister",
    price: 149,
  },
  {
    id: 3,
    image: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
    title: "red-lipstick",
    price: 129,
  },
  {
    id: 4,
    image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    title: "essence-mascara-princess",
    price: 199,
  },
  {
    id: 5,
    image: "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
    title: "red-nail-polish",
    price: 299,
  },
  {
    id: 6,
    image: "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp",
    title: "apple",
    price: 49,
  },
  {
    id: 7,
    image: "https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp",
    title: "cucumber",
    price: 89,
  },
  {
    id: 8,
    image: "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp",
    title: "green-bell-pepper",
    price: 499,
  },
  {
    id: 9,
    image: "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp",
    title: "eggs",
    price: 599,
  },
  {
    id: 10,
    image: "https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp",
    title: "kiwi",
    price: 349,
  },
];

  return (
    <div className="text-dark">
   
  <div className="home-page px-3 py-4">
      <Hero />

    </div>




<div className="promo-banner d-flex align-items-center justify-content-between p-3 rounded">
 
    <img src={DESKTOP_CATEGORY_BANNER} alt="Promo Banner" className="promo-banner-image" />
   
 
  
</div>

{/* screen-3: Website Related Post Section */}


<div className="container">
  <div className="row align-items-center banner-1 g-4">
    
    {/* Text Content */}
    <div className="col-lg-7 col-md-12 banner-left p-lg-5 p-3">
      <h1 className="fw-bold text-dark mb-3">
        Your One-Stop Store for All Essentials
      </h1>
      <p className="text-muted fs-5 mb-4">
        Discover a wide range of high-quality products including fresh groceries, beauty products,
        home essentials, and much more – all under one roof. We ensure quality, variety, and
        affordability for your everyday needs.
      </p>
      <ul className="list-unstyled mb-4">
        <li className="mb-2">
          <i className="bi bi-check2-circle text-success me-2"></i>
          Fresh fruits & vegetables daily
        </li>
        <li className="mb-2">
          <i className="bi bi-check2-circle text-success me-2"></i>
          Organic & chemical-free options
        </li>
        <li className="mb-2">
          <i className="bi bi-check2-circle text-success me-2"></i>
          Premium quality meat & seafood
        </li>
        <li className="mb-2">
          <i className="bi bi-check2-circle text-success me-2"></i>
          Household & kitchen essentials
        </li>
        <li className="mb-2">
          <i className="bi bi-check2-circle text-success me-2"></i>
          Fast and safe home delivery
        </li>
      </ul>
      <button className="btn btn-danger px-4 py-2">
        Explore Our Products
      </button>
    </div>

    {/* Image Content */}
  <div className="col-lg-5 col-md-12 text-center store_pic">
  <img
    src={all_store_pics}
    alt="Store Showcase"
    className="img-fluid rounded shadow"
  />
</div>

  </div>
</div>





 {/* <div className="advertisement-carousel-container my-5">
      <h2 className="h4 fw-bold mb-4 text-center">Latest Promotions</h2>
      <Slider {...settings}>
        {advertisements.map((ad) => (
          <div key={ad.id} className="px-2">
            <div
              className="ad-card"
              style={{ backgroundImage: `url(${ad.image})` }}
            >
              <div className="ad-overlay">
                <h5 className="ad-title">{ad.title}</h5>
                <p className="ad-desc">{ad.description}</p>
                <button className="btn btn-primary btn-sm mt-2">Shop Now</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div> */}

 


      {/* 2. Featured Categories */}
<section className="container featured-categories">
      <h2 className="h3 fw-bold mb-4 text-center">Featured Categories</h2>
      <div className="row">
        {categories.map((cat) => (
          <div key={cat.name} className="col text-center d-flex justify-content-center">
            <div className="icon-card p-3">
              <div className="icon-wrapper mb-2 mx-auto">
                <i className={`fas ${cat.icon} fa-2x`}></i>
              </div>
              <h6 className="category-name mt-2">{cat.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </section>





<SlidingPosts/>


      {/* 3. New Arrivals */}
      {/* <section className="py-5 bg-light container">
        <h2 className="h4 fw-bold mb-4">New Arrivals</h2>
        <div className="d-flex overflow-auto gap-3">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="card" style={{ minWidth: "200px" }}>
              <img src={`https://via.placeholder.com/200x150?text=Product+${i}`} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Product {i}</h5>
                <p className="card-text">$19.99</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}


{/* 
 <div className="category-section">
      {categoryList.map((cat, idx) => (
        <div key={idx} className="category-card">
          <img src={cat.icon} alt={cat.name} className="category-icon" />
          <p className="category-name">{cat.name}</p>
        </div>
      ))}
    </div> */}

<div className="live-category">
  <h2 className="">Live Products</h2>
  <div>
 <Testing />
  </div>
</div>

<section className="deal-section">
  <div className="deal-container">
    {/* Image */}
    <div className="deal-image">
      <img src={Special_offer} alt="Special Offer" />
    </div>

    {/* Main Content */}
    <div className="deal-content">
      <h2 className="deal-heading">Deal of the Day</h2>
      <p className="deal-subtext">Flat 50% OFF on selected items. Don't miss out!</p>

      <div className="countdown">
        <div className="timer-box">
          <div className="time">{String(timeLeft.hours).padStart(2, '0')}</div>
          <small>Hours</small>
        </div>
        <div className="timer-box">
          <div className="time">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <small>Minutes</small>
        </div>
        <div className="timer-box">
          <div className="time">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <small>Seconds</small>
        </div>
      </div>

      <button className="deal-btn">Shop Now</button>
    </div>

    {/* Side Text */}
   <div className="deal-extra">
  <h4 className="extra-heading">Above 49% Offer </h4>
  <ul className="extra-list">
    <li className="extra-subtext">Apples</li>
    <li className="extra-subtext">Bananas</li>
    <li className="extra-subtext">kiwi</li>
    <li className="extra-subtext">Chicken</li>
    <li className="extra-subtext">Fish</li>
    <li className="extra-subtext">Eggs</li>
  </ul>
</div>

  </div>
</section>


      {/* 4. Trending Products */}
      <div className="latest-products-main">
  <h2>Latest Products</h2>
   <div className="card-container-1">
    
      {products.map((item) => (
        <div className="product-card-1" key={item.id}>
          <div className="product-image-wrapper-1">
            <img src={item.image} alt={item.title} />
          </div>
          <p className="product-title-1">{item.title}</p>
          {/* <p className="product-price-1">
            Starts @ <span className="price-highlight-1">{item.price}</span>
            <span className="price-arrow-1">&gt;</span>
          </p> */}
        </div>
      ))}
    </div>
      </div>
    


    <section className="promo-section container">
  <div className="row align-items-center g-4">
    
    {/* Video Side */}
    <div className="col-12 col-md-6">
      <div className="video-wrapper ratio ratio-16x9">
        <video controls className="w-100 rounded shadow-lg">
          <source src="https://youtu.be/jnLy0IFh5G8?si=rTcytMh3s14um85F" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    {/* Text Side */}
    <div className="col-12 col-md-6 text-center text-md-start">
      <h2 className="brand-heading">About Our Brand</h2>
      <p className="brand-text">
        At <strong>BuyBuddy</strong>, we believe that every gift tells a story, 
        and every story deserves to be shared with love. Our journey began with a 
        simple idea — to make gifting more meaningful, memorable, and full of joy. 
        From handcrafted keepsakes to modern lifestyle essentials, each product 
        is thoughtfully curated to bring smiles to your loved ones.
      </p>
      <p className="brand-text">
        We work closely with skilled artisans, trusted suppliers, and creative 
        designers to ensure our products are not only beautiful but also of 
        exceptional quality. Whether it’s a birthday, wedding, festival, or 
        just a “thinking of you” moment, BuyBuddy is here to make your 
        celebrations unforgettable.
      </p>
    </div>
  </div>
</section>



 

      {/* 9. Testimonials */}
     <section className="testimonials-section py-5 container">
  <h2 className="testimonials-title h4 fw-bold mb-4">What Our Customers Say</h2>
  <div className="testimonials-wrapper d-flex gap-4 overflow-auto">
    {[1, 2, 3,4,5,6,7,8,9,10].map(i => (
     <div key={i} className="testimonial-card p-3" style={{ minWidth: "300px" }}>
  <img
    src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
    alt="Client"
    className="testimonial-avatar mb-2"
  />
  <p className="testimonial-quote fst-italic">
    "Amazing quality and quick delivery!"
  </p>
  <div className="testimonial-rating text-warning">★★★★★</div>
  <h6 className="testimonial-name mt-2 mb-0 fw-bold">John Doe</h6>
  <p className="testimonial-position text-muted small">Happy Customer</p>
</div>

    ))}
  </div>
</section>


      {/* 10. Why Choose Us */}
     <section className="why-choose-us-section py-5 container">
  <h2 className="section-title text-center mb-4">Why Choose Us</h2>
  <div className="row row-cols-2 row-cols-md-4 g-4 text-center">
    {[
      { icon: "🚚", label: "Free Shipping" },
      { icon: "🔒", label: "Secure Payment" },
      { icon: "🔁", label: "Easy Returns" },
      { icon: "📞", label: "24/7 Support" }
    ].map((item, i) => (
      <div key={i} className="col">
        <div className="why-choose-card p-4 h-100 rounded text-white">
          <div className="icon fs-2 mb-2">{item.icon}</div>
          <p className="label fw-semibold mb-0">{item.label}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* 11. Newsletter */}
     <div className="newsletter-section text-center">
  <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
  <p className="newsletter-subtext">Get updates on new products and special offers</p>
  <div className="newsletter-form d-flex justify-content-center">
    <input
      type="email"
      className="newsletter-input form-control"
      placeholder="Enter your email"
    />
    <div className="newsletter-button">
    <button className="newsletter-button btn">Subscribe</button>
    </div>

  </div>
</div>



      {/* 14. Brand Logos */}
    <section className="py-4 container text-center">
    <h2 className="h4 fw-bold mb-4">Our Partners</h2>
    <div className="d-flex justify-content-center flex-wrap gap-3">
      {brandLogos.map((logo, i) => (
        <img key={i} src={logo} alt={`Brand ${i + 1}`} width={100} height={100} />
      ))}
    </div>
  </section>



      
      
    </div>
  );
};

export default Home;
