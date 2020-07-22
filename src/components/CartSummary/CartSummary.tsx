import React from "react";
import TopBar from "../TopBar/TopBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { MdShoppingCart } from "react-icons/md";
import "../../styles/CartSummary.scss";

const CartSummary: React.FC = () => {
  return (
    <>
      <TopBar />
      <Container fluid className="flex-row">
        <Row className="">
          <Col
            className="p-5 d-flex flex-column"
            xs="12"
            sm="8"
            lg="8"
          >
            <h2 className="mb-5 pb-1 secondary-title">
              Cart Summary <MdShoppingCart />
            </h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col className="cart-summary-container" xs="12" sm="4" lg="4"></Col>
        </Row>
      </Container>
    </>
  );
};

export default CartSummary;
