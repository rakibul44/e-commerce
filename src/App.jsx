import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import BenefitsSection from "./components/BenefitsSection";
import Collections from "./components/Collections";

const App = () => {
  return (
    <Router>

      {/* navbar components */}
      <Navbar />

      {/* slider components */}
      <Slider />

      {/* BenefitsSection components */}
      <BenefitsSection />

      {/* collections components */}
      <Collections />

    </Router>
    
  );
};

export default App;
