import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TiLocation } from "react-icons/ti";
import onScorll from "../../utils/onScroll";
import { Link } from "react-router-dom";
import "../../styles/TopBar.scss";
import Cart from "../CartSummary/Cart";

interface TopBarProps {
  location?: string;
}

const TopBar: React.FC<TopBarProps> = ({ location = "Ogun" }) => {
  useEffect(() => onScorll());
  return (
    <Container fluid className="pl-4 pt-2 pb-2 sticky-top" id="header">
      <Row className="justify-content-md-center">
        <Col
          sm="8"
          xs="12"
          lg="8"
          className="d-flex justify-content-between align-items-center text-primary"
        >
          <div className="location">
            <TiLocation className="justify-content mr-2" /> {location}
          </div>
          <Link to="/" className="brand-text">
            Fast Fast Food
          </Link>
          <Cart />
        </Col>
      </Row>
    </Container>
  );
};

export default TopBar;
