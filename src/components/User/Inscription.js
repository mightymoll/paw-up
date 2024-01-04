import React from 'react'

function Inscription() {
  return (
    <div>
      <h1>Creer un nouveau compte</h1>
      <form action="http://localhost:5000/api/adduser" method="post">
        <label>Prenom : </label>
        <input type="text" name="firstName" />
        <br />
        <label>Nom : </label>
        <input type="text" name="lastName" />
        <br />
        <label>Nom d'utilisateur :</label>
        <input type="text" name="username" />
        <br />
        <label>Email :</label>
        <input type="email" name="email" />
        <br />
        <label>Mot passe :</label>
        <input type="password" name="password" />
        <br />
        <input type="submit" value="Nouveau utilisateur" />
      </form>
    </div>
  )
}

export default Inscription