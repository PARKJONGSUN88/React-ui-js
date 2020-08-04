import * as React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface RelayBoardType {
  items?: Array<ArrayType>;
  width?: number;
  height?: number;
  direction?: 'row' | 'column';
  speed?: number;
  ViewWidht?: number;
  ViewHeight?: number;
}

interface ContentsType {
  ViewWidht: number;
  ViewHeight: number;
  direction: 'row' | 'column';
}

interface ArrayType {
  item: string | number | null;
  url?: string | number | null;
}

interface ItemsType {
  ViewWidht: number;
  ViewHeight: number;
  direction: 'row' | 'column';
  speed: number;
  width: number;
  height: number;
  count: number;
}

const RelayBoard: React.FC<RelayBoardType> = ({
  items = [
    { item: '1번째', url: '1' },
    { item: '2번째', url: '2' },
    { item: '3번째', url: '3' },
    { item: '4번째', url: '4' },
    { item: '5번째', url: '1' },
    { item: '6번째', url: '2' },
    { item: '7번째', url: '3' },
    { item: '8번째', url: '4' },
  ],
  width = 500,
  height = 80,
  direction = 'column',
  speed = 50,
  ViewWidht = 600,
  ViewHeight = 100,
}) => {
  return (
    <Contents
      ViewWidht={ViewWidht}
      ViewHeight={ViewHeight}
      direction={direction}
    >
      <div>
        <Items
          ViewWidht={ViewWidht}
          ViewHeight={ViewHeight}
          direction={direction}
          speed={speed}
          width={width}
          height={height}
          count={items.length}
        >
          {items.map((item, index) => (
            <div key={index}>{item.item}</div>
          ))}
        </Items>
      </div>
    </Contents>
  );
};

export default RelayBoard;

const Contents = styled.div<ContentsType>`
  width: ${(props) => props.ViewWidht}px;
  height: ${(props) => props.ViewHeight}px;
  overflow: hidden;
  display: flex;
  ${(props) => {
    if (props.direction === 'column')
      return css`
        justify-content: center;
        align-items: flex-end;
      `;
    else {
      return css`
        justify-content: flex-end;
        align-items: center;
      `;
    }
  }}
  background-color: pink;
`;

const Items = styled.div<ItemsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => {
    if (props.direction === 'column')
      return css`
        width: ${props.width}px;
        height: ${props.height * props.count}px;
        flex-direction: ${props.direction};
      `;
    else {
      return css`
        width: ${props.width * props.count}px;
        height: ${props.height}px;
        flex-direction: ${props.direction};
      `;
    }
  }} 


  
  animation: ${(props) =>
    props.direction === 'column'
      ? onMove(
          props.height * props.count - props.height * 0.25,
          -props.ViewHeight + props.height * 0.25,
          0,
          0,
        )
      : onMove(
          0,
          0,
          props.width * props.count - props.width * 0.25,
          -props.ViewWidht + props.width * 0.25,
        )}
    ${(props) => props.speed}s linear forwards;
  & > div {
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: skyblue;
    border: 1px solid black;
  }
`;

const onMove = (e: number, i: number, y: number, z: number) => keyframes` 
  0% {
    transform: translate(${y}px, ${e}px);
  }
  100% {
    transform: translate(${z}px, ${i}px);
  }
`;
