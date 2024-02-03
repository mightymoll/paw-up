import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    axios.delete(`http://localhost:5001/delete-animal/${id}`)
    alert('animal supprimé')
    // reload page to update list
    window.location.reload()
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
          <th>ICAD</th>
          <th>Nom</th>
          <th>Sexe</th>
          <th>Race</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {animals.map((animal) => (
          <tr key={animal._id}>
            <td>{animal.numICAD}</td>
            <td>{animal.name}</td>
            <td>{animal.sex}</td>
            <td>{animal.race}</td>
            <td>
              <Link to={`/modifierAnimal/${animal._id}`}><button>Modifier</button></Link>
              <button onClick={() => deleteAnimal(animal._id)}>Supprimer</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default AnimalList;

