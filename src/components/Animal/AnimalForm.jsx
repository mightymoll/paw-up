import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function AnimalForm() {
  const navigate = useNavigate();

  const [animal, setAnimal] = useState([]);

  // array to hold 'races' options 
  // TO DO: update based on animal type (ie dog vs cat)
  const races = [
    { value: "mixte" },
    { value: "race1" },
    { value: "race2" },
    { value: "race3" },
  ]

  const options = races.map((option) => {
    return <option key={option.value} value={option.value}>{option.value}</option>
  })

  // update 'animal' state when any input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnimal({
      ...animal,
      [name]: value,
    });
  };

  // send form data to backend onSubmit
  const submitForm = (e) => {
    e.preventDefault();

    console.log(animal)

    // send 'animal' values to backend to create new Animal in DB
    axios.post('http://localhost:5001/addAnimal', animal).then((response) => {
      console.log(response)
      navigate("/admin")
    }, (error) => {
      console.log('there was an error :' + error);;
    })
  }

  return (
    <div>
      <h1>Details d'animal</h1>
      <p>champs avec une * sont obligatoires</p>
      <form onSubmit={submitForm}>
        <div className='form-group'>
          <label>NumICAD : </label>
          <input type="text" name="numICAD" value={animal.numICAD} onChange={handleInputChange} />
        </div>

        <div className='form-group'>
          <label>Nom* : </label>
          <input type="text" name="name" value={animal.name} onChange={handleInputChange} />
        </div>

        <div className='form-group'>
          <label>Sexe* :</label>
          <div>
            <label>Male</label>
            <input type="radio" id="male" name="sex" value="M" onChange={handleInputChange} />
          </div>
          <div>
            <label>Femelle</label>
            <input type="radio" id="femelle" name="sex" value="F" onChange={handleInputChange} />
          </div>
        </div>

        <div className='form-group'>
          <label>Race : </label>
          <select name='race' onChange={handleInputChange} value={animal.race}>
            {options}
          </select>
        </div>

        <div className='form-group'>
          <label>Date de naissance : </label>
          <input type="date" name="birthDay" value={animal.birthDay} onChange={handleInputChange} />
        </div>

        <div className='form-group'>
          <label>Description court :</label>
          <input type="text" name="desc_short" value={animal.desc_short} onChange={handleInputChange} />
        </div>

        <div className='form-group'>
          <label>Description longue :</label>
          <textarea name="desc_long" value={animal.desc_long} onChange={handleInputChange} />
        </div>

        <input type="submit" value="Ajouter Animal" />
      </form>
    </div>
  )
}

export default AnimalForm