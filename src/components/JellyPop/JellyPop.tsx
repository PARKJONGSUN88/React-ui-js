import * as React from 'react';
import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface ItemsType {
  toggle: boolean;
}

const JellyPop: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Contents>
        <Title onClick={() => setToggle(!toggle)}>클릭</Title>
        <Items toggle={toggle}>
          <div>움직일 친구들</div>
          <div>움직일 친구들</div>
          <div>움직일 친구들</div>
        </Items>
      </Contents>
      <Contents>
        <Title></Title>
      </Contents>
      <Contents>
        <Title></Title>
      </Contents>
    </>
  );
};

export default JellyPop;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const Title = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 50px;
`;

const Items = styled.div<ItemsType>`
  border: 1px solid pink;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  ${({ toggle }) => {
    if (toggle)
      return css`
        animation: ${onMove(50, 200)} 1s cubic-bezier(0.75, -0.75, 0.25, 1.75)
          forwards;
      `;
    else
      return css`
        animation: ${onMove(200, 50)} 1s cubic-bezier(0.75, -0.75, 0.25, 1.75)
          forwards;
      `;
  }}
`;

const onMove = (e: number, i: number) => keyframes` 
  0% {
    height:${e}px;
  }
  100% {
    height:${i}px;
  }
`;
