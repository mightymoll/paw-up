import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Inscription() {

  const navigate = useNavigate()

  const [pwd, setPwd] = useState('')
  const [pwdValid, setPwdValid] = useState('')
  const [captchaValid, setcaptchaValid] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
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
      setMsg('le mot de passe doit comporter au moins 12 caractères et inclure une majuscule, une minuscule, un symbole et un chiffre.')
      setPwdValid(false)
    }
    else {
      setMsg('mot de passe validé')
      setPwdValid(true)
    }
  }

  function validateCaptcha() {

    const captcha = user.captcha

    // verify captcha @ backend
    axios.post("http://localhost:5001/verifyCaptcha", { captcha })
      .then((res) => {
        if (res.status === 200) {
          setcaptchaValid(true)
        }
      })
      .catch((error) => {
        console.log(error)
        setErrorMsg(error.response.data)
        setcaptchaValid(false)
      });
  }

  const submitForm = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    validateCaptcha();

    // make sure password and capcha are validated before sending form
    if (pwdValid && captchaValid) {
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
        <img src={`http://localhost:5001/captcha`} alt="captcha" />
        <p>entrez les caractères affichés dans l'image</p>
        <input type="text" name="captcha" value={user.captcha} onChange={handleInputChange} />
        <br />
        <input type="submit" value="Nouveau utilisateur" />
        {errorMsg ? <p>{errorMsg}</p> : <></>}
      </form>
    </div>
  )
}

export default Inscription