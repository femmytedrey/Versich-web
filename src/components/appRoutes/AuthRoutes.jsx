import { useSelector } from "react-redux"
import { useLocation, Navigate, Outlet } from "react-router-dom"

import ErrorPage from "../ErrorPage/ErrorPage"
import {
    loginPath, setupPath,
    BUYER, buyerPaths,
    SELLER, sellerPaths
} from "../../assets/constants"

const AuthRoutes = () => {
    const { isAuthenticated, user } = useSelector(state => state.auth)
    const location = useLocation()
    const path = window.encodeURIComponent(location.pathname)
    if (isAuthenticated && user !== null) {
        var initialPath = null
        if (location.pathname === setupPath) {
            if (user.account_type === BUYER) {
                initialPath = buyerPaths.root
            }
            else if (user.account_type === SELLER) {
                initialPath = sellerPaths.root
            }
            else return <ErrorPage status={404} />
        }
        if (initialPath && location.pathname !== initialPath) {
            return <Navigate to={initialPath} replace />
        }
        return <Outlet />
    }
    else {
        return <Navigate to={`${loginPath}?next=${path}`} />
    }
}
export default AuthRoutes