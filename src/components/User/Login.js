import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

      axios.post("https://glorious-earmuffs-yak.cyclic.app/api/login", {
        username: username,
        password: password
      }, { withCredentials: true })
        .then((response) => {
          console.log(response);
        });
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