import React from "react";
import "../Styling/About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-box">
        <div className="about-text">
          <h2>About IdealFood</h2>
          <p>
            Welcome to FoodClub! We're passionate about bringing you the best
            recipes from around the world. Our mission is to make cooking fun,
            easy, and accessible for everyone. Whether you're a beginner or a
            seasoned chef, you'll find recipes that inspire you.
          </p>
          <p>
            Join our community and share your culinary creations. Discover new
            flavors, techniques, and tips to elevate your cooking experience!
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg"
            alt="Delicious food"
            className="food-img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
