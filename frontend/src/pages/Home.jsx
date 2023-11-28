import React, { useEffect, useState} from 'react';
import Card from '../components/Card';
//import { useQuotesContext } from '../hooks/useQuotesContext';
import axios from 'axios';

const Home = ()=> {
    
   //const {quotes, dispatch} = useQuotesContext()
   const [quotes, setQuotes] = useState([])

  
    useEffect(() => {
         axios
        .get('http://localhost:3003/api/quotes/get')
        .then((response) => {
          setQuotes(response.data); // Reverse the order of quotes
        })
        .catch((err) => console.log(err));
    }, []);

    // useEffect(()=>{

    //   const fetchQuotes = async ()=>{
    //     const response = await fetch('http://localhost:3003/api/quotes/get')
    //     const json = await response.json()
        
    //     if(response.ok){
    //       dispatch({type:'SET_QUOTES', payload:json})
    //     }

    //   }

    //   fetchQuotes()
    // }, [dispatch]);

    return (
      <div className="center">
        <div className="scrollable-container">
          <div className="quote-card-container">
            {quotes && quotes.map((block, index) => (
              <Card key={index} author={block.author} quote={block.quote} />
            ))}
          </div>
        </div>
      </div>
    );



}

export default Home;