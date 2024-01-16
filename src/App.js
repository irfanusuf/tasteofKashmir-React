import React, { lazy } from "react";
import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Footer from "./components/Footer";
import PostRecipeForm from "./components/PostRecipe";
import FetchUserRecipe from "./components/FetchUserRecipe";
import IsAuthenticated from "./auth/auth";
import "react-toastify/dist/ReactToastify.css";

const Recipes = lazy(() => delayForDemo(import("./components/Recipes")));

async function delayForDemo(promise) {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
  return promise;
}


// const IsAuthenticated = localStorage.getItem('token') 

// console.log(IsAuthenticated)


const App = () => {


  return (
    <div className="app-div">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Without isAuthenticated */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />}/>

          {/* with Authentication */}
          <Route
            path="/fetch/rapid/recipes"
            element={IsAuthenticated ? <Recipes/> : <Login/>}
          />
          <Route
            path="/post/user/Recipe"
            element={IsAuthenticated ? <PostRecipeForm /> : <Login />}
          />
          <Route
            path="/fetch/user/Recipe"
            element={IsAuthenticated ? <FetchUserRecipe /> : <Login />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
