import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardDeck from "react-bootstrap/CardDeck";
import FoodCard from "./FoodCard";
import "../../styles/Foods.scss";
import foodItems from "./data";

const Foods: React.FC = () => {
  return (
    <Container fluid className="p-5 flex-column">
      <Row className="mb-5 mt-5 pl-3">
        <h2 className="m-2 secondary-title text-secondary">Foods</h2>
      </Row>
      <Row className="flex-row align-items-center d-flex pl-3 flex-wrap">
        {foodItems.map((food, i) => (
          <FoodCard
            title={food.title}
            description={food.description}
            link={food.link}
            image={food.image}
            key={i}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Foods;
