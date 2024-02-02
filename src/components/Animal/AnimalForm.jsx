import React from 'react'

function AnimalForm() {
  return (
    <div>
      <h1>Details d'animal</h1>
      <p>champs avec une * sont obligatoires</p>
      <form action="http://localhost:5001/addAnimal" method="post">
        <label>NumICAD : </label>
        <input type="text" name="numICAD" />

        <label>Nom* : </label>
        <input type="text" name="name" />

        <fieldset>
          <legend>Sexe* :</legend>
          <div>
            <input type="radio" id="male" name="sex" value="M" />
            <label for="male">Male</label>
          </div>
          <div>
            <input type="radio" id="femelle" name="sex" value="F" />
            <label for="femelle">Femelle</label>
          </div>
        </fieldset>

        <label>Race :</label>
        <select name="race" id="race">
          {/* update with actual options */}
          <option value="none" selected>inconnu/mixte</option>
          <option value="race1">race1</option>
          <option value="race2">race2</option>
          <option value="race3">race3</option>
        </select>

        <label>Date de naissance : </label>
        <input type="date" name="birthDay" />


        <label>Description court :</label>
        <input type="text" name="desc_short" />

        <label>Description longue :</label>
        <textarea name="desc_long" />


        <input type="submit" value="Ajouter Animal" />
      </form>
    </div >
  )
}

export default AnimalForm