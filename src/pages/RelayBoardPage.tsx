import React from 'react';
import styled from 'styled-components';
import RelayBoard from '../components/RelayBoard/RelayBoard';

const RelayBoardPage = () => {
  return (
    <>
      <Cover>
        <RelayBoard />
      </Cover>
      <Cover2>
        <RelayBoard direction={'row'} speed={20} userFunc={alert} />
      </Cover2>
    </>
  );
};

export default RelayBoardPage;

const Cover = styled.div`
  position: fixed;
  top: 50px;
  left: 100px;
  border: 1px solid black;
  background-color: skyblue;
`;

const Cover2 = styled.div`
  position: fixed;
  top: 150px;
  left: 100px;
  border: 1px solid black;
  background-color: skyblue;
`;
