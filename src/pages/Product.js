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
import { images } from "../constants";
import Size from "../component/Size";
// import { useRouter } from "react-router-dom";
import { Query } from "react-apollo";
import { SINGLE_PRODUCT } from "./api/graphql";

class Product extends Component {
  // constructor(props) {
  //     super(props);
  // }
  state = {};

  render() {
    // const router = useRouter();
    // const { id } = router.query;
    // console.log(id);
    return (
      <>
        {/* <Query query={SINGLE_PRODUCT}>
          {({ loading, error, data }) => {
            console.log(data);
            if (loading) return <p>loading....</p>;
            if (error) return <p>error....</p>;
            return ( */}
        <Container>
          <Mainhearding>Single product</Mainhearding>
          <Allcard>
            <Images>
              <Smallimage>
                <Onesmallimage>
                  {" "}
                  <img
                    src={images.Product}
                    alt="first"
                    width="100%"
                    height="100%"
                  />
                </Onesmallimage>
                <Onesmallimage>
                  {" "}
                  <img
                    src={images.Product}
                    alt="first"
                    width="100%"
                    height="100%"
                  />
                </Onesmallimage>
                <Onesmallimage>
                  {" "}
                  <img
                    src={images.Product}
                    alt="first"
                    width="100%"
                    height="100%"
                  />
                </Onesmallimage>
              </Smallimage>
              <Mainimage>
                <Image>
                  <img
                    src={images.Product}
                    alt="shirt"
                    width="100%"
                    height="100%"
                  />
                </Image>
              </Mainimage>
            </Images>
            <Productcontent>
              <Masterhearding>Apollo</Masterhearding>
              <Mainhearding>Running short</Mainhearding>

              <Content>
                <h4>SIZE:</h4>
                <Size color="black" bcolor="white" text="XS" />
                <Size color="white" bcolor="black" text="S" />
                <Size color="black" bcolor="white" text="M" />
                <Size color="black" bcolor="white" text="L" />
              </Content>

              <Content>
                <h4>COLOR:</h4>
                <Size color="white" bcolor="black" text="" />
                <Size color="white" bcolor="#5ECE7B" text="" />
                <Size color="white" bcolor="white" text="" />
              </Content>

              <Content>
                <h4>PRICE:</h4>
                <Masterhearding>$ 50,00</Masterhearding>
              </Content>
              <Primarybutton>ADD TO CART</Primarybutton>
              <Content>
                <Secondaryhearding>
                  Find stunning women's cocktail dresses and party dresses.
                  Stand out in lace and metallic cocktail dresses and party
                  dresses from all your favorite brands.
                </Secondaryhearding>
              </Content>
            </Productcontent>
          </Allcard>
        </Container>
        {/* );
          }}
        </Query> */}
      </>
    );
  }
}

export default Product;
