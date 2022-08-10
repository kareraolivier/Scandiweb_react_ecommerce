import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Route from "./routes/router";
import NavBar from "./component/navbar/NavBar";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Route />
      </BrowserRouter>
    );
  }
}

export default App;
