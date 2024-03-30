import React, { useState } from 'react';
import '../styles/Forms.scss';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";


const Signup = () => {


const navigate = useNavigate();
  const baseUrl = "https://recipe-server-wmgr.onrender.com"
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [eye , setEye] = useState(true)



  function eyeclick () {setEye(!eye)}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(`${baseUrl}/api/signup`, formData);
      if (response.status === 201) {
       navigate ( '/login')
        
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error(error);
      toast.error("Server Error")

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='signup-page'>
      <ToastContainer position='top-center'/>

      <div className='heading'>
        <h1> Register </h1>
      </div>

      <div className='container'>
        <form onSubmit={handleSubmit} className='form'>
          <label>
            Username:  </label>
          <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            placeholder='Enter your Text'
          />

          <label>
            Email:  </label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your Email'
          />

          <label>
            Password:  </label>
       
          <div className='password-input'>
          <input
            type= {eye ? "text" : "password"}
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter your Password'
    
            />
            

            <div className='password-hider'>
            { eye ? < FaRegEyeSlash  onClick={eyeclick} /> : <  FaRegEye onClick={eyeclick} /> } 
            </div>
          </div>

          <br/>

          <button type='submit' disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
 
        </form>
      </div>

      <div className='disclaimer'>
        <p style={{ fontSize: 20 }}><strong> Disclaimer: </strong></p>
        <p>By registering in our app, you acknowledge and agree that we will collect and securely store your provided information for authentication and personalized user experience. Rest assured, your privacy is our priority, and we are committed to safeguarding your data in compliance with our privacy policy.</p>

      </div>

    </div>
  );
};

export default Signup;
