export const getCurrentFormTextAndIcon = (selectedService, page, icons) => {
  const { icon, icon1, icon2, icon3, icon4, icon5 } = icons;
  switch (selectedService) {
    case "":
      return { icon: icon, text: "Select your service" };
    case "Web design and development":
      switch (page) {
        case 0:
          return { icon: icon, text: "Select your service" };
        case 1:
          return { icon: icon1, text: "Text for ServiceRequirement" };
        case 2:
          return { icon: icon, text: "Text for ServiceNeeds" };
        case 3:
          return { icon: icon1, text: "Text for BusinessType" };
        case 4:
          return { icon: icon, text: "Text for IndustryType" };
        case 5:
          return { icon: icon, text: "Text for LiveDecision" };
        case 6:
          return { icon: icon, text: "Text for Budget" };
        default:
          return { icon: null, text: null };
      }
    case "Mobile App":
      switch (page) {
        case 0:
          return { icon: icon, text: "Select your service" };
        default:
          return { icon: null, text: null };
      }
    case "Data and Analytics":
      switch (page) {
        case 0:
          return { icon: icon, text: "Select your service" };
        case 1:
          return { icon: icon, text: "Tell us about your organisation size" };
        case 2:
          return { icon: icon1, text: "Data Service you need" };
        case 3:
          return {
            icon: icon2,
            text: "What’s your preferred choice of tool? Don’t worry if your preferred tool isn’t listed, you can mention that in the detail page?",
          };
        case 4:
          return { icon: icon3, text: "When do you need an expert?" };
        case 5:
          return { icon: icon4, text: "Your Budget Size" };
        case 6:
          return {
            icon: icon5,
            text: "Give detail of what you need so we get you experts to meet your needs",
          };
        default:
          return { icon: null, text: null };
      }
    case "Software Development":
    case "Finance Transformation":
    case "Machine learning and AI":
      return { icon: icon, text: "Select your service" };
    default:
      return { icon: null, text: null };
  }
};
