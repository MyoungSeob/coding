import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import beer from "../Shared/beerHome.webp";
const Home = ({ history }) => {
  return (
    <>
      <Grid>
        <HomeImage src={beer} />
        <FloatButtonGrid >
          <FloatButton to="/beerlist">
            GO TO THE BEERLIST
          </FloatButton>
        </FloatButtonGrid>
      </Grid>
    </>
  );
};

export default Home;

const HomeImage = styled.img`
  width: 100%;
  height: 100%;
  margin: auto;
  padding: auto;
`;
const Grid = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const FloatButtonGrid = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  margin: auto;
  padding: auto;
  position: absolute;
  display: flex;
`;
const FloatButton = styled(Link)`
  width: 300px;
  height: 55px;
  margin: auto;
  background: white;
  border-radius: 50px;
  border: 0;
  display: flex;

  justify-content: center;
  color: black;
  font-size: 1.4rem;
  letter-spacing: 2px;
  font-family: "Rajdhani";
  text-decoration: none;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: black;
    transition-duration: 0.3s;
    transition-property: color, background-color;
  }
`;
