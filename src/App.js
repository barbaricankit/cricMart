import { Cart } from "./Components/Cart";
import { ProductListing } from "./Components/ProductListing";
import { WishList } from "./Components/WishList";
import "./App.css";
import { ProductPage } from "./Components/ProductPage";

import { Navigation } from "./Components/Navigation";
import { Homepage } from "./Components/Homepage";
import { Routes,Route } from "react-router";

export default function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
      <Route path="/"><Homepage /></Route>
      <Route path="/products/product/:productname/:productId"><ProductPage /></Route>
        <Route path="/products/:categoryName"><ProductListing /></Route>
        <Route path="/cart"><Cart /></Route>
        <Route path="/wishlist"><WishList /></Route>
        
      </Routes>
    </div>
  );
}
