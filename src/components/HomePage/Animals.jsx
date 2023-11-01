import React from 'react';
import Card from '../Card/Card';

function Animals() {

  // placeholder - replace with 4 animals from association
  const results = [
    {
      name: 'Kitty Kat',
      image: "https://cdn.rescuegroups.org/6839/pictures/animals/19639/19639924/95690914.png",
      alt: 'cute cat',
      sex: 'femelle',
      ageRange: 'junior',
      tagline: 'sweetest little baby angel on the planet',
    }, {
      name: 'Roscoe',
      image: 'https://cdn.rescuegroups.org/6839/pictures/animals/19828/19828721/96524531.jpg',
      alt: 'cute cat',
      sex: 'male',
      ageRange: 'adult',
      tagline: 'loves to play with other cats',
    },
    {
      name: 'Kitty Kat',
      image: "https://cdn.rescuegroups.org/6839/pictures/animals/19639/19639924/95690914.png",
      alt: 'cute cat',
      sex: 'femelle',
      ageRange: 'junior',
      tagline: 'sweetest little baby angel on the planet',
    },
    {
      name: 'Roscoe',
      image: 'https://cdn.rescuegroups.org/6839/pictures/animals/19828/19828721/96524531.jpg',
      alt: 'cute cat',
      sex: 'male',
      ageRange: 'adult',
      tagline: 'loves to play with other cats',
    },
  ]
  return (
    <div className="Animals">
      <h2>Animals</h2>
      <div>
        {results.map(animal => Card(animal))}
      </div>
    </div>
  );
};

export default Animals;