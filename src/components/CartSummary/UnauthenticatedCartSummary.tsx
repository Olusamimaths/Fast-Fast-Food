import React from "react";
import Navigation from "../Navigation/Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Redirect } from "react-router-dom";

const UnauthenticatedCartSummary: React.FC = () => {
  return (
    <>
      <Navigation />
      <Container fluid className="flex-row">
        <Row className="">
          <Col className="p-5 d-flex flex-column" xs="12" sm="8" lg="8">
            <h2 className="mb-5 pb-1 ">Please Login In</h2>
            <p>You are being redirected to the login page...</p>
          </Col>
        </Row>
      </Container>
      <Redirect to="/signin" />
    </>
  );
};

export default UnauthenticatedCartSummary;
