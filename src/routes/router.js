import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Cart, Products, Notfound } from "../pages";

class route extends Component {
  state = {};
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Products />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </>
    );
  }
}

export default route;
