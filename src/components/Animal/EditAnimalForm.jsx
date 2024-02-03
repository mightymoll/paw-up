import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

function EditAnimalForm() {
  const params = useParams();
  const navigate = useNavigate();


  // control animal data with state
  const [animal, setAnimal] = useState([]);
  const [state, setState] = useState('');


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

  // get existing animal data
  useEffect(() => {
    setState('loading');
    // get data of individual animal
    axios.get(`http://localhost:5001/animal/${params.id}`)
      .then((res) => {
        setState('success');
        setAnimal(res.data);
      })
      .catch((err) => {
        console.error('Error:', err);
        setState('error');
      });
  }, [params.id]);

  // show error message if there is an error recuperating animal info
  if (state === 'error') {
    return (
      <div>
        Une erreur est servenue... veuillez ressayer plus tard
      </div>
    )
  }

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

    // get all data from form inputs
    const formData = new FormData(e.target);
    // create an object from the formData to send to backend
    const payload = Object.fromEntries(formData);

    // send payload (values from form entries) to backend to create new user in DB
    axios.put(`http://localhost:5001/update-animal/${params.id}`, payload).then((response) => {
      console.log(response);
      navigate("/admin");
    }, (error) => {
      console.log('there was an error' + error);;
    })
  }

  return (
    state === 'loading' ?
      <div>
        Loading...
      </div>
      :
      <div>
        <h1>Modifier {animal.name}</h1>
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
            {/* checked attribute is true if animal.sex matches value (M or F) */}
            <div>
              <label>Male</label>
              <input type="radio" id="male" name="sex" value="M" checked={animal.sex === 'M'} onChange={handleInputChange} />
            </div>
            <div>
              <label>Femelle</label>
              <input type="radio" id="femelle" name="sex" value="F" checked={animal.sex === 'F'} onChange={handleInputChange} />
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

          <input type="submit" value="Enregistrer" />
        </form>
      </div>
  )
}

export default EditAnimalForm