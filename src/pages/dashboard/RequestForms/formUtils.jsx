/**
 * Retrieves the current form text and icon based on the selected service and page.
 *
 */
export const getCurrentFormTextAndIcon = (selectedService, page, icons) => {
  const {
    orgSize,
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    financeNeedIcon,
    expertNeedIcon,
    projectCommencementIcon,
    selectedFinanceNeed,
    selectedServiceType,
  } = icons;
  switch (selectedService) {
    case "":
      return { icon: orgSize, text: "Select your service" };
    case "Software Development":
      switch (page) {
        case 0:
          return { icon: null, text: null };
        case 1:
          return { icon: icon1, text: "Text for Service Requirement" };
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
          // Still be working with case 3 here
          switch (page) {
            case 3:
              switch (selectedFinanceNeed) {
                case "FP & A Revolution":
                  return {
                    icon: icon2,
                    text: "What specific area in FP&A are you looking for an Expert",
                  };
                case "Financial reporting and Advanced Analytics":
                  return {
                    icon: icon2,
                    text: "Finance Reporting/Advanced Analytics Service you need",
                  };
                case "ERP/EPM/ System Implementation":
                  return {
                    icon: icon2,
                    text: "Systems Implementation service you need",
                  };
                case "Systems Administration":
                  return {
                    icon: icon1,
                    text: "System you need an Admin For ",
                  };
                case "Digital Transformation":
                  return {
                    icon: icon2,
                    text: "What Digital Transformation Service do you need?",
                  };
                case "other":
                  return {
                    icon: icon2,
                    text: "What Service do you need?",
                  };
              }
          }
        case 4:
          switch (page) {
            case 4:
              switch (selectedFinanceNeed) {
                case "FP & A Revolution":
                  return {
                    icon: icon1,
                    text: "What’s your preferred choice of tool? Don’t worry if your preferred tool isn’t listed, you can mention that in the detail page Choice of Tool",
                  };
                case "Financial reporting and Advanced Analytics":
                  return {
                    icon: icon1,
                    text: "What’s your preferred choice of tool? Don’t worry if your preferred tool isn’t listed, you can mention that in the detail page Choice of Tool",
                  };
                case "ERP/EPM/ System Implementation":
                  return {
                    icon: icon4,
                    text: "Your Budget Size",
                  };
                case "Systems Administration":
                  return {
                    icon: icon4,
                    text: "Your Budget Size",
                  };
                case "Digital Transformation":
                  return {
                    icon: icon4,
                    text: "Your Budget Size",
                  };
                case "other":
                  return {
                    icon: icon4,
                    text: "Your Budget Size",
                  };
              }
          }

        case 5:
          switch (page) {
            case 5:
              switch (selectedFinanceNeed) {
                case "FP & A Revolution":
                  return {
                    icon: icon4,
                    text: "Your Budget Size",
                  };
                case "Financial reporting and Advanced Analytics":
                  return { icon: icon4, text: "Your Budget Size" };
                case "ERP/EPM/ System Implementation":
                  return {
                    icon: projectCommencementIcon,
                    text: "When do you need an expert?",
                  };
                case "Systems Administration":
                  return {
                    icon: projectCommencementIcon,
                    text: "When do you need an expert?",
                  };
                case "Digital Transformation":
                  return {
                    icon: projectCommencementIcon,
                    text: "When do you need an expert?",
                  };
                case "other":
                  return {
                    icon: projectCommencementIcon,
                    text: "When do you need an expert?",
                  };
              }
          }

        case 6:
          switch (page) {
            case 6:
              switch (selectedFinanceNeed) {
                case "FP & A Revolution":
                  return {
                    icon: icon3,
                    text: "When do you need an expert",
                  };
                case "Financial reporting and Advanced Analytics":
                  return { icon: icon3, text: "When do you need an expert" };
                case "ERP/EPM/ System Implementation":
                  return {
                    icon: icon5,
                    text: "Explain what you need so we get you experts to meet your needs",
                  };
                case "Systems Administration":
                  return {
                    icon: icon5,
                    text: "Explain what you need so we get you experts to meet your needs",
                  };
                case "Digital Transformation":
                  return {
                    icon: icon5,
                    text: "Explain what you need so we get you experts to meet your needs",
                  };
                case "other":
                  return {
                    icon: icon5,
                    text: "Explain what you need so we get you experts to meet your needs",
                  };
              }
          }

        case 7:
          switch (page) {
            case 7:
              switch (selectedFinanceNeed) {
                case "FP & A Revolution":
                  return {
                    icon: icon5,
                    text: "Explain what you need so we get you experts to meet your needs",
                  };
                case "Financial reporting and Advanced Analytics":
                  return {
                    icon: icon5,
                    text: "Explain what you need so we get you experts to meet your needs",
                  };
              }
          }

        default:
          return { icon: null, text: null };
      }
    case "Machine learning and AI":
      switch (page) {
        case 0:
          return { icon: null, text: null };
        case 1:
          return { icon: expertNeedIcon, text: "Experts you need" };
        case 2:
          return { icon: icon4, text: "Your budget size" };
        case 3:
          return {
            icon: projectCommencementIcon,
            text: "When do you need an Expert?",
          };
        case 4:
          return {
            icon: icon5,
            text: "Explain what you need so we get you experts to meet your needs",
          };
      }
    case "Web Design & Development":
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
    case "Mobile App":
      switch (page) {
        case 0:
          return { icon: null, text: null };
        case 1:
          return { icon: icon4, text: "Your budget size" };
      }
    case "Data & Analytics":
      switch (page) {
        case 0:
          return { icon: null, text: null };
        case 1:
          return {
            icon: icon2,
            text: "Tell us your project purpose",
          };
        case 2:
          switch (page) {
            case 2:
              switch (selectedServiceType) {
                case "Myself, personal Projects":
                  return {
                    icon: icon1,
                    text: "Tell us the type of profession you need",
                  };
                case "Team, Business, Company":
                  return {
                    icon: orgSize,
                    text: "Tell us about your organisation size",
                  };
              }
          }
        case 3:
          switch (page) {
            case 3:
              switch (selectedServiceType) {
                case "Myself, personal Projects":
                  return {
                    icon: icon2,
                    text: "What’s your preferred choice of tool? Don’t worry if your preferred tool isn’t listed, you can mention that in the detail page",
                  };
                case "Team, Business, Company":
                  return {
                    icon: icon1,
                    text: "Data Service you need",
                  };
              }
          }
        case 4:
          switch (page) {
            case 4:
              switch (selectedServiceType) {
                case "Myself, personal Projects":
                  return {
                    icon: icon3,
                    text: "When do you need an expert?",
                  };
                case "Team, Business, Company":
                  return {
                    icon: icon2,
                    text: "What’s your preferred choice of tool? Don’t worry if your preferred tool isn’t listed, you can mention that in the detail page",
                  };
              }
          }

        case 5:
          switch (page) {
            case 5:
              switch (selectedServiceType) {
                case "Myself, personal Projects":
                  return {
                    icon: icon4,
                    text: "Your Budget Size",
                  };
                case "Team, Business, Company":
                  return {
                    icon: icon3,
                    text: "When do you need an expert?",
                  };
              }
          }

        case 6:
          switch (page) {
            case 6:
              switch (selectedServiceType) {
                case "Myself, personal Projects":
                  return {
                    icon: icon5,
                    text: "Give detail of what you need so we get you experts to meet your needs",
                  };
                case "Team, Business, Company":
                  return {
                    icon: icon4,
                    text: "Your Budget Size",
                  };
              }
          }

        case 7:
          switch (page) {
            case 7:
              switch (selectedServiceType) {
                case "Myself, personal Projects":
                  return {
                    icon: null,
                    text: null,
                  };
                case "Team, Business, Company":
                  return {
                    icon: icon5,
                    text: "Give detail of what you need so we get you experts to meet your needs",
                  };
              }
          }
        default:
          return { icon: null, text: null };
      }
      
    default:
      return { icon: null, text: null };
  }
};
