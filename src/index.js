import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "./cart-context/cart-context";
import { productLists } from "./database";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Auth/auth-context";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartProvider item={{ productLists }}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
