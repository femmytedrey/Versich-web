import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

import ErrorPage from "../ErrorPage/ErrorPage"
import { SS_VERIFICATION_STATUS, dashboardPath } from "../../assets/constants"

const EmailVerificationRoutes = () => {
    const { user } = useSelector(state => state.auth)
    if (user.verified) {
        const status = window.sessionStorage.getItem(SS_VERIFICATION_STATUS.key)
        if (status === SS_VERIFICATION_STATUS.value) {
            return <Navigate to={dashboardPath} />
        }
        return <ErrorPage status={user.social ? 403 : 404} />
    }
    return <Outlet />
}
export default EmailVerificationRoutes