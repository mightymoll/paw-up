import React from 'react';
import Hero from '../Hero/Hero';
import CTA from '../CTA/CTA';
import Animals from './Animals'
import Contact from '../Contact/Contact';

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
      <main>
        <Animals />
        <Contact />
      </main>
    </div>
  );
};

export default Home;