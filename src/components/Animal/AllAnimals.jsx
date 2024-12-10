import React from 'react';
import Card from '../Card/Card';
import useData from '../../utils/useData'

function AllAnimals() {

  // get all animal listings from API
  const { data, error, isLoaded } = useData(
    "http://localhost:5001/animals/all"
  );
  console.log(data)

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }

  return (
    !isLoaded ? <div>...loading</div> :
      <div className="container">
        <h2>Tous nos animaux</h2>
        <div className="cards">
          {data.map(animal => Card(animal))}
          </div>
      </div >
  );
};

export default AllAnimals;