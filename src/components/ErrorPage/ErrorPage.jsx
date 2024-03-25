import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import Error401 from "../../assets/401.png";
import Error403 from "../../assets/403.png";
import Error404 from "../../assets/404.png";

const ErrorPage = ({ status }) => {
  let errorMessage, errorImage;
  switch (status) {
    case 401:
      errorMessage = "You are not authorized to view the requested resource";
      errorImage = Error401;
      break;
    case 403:
      errorMessage =
        "Access denied. You do not have permission to access the requested resource";
      errorImage = Error403;
      break;
    case 404:
      errorMessage = "The page you are attempting to navigate to is not found";
      errorImage = Error404;
      break;
    default:
      errorMessage = "An Error Occurred";
  }

  return (
    <div className="flex justify-between px-10 lg:px-32 md:px-25 flex-col md:flex-row items-center gap-y-2 bg-versich-primary-bg gap-x-8 lg:gap-x-20 py-12 md:py-0">
      <div className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[500px] order-1 md:order-2">
        {/* Display error image based on the case */}
        <img src={errorImage} alt={`Error ${status}`} className="w-full" />
      </div>
      <div className="order-2 md:order-1 text-center md:text-left">
        <p className="font-bold text-3xl md:text-4xl lg:text-5xl text-versich-dark-blue pb-2 md:pb-4">
          {status} - Error
        </p>
        <p className=" pb-8 text-base md:text-xl font-medium">{errorMessage}</p>
        <div className="flex justify-center md:justify-start">
          <Link
            to="/"
            className="flex gap-x-2 items-center w-fit text-white text-base md:text-xl px-4 py-2 rounded-lg bg-versich-blue hover:bg-versich-blue-hover"
          >
            <FaHome className="inline text-lg md:text-3xl" />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
