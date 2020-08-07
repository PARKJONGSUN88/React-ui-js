import * as React from 'react';
import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface JellyPopType {
  width?: number;
  height?: number;
  button?: React.ReactElement | string | number;
  items?: React.ReactElement | string | number;
  direction?: 'up' | 'down' | 'left' | 'right';
  JellyWidth?: number;
  JellyHeight?: number;
  speed?: number;
}

interface ContentsType {
  direction: 'up' | 'down' | 'left' | 'right';
}

interface ButtonType {
  width: number;
  height: number;
  direction: 'up' | 'down' | 'left' | 'right';
}

interface ItemsType {
  toggle: boolean;
  width: number;
  height: number;
  direction: 'up' | 'down' | 'left' | 'right';
  JellyWidth: number;
  JellyHeight: number;
  speed: number;
}

const JellyPop: React.FC<JellyPopType> = ({
  width = 100,
  height = 100,
  button = '클릭하세요',
  items = '내용입니다',
  direction = 'down',
  JellyWidth = 100,
  JellyHeight = 100,
  speed = 500,
}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Contents direction={direction}>
      <Button
        width={width}
        height={height}
        direction={direction}
        onClick={() => setToggle(!toggle)}
      >
        <div>{button}</div>
      </Button>
      <Items
        toggle={toggle}
        width={width}
        height={height}
        direction={direction}
        JellyWidth={JellyWidth}
        JellyHeight={JellyHeight}
        speed={speed}
      >
        <div>
          {items}
          <br />
          {items}
          <br />
          {items}
          <br />
          {items}
          <br />
          {items}
        </div>
      </Items>
    </Contents>
  );
};

export default JellyPop;

const Contents = styled.div<ContentsType>`
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  /* flex-direction: column; */
  border: 1px solid skyblue;
  ${({ direction }) => {
    if (direction === 'down')
      return css`
        transform: rotate(0deg);
      `;
    if (direction === 'up')
      return css`
        transform: rotate(180deg);
      `;
    if (direction === 'right')
      return css`
        transform: rotate(-90deg);
      `;
    if (direction === 'left')
      return css`
        transform: rotate(90deg);
      `;
  }}
`;

const Button = styled.div<ButtonType>`
  width: ${({ width, height, direction }) =>
    direction === 'down' || direction === 'up' ? width : height}px;
  height: ${({ width, height, direction }) =>
    direction === 'down' || direction === 'up' ? height : width}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  & > div {
    ${({ direction }) => {
      if (direction === 'down')
        return css`
          transform: rotate(0deg);
        `;
      if (direction === 'up')
        return css`
          transform: rotate(180deg);
        `;
      if (direction === 'right')
        return css`
          transform: rotate(90deg);
        `;
      if (direction === 'left')
        return css`
          transform: rotate(-90deg);
        `;
    }}
  }
`;

const Items = styled.div<ItemsType>`
  overflow: hidden;
  /* top: ${({ width, height, direction }) =>
    direction === 'down' || direction === 'up' ? height : width}px; */
  width: ${({ JellyWidth, JellyHeight, direction }) =>
    direction === 'down' || direction === 'up' ? JellyWidth : JellyHeight}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ direction }) => {
    if (direction === 'down') return 'column';
    if (direction === 'up') return 'column-reverse';
    if (direction === 'right') return 'row';
    if (direction === 'left') return 'row-reverse';
  }};
  ${({ direction, toggle, JellyWidth, JellyHeight, speed }) => {
    if ((direction === 'down' || direction === 'up') && toggle)
      return css`
        animation: ${onMove(0, JellyHeight)} ${speed}ms
          cubic-bezier(1, 0.5, 0.5, 1.75) forwards;
      `;
    if ((direction === 'down' || direction === 'up') && !toggle)
      return css`
        animation: ${onMove(JellyHeight, 0)} ${speed}ms
          cubic-bezier(0.75, -0.5, 0, 0.5) forwards;
      `;
    if ((direction === 'right' || direction === 'left') && toggle)
      return css`
        animation: ${onMove(0, JellyWidth)} ${speed}ms
          cubic-bezier(1, 0.5, 0.5, 1.75) forwards;
      `;
    if ((direction === 'right' || direction === 'left') && !toggle)
      return css`
        animation: ${onMove(JellyWidth, 0)} ${speed}ms
          cubic-bezier(0.75, -0.5, 0, 0.5) forwards;
      `;
  }};
  border: 1px solid pink;

  & > div {
    ${({ direction }) => {
      if (direction === 'down')
        return css`
          transform: rotate(0deg);
        `;
      if (direction === 'up')
        return css`
          transform: rotate(180deg);
        `;
      if (direction === 'right')
        return css`
          transform: rotate(90deg);
        `;
      if (direction === 'left')
        return css`
          transform: rotate(-90deg);
        `;
    }}
  }
`;

const onMove = (e: number, i: number) => keyframes` 
  0% {
    height:${e}px;
  }
  100% {
    height:${i}px;
  }
`;

//(1, 0.5, 0.5, 1.75)
//(0.75, -0.5, 0.0, 0.5)

// ${({ toggle, direction, width, height, JellyWidth, JellyHeight, speed }) => {
//   if (toggle) {
//     if (direction === 'down')
//       return css`
//         top: ${height}px;
//         flex-direction: column;
//         animation: ${onMove(JellyWidth, JellyWidth, 0, JellyHeight)}
//           ${speed}ms cubic-bezier(1, 0.5, 0.5, 1.75) forwards;
//       `;
//     if (direction === 'up')
//       return css`
//         bottom: ${height}px;
//         flex-direction: column-reverse;
//         animation: ${onMove(JellyWidth, JellyWidth, 0, JellyHeight)}
//           ${speed}ms cubic-bezier(1, 0.5, 0.5, 1.75) forwards;
//       `;
//     if (direction === 'right')
//       return css`
//         left: ${width}px;
//         flex-direction: row;
//         animation: ${onMove(0, JellyWidth, JellyHeight, JellyHeight)}
//           ${speed}ms cubic-bezier(1, 0.5, 0.5, 1.75) forwards;
//       `;
//     if (direction === 'left')
//       return css`
//         right: ${width}px;
//         flex-direction: row-reverse;
//         animation: ${onMove(0, JellyWidth, JellyHeight, JellyHeight)}
//           ${speed}ms cubic-bezier(1, 0.5, 0.5, 1.75) forwards;
//       `;
//   } else {
//     if (direction === 'down')
//       return css`
//         top: ${height}px;
//         flex-direction: column;
//         animation: ${onMove(JellyWidth, JellyWidth, JellyHeight, 0)}
//           ${speed}ms cubic-bezier(0.75, -0.5, 0, 0.5) forwards;
//       `;
//     if (direction === 'up')
//       return css`
//         bottom: ${height}px;
//         flex-direction: column-reverse;
//         animation: ${onMove(JellyWidth, JellyWidth, JellyHeight, 0)}
//           ${speed}ms cubic-bezier(0.75, -0.5, 0, 0.5) forwards;
//       `;
//     if (direction === 'right')
//       return css`
//         left: ${width}px;
//         flex-direction: row;
//         animation: ${onMove(JellyWidth, 0, JellyHeight, JellyHeight)}
//           ${speed}ms cubic-bezier(0.75, -0.5, 0, 0.5) forwards;
//       `;
//     if (direction === 'left')
//       return css`
//         right: ${width}px;
//         flex-direction: row-reverse;
//         animation: ${onMove(JellyWidth, 0, JellyHeight, JellyHeight)}
//           ${speed}ms cubic-bezier(0.75, -0.5, 0, 0.5) forwards;
//       `;
//   }
// }}
