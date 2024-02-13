import React from 'react';
import femaleIcon from '../../assets/female.svg';
import maleIcon from '../../assets/male.svg';
import './card.scss'
import placeholder from '../../assets/placeholder.png'

// helper function to determine which icon to show on card
function sexIcon(sex) {
  if (sex === 'F') {
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
      <a href={"/animals/" + animal._id}>
        <div className="cardImage">
          <img src={!animal.images[0] ? placeholder : animal.images[0]} alt={animal.name} />
        </div>
        <div className="cardInfo">
          <div className="cardTitle">
            <div>
              <h4>{animal.name}</h4>
              <p>{animal.ageRange}</p>
            </div>
            <img src={sexIcon(animal.sex)} alt={animal.sex} />
          </div>
          <p>{animal.desc_short}</p>
        </div>
      </a>
    </div>
  )
};


export default Card;