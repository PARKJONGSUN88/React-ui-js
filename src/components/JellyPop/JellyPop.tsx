import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

interface ItemsType {
  toggle: boolean;
}

const JellyPop: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Contents>
      <Title onClick={() => setToggle(!toggle)}>클릭</Title>
      <Items toggle={toggle}>
        <div>움직일 친구들</div>
        <div>움직일 친구들</div>
        <div>움직일 친구들</div>
      </Items>
    </Contents>
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
  height: 100px;
`;

const Items = styled.div<ItemsType>`
  border: 1px solid pink;
  overflow: hidden;
  width: 100%;
  height: ${({ toggle }) => (toggle ? 500 : 0)}px;
`;
