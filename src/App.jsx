import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";


const App = () => {
  return (
    <Router>

      {/* navbar components */}
      <Navbar />

      {/* slider components */}
      <Slider />
      
    </Router>
    
  );
};

export default App;
