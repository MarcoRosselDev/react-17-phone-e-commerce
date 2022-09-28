import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import Default from "./Components/Default";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <h3>hola from</h3>
        <Routes>
          <Route path="/" component={<ProductList />} />
          <Route path="/details" component={<Details />} />
          <Route path="/cart" component={<Cart />} />
          <Route component={<Default />} />
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
