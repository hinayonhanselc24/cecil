import React, { useState, useEffect } from "react";
import CarouselItem from "./Carousel/CarouselItem";
import CarouselNavigation from "./Carousel/CarouselNavigation";
import CarouselControl from "./Carousel/CarouselControl";

const Carousel = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + items.length) % items.length
    );
  };

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div id="carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            src={item.src}
            alt={item.alt}
            isActive={index === currentSlide}
          />
        ))}
      </div>
      <CarouselNavigation
        length={items.length}
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
      />
      <CarouselControl onNext={nextSlide} onPrev={prevSlide} />
    </div>
  );
};

export default Carousel;
