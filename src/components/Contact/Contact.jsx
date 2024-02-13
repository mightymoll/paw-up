import React, { useState } from 'react';
import './contact.scss';
import axios from 'axios'

// placeholder
function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmitForm = async e => {
    e.preventDefault()
    setStatus("Sending...")
    const { name, email, subject, message } = e.target.elements
    let details = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value
    }
    console.log(details)
    await axios.post("http://localhost:5001/sendMail", details)
      .then((res) => {
        console.log(res)
        setStatus(res.data)

        if (status === 'Votre message a été envoyé! Merci') {
          document.getElementById("contactForm").reset();
        }
      })
  }

  return (
    <div className='contactUs'>
      <h3>contacter nous</h3>
      <form onSubmit={handleSubmitForm} id="contactForm">
        <div className="userInfo">
          <div className='form-group'>
            <label>nom + prénom :</label>
            <input type="text" name="name" required />
          </div>
          <div className='form-group'>
            <label>email :</label>
            <input type="text" name="email" required />
          </div>
        </div>
        <div className='form-group'>
          <label>Subjet :</label>
          <input type="text" name="subject" />
        </div>
        <div className='form-group'>
          <label>Votre message :</label>
          <textarea name="message" required />
        </div>
        <p>{status}</p>
        <button className="btn" type="submit">ENVOYER</button>
      </form>
    </div>
  );
};

export default Contact;