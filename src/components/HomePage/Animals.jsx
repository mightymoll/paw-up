import React from 'react';
import Card from '../Card/Card';
import useData from '../../utils/useData'
import apiUrl from '../../index'

function animalsPage() {
  window.open("./animals")
}

function Animals() {

  // get 4 newest animal listings from API
  const { data, error, isLoaded } = useData(
    apiUrl + "/animals/newest"
  );
  console.log(data)

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }

  return (
    !isLoaded ? <div>...loading</div> :
    <div className="container">
      <h2>Top LouLous</h2>
      <div className="cards">
          {data.map(animal => Card(animal))}
      </div>
      <div className="center">
        <div className="btn"  role="button" onClick={animalsPage}>voir plus</div>
      </div>
    </div>
  );
};

export default Animals;