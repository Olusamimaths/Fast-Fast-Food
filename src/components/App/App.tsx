import React from "react";
import Navigation from "../Navigation";
import "../../styles/App.scss";
import FoodCarousel from "../FoodCarousel";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <FoodCarousel />
    </div>
  );
};

export default App;
