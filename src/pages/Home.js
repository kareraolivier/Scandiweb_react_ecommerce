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
import { Link } from "react-router-dom";
import { images } from "../constants";
import { Query } from "react-apollo";
import { GET_CATEGORY } from "./api/graphql";

class AllCategories extends Component {
  state = {};

  render() {
    return (
      <Query query={GET_CATEGORY}>
        {({ loading, error, data }) => {
          if (loading) return <p>loading....</p>;
          if (error) return <p>error....</p>;
          return (
            <Container>
              {data?.categories?.map((category) => {
                return (
                  <Container key={category.name}>
                    <Mainhearding>{category.name} </Mainhearding>
                    <Allcard>
                      {category?.products?.map((product) => {
                        return (
                          <Card key={product.id}>
                            <Link to={`/product/${product.id}`}>
                              <Cardimage>
                                <img
                                  src={product.gallery[0]}
                                  alt="product"
                                  width="100%"
                                  height="100%"
                                />
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
                                <Paragraph>{product.name}</Paragraph>
                                <Secondaryhearding>$50,00</Secondaryhearding>
                              </Content>
                            </Link>
                          </Card>
                        );
                      })}
                    </Allcard>
                  </Container>
                );
              })}
            </Container>
          );
        }}
      </Query>
    );
  }
}

export default AllCategories;
