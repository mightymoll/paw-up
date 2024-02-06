import React from 'react';
import { Link } from 'react-router-dom';
import Connection from './Connection'

function NavBar() {

  // TO DO: update with pages selected by Admin
  const links = [
    {
      name: 'Adopter',
      to: '/Adopt',
    },
    {
      name: 'À Propos',
      to: '/About',
    },
    {
      name: 'Faire un Don',
      to: '/Donate',
    }
  ];

  return (
    <div className="flex-end">
      {links.map(link => (<Link key={link.name} to={link.to} className="navLink">{link.name}</Link>))}
      <Connection />
    </div>
  )
}

export default NavBar;