import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminHome() {

  const navigate = useNavigate();

  // get user information by decoding JWT token & use to control content
  const user = axios.get('http://localhost:5001/getJWT');

  // TO DO: create individual pages  
  
  const navigateAddAnimal = () => {
    navigate('/newAnimal');
  };

  const navigateUsersList = () => {
    navigate('/userList');
  };

  const navigateEditAsso = () => {
    navigate('/editAsso');
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={navigateAddAnimal}>Ajouter un Animal</button>
      {/* if user has 'admin' access show additional functions */}
      {(user.access === "admin") ? (
        <div>
          <button onClick={navigateUsersList}>Gestion utilisaters</button>
          <button onClick={navigateEditAsso}>Modifier les infos d'assosciation</button>
        </div>) :
        <></>}
      <h2>Liste des Animaux :</h2>
      {/* to do : list all animals with modify/delete buttons */}
    </div >
  )
}

export default AdminHome