import React, { Component } from "react";
import { images } from "../../constants";
import { AiOutlineDown } from "react-icons/ai";
import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import "../../App.scss";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
  }
  hundleTuggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const category = ["women", "men", "kids"];

    return (
      <>
        <div className="navbar">
          <div className="navbar_menu">
            <BsList className="icon" onClick={this.hundleTuggle} />
            {this.state.toggle && (
              <div>
                <BsX className="icon" onClick={this.hundleTuggle} />
                <ul>
                  {category.map((category) => (
                    <li key={category} onClick={this.hundleTuggle}>
                      <a href={`#${category}`}>{category}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="links">
            <ul>
              {category.map((category, index) => (
                <li key={index}>
                  <a href={`#${category}`}>{category}</a>
                  <div />
                </li>
              ))}
            </ul>
          </div>
          <div className="logo">
            <img src={images.Logo} alt="logo" />
          </div>
          <div className="cart">
            <p>
              $<AiOutlineDown />
            </p>
            <img src={images.Blackcart} alt="blackcart" />
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
