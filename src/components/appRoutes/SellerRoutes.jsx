import { useSelector } from "react-redux"
import { useLocation, Navigate, Outlet } from "react-router-dom"

import ErrorPage from "../ErrorPage/ErrorPage"
import { getProfileLink } from "./utils"
import { SELLER } from "../../assets/constants"

const SellerRoutes = () => {
    const { user } = useSelector(state => state.auth)
    const { value: progress } = useSelector((state) => state.progress)
    const location = useLocation()
    if (user.account_type !== SELLER) {
        return <ErrorPage status={403} />
    }
    const route = getProfileLink(user.account_type, progress)
    if (route) {
        if (location.pathname !== route) {
            return <Navigate to={route} replace />
        }
        return <Outlet />
    }
    return <ErrorPage status={404} />
}
export default SellerRoutes