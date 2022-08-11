import React, { Component } from "react";

class Size extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  state = {};
  render() {
    return (
      <button
        style={{
          width: "2.5rem",
          height: "2rem",
          fontSize: "16px",
          cursor: "pointer",
          border: "solid black",
          borderRadius: "2px",
          margin: "0 0.4rem",
          color: this.props.color,
          backgroundColor: this.props.bcolor,
        }}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Size;
