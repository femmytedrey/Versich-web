import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { BrowserRouter } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./components/appRoutes/AllRoutes";
import { checkAuth } from "./actions/auth"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkAuth())
    // eslint-disable-next-line
  }, [])
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  console.log(isAuthenticated, 'from App.js');
  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        <AllRoutes checkAuth={checkAuth} isAuthenticated={isAuthenticated} user={user} />
        <Footer />
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
