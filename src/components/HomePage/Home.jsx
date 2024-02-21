import React from 'react';
import Hero from '../Hero/Hero';
import CTA from '../CTA/CTA';
import Animals from './Animals'
import ContactForm from '../Forms/ContactForm';

// import { useLocation } from 'react-router-dom'

// placeholder
function Home() {

  //const location = useLocation()

  // TO DO : if user came from editAsso page, reload once to refresh data
  /*if (location.state.from === 'editAsso') {
    console.log('refresh needed')
  }
  */

  return (
    <div>
      <Hero />
      <CTA />
      <div className="bg-gradient">
        <Animals />
      </div>
      <ContactForm />
    </div>
  );
};

export default Home;