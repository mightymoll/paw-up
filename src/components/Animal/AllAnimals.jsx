import React from 'react';
import Card from '../Card/Card';
import useData from '../../utils/useData'
import apiUrl from '../../index';

function AllAnimals() {

  // get all animal listings from API
  const { data, error, isLoaded } = useData(
    apiUrl + "/animals/all"
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