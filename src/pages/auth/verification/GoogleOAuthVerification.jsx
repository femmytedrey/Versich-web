import { useLocation, Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"

import { authenticateGoogleUser } from "../../../actions/socialAuth"
import { loginPath } from "../../../assets/constants"

const GoogleOAuthVerification = () => {
    const [status, setStatus] = useState("verifying")
    const location = useLocation()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(authenticateGoogleUser(location.search))
            .then(data => setStatus(data?.status))
            .catch(error => {
                /**
                 * The user must see a error message, if authentication failed
                 */
                // const data = JSON.parse(error?.message)
                setStatus(null)
            })
        // eslint-disable-next-line
    }, [])
    return (
        // Improvise this page design & make sure its responsive
        <div className="py-10 md:py-14 px-3 mb-12 overflow-hidden flex justify-center  bg-versich-primary-bg items-center">
            <div className="w-full bg-white shadow-md py-5 md:py-10 px-3 md:px-10 max-w-[580px] rounded-md">
                <h2 className=" text-3xl leading-normal text-center mb-5 text-versich-darktext-color font-medium ">
                    Signing you in with
                </h2>
                <section>
                    {status === null
                        ? <Navigate to={loginPath} />
                        : status === "verifying" &&
                        <div className="flex-grow inline-flex items-center">
                            <div className="max-w-[180px]">
                                <img className="" src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt={status} />
                            </div>
                        </div>
                    }
                </section>
                <p>verifying your request..</p>
            </div>
        </div>
    )
}
export default GoogleOAuthVerification