import React from 'react';
import { useQuotesContext } from '../hooks/useQuotesContext';
import { useAuthContext } from '../hooks/useAuthContext';

const CardPosted = ({ quote }) => {
    const {dispatch} = useQuotesContext()
    const {user} = useAuthContext()

    const handleClick = async () => {
      if(!user){
        return
      }

        const response = await fetch(`http://localhost:3003/api/quotes/${quote._id}`, {
          method: 'DELETE',
          headers:{
            'Authorization': `Bearer ${user.token}`
          }
        });
        const json = await response.json();
        if (response.ok) {
          dispatch({ type: 'DELETE_QUOTE', payload: json });
        }
      };
      

  return (
    <div className="cardPosted">
      <h3>{quote.author}</h3>
      <p>{quote.quote}</p>
      <button><span onClick={handleClick}>delete</span></button>
    </div>
  );
};

export default CardPosted;
