import React from 'react';
import { useParams } from "react-router-dom";
import useData from '../../utils/useData'

//placeholder 
function AnimalPage() {
  const params = useParams();

  const { data, error, isLoaded } = useData(
    `http://localhost:5001/animal/${params.id}`
  );

  if (error) {
    return (
      <div>Une erreur est servuenue...</div>
    )
  }

  return (
    !isLoaded ? <div>Loading...</div> : 
    <div>
        {/* TO DO :  <Slider data={data.images} /> */}
        <div className="animal-title">
          <div>
            <h1>{data.name}</h1>
            <p>{data.desc_short}</p>
          </div>
          <div>
            <p>age : {data.ageRange}</p>
            <p>sexe : {data.sex === 'F' ? 'femelle' : 'male'}</p>
            <p>race : {data.race}</p>
          </div>
        </div>
        <p>{data.desc_long}</p>
    </div>
  )
}

export default AnimalPage;

