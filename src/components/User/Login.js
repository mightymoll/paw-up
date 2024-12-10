import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../../index';

// send credentials (needed for cookie over http connection)
axios.defaults.withCredentials = true;

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
  // prevent the form from refreshing the whole page
    e.preventDefault();
    // make a popup alert showing the "submitted" text
    alert("Submitted");


    axios.post(apiUrl + "/login", { email, password })
      .then((res) => {
        setLogin(true);
        navigate('/');
      })
      .catch((error) => {
        error = new Error();
      });
  }

  return (
    <div>
      <h1>Page de connexion</h1>
      <form>
        <input
          label="email :"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter email"
        />
        <input
          label="password :"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter password"
        />
        <div
          className="btn"
          role="button"
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </div>
      </form>
      {/* display success message */}
      {login ? (
        <p className="text-success">Vous êtes connecté !</p>
      ) : (
        <p className="text-danger">Vous n'êtes pas encore connecté</p>
      )}
      <Link to="/signup">nouvel utilisateur ? cliquez ici pour créer un compte</Link>
    </div>
  )
}

export default Login