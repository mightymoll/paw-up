import React from 'react';
import './hero.scss'
import heroImg from '../../assets/heroImg.webp'

// placeholder
function Hero() {
  // TODO: replace with content entered in Admin dashboard (missionText & image)
  const missionText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatem. " +
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consectetur in ullam temporibus commodi reiciendis qui odio a itaque assumenda?";
  return (
    <div className="hero">
      <div className="heroText">
        <h3>Notre Mission</h3>
        <p>{missionText}</p>
      </div>
      <div className="heroImage">
        <img src={heroImg} alt="l'association" />
      </div>
    </div>
  );
};

export default Hero;