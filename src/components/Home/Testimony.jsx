import React, { useState, useEffect, useRef } from 'react';
import quoteIcon from '../../assets/quote.svg';

const Testimony = ({ testifiers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let intervalId;

    if (!isMobile) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testifiers.length);
      }, 5000); // Adjust the interval duration as needed
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isMobile, testifiers.length]);

  const handleSwipeStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleSwipeMove = (e) => {
    if (touchStartX.current !== null) {
      const deltaX = e.touches[0].clientX - touchStartX.current;

      if (deltaX > 50) {
        prevTestimony();
        touchStartX.current = null;
      } else if (deltaX < -50) {
        nextTestimony();
        touchStartX.current = null;
      }
    }
  };

  const nextTestimony = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testifiers.length);
  };

  const prevTestimony = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testifiers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden mx-8 md:mx-16 lg:mx-28 mt-10"
      onTouchStart={handleSwipeStart}
      onTouchMove={handleSwipeMove}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {testifiers.map((testifier) => (
          <div key={testifier.id} className="w-full flex-shrink-0 relative px-9">
            <div className="mb-7 relative">
              <img src={quoteIcon} alt="quote" className='absolute top-10 w-14 left-[-28px] bg-versich-dark-blue bg-opacity-30 p-3 rounded-full' />
              <p className="text-versich-light-blue font-semibold text-lg">
                {testifier.name}
              </p>
              <p className="text-xl mb-7">{testifier.job}</p>
              <p className='font-semibold'>{testifier.testimony}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimony;
