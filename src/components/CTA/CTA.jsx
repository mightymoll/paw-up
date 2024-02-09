import React from 'react';
import './cta.scss';

import catIcon from '../../assets/cat.png'
import dogIcon from '../../assets/dog.png'
import pawIcon from '../../assets/paw.png'

// placeholder
function CTA() {

  // TODO: function to show number of animals available
  var animalCount = 126;

  // TODO: get animal types from Admin dashboard
  const animalTypes = [
    {
      name: "chat",
      icon: catIcon,
      url: './chats'
    },
    {
      name: "chien",
      icon: dogIcon,
      url: './chiens'
    },
    {
      name: "coup de cœur",
      icon: pawIcon,
      url: './all'
    }
  ];

  return (
    <div className="cta">
      <div className="ctaText">
        <h3>Adopter</h3>
        <span>actuellement
          <span className="ctaCount">{" " + animalCount + " "}</span>
          animaux ont besoin d'une famille pour toujours
        </span>
      </div>
      <div className="ctaTypes">
        {animalTypes.map(type => (<a href={type.url} className="ctaButton" role="button">
          <img src={type.icon} alt={type.name} />
          <p>{type.name}</p>
        </a>))}
      </div>
    </div >
  );
};

export default CTA;