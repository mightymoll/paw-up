import React from 'react';

// placeholder
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
      {links.map(link => (<a href={link.to} className="navLink" data-label={link.name}><span className="navText">{link.name}</span></a>))}
      <button className="login">login</button>
    </div>
  );
};

export default NavBar;