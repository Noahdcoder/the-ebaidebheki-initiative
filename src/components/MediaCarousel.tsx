// components/MediaCarousel.tsx
import React, { useState } from "react";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
}

interface MediaCarouselProps {
  media: MediaItem[];
  seeMoreLink?: string;
}

const MediaCarousel: React.FC<MediaCarouselProps> = ({
  media,
  seeMoreLink,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      {/* Media Display */}
      <div className="overflow-hidden rounded-2xl shadow-lg relative">
        {media.map((item, index) => (
          <div
            key={index}
            className={`transition-transform duration-500 ease-in-out ${
              index === currentIndex ? "translate-x-0" : "hidden"
            }`}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt || `Media ${index + 1}`}
                className="w-full h-64 md:h-96 object-cover"
              />
            ) : (
              <video
                src={item.src}
                controls
                className="w-full h-64 md:h-96 object-cover"
              />
            )}
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          &#8594;
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {media.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* See More Link */}
      {seeMoreLink && (
        <div className="text-center mt-4">
          <a
            href={seeMoreLink}
            className="text-blue-600 font-bold hover:underline"
          >
            See More Highlights
          </a>
        </div>
      )}
    </div>
  );
};

export default MediaCarousel;
