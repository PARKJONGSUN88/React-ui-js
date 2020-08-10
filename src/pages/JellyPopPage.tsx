import React from 'react';
import styled from 'styled-components';
import JellyPop from '../components/JellyPop/JellyPop';

const JellyPopPage = () => {
  return (
    <>
      <Cover>
        <JellyPop direction={'right'} itemsWidth={200} button={<Button />} />
        <JellyPop direction={'right'} button={<Button />} items={<Items />} />
      </Cover>
      <Cover2>
        <JellyPop itemsHeight={200} button={<Button />} />
        <JellyPop button={<Button />} items={<Items />} />
      </Cover2>
    </>
  );
};

export default JellyPopPage;

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

const Button = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: 'skyblue',
          border: '1px solid black',
          width: 100,
          height: 100,
        }}
      />
    </>
  );
};

const Items = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: 'pink',
          width: 100,
          height: 100,
        }}
      />
    </>
  );
};
