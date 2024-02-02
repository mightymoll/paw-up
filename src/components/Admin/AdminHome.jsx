import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function AdminHome() {

  const navigate = useNavigate();

  const [accessLevel, setAccessLevel] = useState('public');
  const [state, setState] = useState('');

  useEffect(() => {
    setState('loading');
    // get user information by decoding JWT token & use to control content
    axios.get('http://localhost:5001/getJWT')
      .then((res) => {
        setState('success');
        // use access value from response to control page contents
        setAccessLevel(res.data.access)
      })
      .catch((err) => {
        console.error('Error:', err);
        setState('error');
      });
  }, []);

  // 

  while (state === 'loading') {
    return (
      <div>
        Loading...
      </div>
    );
  }


  const navigateAddAnimal = () => {
    navigate('/ajouterAnimal');
  };

  // TO DO
  const navigateUsersList = () => {
    navigate('/userList');
  };

  // TO DO
  const navigateEditAsso = () => {
    navigate('/editAsso');
  };

  if (state === 'success') {

    // show error message if there is an error recuperating user info
    if (state === 'error') {
      return (
        <div>
          Une erreur est servenue...
        </div>
      )
    }

    return (
      (accessLevel === "admin" || accessLevel === 'member') ?
        <div>
      <h1>Admin Dashboard</h1>
      <button onClick={navigateAddAnimal}>Ajouter un Animal</button>
      {/* if user has 'admin' access show additional functions */}
          {(accessLevel === "admin") ? (
        <div>
          <button onClick={navigateUsersList}>Gestion utilisaters</button>
          <button onClick={navigateEditAsso}>Modifier les infos d'assosciation</button>
        </div>) :
        <></>}
      <h2>Liste des Animaux :</h2>
      {/* to do : list all animals with modify/delete buttons */}
        </div>
        :
        <div>
          {/* if user does NOT have admin or member access, don't display contents */}
          <Link to="/login">Vous n'avez pas access au ce page;<br></br> veuillez connecter en cliquant ici</Link>
        </div>
  )
  }
}

export default AdminHome;