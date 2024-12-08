import React from "react";

const CarouselItem = ({ src, alt, isActive }) => {
  return (
    <div
      className={`${
        isActive ? "" : "hidden"
      } duration-700 ease-in-out transition-transform`}
      data-carousel-item
    >
      <img
        src={src}
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt={alt}
      />
    </div>
  );
};

export default CarouselItem;
