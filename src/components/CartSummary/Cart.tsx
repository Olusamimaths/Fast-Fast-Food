import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { calcTotalQuantity } from "../../utils/cartMethods";
import "../../styles/Cart.scss";
import { useCartState } from "../../state/CartProvider";

const Cart: React.FC = () => {
  const { cart } = useCartState();
  const quantity = calcTotalQuantity(cart);

  return (
    <div className="cart d-flex align-items-center">
      <div>
        <FaSearch className="mr-4" />
      </div>
      <Link to="/cart" className="d-flex align-items-center cart">
        <FaShoppingCart fontSize="1.4rem" />{" "}
        <p className={`${quantity ? "cart-counter" : ""}`}>
          {quantity ? quantity : ""}
        </p>
      </Link>
    </div>
  );
};

export default Cart;
