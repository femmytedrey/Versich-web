import dataAnalyticsIcon from "./icons/SelectServiceIcons/DataAnalyticsIcon.png";
import financeTransformationIcon from "./icons/SelectServiceIcons/FinanceTransformationIcon.png";
import machineLearningIcon from "./icons/SelectServiceIcons/MachineLearningIcon.png";
import softwareDevIcon from "./icons/SelectServiceIcons/softwareDevIcon.png";
import webDevIcon from "./icons/SelectServiceIcons/webDevIcon.png";
import mobileIcon from "./icons/SelectServiceIcons/mobileIcon.png";

/**
 * An array of service offerings provided by the company.
 * Each service offering is represented as an object with the following properties:
 * - id: a unique identifier for the service offering
 * - img: the path to an icon image for the service offering
 * - name: the name of the service offering
 * - link: a URL link to more information about the service offering
 */

const ServiceList = [
  {
    id: 1,
    img: softwareDevIcon,
    name: "Software Development",
    link: "#",
  },
  {
    id: 2,
    img: financeTransformationIcon,
    name: "Finance Transformation",
    link: "#",
  },
  {
    id: 3,
    img: machineLearningIcon,
    name: "Machine learning and AI",
    link: "#",
  },
  {
    id: 4,
    img: webDevIcon,
    name: "Web Design & Development",
    link: "#",
  },
  {
    id: 5,
    img: mobileIcon,
    name: "Mobile App",
    link: "#",
  },
  {
    id: 6,
    img: dataAnalyticsIcon,
    name: "Data & Analytics",
    link: "#",
  },
];

export default ServiceList;
