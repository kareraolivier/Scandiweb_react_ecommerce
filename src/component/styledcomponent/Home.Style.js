import styled from "styled-components";

export const Cardimage = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 3px;
  @media screen and (max-width: 900px) {
  }
`;

export const Buyicon = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0;
  width: 40px;
  height: 35px;
  border-radius: 50% 50%;
  background-color: #5ece7b;
  padding: 1rem 0.7rem;
  margin: -25px -280px 25px 280px;
  cursor: pointer;
  @media screen and (max-width: 900px) {
  }
`;
export const Card = styled.div`
  width: 375px;
  height: 444px;
  padding: 10px;
  :hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
  @media screen and (max-width: 900px) {
  }
`;
