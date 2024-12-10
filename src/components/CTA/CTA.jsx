import React, { useState } from 'react';
import './cta.scss';
import axios from 'axios'
import apiUrl from '../../index'

function CTA() {

  const [animalCount, setAnimalCount] = useState()

  // get all animal listings from API to & set animalCount as resulting length
  axios.get(apiUrl + "/animals/all")
    .then(res => {
      setAnimalCount(res.data.length)
    }
  )

  return (
    <div className="cta">
      {/* if no animalCount (error), show word 'plusieurs' */}
      <h2>Actuellement <span className="ctaCount">{animalCount ? animalCount : `plusieurs`}</span> animaux ont besoin d'une famille pour toujours</h2>
    </div >
  );
};

export default CTA;