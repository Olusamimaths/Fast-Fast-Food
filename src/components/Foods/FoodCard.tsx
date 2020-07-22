import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "../../styles/FoodCard.scss";

interface FoodCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const FoodCard: React.FC<FoodCardProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <Card className="mr-4 food-card mb-5">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="text-secondary">{title}</Card.Title>
        <Card.Text className="text-primary">{description}</Card.Text>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="1"
            aria-label="Amount"
            aria-describedby="basic-addon2"
            type="number"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" href={link}>
              Add 
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Card.Body>
    </Card>
  );
};

export default FoodCard;
