import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css';

const Carousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // solo una vez
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const images = Array.from({ length: 10 }, (_, i) => {
    const skip = i + 1;
    const photoNumber = skip < 10 ? `0${skip}` : `${skip}`;
    return `/carousel/photo-${photoNumber}.webp`;
  });

  const doubleImages = [...images, ...images];

  return (
    <div
      ref={carouselRef}
      className={`carousel-container ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="carousel-tracks">
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
