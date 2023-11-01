import React from 'react';
import Card from '../Card/Card';

function Animals() {

  // placeholder - replace with 4 animals from association
  const results = [
    {
      id: 'animal1',
      name: 'Kitty Kat',
      image: "https://cdn.rescuegroups.org/6839/pictures/animals/19639/19639924/95690914.png",
      alt: 'cute cat',
      sex: 'femelle',
      ageRange: 'junior',
      tagline: 'sweetest little baby angel on the planet',
    }, {
      id: 'animal2',
      name: 'Roscoe',
      image: 'https://cdn.rescuegroups.org/6839/pictures/animals/19828/19828721/96524531.jpg',
      alt: 'cute cat',
      sex: 'male',
      ageRange: 'adult',
      tagline: 'loves to play with other cats',
    },
    {
      id: 'animal3',
      name: 'Kitty Kat',
      image: "https://cdn.rescuegroups.org/6839/pictures/animals/19639/19639924/95690914.png",
      alt: 'cute cat',
      sex: 'femelle',
      ageRange: 'junior',
      tagline: 'sweetest little baby angel on the planet',
    },
    {
      id: 'animal4',
      name: 'Roscoe',
      image: 'https://cdn.rescuegroups.org/6839/pictures/animals/19828/19828721/96524531.jpg',
      alt: 'cute cat',
      sex: 'male',
      ageRange: 'adult',
      tagline: 'loves to play with other cats',
    },
  ];

  return (
    <div className="animals">
      <h2>Top LouLous</h2>
      <div className="animalCards">
        {results.map(animal => Card(animal))}
      </div>
    </div>
  );
};

export default Animals;