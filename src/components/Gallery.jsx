import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const categories = ["All categories", "Event - 1", "Event - 2", "Event - 3"];

const folderMapping = {
  "Event - 1": "event-1",
  "Event - 2": "event-2",
  "Event - 3": "natcon",
};

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [images, setImages] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        setFetchError(false);
        const response = await fetch("/gallery/images.json");
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        if (selectedCategory === "All categories") {
          setImages(data.flatMap((event) => event.images));
        } else {
          const categoryImages =
            data.find((event) => event.name === folderMapping[selectedCategory])
              ?.images || [];
          setImages(categoryImages);
        }
      } catch (error) {
        setFetchError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [selectedCategory]);

  return (
    <div className="bg-[#F8F5F0] pt-20">
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore moments from our events and activities
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm md:text-base md:px-6 md:py-2.5 transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              } font-medium hover:shadow-md`}
              onClick={() => setSelectedCategory(category)}
              disabled={loading}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loader */}
        {loading && (
          <div className="flex justify-center items-center py-8">
            <span className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-600"></span>
            <span className="ml-2 text-purple-700 font-medium">Loading images...</span>
          </div>
        )}

        {/* Error Message */}
        {fetchError && !loading && (
          <div className="flex flex-col items-center py-8">
            <div className="text-red-600 font-semibold mb-2">Failed to load images.</div>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            >
              Retry
            </button>
          </div>
        )}

        {/* Mobile Gallery: Vertical Stack */}
        <div className="md:hidden mb-8 flex flex-col">
          {!loading && !fetchError && images.length === 0 && (
            <div className="text-center text-gray-400 py-8">No images for this category.</div>
          )}
          {!loading && !fetchError && images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg mb-4 border-2 border-purple-400 bg-white">
              <img
                className="w-full object-cover"
                src={src}
                alt={`Gallery ${index + 1}`}
                loading="lazy"
                onError={e => { e.target.style.opacity = 0.5; e.target.src = '/gallery/placeholder.jpg'; }}
              />
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {!loading && !fetchError && images.length === 0 && (
            <div className="col-span-full text-center text-gray-400 py-8">No images for this category.</div>
          )}
          {!loading && !fetchError && images.map((src, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                src={src}
                alt={`Gallery ${index + 1}`}
                loading="lazy"
                onError={e => { e.target.style.opacity = 0.5; e.target.src = '/gallery/placeholder.jpg'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  {/* Optionally add captions here */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}