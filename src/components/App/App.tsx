import React from "react";
import Navigation from "../Navigation";
import "../../styles/App.scss";
import FoodCarousel from "../FoodCarousel";
import Foods from "../Foods/Foods";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <FoodCarousel />
      <Foods />
    </div>
  );
};

export default App;
