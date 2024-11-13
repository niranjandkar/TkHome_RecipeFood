import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../Styling/Recipe.css";

const Recipe = React.memo(function Recipe({ image, name, id }) {
  return (
    <article className="recipe-card">
      <div className="image-container">
        <img
          src={
            image ||
            "https://i.ibb.co/KFpCKPb/anna-pelzer-IGf-IGP5-ONV0-unsplash.jpg"
          }
          alt={name || "Recipe Image"}
        />
      </div>
      <div className="recipe-footer">
        <h2>{name || "Delicious Dish"}</h2>
        <Link to={`/recipe/${id}`} className="recipe-link">
          <h4>
            See Recipe <i className="fa fa-arrow-right"></i>
          </h4>
        </Link>
      </div>
    </article>
  );
});

Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Recipe;
