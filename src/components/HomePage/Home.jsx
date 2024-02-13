import React from 'react';
import Hero from '../Hero/Hero';
import CTA from '../CTA/CTA';
import Animals from './Animals'
import Contact from '../Contact/Contact';

// placeholder
function Home() {
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