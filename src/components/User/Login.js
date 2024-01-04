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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    // optional control to check if the form has a username & password
    if (username && password) {
      console.log('data recieved')
      const formdata = new FormData();
      formdata.append('username', username);
      formdata.append('password', password);

      for (var key of formdata.entries()) {
        console.log(key[0] + ', ' + key[1])
      }

      const config = {
        headers: { 'content-type': 'multipart/form-data' }
      }

      axios.post('https://glorious-earmuffs-yak.cyclic.app/login', formdata, config)
        .then((response) => {
          console.log(response.data);
          alert('logged in!')
          navigate('/');
        })
        .catch((error) => { console.log(error.message) })
    }
    else {
      alert("veuillez fournir un nom d'utilisateur et un mot de passe valides")
    }
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