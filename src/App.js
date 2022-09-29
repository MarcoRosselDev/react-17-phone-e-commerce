import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" component={<ProductList />} />
          <Route path="/details" component={<Details />} />
          <Route path="/cart" component={<Cart />} />
          <Route path="*" component={<Default />} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
