import React, { Component } from "react";
import { images } from "../../constants";
import { AiOutlineDown } from "react-icons/ai";
import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import "../../App.scss";
import { graphql } from "react-apollo";
import { GET_CATEGORY } from "../../pages/api/graphql";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
  }
  hundleTuggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    // const category = ["women", "men", "kids"];
    console.log(this.props);
    let data = this.props.data;
    if (data.loading) return <p>Loading .</p>;

    return (
      <>
        <div className="navbar">
          <div className="navbar_menu">
            <BsList className="icon" onClick={this.hundleTuggle} />
            {this.state.toggle && (
              <div>
                <BsX className="icon" onClick={this.hundleTuggle} />
                <ul>
                  {data?.categories?.map((category) => {
                    return (
                      <li key={category.name} onClick={this.hundleTuggle}>
                        <a href={`#${category.name}`}>{category.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
          <div className="links">
            <ul>
              {data?.categories?.map((category) => {
                return (
                  <li key={category.name}>
                    <a href={`#${category.name}`}>{category.name}</a>
                    <div />
                  </li>
                );
              })}
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

export default graphql(GET_CATEGORY)(NavBar);
