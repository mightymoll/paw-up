import React from 'react';
import './header.scss'
import NavBar from './NavBar'
import pawUpLogo from '../../assets/logo.png';
import useData from '../../utils/useData'
import apiUrl from '../../index'


// placeholder
function Header() {

  const { data, error, isLoaded } = useData(
    apiUrl + "/asso/65c63c6dda87a502bdf4cb45"
  );

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }

  return (
    !isLoaded ? <div>...loading</div> :
    <div className="header">
      <div className="assoInfo">
          {/* show uploaded logo if provided, else use placeholder 'paw up' logo */}
          <a href={"/"}><img className="logo" src={data.logo ? data.logo : pawUpLogo} alt="PawUp logo" /></a>
          <h1>{data.name}</h1>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;