import React, { Component } from "react";
import {
  Container,
  Mainhearding,
  Secondaryhearding,
  Allcard,
  Content,
  Masterhearding,
  Primarybutton,
} from "../GrobalStyle";
import {
  Smallimage,
  Mainimage,
  Productcontent,
  Onesmallimage,
  Image,
  Images,
} from "../component/styledcomponent/Product.Style";
import Size from "../component/Size";
import { Query } from "react-apollo";
import { SINGLE_PRODUCT } from "./api/graphql";
import { useParams } from "react-router-dom";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { id: null };
    this.state = { image: 0 };
  }
  componentDidMount = () => {
    const { id } = this.props.params;
    // console.log(this.props, id);
    this.getId(id);
  };

  getId = (id) => {
    setTimeout(() => {
      this.setState({
        id: id,
      });
    }, 10);
  };
  render() {
    const id = this.state.id;

    return (
      <Query query={SINGLE_PRODUCT} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <p>loading....</p>;
          if (error) return <p>error....</p>;

          const { id, name, category, description, gallery, brand } =
            data.product;

          return (
            <Container key={id}>
              <Allcard>
                <Images>
                  <Smallimage>
                    {data?.product?.gallery?.map((gallery, index) => {
                      return (
                        <Onesmallimage
                          onClick={(e) => {
                            this.setState({ image: index });
                          }}
                          key={index}
                        >
                          {" "}
                          <img
                            src={gallery}
                            alt="first"
                            width="100%"
                            height="100%"
                          />
                        </Onesmallimage>
                      );
                    })}
                  </Smallimage>
                  <Mainimage>
                    <Image color={this.state.color}>
                      <img
                        src={gallery[this.state.image]}
                        alt="shirt"
                        width="100%"
                        height="100%"
                      />
                    </Image>
                  </Mainimage>
                </Images>

                <Productcontent>
                  <Masterhearding>{brand}</Masterhearding>
                  <Mainhearding> {name}</Mainhearding>

                  <Content>
                    <h4>SIZE:</h4>
                    <Size
                      color="black"
                      bcolor="white"
                      text="XS"
                      onClick={(e) => {
                        this.setState({ color: "white", bcolor: "black" });
                      }}
                    />
                    <Size color="black" bcolor="white" text="S" />
                    <Size color="black" bcolor="white" text="M" />
                    <Size color="black" bcolor="white" text="L" />
                  </Content>

                  <Content>
                    <h4>COLOR:</h4>
                    <Size
                      color="white"
                      bcolor="#D3D2D5"
                      text=""
                      onClick={(e) => {
                        this.setState({ color: "#D3D2D5" });
                      }}
                    />
                    <Size
                      color="white"
                      bcolor="#2B2B2B"
                      text=""
                      onClick={(e) => {
                        this.setState({ color: "#2B2B2B" });
                      }}
                    />
                    <Size
                      color="white"
                      bcolor="#0F6450"
                      text=""
                      onClick={(e) => {
                        this.setState({ color: "#0F6450" });
                      }}
                    />
                  </Content>

                  <Content>
                    <h4>PRICE:</h4>
                    <Masterhearding>$ 50,00</Masterhearding>
                  </Content>
                  <Primarybutton>ADD TO CART</Primarybutton>
                  <Content>
                    <Secondaryhearding>{description}</Secondaryhearding>
                  </Content>
                </Productcontent>
              </Allcard>
            </Container>
          );
        }}
      </Query>
    );
  }
}

export default withParams(Product);
// export default Product;
