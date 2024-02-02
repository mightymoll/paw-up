import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AnimalList() {

  const [animals, setAnimals] = useState([]);
  const [state, setState] = useState('');

  useEffect(() => {
    setState('loading');
    // get user information by decoding JWT token & use to control content
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
        <tr>
          <th>ICAD</th>
          <th>Nom</th>
          <th>Sexe</th>
          <th>Race</th>
          <th>Actions</th>
        </tr>
        {animals.map((animal) => (
          <tr key={animal._id}>
            <td>{animal.numICAD}</td>
            <td>{animal.name}</td>
            <td>{animal.sex}</td>
            <td>{animal.race}</td>
            <td>
              <button>Modifier</button>
              <button>Supprimer</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default AnimalList;

