import styled from "styled-components";

export const Container = styled.div`
  font-family: "Raleway", sans-serif;
  margin: 0 4rem;
  padding: 6rem 0;
  background: #ffffff;
  @media screen and (max-width: 900px) {
    margin: 0 1rem;
    padding: 5rem 0;
  }
`;
export const Allcard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem 0 0 0;
  @media screen and (min-width: 1600px) {
    justify-content: space-around;
  }
  @media screen and (max-width: 1354px) {
    justify-content: space-around;
  }

  @media screen and (max-width: 900px) {
  }
`;
export const Masterhearding = styled.h1`
  font-weight: 600;
  @media screen and (max-width: 900px) {
  }
`;

export const Mainhearding = styled.h2`
  font-weight: 300;
  @media screen and (max-width: 900px) {
  }
`;
export const Secondaryhearding = styled.h3`
  font-weight: 500;
  font-size: 20px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 900px) {
  }
`;

export const Paragraph = styled.p`
  font-weight: 300;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: #8d8f9a;
  @media screen and (max-width: 900px) {
  }
`;

export const Content = styled.div`
  padding: 2rem 0.7rem;
  @media screen and (max-width: 900px) {
  }
`;
export const Textwrapper = styled.span`
  font-weight: 500;
  font-size: 20px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 900px) {
  }
`;
export const Row = styled.div`
  @media screen and (max-width: 900px) {
  }
`;

export const Column = styled.div`
  @media screen and (max-width: 900px) {
  }
`;
export const Cart = styled.div`
  @media screen and (max-width: 900px) {
  }
`;
export const Primarybutton = styled.button`
  width: 16rem;
  height: 4rem;
  color: white;
  background-color: #5ece7b;
  border: none;

  @media screen and (max-width: 900px) {
  }
`;
