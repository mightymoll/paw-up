import React from 'react';
import './footer.scss';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/intagram.png';

// placeholder
function Footer() {

  // TODO: replace with data entered in Admin dashboard
  var title = "Name of Association";

  var phone = '06 68 01 99 38';
  var addressStreet = '123 rue du Toits';
  var addressCity = 'Marly-en-ville 93209';
  var email = 'assoname@orange.fr';

  var socials = [
    { name: 'facebook', url: 'https://facebook.com', icon: facebook },
    { name: 'instagram', url: 'https://instagram.com', icon: instagram }
  ];

  return (
    <div className="footer" >
      <div className="contact">
        <p>{phone}</p>
        <div className="address">
          <p>{addressStreet}</p>
          <p>{addressCity}</p>
        </div>
        <a href={'mailto:' + { email }}><p>{email}</p></a>
      </div>
      <div className="general">
        <h3>{title}</h3>
        <p>copyright ©2023 MVF</p>
      </div>
      <div className="social">
        {socials.map((social) =>
          <a key={social.name} href={social.url}>
            <img src={social.icon} alt={social.name + " logo"} /></a>
        )}
      </div>
    </div >
  );
};

export default Footer;