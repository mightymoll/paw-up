import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import placeholder from '../../assets/placeholder.png'
import { RiDeleteBinLine } from "react-icons/ri";
import useData from '../../utils/useData';
import apiUrl from '../../index';

function AnimalList() {
  // get 4 newest animal listings from API
  const { data, error, isLoaded } = useData(
    apiUrl + "/animals/all"
  );
  console.log(data)

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }

  // use id passed in onclick function to delete the animal w/that id from the DB
  function deleteAnimal(id) {
    // confirm action & warn user that this action cannot be undone
    const confirmed = window.confirm(`Êtes-vous sûr de vouloir supprimer cet animal ?\nCette action ne peut pas être inversé...`)

    // if user confirms deletion, remove user entry from DB
    if (confirmed) {
      axios.delete(`${apiUrl}/delete-animal/${id}`)
      alert('animal supprimé')
      // reload page to update list
      window.location.reload()
    }
  }

  function getStatus(status) {
    if (status === 'available') {
      return 'disponible'
    }
    if (status === 'hold') {
      return 'en attente'
    }
    if (status === 'adopted') {
      return 'adopté'
    }
    else {
      return '-'
    }
  }

  return (
    !isLoaded ? <div>Loading...</div> : 
    <div>
      <h2>Liste des Animaux :</h2>
      <table>
        <thead>
        <tr>
              <th></th>
              <th>Nom</th>
              <th>ICAD</th>
              <th>Statut</th>
          <th>Sexe</th>
          <th>Race</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
            {data.map((animal) => (
          <tr key={animal._id}>
            <td>
              <div className="img-list-icon">{
                animal.images.length > 0 ?
                  <img src={`${apiUrl}/${animal.images[0]}`} alt={animal.name} />
                  : <img src={placeholder} alt='none' />
              }</div>
            </td>
            <td>{animal.name}</td>
            <td>{animal.numICAD}</td>
                <td>{getStatus(animal.status)}</td>
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

