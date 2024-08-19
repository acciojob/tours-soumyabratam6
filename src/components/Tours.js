import React,{useState} from 'react';
import Tour from './Tour';
const Tours = ({  tours: initialTours  })=>{
const [tours, setTours] = useState(initialTours);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const resetTours = () => {
    setTours(initialTours);
  };
  return (
    <div>
      <h1>Our Tours</h1>
      {tours.length > 0 ? (
        tours.map((tour) => (
          <Tour
            key={tour.id}
            id={tour.id}
            name={tour.name}
            info={tour.info}
            image={tour.image}
            price={tour.price}
            removeTour={removeTour} // Pass the removeTour function
          />
        ))
      ) : (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h2>No Tours Left</h2>
          <button onClick={resetTours} style={{ cursor: 'pointer', padding: '10px 20px', fontSize: '16px' }}>
            Refresh
          </button>
        </div>
      )}
    </div>
  );
}

export default Tours;
