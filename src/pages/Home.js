import React, { Component } from "react";
import {
  Container,
  Mainhearding,
  Allcard,
  Paragraph,
  Content,
  Secondaryhearding,
} from "../GrobalStyle";
import {
  Card,
  Cardimage,
  Buyicon,
} from "../component/styledcomponent/Home.Style";

import { images } from "../constants";
class AllCategories extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  state = {};
  render() {
    return (
      <>
        <Container>
          <Mainhearding>Category name</Mainhearding>
          <Allcard>
            <Card>
              <Cardimage>
                <img src={images.Product} alt="product" />
              </Cardimage>
              <Buyicon>
                <img
                  src={images.Whitecart}
                  alt="buy"
                  width="90%"
                  height="85%"
                />
              </Buyicon>
              <Content>
                <Paragraph>Apollo running short</Paragraph>
                <Secondaryhearding>$50,00</Secondaryhearding>
              </Content>
            </Card>
            <Card>
              <Cardimage>
                <img src={images.Producttwo} alt="product" />
              </Cardimage>
              <Buyicon>
                <img
                  src={images.Whitecart}
                  alt="buy"
                  width="90%"
                  height="85%"
                />
              </Buyicon>
              <Content>
                <Paragraph>Apollo running short</Paragraph>
                <Secondaryhearding>$50,00</Secondaryhearding>
              </Content>
            </Card>
            <Card>
              <Cardimage>
                <img src={images.Productone} alt="product" />
              </Cardimage>
              <Buyicon>
                <img
                  src={images.Whitecart}
                  alt="buy"
                  width="90%"
                  height="85%"
                />
              </Buyicon>
              <Content>
                <Paragraph>Apollo running short</Paragraph>
                <Secondaryhearding>$50,00</Secondaryhearding>
              </Content>
            </Card>
          </Allcard>
        </Container>
      </>
    );
  }
}

export default AllCategories;
