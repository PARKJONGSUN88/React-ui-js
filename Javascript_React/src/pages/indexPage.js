import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const IndexPage = (props) => {
  return (
    <>
      <h2>안녕하세요. JS UI page입니다.</h2>
      <Content onClick={() => props.history.push("/speeddial")}>
        Speed Dial UI page로 이동
      </Content>
      <Content onClick={() => props.history.push("/rating")}>
        Rating UI page로 이동
      </Content>
    </>
  );
};

export default withRouter(IndexPage);

const Content = styled.div`
  cursor: pointer;
  width: 250px;
  height: 100px;
  margin: 50px 0 0 50px;
  border: 1px solid blue;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
