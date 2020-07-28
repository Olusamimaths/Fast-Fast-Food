import React from "react";
import Navigation from "../Navigation/Navigation";
import FoodCarousel from "../FoodCarousel/FoodCarousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FoodCard from "./FoodCard";
import "../../styles/Home.scss";
import { CartProvider } from "../../state/CartProvider";
import foodItems from "./data";

const Home: React.FC = () => {
  return (
    <div>
      <Navigation />
      <FoodCarousel />
      <Container fluid className="p-5 flex-column">
        <Row className="mb-5 mt-5 pl-3">
          <h2 className="m-2 secondary-title text-secondary">Foods</h2>
        </Row>
        <Row className="flex-row align-items-center d-flex pl-3 flex-wrap">
          <CartProvider>
            {foodItems.map(({ image, title, description, link, price }, i) => (
              <FoodCard
                image={image}
                title={title}
                description={description}
                link={link}
                price={price}
                key={i}
              />
            ))}
          </CartProvider>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
