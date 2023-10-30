import React from 'react';
import './header.scss'
import NavBar from '../NavBar'
import logo from '../../assets/logo.png'

// placeholder
function Header() {
  // TODO: replace with title entered in Admin dashboard
  const title = "Name of Association"
  return (
    <div className="header">
      <div className="assoInfo">
        {/* TODO: update with admin-uploaded logo if provided */}
        <img className="logo" src={logo} alt="PawUp logo" />
        <h1>{title}</h1>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;