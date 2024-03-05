import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./components/appRoutes/AllRoutes";
import { checkAuth } from "./actions/auth";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(checkAuth());
    // eslint-disable-next-line
  }, [dispatch]);

  if (loading) {
    // Display a loading indicator or skeleton screen
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AllRoutes />
        <Footer />
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
