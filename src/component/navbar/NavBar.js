import React, { Component } from "react";
import { images } from "../../constants";
import { AiOutlineDown } from "react-icons/ai";
import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import "../../App.scss";
import { Query } from "react-apollo";
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
    return (
      <Query query={GET_CATEGORY}>
        {({ loading, error, data }) => {
          if (loading) return <p>loading....</p>;
          if (error) return <p>something went wrong</p>;
          return (
            <div className="navbar">
              <div className="navbar_menu">
                <BsList className="icon" onClick={this.hundleTuggle} />
                {this.state.toggle && (
                  <div>
                    <BsX className="icon" onClick={this.hundleTuggle} />
                    <ul>
                      {data?.categories?.map((category) => {
                        return (
                          <li key={category?.name} onClick={this.hundleTuggle}>
                            <a href={`#${category?.name}`}>{category?.name}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
              <div className="links">
                <ul>
                  {data?.categories?.map((category, index) => {
                    return (
                      <li key={category?.name}>
                        <a href={`#${category?.name}`}>{category?.name}</a>
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
          );
        }}
      </Query>
    );
  }
}

export default NavBar;
