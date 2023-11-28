import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';




function Post() {

    const [author, setAuthor] = useState('')
    const [quote, setQuote] = useState('')
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const {user} = useAuthContext()


    // const handleSubmit= (e)=>{
    //     e.preventDefault();
    //     axios.post('http://localhost:3003/api/quotes/post', {author,quote}).then(result => console.log(result)
    //     ,navigate('/')
    //     ).catch(err => console.log(err))
    
    //   }

      const handleSubmit= async (e)=>{
        e.preventDefault();
        if(!user){
          setError('You must be logged in')
          return
        }
        const newQuote = {author,quote}

        const response = await fetch('http://localhost:3003/api/quotes/post', {
            method:'POST',
            body: JSON.stringify(newQuote),
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
    
        if(!response.ok){
            setError(json.error)
        }

        if(response.ok){
            setAuthor('')
            setQuote('')
            setError(null)
            console.log('new quote added', json)
            navigate('/')
        }
      }


    return (

    <div className="post-container">
      <form className="post-form" onSubmit={handleSubmit}>
        <img src="post_up.png" className="top-left-logo" alt="Top Left Logo" />
        <img src="post_down.png" className="bottom-right-logo" alt="Bottom Right Logo" />

        <input type="text" placeholder="AUTHOR" id="author" name="author" required style={{ textAlign: 'center' }}   onChange={(e)=> setAuthor(e.target.value)} value={author}/>
        <input type="text" placeholder="QUOTE" id="quoteText" name="quoteText" required style={{ textAlign: 'center' }} onChange={(e)=> setQuote(e.target.value)} value={quote}/>
       
       
        <button type="submit">Post</button>
     
      </form>
    </div>
    );  
}

export default Post;