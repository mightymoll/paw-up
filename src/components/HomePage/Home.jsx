import React from 'react';
import Hero from '../Hero/Hero';
import CTA from '../CTA/CTA';
import Animals from './Animals'
import News from './News';

// placeholder
function Home() {
  return (
    <div>
      <Hero />
      <CTA />
      <main>
        <Animals />
        <News />
      </main>
    </div>
  );
};

export default Home;