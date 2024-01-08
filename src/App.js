import React from 'react';
import './styles/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';
import Login from './components/Login'
import Footer from './components/Footer';
import PostRecipeForm from './components/PostRecipe';
import FetchUserRecipe from './components/FetchUserRecipe';

const App = () => {
 
  return (
    <div className='app-div'>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/signup' element={<Signup/>} ></Route>
          <Route path='/recipes' element = {<Recipes/>} ></Route>
          <Route path='/login' element = {<Login/>} ></Route>
          <Route path='/post/user/Recipe' element = {<PostRecipeForm/>} ></Route>
          <Route path='/fetch/user/Recipe' element = {<FetchUserRecipe/>} ></Route>

        </Routes>

        <Footer/>
      </BrowserRouter>


    </div>
  )
}

export default App