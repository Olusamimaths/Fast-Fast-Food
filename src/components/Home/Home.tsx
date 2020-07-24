import React, {useState} from "react";
import Navigation from "../Navigation/Navigation";
import FoodCarousel from "../FoodCarousel/FoodCarousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "../../styles/Home.scss";
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
          {foodItems.map((food, i) => (
            <Card className="mr-4 food-card mb-5">
              <Card.Img variant="top" src={food.image} />
              <Card.Body>
                <Card.Title className="text-secondary">{food.title}</Card.Title>
                <Card.Text className="text-primary">
                  {food.description}
                </Card.Text>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="1"
                    aria-label="Amount"
                    aria-describedby="basic-addon2"
                    type="number"
                  />
                  <InputGroup.Append>
                    <Button variant="outline-secondary" href={food.link}>
                      Add
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
