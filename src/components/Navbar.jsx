import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.scss'
import { useNavigate } from 'react-router-dom'
import profileImg from '../assets/profile.jpg'
import { BiSolidDownArrow } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";




const Navbar = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("")
    const [DropdownOpen, setDropdownOpen] = useState(false);
    const isLoggedIn = localStorage.getItem('token');
    const username = localStorage.getItem('username')
    

    const handleProfileClick = () => {
        setDropdownOpen(!DropdownOpen)
    } 


    const handleLogout = async () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username')
        setMessage(" You have been logged Out Succesfully! ")
        setTimeout(() => setMessage(''), 5000);
        setDropdownOpen(!DropdownOpen)
        navigate('/');
    }


      
   


 

    

    return (
        <div className='navbar background'>

            <div className='left-nav'>
                <Link to='/' className='brand-name' > Zaik-e-Kashmir </Link>
            </div>

            <div className='centre-nav'>
               
             

            </div>




            <div className='right-nav'>


                <p>{message && `${message}`}</p>

                {!isLoggedIn && (<Link className='button' to='/login'> Login </Link>)}
                
                {isLoggedIn && (

                    <div className='profile-pic'>
                        <img src={profileImg} alt='loading ' />
                        <span> {username} </span>


                        <button onClick={handleProfileClick}> {DropdownOpen ? <IoCloseSharp /> : <BiSolidDownArrow />}  </button>

                        {DropdownOpen && (
                            <ul className='dropdown-content'>

                                  <Link onClick={handleProfileClick}to='/fetch/user/Recipe' > Local Recipes </Link>
                                  <Link onClick={handleProfileClick} to='/post/user/Recipe' > Post your Recipe </Link>
                                  <Link onClick={handleProfileClick}to='/' > Just for Fun </Link>
                                  <Link onClick={handleProfileClick} to='/' > No login here  </Link>
                                  <Link onClick={handleProfileClick} to='/' > Nexterra </Link>
                                
                                <button  onClick={handleLogout}>Logout</button>
                            </ul>

                        )}



                    </div>

                )}
            </div>


        </div>
    )
}

export default Navbar