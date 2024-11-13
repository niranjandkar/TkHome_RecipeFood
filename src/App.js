import React, { lazy, Suspense } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
const Home = lazy(() => import("./Components/Home"));
const Recipelist = lazy(() => import("./Components/RecipeList"));
const Recipedetails = lazy(() => import("./Components/AboutRecipe"));


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<ContactUs />} /> 
        <Route path="/recipe" element={<Recipelist />} />
        <Route path="/recipe/:id" element={<Recipedetails />} />
        
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
