import React from "react";
import { Navigate } from "react-router-dom";

// Replace this with your actual auth logic
const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;