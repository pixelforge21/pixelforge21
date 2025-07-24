import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ images = [] }) => {
  const [index, setIndex] = React.useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="relative w-full h-56 md:h-72 overflow-hidden">
      {images.length > 0 && (
        <>
          <img
            src={images[index]}
            alt={Slide ${index}}
            className="w-full h-full object-cover transition-all duration-300"
          />
          <button
            onClick={prev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow"
          >
            <ChevronRight />
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
