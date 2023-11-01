import React from 'react';
import './contact.scss';

// placeholder
function Contact() {
  return (
    <div className='contactUs'>
      <h3>contacter nous</h3>
      <form action="" name="contactForm" id="contactForm">
        <div className="userInfo">
          <div className="field">
            <label htmlFor="name">nom + prénom :</label>
            <input type="text" name="userName" id="name" required />
          </div>
          <div className="field">
            <label htmlFor="email">email :</label>
            <input type="text" name="userEmail" id="email" required />
          </div>
        </div>
        <div className="field message">
          <label htmlFor="message">votre message :</label>
          <textarea name="message" id="message" required />
        </div>
        <button id="controlButton">ENVOYER</button>
      </form>
    </div>
  );
};

export default Contact;