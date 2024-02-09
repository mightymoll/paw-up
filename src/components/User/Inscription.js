import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Inscription() {

  const navigate = useNavigate()

  const [pwd, setPwd] = useState('')
  const [msg, setMsg] = useState('')
  const [user, setUser] = useState([])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      password: pwd,
      [name]: value,
    });
  };

  function verifyPassword(e) {
    setPwd(e.target.value)

    // must include one lowercase, one uppercase, one special, and be at least 12 characters long
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/

    const isValidPwd = regExp.test(pwd)

    if (!isValidPwd) {
      setMsg('password must be a minimum of 12 characters long and include an uppercase, lowercase, and number')
    }
    else {
      setMsg('password validated!')
    }
  }

  const submitForm = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    axios.post("http://localhost:5001/signup", user)
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          navigate('/');
        }
      })
      .catch((error) => {
        error = new Error();
      });
  }

  return (
    <div>
      <h1>Creer un nouveau compte</h1>
      <form onSubmit={submitForm}>
        <label>Prenom : </label>
        <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} />
        <br />
        <label>Nom : </label>
        <input type="text" name="lastName" value={user.lastName} onChange={handleInputChange} />
        <br />
        <label>Email :</label>
        <input type="email" name="email" value={user.email} onChange={handleInputChange} />
        <br />
        <label>Mot passe :</label>
        <input type="password" name="password" onChange={verifyPassword} />
        <br />
        {msg ? <p>{msg}</p> : <></>}
        <label>Verification Captcha :</label>
        <img src={'http://localhost:5001/captcha'} alt="captcha" />
        <input type="text" name="captcha" value={user.captcha} onChange={handleInputChange} />
        <p>entrer le text dans le image ci-dessus</p>
        <br />
        <input type="submit" value="Nouveau utilisateur" />
      </form>
    </div>
  )
}

export default Inscription