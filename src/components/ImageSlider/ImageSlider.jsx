import React, { useState } from 'react';
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from 'react-icons/fa';
import apiUrl from '../../index';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={`${apiUrl}/${slide}`} alt={slide} className='image' />
            )}
          </div>
        );
      })}
      <FaRegArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaRegArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
    </section>
  );
};

export default ImageSlider;