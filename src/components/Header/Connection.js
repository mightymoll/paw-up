import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Connection() {

  const navigate = useNavigate();

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [jwt, setJwt] = useState(null)

  if (!jwt) {
    axios.get('http://localhost:5001/getJWT', { withCredentials: true })
      .then(response => {
        // for testing : console.log(response.data);
        setJwt(response.data);
        setLoggedIn(true);
      })
      .catch((error) => {
        setJwt(null);
        setLoggedIn(false);
        console.log(error.message)
      })
  }

  const logout = () => {
    axios.get('http://localhost:5001/logout')
      .then((response) => {
        setLoggedIn(false);
        setJwt(null);
        alert('logged out!')
        navigate('/');
      })
      .catch((error) => { console.log(error.message) })
  }

  return (
    <>
      {isLoggedIn && jwt.access === 'admin' ?
        <Link to='/admin'>Admin Dashboard</Link> : null}

      {/* switch between 'logout' and 'login' depeding if loggedIn = true */}
      {isLoggedIn ?
        <div className="btn" onClick={logout}>Deconnecter</div>
        :
        <Link className="btn" to="/login">Connecter</Link>
      }
    </>
  )
}

export default Connection;