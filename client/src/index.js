import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartProvider } from "./cart-context/cart-context";

import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Auth/auth-context";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

