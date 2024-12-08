import React from "react";

const CarouselNavigation = ({ length, currentSlide, onSlideChange }) => {
  return (
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
      {Array.from({ length }).map((_, index) => (
        <button
          key={index}
          type="button"
          className={`w-2 h-2 border rounded-full ${
            currentSlide === index ? "bg-green-300" : "bg-white"
          }`}
          aria-current={currentSlide === index ? "true" : "false"}
          aria-label={`Slide ${index + 1}`}
          onClick={() => onSlideChange(index)}
          data-carousel-slide-to={index}
        ></button>
      ))}
    </div>
  );
};

export default CarouselNavigation;
