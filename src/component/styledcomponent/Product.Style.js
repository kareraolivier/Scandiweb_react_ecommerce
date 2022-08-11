import styled from "styled-components";

export const Images = styled.div`
  display: flex;
  margin: 0 0 4rem 0;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    width: 100%;
    justify-content: flex-start;
  }
`;
export const Smallimage = styled.div`
  min-width: 100px;
  display: flex;
  flex-direction: column;
  margin: 0 2rem 0 0;

  @media screen and (max-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const Onesmallimage = styled.div`
  margin: 1rem 0;
  width: 100px;
  height: 100px;
  @media screen and (max-width: 900px) {
    margin: 1rem 1rem;
  }
`;

export const Mainimage = styled.div`
  min-width: 500px;
  @media screen and (max-width: 900px) {
    min-width: 300px;
  }
`;
export const Image = styled.div`
  width: 580px;
  height: 500px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 900px) {
    padding: 0 1rem;
    width: 480px;
    height: 400px;
  }
  @media screen and (max-width: 500px) {
    padding: 0 1rem;
    width: 400px;
    height: 380px;
  }
  @media screen and (max-width: 400px) {
    padding: 0 1rem;
    width: 350px;
    height: 300px;
  }
`;

export const Productcontent = styled.div`
  padding: 0 2rem;
  width: 450px;
  @media screen and (max-width: 900px) {
    padding: 0 1rem;
    width: 100%;
  }
`;
