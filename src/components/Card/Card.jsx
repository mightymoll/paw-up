import React from 'react';
import femaleIcon from '../../assets/female.svg';
import maleIcon from '../../assets/male.svg';
import './card.scss'

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
      {/* TODO: go to animal page onclick*/}
      <a href={"/" + animal.id}>
        <div className="cardImage">
          <img src={animal.image} alt={animal.type} />
        </div>
        <div className="cardInfo">
          <div className="cardTitle">
            <div>
              <h4>{animal.name}</h4>
              <p>{animal.ageRange}</p>
            </div>
            <img src={sexIcon(animal.sex)} alt={animal.sex} />
          </div>
          <p>{animal.tagline}</p>
        </div>
      </a>
    </div>
  )
};


export default Card;