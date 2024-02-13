import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { RiDeleteBinLine } from "react-icons/ri";

function EditAnimalForm() {
  const params = useParams();
  const navigate = useNavigate();


  // control animal data with state
  const [animal, setAnimal] = useState([]);
  const [state, setState] = useState('');
  const [images, setImages] = useState([]);
  const [newImages, setNewImages] = useState([]);

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
        setImages(res.data.images)
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

  const handleMainImageChange = (e) => {
    e.preventDefault()
    // set 'newMain' as value of input(radio) button selected
    const newMain = e.target.value
    //remove new main image from array
    const filtered = images.filter(function (value) {
      return value !== e.target.value
    });
    // add new main image back to beginning of array
    filtered.unshift(newMain)
    // change images array to new filtered array w/new main image
    setImages(filtered);
  }

  // use id passed in onclick function to delete the user w/that id from the DB
  function deleteImage(image) {
    console.log(image)
    //delete image from DB
    axios.delete(`http://localhost:5001/delete-image/${image}`)

    //update image array (exclude deleted file name)
    const filtered = images.filter(function (value) {
      return value !== image
    });
    // update images array
    setImages(filtered);
    alert('image supprimé')
  }

  // IMAGE UPLOADS
  const handleFileChange = (event) => {
    setNewImages(Array.from(event.target.files))
  }

  // add new images to existing images array
  const addImages = () => {
    for (let file of newImages) {
      // remove spaces from filename
      const filename = file.name.replace(/\s/g, '')
      console.log(filename)
      // add filename to images array
      images.push(filename)
    }
    console.log(images)
  }

  // send form data to backend onSubmit
  const submitForm = (e) => {
    e.preventDefault();

    //upload images if they exist
    if (newImages.length > 0) {
      const formData = new FormData();
      newImages.forEach(file => {
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

    console.log(images)

    // send payload (values from form entries) to backend to create new user in DB
    axios.put(`http://localhost:5001/update-animal/${params.id}`, { animal, images }).then((response) => {
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

          {images.length > 0 ?
            <div className='form-group'>
              <label>Changer l'image principal :</label>
              {images.map((image) => {
                return (
                  <div className="img-choice">
                    <img className="img-preview" src={`http://localhost:5001/${image}`} alt={animal.name} />
                    <input type="radio" value={image} checked={images[0] === image} onChange={handleMainImageChange} />
                    <div className="btn-icon" onClick={() => deleteImage(image)}><RiDeleteBinLine /></div>
                  </div>
                )
              })}
            </div> : <></>
          }

          <div className='form-group'>
            <label>Telecharger des images :</label>
            <input type="file" multiple onChange={handleFileChange} />
            <div className="btn" role="button" onClick={addImages}>Ajouter Images</div>
          </div>

          <input type="submit" value="Enregistrer" />
        </form>
      </div>
  )
}

export default EditAnimalForm