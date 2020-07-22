import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/Cart.scss";

const Cart: React.FC = () => {
  return (
    <Link to="/cart" className="d-flex align-items-center cart">
      <FaShoppingCart fontSize="1.4rem" /> <p className="cart-counter">12</p>
    </Link>
  );
};

export default Cart;
