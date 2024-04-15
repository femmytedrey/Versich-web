export const getCurrentFormTextAndIcon = (selectedService, page, icons) => {
  const { orgSize, icon1, icon2, icon3, icon4, icon5, financeNeedIcon } = icons;
  switch (selectedService) {
    case "":
      return { icon: orgSize, text: "Select your service" };
    case "ERM/EPM/ System":
      switch (page) {
        case 0:
          return { icon: null, text: null };
        case 1:
          return { icon: icon1, text: "Text for ServiceRequirement" };
        case 2:
          return { icon: orgSize, text: "Text for ServiceNeeds" };
        case 3:
          return { icon: icon1, text: "Text for BusinessType" };
        case 4:
          return { icon: orgSize, text: "Text for IndustryType" };
        case 5:
          return { icon: orgSize, text: "Text for LiveDecision" };
        case 6:
          return { icon: orgSize, text: "Text for Budget" };
        default:
          return { icon: null, text: null };
      }
    case "Finance Transformation":
      switch (page) {
        case 0:
          return { icon: orgSize, text: "Select your service" };
        case 1:
          return {
            icon: financeNeedIcon,
            text: "Finance Transformation Service you need",
          };
        case 2:
          return { icon: orgSize, text: "Tell us your organisation size" };
        case 3:
          return {
            icon: icon2,
            text: "What specific area in FP&A are you looking for an Expert",
          };
        case 4:
          return { icon: icon4, text: "Your budget size" };
        default:
          return { icon: null, text: null };
      }
    case "Data and Analytics":
      switch (page) {
        case 0:
          return { icon: null, text: null };
        case 1:
          return {
            icon: orgSize,
            text: "Tell us about your organisation size",
          };
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
          return { icon: icon4, text: "Your budget size" };
        case 6:
          return {
            icon: icon5,
            text: "Give detail of what you need so we get you experts to meet your needs",
          };
        default:
          return { icon: null, text: null };
      }
    case "Finance Reporting and Advanced Analytics":
    case "⁠System Administration":
    // switch (page) {
    //   case 0:
    //     return { icon: null, text: "I am testing System Administration" };
    //   default:
    //     return { icon: null, text: null };
    // }
    case "⁠Digital Transformation":
    case "Other":
    case "Machine learning and AI":
      return { icon: orgSize, text: "Select your service" };
    default:
      return { icon: null, text: null };
  }
};
