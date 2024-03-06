import React from "react";

const CircularProgressBar = () => {
  const progress = 25;
  const radius = 36;
  const strokeWidth = 8;

  const calculateDashOffset = () => {
    const circumference = 2 * Math.PI * radius;
    const progressPercentage = progress / 100;
    return circumference * (1 - progressPercentage);
  };

  const calculateSVGDimensions = () => {
    const diameter = radius * 2;
    const svgWidth = diameter + strokeWidth;
    const svgHeight = diameter + strokeWidth;
    return { width: svgWidth, height: svgHeight };
  };

  const { width, height } = calculateSVGDimensions();

  return (
    <div className="relative">
      <div className="h-20 w-20 rounded-full bg-white relative flex justify-center items-center">
        <div className="h-16 w-16 rounded-full bg-[#D9EBFC]"></div>
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
          <span className="text-versich-dark-blue text-lg font-semibold">{`${progress}%`}</span>
        </div>
        <div className="absolute top-0 left-0 transform -rotate-90">
          <svg height={height} width={width} xmlns="http://www.w3.org/2000/svg">
            <circle
              cx={width / 2}
              cy={height / 2}
              r={radius}
              fill="transparent"
              style={{ stroke: "#1D88ED" }}
              strokeWidth={strokeWidth}
              strokeDasharray={2 * Math.PI * radius}
              strokeDashoffset={calculateDashOffset()}
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
