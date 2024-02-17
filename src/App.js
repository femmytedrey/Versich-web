// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar />
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
         </Routes>
         <Footer />
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
