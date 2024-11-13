import React from "react";
import { Link } from "react-router-dom";

import "../Styling/Home.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="text-content">
          <h1>
            Elevate your <span>taste</span> with every bite
          </h1>
          <p className="hero-description">
            Indulge in a journey of flavors from around the world. Discover
            recipes that stir emotions and inspire creativity in your kitchen.
          </p>
          <Link to="/recipe">
            <button className="explore-btn">Explore Delicious Recipes</button>
          </Link>
        </div>
        <div className="image-wrapper">
          <img src="https://res.cloudinary.com/dsssueldg/image/upload/v1731297776/front-view-vegetable-salad-with-ingredients-grey-table-health-salad-diet-food-removebg-preview_tnsqh7.png" alt="breakfast" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
