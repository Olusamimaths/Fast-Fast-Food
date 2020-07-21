import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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
    <Card className="mr-4 food-card">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="text-secondary">{title}</Card.Title>
        <Card.Text className="text-primary">{description}</Card.Text>
        <Button variant="secondary" href={link}>
          Add
        </Button>
      </Card.Body>
    </Card>
  );
};

export default FoodCard;
