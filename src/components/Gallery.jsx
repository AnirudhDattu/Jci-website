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
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Load images from a JSON file or API
        const response = await fetch("/gallery/images.json");
        const data = await response.json();

        if (selectedCategory === "All categories") {
          setImages(data.flatMap((event) => event.images));
        } else {
          const categoryImages =
            data.find((event) => event.name === folderMapping[selectedCategory])
              ?.images || [];
          setImages(categoryImages);
        }
        setVisibleCount(12); // Reset visibleCount on category change
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [selectedCategory]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

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
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm md:text-base md:px-6 md:py-2.5 transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              } font-medium hover:shadow-md`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-8">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
          >
            {images.slice(0, visibleCount).map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden rounded-xl shadow-lg h-64">
                  <img
                    className="w-full h-full object-cover"
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.slice(0, visibleCount).map((src, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                src={src}
                alt={`Gallery ${index + 1}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-medium">Event Photo</p>
                  <p className="text-sm opacity-90">#{index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < images.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition-all duration-300"
            >
              Load More
            </button>
          </div>
        )}

        {/* Empty State */}
        {images.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No photos found in this category
          </div>
        )}
      </section>
    </div>
  );
}
