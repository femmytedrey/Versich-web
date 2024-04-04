import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { MdOutlineMarkEmailRead, MdOutlineMarkEmailUnread } from "react-icons/md"
import { AiOutlineExclamationCircle } from "react-icons/ai"

import ErrorPage from "../../../components/ErrorPage/ErrorPage"
import Meta from "../../../components/Meta"
import ResendVerificationLink from "./email/ResendVerificationLink"
import { dashboardPath, verificationStates } from "../../../assets/constants"
import { verifyEmail } from "../../../actions/verification"

const EmailTokenLinkVerification = () => {
    const { token } = useParams()

    const { verifying, verified, expired } = verificationStates
    const [status, setStatus] = useState(verifying.code)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        let timeout
        dispatch(verifyEmail(token))
            .then(() => {
                setStatus(verified.code)
                timeout = setTimeout(() => {
                    navigate(dashboardPath)
                }, 3500)
            })
            .catch(error => {
                console.log(error)
                if (error?.response?.status === 410 && error?.response?.data?.shortInfo === "token expired") {
                    setStatus(expired.code)
                }
                else setStatus(null)
            })
        return () => clearTimeout(timeout)
        // eslint-disable-next-line
    }, [])
    return (
        token && status ?
            <div className="py-10 md:py-14 px-3 overflow-hidden flex justify-center bg-versich-primary-bg items-center">
                {status === verifying.code
                    ? <VerificationStatus
                        title="Verifying Email"
                        icon={<MdOutlineMarkEmailUnread />}
                        pulse={true}
                        description={
                            <p className="text-center mb-5">just a sec..</p>
                        }
                        metaDescription="Verifying user email by unique link"
                    />
                    : status === verified.code
                        ? <VerificationStatus
                            title="Email Verified"
                            icon={<MdOutlineMarkEmailRead className="text-green-400/90" />}
                            description={
                                <div>
                                    <p className="text-center mb-5">To continue, return to wherever you started verification - on the VersiMarket website.</p>
                                    <p className="text-center">Or stay in page to get redirected to your dashboard.</p>
                                </div>
                            }
                            metaDescription="Verifying user email by unique link"
                        />
                        : <VerificationStatus
                            title="Verification Link Expired"
                            icon={<AiOutlineExclamationCircle className="text-yellow-300" />}
                            description={
                                <div>
                                    <p className="text-center mb-5">This link has expired. Ensure you have clicked the link in the most recent email</p>
                                    <ResendVerificationLink />
                                </div>
                            }
                            metaDescription="Verifying user email by unique link"
                        />
                }
            </div>
            : <ErrorPage status={404} />
    )
}
const VerificationStatus = ({ title, icon, pulse, description, metaTitle = title, metaDescription }) => (<>
    <Meta title={metaTitle} description={metaDescription} />
    <div className="w-full bg-white shadow-form my-6 py-5 md:py-10 px-3 md:px-10 max-w-[580px] rounded-lg">
        <h2 className="font-bold text-2xl mb-5">{title}</h2>
        <div className={"text-6xl pb-5 flex justify-center text-versich-blue" + (pulse ? " animate-pulse" : "")}>
            {icon}
        </div>
        {description}
    </div>
</>)
export default EmailTokenLinkVerification