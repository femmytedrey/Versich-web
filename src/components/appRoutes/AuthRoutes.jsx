import { useSelector } from "react-redux"
import { useLocation, Navigate, Outlet } from "react-router-dom"

import { loginPath } from "../../assets/constants"

const AuthRoutes = () => {
    const { isAuthenticated, user } = useSelector(state => state.auth)
    const location = useLocation()
    const path = window.encodeURIComponent(location.pathname)
    if (isAuthenticated && user !== null) {
        return <Outlet />
    }
    else {
        return <Navigate to={`${loginPath}?next=${path}`} />
    }
}
export default AuthRoutes