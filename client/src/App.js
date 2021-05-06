import { Cart } from "./Components/private/Cart";
import { ProductListing } from "./Components/ProductListingPage/ProductListing";
import { WishList } from "./Components/private/WishList";
import "./App.css";
import { ProductPage } from "./Components/ProductPage/ProductPage";

import { Navigation } from "./Components/nav";
import { Homepage } from "./Components/Homepage/Homepage";
import { Routes, Route } from "react-router";
import { Login } from "./Auth/Login";
import { PrivateRoute } from "./Components/private/PrivateRoute";
import SignUpPage from "./Auth/SignUpPage";

export default function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/'>
          <Homepage />
        </Route>
        <Route path='/products/product/:productname/:productId'>
          <ProductPage />
        </Route>
        <Route path='/products/:categoryName'>
          <ProductListing />
        </Route>
        <PrivateRoute path='/cart' element={<Cart />} />
        <PrivateRoute path='/wishlist' element={<WishList />} />
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/signup'>
          <SignUpPage />
        </Route>
      </Routes>
    </div>
  );
}
