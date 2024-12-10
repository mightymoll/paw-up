import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RiDeleteBinLine } from "react-icons/ri";
import apiUrl from '../../index';

function AdminContactList() {

  const [users, setUsers] = useState([]);
  const [state, setState] = useState('');

  useEffect(() => {
    setState('loading');
    // get data of all animals in DB
    axios.get(apiUrl + '/allUsers')
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
      <h2>Contacts :</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Email</th>
            <th>Téléphone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.lastName}</td>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminContactList;

