import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"

import ErrorPage from "../ErrorPage/ErrorPage"

const EmailVerificationRoutes = () => {
    const { user } = useSelector(state => state.auth)
    if (user.verified) {
        return <ErrorPage status={user.social ? 403 : 404} />
    }
    return <Outlet />
}
export default EmailVerificationRoutes