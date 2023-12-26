import React from "react";
import "./App.css";

import {Routes,Route} from "react-router-dom";


import Home from "./Pages/Home"
import About from "./Pages/About"
import Blog from "./Pages/Blog"
import Contact from "./Pages/Contact"
import Navigation from "./Pages/Navigation";

const App = () => {

  return (
    <div>
      <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </div>
  );
}
export default App;