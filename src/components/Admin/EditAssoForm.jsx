import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import apiUrl from '../../index';

function EditAssoForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const id = '65c63c6dda87a502bdf4cb45';

  const [isLoaded, setIsLoaded] = useState('');
  const [asso, setAsso] = useState([]);

  // get existing assocation data
  useEffect(() => {
    setIsLoaded(false);
    // get data of individual animal
    axios.get(apiUrl + 'asso/' + id)
      .then((res) => {
        setIsLoaded(true);
        setAsso(res.data);
      })
      .catch((err) => {
        console.error('Error:', err);
      });
  }, []);


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
    axios.put(`${apiUrl}/update-asso/${id}`, asso)
      .then((response) => {
        console.log(response)
        navigate('/', { state: { from: 'editAsso' } });

      }, (error) => {
        console.log('there was an error :' + error);;
      })
  }

  return (
    !isLoaded ? <div>...loading</div> :
      <div>
        <h1>Details de votre Association</h1>
        <p>champs avec une * sont obligatoires</p>
        <form onSubmit={submitForm}>

          <div className='form-field'>
            <label>Numero Siret* : </label>
            <input type="text" name="siret" value={asso.siret} onChange={handleInputChange} required />
          </div>

          <div className='form-field'>
            <label>Nom* : </label>
            <input type="text" name="name" value={asso.name} onChange={handleInputChange} required />
          </div>

          <div className='form-field'>
            <label>Numero Téléphone* : </label>
            <input type="text" name="tel" value={asso.tel} onChange={handleInputChange} required />
          </div>

          <div className='form-field'>
            <label>Email* : </label>
            <input type="text" name="email" value={asso.email} onChange={handleInputChange} required />
          </div>

          <div className="form-address">
            <p>Infos Location</p>
            <div className='form-field'>
              <label>rue : </label>
              <input type="text" name="loc_street" value={asso.loc_street} onChange={handleInputChange} />
            </div>

            <div className='form-field'>
              <label>ville : </label>
              <input type="text" name="loc_city" value={asso.loc_city} onChange={handleInputChange} />
            </div>

            <div className='form-field'>
              <label>code postale : </label>
              <input type="text" name="loc_postal" value={asso.loc_postal} maxLength="5" onChange={handleInputChange} />
            </div>
          </div>

          <div className="form-socials">
            <p>Resaux Sociaux</p>
            <div className='form-field'>
              <label>lien facebook : </label>
              <input type="text" name="soc_fb" value={asso.soc_fb} onChange={handleInputChange} />
            </div>

            <div className='form-field'>
              <label>lien instagram : </label>
              <input type="text" name="soc_insta" value={asso.soc_insta} onChange={handleInputChange} />
            </div>

            <div className='form-field'>
              <label>lien autre reseaux social : </label>
              <input type="text" name="soc_other" value={asso.soc_other} onChange={handleInputChange} />
            </div>
          </div>

          <input type="submit" value="Sauvegarder" />
        </form>
      </div>
  )
}

export default EditAssoForm