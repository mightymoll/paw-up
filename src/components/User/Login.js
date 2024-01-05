import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  function handleSubmit() {
    const userData = {
      "username": username,
      "password": password
    }
    axios.post('https://glorious-earmuffs-yak.cyclic.app/login',
      userData, { withCredentials: true })
        .then((response) => {
          console.log(response.data);
          alert(`${response.data.username} logged in!`);
          navigate('/');
        })
        .catch((error) => { console.log(error.message) })
  }

  return (
    <div>
      <h1>Page de connexion</h1>
      <form onSubmit={handleSubmit}>
        <label>Nom d'utilisateur :</label>
        <input type="text" id="username" onChange={handleUsername} />
        <label>Mot de passe :</label>
        <input type="password" id="password" onChange={handlePassword} />

        <input type="submit" value="Se Connecter" />
      </form>
      <Link to="/signup">nouvel utilisateur ? cliquez ici pour créer un compte</Link>
    </div>
  )
}

export default Login