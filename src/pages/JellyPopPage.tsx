import React from 'react';
import styled from 'styled-components';
import JellyPop from '../components/JellyPop/JellyPop';

const Cover = styled.div`
  position: fixed;
  top: 100px;
  left: 100px;
  display: flex;
`;

const Cover2 = styled.div`
  position: fixed;
  top: 300px;
  left: 100px;
`;

const JellyPopPage = () => {
  return (
    <>
      <Cover>
        <JellyPop direction={'right'} itemsWidth={200} />
        <JellyPop direction={'right'} />
      </Cover>
      <Cover2>
        <JellyPop itemsHeight={300} />
        <JellyPop />
      </Cover2>
    </>
  );
};

export default JellyPopPage;
