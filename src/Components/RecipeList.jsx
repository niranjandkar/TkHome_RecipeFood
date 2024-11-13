import React from "react";
import { useGlobalContext } from "../Context.js";
import Recipe from "./Recipe.jsx";
import Search from "./Search";
import "../Styling/Recipe.css";

export default function RecipeList() {
  const { filterRecipes } = useGlobalContext();

  return (
    <>
      <Search />
      <div className="recipe-list">
        {filterRecipes.map((item) => {
          return <Recipe key={item.id} {...item} />;
        })}
      </div>
    </>
  );
}
