import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Forms.scss'
import useAuth from '../auth/auth';

const PostRecipeForm = () => {


  useAuth();


  const [title, setTitle] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [instructions, setInstructions] = useState('')
  const [image, setImage] = useState(null)
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);



  const handleFile = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();   //  creating instance of fileReader   // inheritance 
    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    };
  };





  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formDataArr = new FormData();    //creating instance of FormData
      formDataArr.append('title', title);
      formDataArr.append('ingredients', ingredients);
      formDataArr.append('instructions', instructions);
      formDataArr.append('image', image);

      const token = localStorage.getItem('token');




      const response = await axios.post('http://localhost:4000/api/post/recipe', formDataArr,

        { headers: { 'Authorization': `${token}` } }

      );

      if (response.data.message === 'Recipe Created') {
        setMessage(response.data.message);
        

      } else {
        setMessage(response.data.message);
        // setTimeout(() => setMessage(''), 6000);
      }
    } catch (error) {
      console.error(error);
      setMessage('server error');
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className='post-recipe'>


      <div className='heading'>
        <h1>Post a New Recipe</h1>
      </div>

      <div className='container'>

        <form onSubmit={handleSubmit} className='form'>
          <label> Title:</label>
          <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />

          <br />
          <label> Ingredients:</label>
          <textarea name="ingredients" value={ingredients} onChange={(e) => { setIngredients(e.target.value) }} />

          <br />
          <label>Instructions:</label>
          <textarea name="instructions" value={instructions} onChange={(e) => { setInstructions(e.target.value) }} />
          <br />
          <label> Image:</label>
          <input type="file" name="image" accept="image/*" onChange={handleFile} />


          <img src={image} alt={title} width={200} />

          <div className='notification'>{message && <p>{message}</p>}</div>


          <button type="submit" disabled={loading}>
            {loading ? 'Posting...' : 'Post Recipe'}
          </button>
        </form>

      </div>

    </div>
  );
};

export default PostRecipeForm;
