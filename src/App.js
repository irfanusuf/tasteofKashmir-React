import React from "react";
import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Recipes from "./components/Recipes";
import PostRecipeForm from "./components/PostRecipe";
import FetchUserRecipe from "./components/FetchUserRecipe";
import "react-toastify/dist/ReactToastify.css";

// const Recipes = lazy(() => delayForDemo(import("./components/Recipes")));

// async function delayForDemo(promise) {
//   await new Promise((resolve) => {
//     setTimeout(resolve, 1000);
//   });
//   return promise;
// }



const App = () => {


  return (
    <div className="app-div">
      <BrowserRouter>
        <Navbar />
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />}/>

          
          <Route
            path="/fetch/rapid/recipes"
            element={ <Recipes/> }
          />
          <Route
            path="/post/user/Recipe"
            element={ <PostRecipeForm /> }
          />
          <Route
            path="/fetch/user/Recipe"
            element={ <FetchUserRecipe /> }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
