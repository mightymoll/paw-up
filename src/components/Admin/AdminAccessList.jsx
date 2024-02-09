import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RiDeleteBinLine } from "react-icons/ri";

function AdminAccessList() {

  const [users, setUsers] = useState([]);
  const [state, setState] = useState('');
  const [user, setUser] = useState([]);
  const [access, setAccess] = useState('');

  useEffect(() => {
    setState('loading');
    // get data of all animals in DB
    axios.get('http://localhost:5001/allUsers')
      .then((res) => {
        setState('success');
        console.log(res.data)
        setUsers(res.data);
      })
      .catch((err) => {
        console.error('Error:', err);
        setState('error');
      });
  }, []);

  const handleAccessChange = (e) => {
    console.log(e.target.value)
    setAccess(e.target.value);
  };

  function modifyAccess(id) {
    // get user's existing data and set as 'user'
    axios.get(`http://localhost:5001/user/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error('Error:', err);
        setState('error');
      });

    const userData = {
      ...user,
      access: access
    }
    console.log(userData)

    // update access field in DB
    axios.put(`http://localhost:5001/update-user/${id}`, userData)
      .then((response) => {
        console.log(response.data);
        window.location.reload()
      }, (error) => {
        console.log('there was an error' + error);;
      })
  }

  // use id passed in onclick function to delete the user w/that id from the DB
  function deleteUser(id) {
    // confirm action & warn user that this action cannot be undone
    const confirmed = window.confirm(`Êtes-vous sûr de vouloir supprimer cet utilisateur ?\nCette action ne peut être inversé...`)

    // if user confirms deletion, remove user entry from DB
    if (confirmed) {
      axios.delete(`http://localhost:5001/delete-user/${id}`)
      alert('utilisateur supprimé')
      // reload page to update list
      window.location.reload()
    }
  }

  while (state === 'loading') {
    return (
      <div>
        Loading...
      </div>
    );
  }

  // show error message if there is an error recuperating user info
  if (state === 'error') {
    return (
      <div>
        Une erreur est servenue...
      </div>
    )
  }

  return (
    <div>
      <h2>Modifier les utilisateurs :</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Accès</th>
            <th>Modifier l'accès</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.lastName}</td>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.access}</td>
              <td><select name='access' defaultValue={user.access} onChange={handleAccessChange}>
                <option value='admin'>admin</option>
                <option value='member'>membre</option>
                <option value='public'>public</option>
              </select>
                <div className="btn" role="button" onClick={() => modifyAccess(user._id)}>Enregistrer</div>
              </td>
              <td>
                <div className="btn-icon" role="button" onClick={() => deleteUser(user._id)}><RiDeleteBinLine /></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminAccessList;

