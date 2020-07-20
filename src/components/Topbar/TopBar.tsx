import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TiLocation } from "react-icons/ti";
import "../../styles/TopBar.scss";

interface TopBarProps {
  location: string;
}

const TopBar: React.FC<TopBarProps> = ({ location }) => {
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col sm="8" xs="12" lg="8">
          <TiLocation className="justify-content" /> {location}
        </Col>
      </Row>
    </Container>
  );
};

export default TopBar;
