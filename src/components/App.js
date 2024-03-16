
import React from "react";
import './../styles/App.css';
import { Routes , Route} from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </div>
  )
}

export default App
