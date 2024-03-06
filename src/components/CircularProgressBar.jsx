const CircularProgressBar = () => {
  const progress = 50;
  const radius = 36;
  const strokeWidth = 8;

  const calculateArcCoordinates = () => {
    const progressPercentage = progress / 100;
    const angle = 360 * progressPercentage;
    const x = radius * Math.sin((angle * Math.PI) / 180);
    const y = -radius * Math.cos((angle * Math.PI) / 180);
    return { x, y };
  };

  return (
    <div className="relative">
      <div className="h-20 w-20 rounded-full bg-white relative flex justify-center items-center">
        <div className="h-16 w-16 rounded-full bg-[#D9EBFC]"></div>
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
          <span className="text-versich-dark-blue text-lg font-semibold">{`${progress}%`}</span>
        </div>
        <div className="absolute top-0 left-0">
          <svg height={radius * 2 + strokeWidth} width={radius * 2 + strokeWidth} xmlns="http://www.w3.org/2000/svg">
            <path
              fill="transparent"
              stroke="#1D88ED"
              strokeWidth={strokeWidth}
              d={`M${radius + strokeWidth / 2},${radius + strokeWidth / 2} L${radius + strokeWidth / 2},${strokeWidth / 2} A${radius},${radius} 0 ${
                progress > 50 ? 1 : 0
              } 1 ${radius + calculateArcCoordinates().x + strokeWidth / 2},${radius + calculateArcCoordinates().y + strokeWidth / 2} Z`}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
