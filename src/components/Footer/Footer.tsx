import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../../styles/Footer.scss";

const Footer: React.FC = () => {
  return (
    <Container fluid className="footer mt-5">
          <Row className="justify-content-md-center text-center">
        <p className="text-center">
          &copy; <a href="https://github.com/olusamimaths">Olusola Samuel</a>
        </p>
      </Row>
    </Container>
  );
};

export default Footer;
