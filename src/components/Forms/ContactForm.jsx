import React, { useState } from 'react';
import './form.scss';
import axios from 'axios'

// placeholder
function ContactForm() {
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
    <div className='form width60'>
      <h3 className="form-title">contacter nous</h3>
      <form onSubmit={handleSubmitForm} id="contactForm">
        <div className="form-group">
          <div className='form-field'>
            <label>nom + prénom :</label>
            <input type="text" name="name" required />
          </div>
          <div className='form-field'>
            <label>email :</label>
            <input type="text" name="email" required />
          </div>
        </div>
        <div className='form-field'>
          <label>Subjet :</label>
          <input type="text" name="subject" />
        </div>
        <div className='form-field'>
          <label>Votre message :</label>
          <textarea name="message" required />
        </div>
        <p>{status}</p>
        <div className="btn" type="submit" role="button">ENVOYER</div>
      </form>
    </div>
  );
};

export default ContactForm;