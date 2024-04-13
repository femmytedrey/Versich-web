export const getCurrentFormTextAndIcon = (selectedService, page, icons) => {
    const { icon, icon1 } = icons;
    switch (selectedService) {
      case "Web design and development":
        switch (page) {
          case 0:
            return { icon: icon, text: "Select your service" };
          case 1:
            return { icon: icon1, text: "Service Requirements" };
          case 2:
            return { icon: icon, text: "Service Needs" };
          case 3:
            return { icon: icon1, text: "Business Type" };
          case 4:
            return { icon: icon, text: "Industry Type" };
          case 5:
            return { icon: icon, text: "Live Decision" };
          case 6:
            return { icon: icon, text: "Budget" };
          default:
            return { icon: null, text: null };
        }
      case "Mobile App":
      case "Data and Analytics":
      case "Software Development":
      case "Finance Transformation":
      case "Machine learning and AI":
        return { icon: icon, text: "Select your service" };
      default:
        return { icon: null, text: null };
    }
  };
  