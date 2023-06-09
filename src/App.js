import './App.css';
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Districts from './pages/districts/Districts';
import Categories from './pages/categories/Categories';
import Contacts from './pages/contacts/Contacts';
import Sobre from './pages/sobre/Sobre';
import AboutText from './pages/aboutText/AboutText';

const App = () => {
  return (
    <div className="App">
     <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/districts" element={<Districts/>} />
                  <Route path="/categories" element={<Categories/>} />
                  <Route path="/contacts" element={<Contacts/>} />
                  <Route path="/about" element={<Sobre/>} />
                  <Route path="/about-text" element={<AboutText/>} />
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
