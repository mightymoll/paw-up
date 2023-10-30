import React from 'react';
import Hero from './Hero';
import CTA from './CTA';
import Animals from './Animals'
import News from './News';

// placeholder
function Home() {
  return (
    <div className="container">
      <Hero />
      <CTA />
      <Animals />
      <News />
    </div>
  );
};

export default Home;