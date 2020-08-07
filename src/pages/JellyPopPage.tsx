import React from 'react';
import styled from 'styled-components';
import JellyPop from '../components/JellyPop/JellyPop';

const Cover = styled.div`
  position: fixed;
  top: 100px;
  left: 100px;
  display: flex;
  border: 1px solid black;
`;

const Cover2 = styled.div`
  position: fixed;
  top: 400px;
  left: 100px;
  border: 1px solid black;
`;

const RelayBoardPage = () => {
  return (
    <>
      <Cover>
        <JellyPop direction={'right'} />
        <JellyPop direction={'right'} />
      </Cover>
      <Cover2>
        <JellyPop />
        <JellyPop />
      </Cover2>
    </>
  );
};

export default RelayBoardPage;
