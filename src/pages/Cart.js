import React, { Component } from "react";
import {
  Shoppingcart,
  Cartimage,
  Onecartimage,
  Cartcontent,
} from "../component/styledcomponent/Cart.Style";
import Size from "../component/Size";
import {
  Container,
  Mainhearding,
  Masterhearding,
  Primarybutton,
  Allcard,
  Paragraph,
  Textwrapper,
  Content,
} from "../GrobalStyle";
import { Smallimage } from "../component/styledcomponent/Product.Style";
import { images } from "../constants";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLight } from "react-icons/bs";

class Cart extends Component {
  // constructor(props) {
  //     super(props);
  // }
  state = {};
  render() {
    return (
      <>
        <Container>
          <Masterhearding>Cart</Masterhearding>
          <Allcard>
            <Shoppingcart>
              <Content>
                <Masterhearding>Apollo</Masterhearding>
                <Mainhearding>Running short</Mainhearding>
                <h4>$ 50,00</h4>
                <h4>SIZE:</h4>
                <Size color="black" bcolor="white" text="XS" />
                <Size color="white" bcolor="black" text="S" />
                <Size color="black" bcolor="white" text="M" />
                <Size color="black" bcolor="white" text="L" />

                <h4>COLOR:</h4>
                <Size color="white" bcolor="black" text="" />
                <Size color="white" bcolor="#5ECE7B" text="" />
                <Size color="white" bcolor="white" text="" />
              </Content>
              <Content>
                <Cartimage>
                  <Cartcontent>
                    <Size color="black" bcolor="white" text="+" />
                    <h4>1</h4>
                    <Size color="black" bcolor="white" text="-" />
                  </Cartcontent>
                  <Smallimage>
                    <Onecartimage>
                      <img
                        src={images.Productone}
                        alt="buy"
                        width="100%"
                        height="100%"
                      />
                    </Onecartimage>
                  </Smallimage>
                </Cartimage>
              </Content>
            </Shoppingcart>
            <Shoppingcart>
              <Content>
                <Paragraph>
                  Tax 21%:<Textwrapper> $10,00</Textwrapper>
                </Paragraph>
                <Paragraph>
                  Quantity:<Textwrapper> 3</Textwrapper>
                </Paragraph>
                <Paragraph>
                  <b>Total:</b>
                  <Textwrapper> $100,00</Textwrapper>
                </Paragraph>
                <Primarybutton>ORDER</Primarybutton>
              </Content>
            </Shoppingcart>
          </Allcard>
        </Container>
      </>
    );
  }
}

export default Cart;
