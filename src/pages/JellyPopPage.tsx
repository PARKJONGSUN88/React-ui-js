import React from 'react';
import styled from 'styled-components';
import JellyPop from '../components/JellyPop/JellyPop';

const Cover = styled.div`
  position: fixed;
  top: 300px;
  left: 100px;
  /* display: flex; */
  /* flex-direction: row; */
  border: 1px solid black;
  /* background-color: skyblue; */
`;

const Cover2 = styled.div`
  width: 200px;
  height: 50px;
  border: 1px solid black;
`;

const RelayBoardPage = () => {
  return (
    <>
      <Cover>
        <JellyPop direction={'right'} />
        {/* <JellyPop /> */}
        {/* <Cover2 /> */}
        {/* <Cover2 /> */}
      </Cover>
    </>
  );
};

export default RelayBoardPage;
