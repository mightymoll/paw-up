import React, { useEffect, useState } from 'react';
import { Button, Link, navigate } from 'react-router-dom';
import axios from 'axios';

function Connection() {

  const [jwt, setJwt] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    axios.get('https://glorious-earmuffs-yak.cyclic.app/getJWT', { withCredentials: true })
      .then(response => {
        console.log(response.data);
        setJwt(response.data);
        setLoggedIn(true);
      })
      .catch(error => {
        console.log('not connected');
      });
  }, []);

  const handleLogout = (event) => {
    event.preventDefault();
    // optional control to check if the form has a username & password
    axios.get('https://glorious-earmuffs-yak.cyclic.app/logout')
      .then((response) => {
        setLoggedIn(false);
        alert('logged out!')
        navigate('/');
      })
      .catch((error) => { console.log(error.message) })
  }

  return (
    <div>
      {jwt && jwt.admin === true ?
        <Link to='/admin'>Admin</Link> : null}

      {/* switch between 'logout' and 'login' depeding if loggedIn = true */}
      {loggedIn ?
        <Button onClick={handleLogout}>
          Se Deconnecter {jwt.admin === true ? 'Admin' : null}</Button> :
        <Button component={Link} to="/login">Se Connecter</Button>
      }
    </div>
  )
}

export default Connection;