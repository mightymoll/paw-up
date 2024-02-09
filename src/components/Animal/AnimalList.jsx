import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import placeholder from '../../assets/placeholder.png'
import { RiDeleteBinLine } from "react-icons/ri";

function AnimalList() {

  const [animals, setAnimals] = useState([]);
  const [state, setState] = useState('');

  useEffect(() => {
    setState('loading');
    // get data of all animals in DB
    axios.get('http://localhost:5001/allAnimals')
      .then((res) => {
        setState('success');
        console.log(res.data)
        setAnimals(res.data);
              })
      .catch((err) => {
        console.error('Error:', err);
        setState('error');
      });
  }, []);

  // use id passed in onclick function to delete the animal w/that id from the DB
  function deleteAnimal(id) {
    // confirm action & warn user that this action cannot be undone
    const confirmed = window.confirm(`Êtes-vous sûr de vouloir supprimer cet animal ?\nCette action ne peut pas être inversé...`)

    // if user confirms deletion, remove user entry from DB
    if (confirmed) {
      axios.delete(`http://localhost:5001/delete-animal/${id}`)
      alert('animal supprimé')
      // reload page to update list
      setState('loading');
      window.location.reload()
    }
  }

  while (state === 'loading') {
    return (
      <div>
        Loading...
      </div>
    );
  }

  // show error message if there is an error recuperating user info
  if (state === 'error') {
    return (
      <div>
        Une erreur est servenue...
      </div>
    )
  }

  return (
    <div>
      <h2>Liste des Animaux :</h2>
      <table>
        <thead>
        <tr>
            <th></th>
            <th>Nom</th>
            <th>ICAD</th>
          <th>Sexe</th>
          <th>Race</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {animals.map((animal) => (
          <tr key={animal._id}>
            <td>
              <div className="img-list-icon">{
                animal.images.length > 0 ?
                  <img src={`http://localhost:5001/${animal.images[0]}`} alt={animal.name} />
                  : <img src={placeholder} alt='none' />
              }</div>
            </td>
            <td>{animal.name}</td>
            <td>{animal.numICAD}</td>
            <td>{animal.sex}</td>
            <td>{animal.race}</td>
            <td>
              <Link to={`/modifierAnimal/${animal._id}`}>
                <div className="btn" role="button">Modifier</div>
              </Link>
              <div className="btn-icon" role="button" onClick={() => deleteAnimal(animal._id)}><RiDeleteBinLine /></div>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default AnimalList;

