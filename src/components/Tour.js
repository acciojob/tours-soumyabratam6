import React, { useState } from 'react';
import'../styles/Tour.css'
function Tour({ id, name, info, image, price, removeTour }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="tour" >
      <img  className="tour-image" src={image} alt={name} />
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
        <p id={`tour-item-para-${id}`}>
          {showMore  ? info : `${info.substring(0, 200)}...`}
          <button className='show' id={`see-more-${id}`} onClick={toggleShowMore}>
            {showMore  ? 'See less' : 'See more'}
          </button>
        </p>
        <button className="delete-btn" id={`delete-btn-${id}`} onClick={() => removeTour(id)}>
          Remove Tour
        </button>
      </div>
    </div>
  );
}

export default Tour;

