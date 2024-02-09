import React from 'react';
import Card from '../Card/Card';

function animalsPage() {
  window.open("./animals")
}
function Animals() {

  // placeholder - replace with 4 animals from association
  const results = [
    {
      id: 'animal1',
      type: 'cat',
      name: 'Leona',
      image: "https://cdn.rescuegroups.org/6839/pictures/animals/19639/19639924/95690914.png",
      sex: 'femelle',
      ageRange: 'senior',
      tagline: 'le plus doux petit ange de la planète',
    },
    {
      id: 'animal2',
      type: 'dog',
      name: 'Rosita',
      image: "https://images.unsplash.com/photo-1562457346-73bb427293e8?auto=format&fit=crop&q=80&w=1336&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      sex: 'femelle',
      ageRange: 'junior',
      tagline: 'si vous donnez du fromage, elle vous aimera pour toujours',
    }, {
      id: 'animal3',
      type: 'cat',
      name: 'Roscoe',
      image: 'https://cdn.rescuegroups.org/6839/pictures/animals/19828/19828721/96524531.jpg',
      sex: 'male',
      ageRange: 'junior',
      tagline: "aime jouer avec d'autres chats",
    },
    {
      id: 'animal4',
      type: 'dog',
      name: 'Butch',
      image: 'https://images.unsplash.com/photo-1615751072497-5f5169febe17?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D',
      sex: 'male',
      ageRange: 'adulte',
      tagline: 'adore jouer avec des jouets qui couinent',
    },
  ];

  return (
    <div className="animals container">
      <h2>Top LouLous</h2>
      <div className="animalCards">
        {results.map(animal => Card(animal))}
      </div>
      <div className="center">
        <div className="btn"  role="button" onClick={animalsPage}>voir plus</div>
      </div>
    </div>
  );
};

export default Animals;