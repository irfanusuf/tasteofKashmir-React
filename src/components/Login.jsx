import React, { useState } from 'react';
import '../styles/Forms.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();


    
    const [message, setMessage] = useState('');
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
                setMessage('Logged in Succesfully');


                const { token , username} = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('username' , username)
                navigate('/');

            } else   {
                setMessage(response.data.message);

            }
            

        } catch (error) {
            console.error(error);
            setMessage(error);

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='login-page'>




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
                    <div className='notification'> {message && `${message}`}</div>
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
