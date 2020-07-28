import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useCartDispatch } from "../../state/CartProvider";
import { Link } from "react-router-dom";

interface FoodCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  price: number;
}
const FoodCard: React.FC<FoodCardProps> = ({
  image,
  title,
  description,
  link,
  price,
}) => {
  const [value, setValue] = useState(0);
  const dispatch = useCartDispatch();

  // TODO: type the event
  const handleChange = (event: any) => {
    if (event.target.value >= 0) {
      setValue(Number(event.target.value));
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (value > 0) {
      dispatch({
        type: "add",
        payload: { item: title, price, quantity: Number(value) },
      });
      setValue(0);
    }
  };

  return (
    <Card className="mr-4 food-card mb-5">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Link to={link} className="no-underline">
          <Card.Title className="text-secondary ">{title}</Card.Title>
          <Card.Text className="text-primary mb-3">{description}</Card.Text>
        </Link>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="1"
            aria-label="Amount"
            aria-describedby="basic-addon2"
            type="number"
            value={value}
            onChange={handleChange}
          />
          <InputGroup.Append>
            <Button
              variant="outline-secondary"
              onClick={handleClick}
            >
              Add
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Card.Body>
    </Card>
  );
};

export default FoodCard;
