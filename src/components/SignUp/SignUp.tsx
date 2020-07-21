import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import "../../styles/SignUp.scss";

const SignUp: React.FC = () => {
  return (
    <Container fluid className="flex-row">
      <Row className="">
        <Col
          className="p-4 pl-5 d-flex flex-column signup-form-container justify-content-center"
          xs="12"
          sm="7"
          lg="6"
        >
          <h2 className="mb-3 pb-1 secondary-title">Sign Up</h2>
          <Form>
            <Form.Group controlId="signupForFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Your First Name" />
            </Form.Group>

            <Form.Group controlId="signupForLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Last Name" />
            </Form.Group>

            <Form.Group controlId="signupFormEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="signupFormPassword1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="signupFormPassword2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="secondary" type="submit">
              Submit
            </Button>

            <Form.Text className="text-muted mt-3">
              Already have an account? <a href="#">Sign In</a>.
              <p className="return-home">
                Go back to{" "}
                <Link to="../">
                  Home <BsFillHouseDoorFill />
                </Link>
              </p>
            </Form.Text>
          </Form>
        </Col>
        <Col className="signup-image-container" xs="12" sm="5" lg="6"></Col>
      </Row>
    </Container>
  );
};

export default SignUp;
