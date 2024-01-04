import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Connection() {

  const [loggedIn, setLoggedIn] = useState(false);
  const token = localStorage.getItem("token");
  console.log(token)

  function logout() {
    axios.get('https://glorious-earmuffs-yak.cyclic.app/logout')
      .then((response) => {
        setLoggedIn(false);
        alert('logged out!')
      })
      .catch((error) => { console.log(error.message) })
  }

  return (
    <div>
      {loggedIn && token.access === 'admin' ?
        <Link to='/admin'>Admin</Link> : null}

      {/* switch between 'logout' and 'login' depeding if loggedIn = true */}
      {loggedIn ?
        <div className="btn" onClick={logout}>
          Se Deconnecter {token.access === 'admin' ? 'Admin' : null}</div> :
        <Link className="btn" to="/login">Se Connecter</Link>
      }
    </div>
  )
}

export default Connection;