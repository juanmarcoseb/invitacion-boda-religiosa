import React from 'react';
import './Carousel.css';

const Carousel: React.FC = () => {
  // Generamos el array de nombres de fotos del 01 al 10
  const images = Array.from({ length: 10 }, (_, i) => {
    const skip = i + 1;
    const photoNumber = skip < 10 ? `0${skip}` : `${skip}`;
    return `/carousel/photo-${photoNumber}.webp`;
  });

  // Duplicamos el array para el efecto de loop infinito visual
  const doubleImages = [...images, ...images];

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {doubleImages.map((src, index) => (
          <div className="carousel-slide" key={index}>
            <img 
              src={src} 
              alt={`Invitación foto ${index + 1}`} 
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;