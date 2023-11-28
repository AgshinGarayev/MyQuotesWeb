import React, { useEffect } from 'react';
import CardPosted from '../components/CardPosted';
import { useQuotesContext } from '../hooks/useQuotesContext';
import { useAuthContext } from '../hooks/useAuthContext';



function Recents() {

    const { quotes, dispatch } = useQuotesContext()
    const {user} = useAuthContext()

  
    useEffect(() => {
      const fetchWorkouts = async () => {
        const response = await fetch('http://localhost:3003/api/quotes/each', {
          headers: {'Authorization': `Bearer ${user.token}`},
        })
        const json = await response.json()
  
        if (response.ok) {
          dispatch({type: 'SET_QUOTES', payload: json})
        }
      }
  
      if (user) {
        fetchWorkouts()
      }
    }, [dispatch, user])
  
    return (
    <div>
       {quotes && quotes.map(quote => (
          <CardPosted quote={quote} key={quote._id} />
        ))}
    </div>
    
    );
}

export default Recents;