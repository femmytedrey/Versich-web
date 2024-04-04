import { useState, useEffect, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import CSRFTokenField from "../../../../components/CSRFTokenField"
import { SS_VERIFICATION_EMAIL, dashboardPath, emailVerificationPath } from "../../../../assets/constants"
import { resendEmailVerificationLink } from "../../../../actions/verification"

const ResendVerificationLink = ({ triggered }) => {
    const coolingTimer = 30 // sec
    const [countdown, setCountdown] = useState(coolingTimer - 1)
    const [showCountdown, setShowCountdown] = useState(false)
    const [disableResend, setDisableResend] = useState(false)
    const [resendError, setResendError] = useState(null)
    const [csrfToken, setCsrfToken] = useState("")
    const csrfTokenUpdated = useRef(false)

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleResend = () => {
        setDisableResend(true)
        if (location.pathname !== emailVerificationPath) {
            window.sessionStorage.setItem(SS_VERIFICATION_EMAIL.key, SS_VERIFICATION_EMAIL.value)
            return navigate(emailVerificationPath)
        }
        dispatch(resendEmailVerificationLink(csrfToken))
            .then(() => {
                setShowCountdown(true)
                setCountdown(coolingTimer)
            })
            .catch((error) => {
                if (error instanceof Error && error?.message) {
                    const data = JSON.parse(error.message)
                    setResendError(data.message)
                    navigate(dashboardPath)
                }
                else setResendError("An unexpected error occurred, refresh and try again!")
            })
    }
    useEffect(() => {
        window.sessionStorage.removeItem(SS_VERIFICATION_EMAIL.key)
        triggered
            && !csrfTokenUpdated.current
            && (csrfTokenUpdated.current = csrfToken !== "")
            && handleResend()
        // eslint-disable-next-line
    }, [csrfToken])

    const resendTimer = useRef()
    useEffect(() => {
        if (countdown <= 0) {
            setDisableResend(false)
            setShowCountdown(false)
            return clearInterval(resendTimer.current)
        }
        if (showCountdown || triggered) {
            resendTimer.current = setInterval(() => {
                setCountdown(prev => prev - 1)
            }, 1000)
        }
        return () => clearInterval(resendTimer.current)
        // eslint-disable-next-line
    }, [countdown])
    return (<>
        {resendError
            ? <p className="bg-gray-50 text-red-500 text-center py-6 px-4 rounded-lg">{resendError}</p>
            : showCountdown
                ? <p className="text-versich-border text-center">Email sent, to resend again wait for {countdown}s.</p>
                : <p className="text-center">
                    <span>Click </span>
                    <CSRFTokenField token={csrfToken} setToken={setCsrfToken} />
                    <button
                        className="text-versich-blue underline hover:text-versich-blue-hover disabled:hover:text-versich-blue disabled:cursor-not-allowed"
                        onClick={disableResend ? null : handleResend}
                        disabled={disableResend}
                    >here</button>
                    <span> to resend Verification Link.</span>
                </p>
        }
    </>)
}
export default ResendVerificationLink