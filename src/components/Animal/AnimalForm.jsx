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

  // IMAGE UPLOADS
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleFileChange = event => {
    setSelectedFiles(Array.from(event.target.files))
  }

  // send form data to backend onSubmit
  const submitForm = (e) => {
    e.preventDefault();

    //upload images if they exist
    if (selectedFiles.length > 0) {
      const formData = new FormData();
      selectedFiles.forEach(file => {
        // make new filename : name of animal + original name with all spaces removed
        formData.append('images', file)
      })
      axios.post('http://localhost:5001/uploadmultiple', formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.message);
        })
    }

    // create images array to send with animal data
    let images = [];
    for (let file of selectedFiles) {
      // remove spaces from filename
      images.push(file.name.replace(/\s/g, ''))
    }

    // send 'animal' & 'images' values to backend to create new Animal in DB
    axios.post('http://localhost:5001/addAnimal', { animal, images }).then((response) => {
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
          <input type="text" name="name" value={animal.name} onChange={handleInputChange} required />
        </div>

        <div className='form-group'>
          <label>Sexe* :</label>
          <div>
            <label>Male</label>
            <input type="radio" id="male" name="sex" value="M" onChange={handleInputChange} required />
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
          <div>
            <label>Date de naissance (si connu) : </label>
            <input type="date" name="birthDay" value={animal.birthDay} onChange={handleInputChange} /> 
        </div>
          <div>
            <label>Catégorie d'âge : </label>
            <select name='ageRange' value={animal.ageRange} onChange={handleInputChange}>
              <option value='junior'>junior - moins q'un an</option>
              <option value='adult'>adult- entre un an et huit ans</option>
              <option value='senior'>senior - plus que huit ans</option>
            </select>
          </div>
        </div>

        <div className='form-group'>
          <label>Statut : </label>
          <select name='status' value={animal.status} onChange={handleInputChange}>
            <option value='available'>disponible</option>
            <option value='hold'>en attente - réservé ou en attente pour raisons médicales</option>
            <option value='adopted'>adopté</option>
          </select>
        </div>

        <div className='form-group'>
          <label>Description court :</label>
          <input type="text" name="desc_short" value={animal.desc_short} onChange={handleInputChange} />
        </div>

        <div className='form-group'>
          <label>Description longue :</label>
          <textarea name="desc_long" value={animal.desc_long} onChange={handleInputChange} />
        </div>

        <div className='form-group'>
          <label>Telecharger des images :</label>
          <input type="file" multiple onChange={handleFileChange} />
        </div>

        <input type="submit" value="Ajouter Animal" />
      </form>
    </div>
  )
}

export default AnimalForm