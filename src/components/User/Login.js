import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import axios from 'axios';

function Login() {

  const navigate = useNavigate();

  const { auth, setAuth } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const API = axios.create({
    baseURL: "https://glorious-earmuffs-yak.cyclic.app",
    withCredentials: true
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/login', {
        username,
        password
      },
        {
          withCredentials: true
        })
        .then((res) => {
          if (res?.data.username) {
            const access = res?.data.access;
            setAuth({ access: `${access}`, username: `${username}` });
            setUsername("");
            setPassword("");
            alert(`${res.data.username} logged in!`);
            navigate('/');
          } else {
            console.log("incorrect submission");
            setError(res.message);
          }
        });
    } catch (err) {
      if (!err?.response) {
        setError("no server response");
      } else {
        setError("registeration failed");
      }
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