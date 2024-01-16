import React, { useState } from 'react';
import '../styles/Forms.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';



const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:4000/api/login', formData);
            if (response.data.message === 'Logged In Successfully') {
            //    toast.success(response.data.message)
                const { token , username} = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('username' , username)
                navigate('/');

            } else   {
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
        <div className='login-page'>
         <ToastContainer position='top-center' />
            <div className='heading'>
                <h1> Login </h1>
            </div>
            <div className='container'>
                <form onSubmit={handleSubmit} className='form'>
                    <label> Username: </label>
                    <input
                        type='text'
                        name='username'   //key
                        value={formData.username}    //value
                        onChange={handleChange}
                    />
                    <label> Password:</label>
                    <input
                        type='password'
                        name='password'    //key
                        value={formData.password}    // value 
                        onChange={handleChange}
                    />
                    <button type='submit' disabled={loading}>
                        {loading ? 'Logging .....' : 'Login'}
                    </button>
                </form>
            </div>

            <div className='disclaimer'>
                <p style={{fontSize:20}}><strong> Disclaimer: </strong></p>
                <p>By logging into this app, you agree to abide by our terms of service and acknowledge that the app collects and securely stores your login information for authentication purposes only. Your privacy and data security are our top priorities.</p>

            </div>


        </div>
    );
};

export default Login;
