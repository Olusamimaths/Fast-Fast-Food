import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TiLocation } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";

import { FaShoppingCart } from "react-icons/fa";
import "../../styles/TopBar.scss";

interface TopBarProps {
  location?: string;
}

const TopBar: React.FC<TopBarProps> = ({ location = "Ogun" }) => {
  return (
    <Container fluid className="p-4">
      <Row className="justify-content-md-center">
        <Col
          sm="8"
          xs="12"
          lg="8"
          className="d-flex justify-content-between align-items-center text-primary"
        >
          <div>
            <TiLocation className="justify-content mr-2" /> {location}
          </div>
          <div className="text-secondary brand-text">Fast Fast Food</div>
          <div className="cart d-flex align-items-center">
            <div>
              <FaSearch className="mr-4" />
            </div>

            <div className="d-flex align-items-center">
              <FaShoppingCart fontSize="1.4rem" />{" "}
              <p className="cart-counter">12</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TopBar;
