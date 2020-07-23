import React from "react";
import TopBar from "../TopBar/TopBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { MdShoppingCart } from "react-icons/md";
import "../../styles/CartSummary.scss";

const cart = [
  {
    item: "Egusi",
    price: "N300",
    quantity: "3",
  },
  {
    item: "Salad",
    price: "N400",
    quantity: "1",
  },
  {
    item: "Bracolli",
    price: "N700",
    quantity: "4",
  },
];

const CartSummary: React.FC = () => {
  return (
    <>
      <TopBar />
      <Container fluid className="flex-row">
        <Row className="">
          <Col className="p-5 d-flex flex-column" xs="12" sm="8" lg="8">
            <h2 className="mb-5 pb-1 secondary-title">
              Cart Summary <MdShoppingCart />
            </h2>
            <div>
              <Table striped bordered hover responsive="sm" size="sm">
                <thead>
                  <tr>
                    <th>Qty</th>
                    <th>Item</th>
                    <th>Price</th>
                    <th>-</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>{item.quantity}</td>
                        <td>{item.item}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan="2">Total</td>
                    <td>N10000</td>
                    <td>8</td>
                  </tr>
                </tbody>
              </Table>
              <div className="d-flex justify-content-end">
                <Button className="flex-right">Checkout</Button>
              </div>
              
            </div>
          </Col>
          <Col className="cart-summary-container" xs="12" sm="4" lg="4"></Col>
        </Row>
      </Container>
    </>
  );
};

export default CartSummary;
