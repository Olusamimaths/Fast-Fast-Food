import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FoodCard from "./FoodCard";
import "../../styles/Foods.scss";
import foodItems from "./data";

const Foods: React.FC = () => {
  return (
    <Container fluid className="p-5 d-flex flex-column">
      <Row className="mb-5">
        <h2 className="m-3 foods-title text-secondary">Foods</h2>
      </Row>
      <Row>
        <Col className="d-flex align-items-center">
          {foodItems.map((food, i) => (
            <FoodCard
              title={food.title}
              description={food.description}
              link={food.link}
              image={food.image}
              key={i}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Foods;
