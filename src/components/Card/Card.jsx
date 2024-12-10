import React from 'react';
import femaleIcon from '../../assets/female.svg';
import maleIcon from '../../assets/male.svg';
import './card.scss'
import placeholder from '../../assets/placeholder.png'
import apiUrl from '../../index'

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

  // check if animal has images available
  const hasImages = (images) => {
    if (images.length > 0)
      return true
  }
  return (
    <div className="card" key={animal._id}>
      <a href={"/animals/" + animal._id}>
        <div className="cardImage">
          {/* if animal has images, show first image in array, else show placeholder */}
          <img src={hasImages(animal.images) ? `${apiUrl}/${animal.images[0]}` : placeholder} alt={animal.name} />
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