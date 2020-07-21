import React from "react";
import Navigation from "../Navigation/Navigation";
import "../../styles/App.scss";
import FoodCarousel from "../FoodCarousel/FoodCarousel";
import Foods from "../Foods/Foods";
import Footer from "../Footer/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Navigation />
      <FoodCarousel />
      <Foods />
      <Footer />
    </div>
  );
};

export default Home;
