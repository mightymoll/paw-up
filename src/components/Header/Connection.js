import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Connection() {

  const [jwt, setJwt] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    axios.get('/getJWT', { withCredentials: true })
      .then(response => {
        console.log(response.data);
        setJwt(response.data);
        setLoggedIn(true);
      })
      .catch(error => {
        console.log('not connected');
      });
  }, []);

  return (
    <div>
      {jwt && jwt.admin === true ?
        <Link to='/admin'>Admin</Link> : null}

      {/* switch between 'logout' and 'login' depeding if loggedIn = true */}
      {loggedIn ?
        <Link to='https://glorious-earmuffs-yak.cyclic.app/logout'>Se Deconnecter {jwt.admin === true ? 'Admin' : null}</Link> :
        <Link to='/login'>Se Connecter</Link>
      }
    </div>
  )
}

export default Connection;