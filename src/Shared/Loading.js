import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const Loading = ({ type, color}) => {
  return (
    <Grid>
      <ReactLoading type={type} color={color} hieght={'100px'} width={"100px"} />
    </Grid>
  );
};

export default Loading;

const Grid = styled.div`
    position : fixed;
    top : 50%;
    left: 50%;
`;
