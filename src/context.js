import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//provider
//consumer

export default class ProductProvider extends Component {
  state = {
    paducts: storeProducts,
    detailProduct: detailProduct,
  };
  handleDetail = () => {
    console.log("hola desde detail");
  };
  addToCart = () => {
    console.log("hola desde add to cart");
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
