import { useState } from "react"
import { useDispatch } from "react-redux"
import { IoIosAlert } from "react-icons/io"
import { useForm, FormProvider } from "react-hook-form"

import RadioSelection from "../components/RadioSelection"
import StepButton from "../components/Buttons/StepButton"
import LocationSelection from "./SteponeComponents/LocationSelection"
import Meta from "../components/Meta"
import { setProgress } from "../reducers/ProgressSlice"

const LeadsForm = () => {
    const methods = useForm()
    const dispatch = useDispatch()

    const [isFirstOptionSelected, setIsFirstOptionSelected] = useState(true)
    const [selectedCountry, setSelectedCountry] = useState("")
    const [selectedState, setSelectedState] = useState("")
    const [regionError, setRegionError] = useState(false)

    const regionCoverage = [
        { value: "value1", label: "I serve customers worldwide" },
        { value: "value2", label: "I serve customers within" },
    ]

    const handleRadioChange = (value) => {
        setIsFirstOptionSelected(value === "value1")
    }

    const handleButtonClick = async () => {
        try {
            const isValid = await methods.trigger()

            if (!isValid) {
                console.log("Form validation failed")
                return
            }

            const selectedOptionLabel = regionCoverage.find(
                (option) => option.value === (isFirstOptionSelected ? "value1" : "value2")
            )?.label

            if (isFirstOptionSelected) {
                const formData = {
                    selectedOption: selectedOptionLabel,
                }

                console.log("Form submitted successfully:", formData)
            } else {
                if (!selectedCountry || !selectedState) {
                    setRegionError(true)
                    return
                }

                const formData = {
                    selectedOption: selectedOptionLabel,
                    selectedCountry,
                    selectedState,
                }

                console.log("Form submitted successfully:", formData)
                setRegionError(false)

                // Dispatch the action to update progress to 50%
            }

            dispatch(setProgress(50))
        } catch (error) {
            console.error("Form submission error:", error)
        }
    }


    const handleLocationChange = (country, state) => {
        setSelectedCountry(country)
        setSelectedState(state)
    }

    return (
        <FormProvider {...methods}>
            <Meta title='Leads' description='Complete leads registration' />
            <div className="py-10 md:py-14 px-3 mb-12 overflow-hidden bg-versich-primary-bg flex items center justify-center">
                <div className="w-full bg-white shadow-md py-5 md:py-10 px-3 md:px-10 max-w-[580px] rounded-md space-y-6">
                    <div className="space-y-5">
                        <h2 className="text-start text-xl text-versich-dark-blue font-semibold">
                            Where would you like to see leads from?
                        </h2>
                        <p className="text-start">
                            Tell us the area you cover so we can show you leads for your
                            location
                        </p>
                    </div>
                    <RadioSelection
                        options={regionCoverage}
                        onChange={handleRadioChange}
                    />

                    <LocationSelection
                        isFirstOptionSelected={isFirstOptionSelected}
                        onLocationChange={handleLocationChange}
                        regionError={regionError}
                    />

                    <div className="flex gap-x-3 items-start text-start">
                        <IoIosAlert className="text-gray-500 text-2xl" />
                        <p>You can change your location at any time</p>
                    </div>
                    <StepButton text={"next"} handleButtonClick={handleButtonClick} />
                </div>
            </div>
        </FormProvider>
    )
}

export default LeadsForm
