import React from "react";
import { useAuthState } from "../auth/AuthProvider";
import CartSummary from "./CartSummary";
import UnaunthenticatedCartSummary from "./UnauthenticatedCartSummary";

export default function AppCartSummary(): JSX.Element {
  const { user } = useAuthState();
  console.log(user);
  return user ? <CartSummary /> : <UnaunthenticatedCartSummary />;
}
