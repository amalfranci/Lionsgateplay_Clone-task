import React, { useState, useEffect, useRef } from "react";
import {
  one,
  three,
  two,
  five,
  four,
  seven,
  six,
  eight,
} from "../assets/HeaderImages";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { IoVideocamSharp } from "react-icons/io5";

function MainCarousel() {
  const imageData = [one, two, three, four, five, six, seven, eight];
  const [mouseHover, setMouseHover] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = () => setMouseHover(true);
  const handleMouseLeave = () => setMouseHover(false);

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
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center w-full px-0 mb-20"
    >
      <button
        className={`${
          mouseHover ? "block" : "hidden"
        } flex justify-center items-center absolute left-2 md:left-4 lg:left-5 top-1/2 transform -translate-y-1/2 p-2 bg-gray-900 text-white h-8 w-8 md:h-10 md:w-10 rounded-full z-10`}
        onClick={handlePrevClick}
      >
        <MdArrowBackIos className="h-4 w-4 md:h-5 md:w-5" />
      </button>
      <div
        ref={carouselRef}
        className="flex w-full overflow-x-hidden space-x-4"
      >
        {imageData.map((image, index) => (
          <div
            key={index}
            className="w-[70vw] md:w-[45vw] lg:w-[48vw] flex-shrink-0 relative group"
          >
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            <img
              src={image}
              className="w-full h-[40vw] md:h-[20vw] lg:h-[21vw] object-cover rounded-lg border-4 border-transparent group-hover:border-[#d1ff00] transition-border duration-300"
              alt={`Carousel item ${index + 1}`}
            />
            <div className="absolute bottom-5 right-5 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-5">
              <div className="flex flex-col items-center">
                <FaPlay className="text-[#d1ff00] text-2xl lg:text-5xl cursor-pointer" />
                <h3 className="text-xs lg:text-xl">PLAY</h3>
              </div>
              <div className="flex flex-col items-center">
                <IoVideocamSharp className="text-[#d1ff00] text-2xl lg:text-5xl cursor-pointer" />
                <h3 className="text-xs lg:text-xl">TRAILER</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className={`${
          mouseHover ? "block" : "hidden"
        } flex justify-center items-center absolute right-2 md:right-4 lg:right-5 top-1/2 transform -translate-y-1/2 p-2 bg-gray-900 text-white h-8 w-8 md:h-10 md:w-10 rounded-full`}
        onClick={handleNextClick}
      >
        <MdArrowForwardIos className="h-4 w-4 md:h-5 md:w-5" />
      </button>
    </div>
  );
}

export default MainCarousel;
