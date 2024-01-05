import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Connection() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [jwt, setJwt] = useState(null)

  useEffect(() => {
    axios.get('https://glorious-earmuffs-yak.cyclic.app/getJWT', { withCredentials: true })
      .then(response => {
        console.log(response.data);
        setJwt(response.data)
      })
      .catch(error => {
        console.log(error.message);
      })
    console.log(jwt)
  }, [])

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
      {loggedIn && jwt.access === 'admin' ?
        <Link to='/admin'>Admin</Link> : null}

      {/* switch between 'logout' and 'login' depeding if loggedIn = true */}
      {loggedIn ?
        <div className="btn" onClick={logout}>
          Se Deconnecter {jwt.access === 'admin' ? 'Admin' : null}</div> :
        <Link className="btn" to="/login">Se Connecter</Link>
      }
    </div>
  )
}

export default Connection;