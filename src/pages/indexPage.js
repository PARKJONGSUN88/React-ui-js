import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const IndexPage = ({ history }) => {
  return (
    <>
      <h2>안녕하세요. React-ui-js입니다.</h2>
      <Content onClick={() => history.push('/CardFanningPage')}>
        CardFanning로 이동
      </Content>
      <Content onClick={() => history.push('/SpeedDialPage')}>
        SpeedDial로 이동
      </Content>
      <Content onClick={() => history.push('/QuickButtonPage')}>
        QuickButton로 이동
      </Content>
      <Content onClick={() => history.push('/JellyPopPage')}>
        JellyPopPage로 이동
      </Content>
      <Content onClick={() => history.push('/RelayBoardPage')}>
        RelayBoardPage로 이동
      </Content>
      <Content onClick={() => history.push('/InfiniteBoardPage')}>
        InfiniteBoardPage로 이동
      </Content>
      <Content onClick={() => history.push('/SliderPage')}>
        SliderPage로 이동
      </Content>
      <Content onClick={() => history.push('/SliderThreePage')}>
        SliderThreePage로 이동
      </Content>
    </>
  );
};

export default withRouter(IndexPage);

const Content = styled.div`
  cursor: pointer;
  width: 250px;
  height: 50px;
  margin: 20px 0 0 50px;
  border: 1px solid blue;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
