import React, { useState, useEffect, useRef } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

function Category({ title, query }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const carouselRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.tvmaze.com/search/shows?q=${query}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        const images = result.map((item) => item?.show?.image?.original);
        setData(images);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mb-10 h-full">
      <h1 className="text-white text-base md:text-lg lg:text-2xl font-bold ml-6">
        {title}
      </h1>

      <div className="relative group">
        <button
          className="flex items-center justify-center absolute left-2 md:left-4 lg:left-5 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white h-8 w-8 md:h-10 md:w-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          onClick={handlePrevClick}
        >
          <MdArrowBackIos className="h-4 ml-2 w-4 md:h-5 md:w-5" />
        </button>

        <div
          ref={carouselRef}
          className="flex flex-row gap-4 w-full mt-4 bg-transparent space-x-4 overflow-x-hidden overflow-y-hidden transition-transform duration-500 ease-in-out"
        >
          {isLoading ? (
            <div className="w-full h-[120px] md:h-[200px] lg:h-[300px] flex items-center justify-center">
              <span className="loading loading-spinner bg-yellow-500 loading-md"></span>
            </div>
          ) : data.length > 0 ? (
            data.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[15vw] md:w-[12vw] lg:w-[15vw] relative h-[15vw] md:h-[12vw] lg:h-[20vw] mb-10"
              >
                <div className="relative overflow-hidden rounded-xl border-2 border-transparent hover:border-[#dcec18]">
                  <img
                    src={image}
                    alt={`movie`}
                    className="object-cover w-full h-[300px] transition-shadow duration-300 hover:shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-50">
                    <div className="hidden md:block absolute bottom-3 left-3 text-[#dcec18]">
                      <FaPlay className="text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex-shrink-0 w-[15vw] md:w-[12vw] lg:w-[10vw] relative h-[15vw] md:h-[12vw] lg:h-[10vw]">
              <img
                src="https://via.placeholder.com/300"
                alt="Placeholder"
                className="rounded-lg object-cover w-full h-full transition-shadow duration-300 hover:shadow-lg hover:border-[#d1ff00] border-4 border-transparent"
              />
            </div>
          )}
        </div>

        <button
          className="flex items-center justify-center absolute right-2 md:right-4 lg:right-5 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white h-8 w-8 md:h-10 md:w-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          onClick={handleNextClick}
        >
          <MdArrowForwardIos className="h-4 w-4 md:h-5 md:w-5" />
        </button>
      </div>
    </div>
  );
}

export default Category;
