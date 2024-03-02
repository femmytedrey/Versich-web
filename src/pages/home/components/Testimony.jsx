import { useState } from "react";
import { PiArrowRightThin, PiArrowLeftThin } from "react-icons/pi";

import quoteIcon from "../../../assets/quote.svg";

const Testimony = ({ testifiers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimony = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testifiers.length);
  };

  const prevTestimony = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testifiers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden mx-8 md:mx-16 lg:mx-28 mt-10">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {testifiers.map((testifier) => (
          <div key={testifier.id} className="w-full flex-shrink-0 relative">
            <div className="mb-7 relative">
              <img
                src={quoteIcon}
                alt="quote"
                className="absolute top-9 bg-versich-dark-blue bg-opacity-30 p-4 rounded-full"
              />
              <p className="text-versich-light-blue font-semibold text-lg">
                {testifier.name}
              </p>
              <p className="text-xl mb-7">{testifier.job}</p>
              <p className="font-semibold">{testifier.testimony}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-x-5 text-3xl justify-center  bottom-0 w-full p-5 ">
        <PiArrowLeftThin className="cursor-pointer" onClick={prevTestimony} />
        <PiArrowRightThin className="cursor-pointer" onClick={nextTestimony} />
      </div>
    </div>
  );
};

export default Testimony;
