import React, { useState, useEffect, useRef } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

function SpecialBanner({ title, query }) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const carouselRef = useRef(null);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                const images = data.map(item => item.show.image.original);
                setData(images);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            });
    }, [query]);

    const handlePrevClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -carouselRef.current.offsetWidth / 6,
                behavior: 'smooth'
            });
        }
    };

    const handleNextClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: carouselRef.current.offsetWidth / 6,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='relative mb-12'>
            <h1 className='text-white text-base md:text-lg lg:text-2xl ml-5'>
                {title}
            </h1>

            <div className='relative group'>
                <button
                    className='flex items-center justify-center absolute left-2 md:left-4 lg:left-5 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white h-8 w-8 md:h-10 md:w-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'
                    onClick={handlePrevClick}
                >
                    <MdArrowBackIos className='h-4 w-4 md:h-5 md:w-5' />
                </button>

                <div
                    ref={carouselRef}
                    className='flex   overflow-x-hidden gap-4 mt-4'
                    style={{
                        width: '100%',
                    }}
                >
                    {isLoading ? (
                        <div className='w-full h-[162px] md:h-[120px] lg:h-[300px] flex items-center justify-center'>
                            <span className="loading loading-spinner bg-yellow-500 loading-md"></span>
                        </div>
                    ) : data.length > 0 ? (
                        data.map((image, index) => (
                            <div
                                key={index}
                                className='flex-shrink-0  h-[162px] md:h-[120px] lg:h-[240px] w-[calc(100%/3-16px)]' // Adjust width to fit 6 images
                            >
                                <img
                                    src={image}
                                    alt={`Carousel item ${index}`}
                                    className=' rounded-xl object-cover w-full h-full transition-shadow duration-300 hover:shadow-lg hover:border-[#d1ff00] border-2 border-transparent'
                                />
                            </div>
                        ))
                    ) : (
                        <div className='h-[120px] md:h-[200px] lg:h-[300px]'>
                            <img
                                src='https://via.placeholder.com/300'
                                alt='Placeholder'
                                className='rounded-lg object-cover w-full h-full transition-shadow duration-300 hover:shadow-lg hover:border-[#d1ff00] border-4 border-transparent'
                            />
                        </div>
                    )}
                </div>

                <button
                    className='flex items-center justify-center absolute right-2 md:right-4 lg:right-5 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white h-8 w-8 md:h-10 md:w-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'
                    onClick={handleNextClick}
                >
                    <MdArrowForwardIos className='h-4 w-4 md:h-5 md:w-5' />
                </button>
            </div>
        </div>
    );
}

export default SpecialBanner;
