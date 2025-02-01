import { useState } from "react";

const images = [
  "/gallery/001.JPG",
  "/gallery/002.JPG",
  "/gallery/003.JPG",
  "/gallery/004.JPG",
  "/gallery/005.JPG",
  "/gallery/006.JPG",
  "/gallery/007.JPG",
  "/gallery/008.JPG",
];

export default function Gallery() {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-48 md:h-64 bg-gray-200 rounded-lg overflow-hidden"
          >
            {/* Skeleton Loader */}
            {!loadedImages[index] && (
              <div className="absolute inset-0 animate-pulse bg-gray-300"></div>
            )}

            {/* Image */}
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                loadedImages[index] ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              onLoad={() => handleImageLoad(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
