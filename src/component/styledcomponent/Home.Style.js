import styled from "styled-components";

export const Cardimage = styled.div`
  margin: auto;
  width: 300px;
  height: 320px;

  @media screen and (max-width: 900px) {
  }
`;

export const Buyicon = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0;
  width: 30px;
  height: 27px;
  border-radius: 50% 50%;
  background-color: #5ece7b;
  padding: 1rem 0.7rem;
  margin: -30px -240px 30px 240px;
  cursor: pointer;
  @media screen and (max-width: 900px) {
  }
`;
export const Card = styled.div`
  width: 320px;
  height: 410px;
  padding: 10px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
  @media screen and (max-width: 900px) {
  }
`;
