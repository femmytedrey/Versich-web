import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"

import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import MainLoader from "./components/loader/MainLoader"
import AllRoutes from "./components/appRoutes/AllRoutes"
import { checkAuth } from "./actions/auth"

function App() {
    const { isLoading } = useSelector(state => state.authVerify)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(checkAuth())
        // eslint-disable-next-line
    }, [])
    return (
        <div className="App">
            <BrowserRouter >
                <Navbar />
                {isLoading
                    ? <MainLoader />
                    : <AllRoutes />
                }
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
