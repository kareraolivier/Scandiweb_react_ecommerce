import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Cart, Products } from "../pages";

class route extends Component {
  state = {};
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Products />} />
        </Routes>
      </>
    );
  }
}

export default route;
