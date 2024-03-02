import { useRef, useState, useEffect } from "react";
import { PiArrowRightThin } from "react-icons/pi";
import "./Service.css";

const Service = ({ servicesImages }) => {
  const scrollContainerRef = useRef(null);
  const intervalIdRef = useRef(null);

  const startScrolling = () => {
    if (!intervalIdRef.current) {
      intervalIdRef.current = setInterval(() => {
        const scrollContainer = scrollContainerRef.current;

        if (!isMobileView && !isHovered) {
          const container = scrollContainer;
          const lastChild = container.lastElementChild;

          if (lastChild) {
            if (
              container.scrollLeft >=
              lastChild.offsetLeft - container.clientWidth
            ) {
              const firstImages = container.querySelectorAll(".scroll-item");
              firstImages.forEach((image) => {
                const clone = image.cloneNode(true);
                container.appendChild(clone);
              });
            }
            container.scrollLeft += 1;
          }
        }
      }, 20);
    }
  };

  const stopScrolling = () => {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
  };

  const [isHovered, setIsHovered] = useState(false);

  const screenWidth = window.innerWidth;
  const isMobileView = screenWidth <= 768;

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleMouseEnter = () => {
      setIsHovered(true);
      stopScrolling();
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      startScrolling();
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!isMobileView) {
      const scrollContainer = scrollContainerRef.current;

      // Clone the first set of images initially
      const firstImages = scrollContainer.querySelectorAll(".scroll-item");
      firstImages.forEach((image) => {
        const clone = image.cloneNode(true);
        scrollContainer.appendChild(clone);
      });

      startScrolling();
    } else {
      stopScrolling(); // Stop scrolling on mobile
    }

    return () => {
      stopScrolling();
    };
    // eslint-disable-next-line
  }, [isMobileView]);

  const handleMobileScroll = (e) => {
    if (isMobileView) {
      //
    }
  };

  return (
    <div
      className={`flex scroll-container overflow-x-auto scoll md:overflow-x-hidden snap-x-mandatory`}
      ref={scrollContainerRef}
      onWheel={handleMobileScroll}
    >
      {servicesImages.map((service) => (
        <div
          key={service.id}
          className="mx-4 my-3 w-[250px] md:w-[320px] shadow-md rounded-2xl text-center group scroll-snap-align-start scroll-item"
        >
          <div className="h-[100px] md:h-[170px] w-[220px] md:w-[320px] relative overflow-hidden rounded-tr-2xl rounded-tl-2xl">
            <img
              src={service.img}
              alt={service.name}
              className="object-cover w-full h-full transition-transform duration-400 cursor-pointer hover:scale-110"
            />
          </div>
          <div className="h-auto text-start px-4 py-2 md:py-4">
            <p className="font-bold text-sm md:text-lg text-versich-darktext-color">
              {service.name}
            </p>
            <a
              href={service.link}
              className="flex text-sm md:text-lg cursor-pointer items-center gap-x-2 text-[#114B8A] font-medium hover:text-versich-blue hover:gap-x-4 transition-all duration-300 ease-in-out"
            >
              Find a professional
              <PiArrowRightThin className="my-" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
