import React from "react";
import styled from "styled-components";
import { ShoppingCartOutlined } from "@ant-design/icons";
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <Positioner>
      <WhiteBackground>
        <HeaderContents>
          <Logo to="/home">BEERLIST</Logo>
          <Spacer />
          <Link style={{color : 'black'}} to="/cartlist">
          <ShoppingCartOutlined
            style={{ fontSize: "32px", cursor: "pointer" }}
          />
          </Link>
        </HeaderContents>
      </WhiteBackground>
      <GradientBorder />
    </Positioner>
  );
};

export default Header;

const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index : 15;
`;

const WhiteBackground = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  height: auto;
`;

const HeaderContents = styled.div`
  width: 1200px;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-right: 1rem;
  padding-left: 1rem;
`;

const Logo = styled(Link)`
  font-size: 1.4rem;
  letter-spacing: 2px;
  color: black;
  font-family: "Rajdhani";
  cursor: pointer;
  text-decoration: none;
`;
const Spacer = styled.div`
  flex-grow: 1;
`;
const GradientBorder = styled.div`
  height: 3px;
  background: black;
`;
