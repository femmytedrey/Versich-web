// Steppers.jsx

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import StepButton from "../components/Buttons/StepButton";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepOne from "./StepOne";
import { useNavigate } from "react-router-dom";

const Steppers = () => {
  const [activeStep, setActiveStep] = useState(0);
  const methods = useForm();
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [regionError, setRegionError] = useState(false);
  const [isFirstOptionSelected, setIsFirstOptionSelected] = useState();

  const prevStep = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const nextStep = async (event) => {
    try {
      event.preventDefault();

      const isValid = await methods.trigger();

      if (!isValid) {
        return;
      }

      // Check if the first radio button is selected
      if (isFirstOptionSelected) {
        setActiveStep((prevStep) => prevStep + 1);
        setIsFirstOptionSelected(false);
      } else {
        // Check if the second radio button is selected and if country/state are selected
        if (!selectedCountry || !selectedState) {
          setIsFirstOptionSelected(true);
          setRegionError(true);
          return;
        }

        setActiveStep((prevStep) => prevStep + 1);
      }

      if (activeStep === 2) {
        const formData = {
          ...methods.getValues(),
          selectedService: selectedServices,
          selectedCountry,
          selectedState,
        };
        console.log("Form Data:", formData);

        navigate("/auth/login", { replace: true });
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (error) {
      console.error("Error during form validation:", error);
    }
  };

  const [selectedServices, setSelectedServices] = useState([]);

  const handleSelectedServices = (services) => {
    setSelectedServices(services);
  };

  const handleLocationChange = (country, state) => {
    setSelectedCountry(country);
    setSelectedState(state);
  };

  return (
    <FormProvider {...methods}>
      <div className="py-10 md:py-14 px-3 mb-12 overflow-hidden bg-versich-primary-bg flex items center justify-center">
        <div className="w-full my-10 bg-white shadow-md py-5 md:py-10 px-3 md:px-10 max-w-[580px] rounded-md space-y-6">
          <form>
            {activeStep === 0 && (
              <StepOne
                methods={methods}
                selectedCountry={selectedCountry}
                selectedState={selectedState}
                onLocationChange={handleLocationChange}
                regionError={regionError}
                isFirstOptionSelected={isFirstOptionSelected}
              />
            )}

            {activeStep === 1 && (
              <section>
                <div>
                  {/* InputText component for Section 2 */}
                  <StepTwo methods={methods} />
                </div>
              </section>
            )}

            {activeStep === 2 && (
              <section>
                <div>
                  {/* InputText component for Section 3 */}
                  <StepThree handleSelectedServices={handleSelectedServices} />
                </div>
              </section>
            )}

            <div className="flex justify-center gap-x-12">
              {activeStep > 0 && (
                <StepButton
                  type="button"
                  text="Back"
                  handleButtonClick={prevStep}
                />
              )}
              <StepButton
                text={activeStep === 2 ? "Submit" : "Next"}
                handleButtonClick={nextStep}
                style={{ scrollBehavior: "smooth" }}
              />
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default Steppers;
