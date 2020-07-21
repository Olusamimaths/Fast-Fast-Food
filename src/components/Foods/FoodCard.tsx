import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import image1_xs from "../../images/image1_xs.jpg";
import "../../styles/FoodCard.scss";

const FoodCard: React.FC = () => {
  return (
    <Card className="mr-4 food-card">
      <Card.Img variant="top" src={image1_xs} />
      <Card.Body>
        <Card.Title className="text-secondary">Card Title</Card.Title>
        <Card.Text className="text-primary">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default FoodCard;
