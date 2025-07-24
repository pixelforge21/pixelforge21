import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ images = [] }) {
  const [index, setIndex] = useState(0);
  const hasImages = images.length > 0;

  const prev = () => {
    if (hasImages) setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const next = () => {
    if (hasImages) setIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    if (hasImages) {
      const timer = setInterval(next, 5000);
      return () => clearInterval(timer);
    }
  }, [index, images.length]);

  if (!hasImages) return null;

  return (
    <div className="relative w-full h-60 md:h-80 overflow-hidden rounded-lg">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={slide-${i}}
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <button onClick={prev} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow">
        <ChevronLeft />
      </button>
      <button onClick={next} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow">
        <ChevronRight />
      </button>
    </div>
  );
}

