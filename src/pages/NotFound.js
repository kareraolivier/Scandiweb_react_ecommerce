import React, { Component } from "react";
import {
  Container,
  Primarybutton,
  Allcard,
  Paragraph,
  Content,
  // Secondaryhearding,
} from "../GrobalStyle";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <Container>
        <Allcard>
          <Content>
            <Paragraph>Page NotFound</Paragraph>
            <br />
            <Link to="/">
              <Primarybutton>Go back to homepage</Primarybutton>
            </Link>
          </Content>
        </Allcard>
      </Container>
    );
  }
}

export default NotFound;
