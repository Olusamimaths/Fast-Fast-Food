import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BsFillHouseDoorFill } from "react-icons/bs";

import "../../styles/SignIn.scss";

const SignIn: React.FC = () => {
  return (
    <Container fluid className="flex-row">
      <Row className="">
        <Col
          className="p-4 pl-5 d-flex flex-column signin-form-container justify-content-center"
          xs="12"
          sm="7"
          lg="6"
        >
          <h2 className="mb-3 pb-1 secondary-title">Sign In</h2>
          <Form>
            <Form.Group controlId="signinFormEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="signinFormPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="signinFormCheckbox">
              <Form.Check type="checkbox" label="Keep me signed in" />
            </Form.Group>
            <Button variant="secondary" type="submit">
              Submit
            </Button>

            <Form.Text className="text-muted mt-3">
              Don't have an account? <a href="#">Sign Up</a>
              <p className="return-home">
                Go back to{" "}
                <a href="#">
                  {" "}
                  Home <BsFillHouseDoorFill />
                </a>
              </p>
            </Form.Text>
          </Form>
        </Col>
        <Col className="signin-image-container" xs="12" sm="5" lg="6"></Col>
      </Row>
    </Container>
  );
};

export default SignIn;
