import React, { useState, useEffect, useRef } from 'react';
import { one, ten, three, two, five, four, six, seven, eight, nine } from '../assets/Num';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const imageData = [one, two, three, four, five, six, seven, eight, ten, nine];

function TopRank({ title, query }) {
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
                setData(data.map(item => item?.show?.image?.original));
                setIsLoading(true); // Set loading to true while fetching images
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false); // Set loading to false on error
            });
    }, [query]);

    useEffect(() => {
        if (data.length > 0) {
            const imagePromises = data.map(src =>
                new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = resolve;
                    img.onerror = reject;
                })
            );

            Promise.all(imagePromises)
                .then(() => setIsLoading(false))
                .catch(() => setIsLoading(false));
        }
    }, [data]);

    const combinedData = imageData.slice(0, data.length).map((img, index) => ({
        static: img,
        movie: data[index]
    }));

    const handlePrevClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -carouselRef.current.offsetWidth,
                behavior: 'smooth'
            });
        }
    };

    const handleNextClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: carouselRef.current.offsetWidth,
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
                    className='carousel carousel-center gap-8 flex overflow-x-hidden overflow-y-hidden flex-row w-full mt-4 bg-transparent overflow-x-auto'
                >
                    {isLoading ? (
                        <div className='w-full h-[120px] md:h-[200px] lg:h-[270px] flex items-center justify-center'>
                            <span className="loading loading-spinner bg-yellow-500 loading-md"></span>
                        </div>
                    ) : combinedData.length > 0 ? (
                        combinedData.map(({ static: imageData, movie }, index) => (
                            <div
                                key={index}
                                className='carousel-item flex items-center p hover:transition-transform duration-300 transform'
                            >
                                <div className='w-24 md:w-40 lg:w-56 h-16 md:h-40 lg:h-60 flex'>
                                    <img
                                        src={imageData}
                                        alt={`Static ${index}`}
                                        className='rounded-xl mt-2 md:mt-6 lg:mt-12 pb-10 object-cover h-full flex-shrink-0'
                                    />
                                </div>
                                <div className='-ml-10 md:-ml-10 lg:-ml-20 h-16 md:h-48 lg:h-60 w-[400px] md:w-[500px] lg:w-[150px]'>
                                    <img
                                        src={movie}
                                        alt={`Movie ${index}`}
                                        className='rounded-xl object-cover w-full h-full transition-shadow duration-300 hover:shadow-lg hover:border-[#d1ff00] border-2 border-transparent'
                                    />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='carousel-item flex items-center gap-2 h-[120px] md:h-[200px] lg:h-[300px]'>
                            <div className='w-16 h-16 flex items-center justify-center'>
                                <img
                                    src='https://via.placeholder.com/150'
                                    alt='Placeholder Static'
                                    className='rounded-xl object-cover h-full'
                                />
                            </div>
                            <div className='w-24 h-16'>
                                <img
                                    src='https://via.placeholder.com/300'
                                    alt='Placeholder Movie'
                                    className='rounded-xl object-cover w-full h-full transition-shadow duration-300 hover:shadow-lg hover:border-[#d1ff00] border-2 border-transparent'
                                />
                            </div>
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

export default TopRank;
