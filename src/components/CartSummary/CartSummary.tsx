import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { MdShoppingCart } from "react-icons/md";
import "../../styles/CartSummary.scss";
import { useCartState } from "../../state/CartProvider";

import { calcTotalPrice, calcTotalQuantity } from "../../utils/cartMethods";

const CartSummary: React.FC = () => {
  const { cart } = useCartState();

  return (
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
                  <th>#</th>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Sub Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{item.item}</td>
                      <td>N{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>N{item.price * item.quantity}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan="3" className="pt-4">
                    Total
                  </td>
                  <td className="pt-4">
                    <b>{calcTotalQuantity(cart)}</b>
                  </td>
                  <td className="pt-4">
                    <b>N{calcTotalPrice(cart)}</b>
                  </td>
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
  );
};

export default CartSummary;
