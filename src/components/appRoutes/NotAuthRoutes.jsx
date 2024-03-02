import { useSelector } from "react-redux"
import { useLocation, Navigate, Outlet } from "react-router-dom"

import { dashboardPath } from "../../assets/constants"

const NotAuthRoutes = () => {
    const { isAuthenticated, user } = useSelector(state => state.auth)
    const location = useLocation()
    if (isAuthenticated && user !== null) {
        const path = new URLSearchParams(location.search).get("next") || dashboardPath
        return <Navigate to={path} replace />
    }
    else return <Outlet />
}
export default NotAuthRoutes