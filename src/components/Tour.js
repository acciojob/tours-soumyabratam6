import React, { useState } from 'react';
import'../styles/Tour.css'
function Tour({ id, name, info, image, price, removeTour }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <article className="tour" >
      <img  className="tour-image" src={image} alt={name} />
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
        <p>
          {showMore  ? info : `${info.substring(0, 200)}...`}
          <button className='show' onClick={toggleShowMore}>
            {showMore  ? 'See less' : 'Show more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Remove Tour
        </button>
      </div>
    </article>
  );
}

export default Tour;

