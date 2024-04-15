import { useState, useEffect, useRef } from "react"
import { MdMarkEmailUnread } from "react-icons/md"
import { BeatLoader } from "react-spinners"

import Meta from "../../../../components/Meta"
import ResendVerificationLink from "./ResendVerificationLink"
import { SS_VERIFICATION_EMAIL } from "../../../../assets/constants"

const EmailVerification = () => {
    const resendTriggerStatus = window.sessionStorage.getItem(SS_VERIFICATION_EMAIL.key)
    const triggerResend = resendTriggerStatus === SS_VERIFICATION_EMAIL.value

    const [showResendLink, setShowResendLink] = useState(false)
    const [countdown, setCountdown] = useState(5)
    const timer = useRef()
    useEffect(() => {
        if (triggerResend || countdown <= 0) {
            setShowResendLink(true)
            return clearInterval(timer.current)
        }
        timer.current = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)
        return () => {
            clearInterval(timer.current)
            window.sessionStorage.removeItem(SS_VERIFICATION_EMAIL.key)
        }
    }, [countdown])
    return (
        <div className="py-10 md:py-14 px-3 overflow-hidden flex justify-center bg-versich-primary-bg items-center">
            <Meta title="Email Verification" description="Proceed to verify your email address" />
            <div className="w-full bg-white shadow-form my-6 py-5 md:py-10 px-3 md:px-10 max-w-[580px] rounded-lg">
                <h2 className="font-bold text-2xl mb-5">Email Verification</h2>
                <div className="text-6xl pb-5 flex justify-center text-versich-blue">
                    <MdMarkEmailUnread />
                </div>
                <p className="text-center mb-5">Kindly check your email inbox or spam folder to verify your email address.</p>
                {showResendLink
                    ? <ResendVerificationLink triggered={triggerResend} />
                    : <BeatLoader
                        loading={true}
                        color="#cdcdcd"
                    />}
            </div>
        </div>
    )
}
export default EmailVerification