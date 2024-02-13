import React from 'react';
import { useParams } from "react-router-dom";
import useData from '../../utils/useData'
import ImageSlider from '../ImageSlider/ImageSlider'
import placeholder from '../../assets/placeholder.png'

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
      <div className="animal">
        {data.images.length > 0 ? <ImageSlider slides={data.images} /> :
          <img src={placeholder} alt='placeholder' />}
        <div className="animal-info">
          <div className="animal-title">
            <h1>{data.name}</h1>
            <p>{data.desc_short}</p>
          </div>
          <div>
            <p>age : {data.ageRange}</p>
            <p>sexe : {data.sex === 'F' ? 'femelle' : 'male'}</p>
            <p>race : {data.race}</p>
            {data.birthDay ? <p>date de naissance : {data.ageRange}</p> : <></>}
          </div>
          <p>{data.desc_long}</p>
        </div>
    </div>
  )
}

export default AnimalPage;

