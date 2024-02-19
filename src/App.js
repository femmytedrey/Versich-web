import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';
import Signup from './pages/Signup';
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar />
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/stepone' element={<StepOne />} />
          <Route path='/steptwo' element={<StepTwo />} />
         </Routes>
         <Footer />
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
