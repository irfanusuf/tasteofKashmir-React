import React from 'react'
import '../styles/Home.scss'
import { Link } from 'react-router-dom'
import { FaFileInvoice } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";


const Home = () => {
  return (
    <div>


      <div className='main-section'>


        <div className='section-right'>

          <h1> Explore !</h1>
          <h2> The World of Recipes </h2>
          <p>Where u will Find recipes Recreated!</p>



          <div className='explore-buttons'>

            <Link to='/signup'><span> Register </span><FaFileInvoice /> </Link>
            <Link to='/fetch/rapid/recipes'><span>Explore </span>  <FiSend /> </Link> 

          </div>

          
            

          






        </div>



      </div>




    </div>
  )
}

export default Home