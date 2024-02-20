import React, { useRef, useState, useEffect } from 'react';
import { PiArrowRightThin } from "react-icons/pi";
import './Service.css';

const Service = ({ servicesImages }) => {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let intervalId;

    const scrollStep = 1;
    const scrollSpeed = 20;

    const scroll = () => {
      if (!isHovered) {
        const container = scrollContainer;
        const lastChild = container.lastElementChild;

        if (lastChild) {
          if (container.scrollLeft >= lastChild.offsetLeft - container.clientWidth) {
            container.scrollLeft = 0;
          } else {
            container.scrollLeft += scrollStep;
          }
        }
      }
    };

    const screenWidth = window.innerWidth;

    const isMobileView = screenWidth <= 768;

    if (!isMobileView) {
      intervalId = setInterval(scroll, scrollSpeed);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isHovered]);

  return (
    <div
      className={`flex ${isHovered ? 'paused' : ''} scroll-container overflow-x-auto`}
      ref={scrollContainerRef}
    >
      {servicesImages.map((service) => (
        <div key={service.id} className='mx-4 my-3 w-[320px] shadow-md rounded-2xl text-center group'>
          <div className='h-[170px] w-[320px] relative overflow-hidden'>
            <img
              src={service.img}
              alt={service.name}
              className='rounded-tr-2xl rounded-tl-2xl object-cover w-full h-full transition-transform duration-400 transform-gpu scale-100 group-hover:scale-110 cursor-pointer'
            />
          </div>
          <div className='h-auto text-start p-4'>
            <p className='font-bold text-lg text-versich-darktext-color'>{service.name}</p>
            <a
              href={service.link}
              className='flex cursor-pointer items-center gap-x-2 text-[#114B8A] font-medium hover:text-versich-blue hover:gap-x-4 transition-all duration-300 ease-in-out'
            >
              Find a professional
              <PiArrowRightThin className='my-3' />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
