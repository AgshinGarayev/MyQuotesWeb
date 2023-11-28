import React from 'react';

const Card = ({ author,quote}) => {
  return (
    <div className="card">
      <h3>{author}</h3>
      <p>{quote}</p>
    </div>
  );
};

export default Card;
