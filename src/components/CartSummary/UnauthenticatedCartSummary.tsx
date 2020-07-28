import React from "react";
import Navigation from "../Navigation/Navigation";

const UnauthenticatedCartSummary: React.FC = () => {
  return (
    <>
      <Navigation />
      <h1>Please login</h1>
    </>
  );
};

export default UnauthenticatedCartSummary;
