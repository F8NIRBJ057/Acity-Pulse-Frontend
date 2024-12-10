import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Function to fetch images from public/carousel directory
    const importImages = async () => {
      try {
        const imageContext = import.meta.glob('/public/carousel/*');
        const imageUrls = Object.keys(imageContext).map(path => path.replace('/public', ''));
        setImages(imageUrls);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    importImages();
  }, []);

  useEffect(() => {
    // Auto-advance carousel every 5 seconds
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Carousel Container */}
      <div
        className="h-full w-full transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          display: 'flex',
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full h-full relative flex items-center justify-center"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20" />
        </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        <FiChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? 'bg-white w-4' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
