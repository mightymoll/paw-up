import React from 'react';
import femaleIcon from '../../assets/female.svg';
import maleIcon from '../../assets/male.svg';

// helper function to determine which icon to show on card
function sexIcon(sex) {
  if (sex === 'femelle') {
    return femaleIcon
  }
  else {
    return maleIcon
  }
}

function Card(animal) {
  return (
    <div className="card">
      <img className="cardImage" src={animal.image} alt={animal.alt} />
      <div className="cardInfo">
        <div className="cardTitle">
          <h4>{animal.name}</h4>
          <img src={sexIcon(animal.sex)} alt={animal.sex} />
        </div>
        <p>{animal.ageRange}</p>
        <p>{animal.tagline}</p>
      </div>
    </div>)
}


export default Card