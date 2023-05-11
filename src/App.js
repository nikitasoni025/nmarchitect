
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Leftnavbar from './Components/Navbar/LeftNavbar/Leftnavbar';
import Rightnavbar from './Components/Navbar/RightNavbar/Rightnavbar';
import Homepage from './Pages/HomePage/Homepage';
import Expertise from './Pages/Expertise/Expertise';
import About from './Pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-left">
          <Leftnavbar />
        </div>
        <div className="app-mid">
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/expertise' element={<Expertise />} />
            <Route path='/about' element={<About />} />
          </Routes>

        </div>
        <div className="app-right">
          <Rightnavbar />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
