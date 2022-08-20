import React, { Component } from "react";
import Route from "./routes/router";
import NavBar from "./component/navbar/NavBar";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Route />
      </>
    );
  }
}

export default App;
