import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function NewAssoForm() {
  const navigate = useNavigate();

  const [asso, setAsso] = useState([]);

  // update 'asso' state when any input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAsso({
      ...asso,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    // send 'animal' & 'images' values to backend to create new Animal in DB
    axios.post('http://localhost:5001/addAsso', asso)
      .then((response) => {
        console.log(response)
        navigate('/')
      }, (error) => {
        console.log('there was an error :' + error);;
      })
  }

  return (
    <div>
      <h1>Details de votre Association</h1>
      <p>champs avec une * sont obligatoires</p>
      <form onSubmit={submitForm}>

        <div className='form-field'>
          <label>Numero Siret* : </label>
          <input type="text" name="siret" onChange={handleInputChange} required />
        </div>

        <div className='form-field'>
          <label>Nom* : </label>
          <input type="text" name="name" onChange={handleInputChange} required />
        </div>

        <div className='form-field'>
          <label>Numero Téléphone* : </label>
          <input type="text" name="tel" onChange={handleInputChange} required />
        </div>

        <div className='form-field'>
          <label>Email* : </label>
          <input type="text" name="email" onChange={handleInputChange} required />
        </div>

        <div className="form-address">
          <p>Infos Location</p>
          <div className='form-field'>
            <label>rue : </label>
            <input type="text" name="loc_street" onChange={handleInputChange} />
          </div>

          <div className='form-field'>
            <label>ville : </label>
            <input type="text" name="loc_city" onChange={handleInputChange} />
          </div>

          <div className='form-field'>
            <label>code postale : </label>
            <input type="text" name="loc_postal" maxlength="5" onChange={handleInputChange} />
          </div>
        </div>

        <div className="form-socials">
          <p>Resaux Sociaux</p>
          <div className='form-field'>
            <label>lien facebook : </label>
            <input type="text" name="soc_fb" onChange={handleInputChange} />
          </div>

          <div className='form-field'>
            <label>lien instagram : </label>
            <input type="text" name="soc_insta" onChange={handleInputChange} />
          </div>

          <div className='form-field'>
            <label>lien autre reseaux social : </label>
            <input type="text" name="soc_other" onChange={handleInputChange} />
          </div>
        </div>

        <input type="submit" value="Ajouter Asso" />
      </form>
    </div>
  )
}

export default NewAssoForm