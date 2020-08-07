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

interface ButtonType {
  width: number;
  height: number;
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
  width = 200,
  height = 100,
  button = '클릭하세요',
  items = '내용입니다',
  direction = 'down',
  JellyWidth = 200,
  JellyHeight = 200,
  speed = 500,
}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Test>
      <Contents>
        <Button
          width={width}
          height={height}
          onClick={() => setToggle(!toggle)}
        >
          {button}
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
    </Test>
  );
};

export default JellyPop;

const Test = styled.div`
  /* overflow: hidden; */
`;

const Contents = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid blue;
  transform: rotate(-90deg);
`;

const Button = styled.div<ButtonType>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  transform: rotate(90deg);
  /* z-index: 2; */
`;

const Items = styled.div<ItemsType>`
  overflow: hidden;
  position: absolute;
  top: ${({ direction, height }) => direction === 'down' && height}px;
  bottom: ${({ direction, height }) => direction === 'up' && height}px;
  left: ${({ direction, width }) => direction === 'right' && width}px;
  right: ${({ direction, width }) => direction === 'left' && width}px;
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
    if ((direction === 'down' && toggle) || (direction === 'up' && toggle))
      return css`
        animation: ${onMove(JellyWidth, JellyWidth, 50, JellyHeight)} ${speed}ms
          cubic-bezier(1, 0.5, 0.5, 1.75) forwards;
      `;
    if ((direction === 'down' && !toggle) || (direction === 'up' && !toggle))
      return css`
        animation: ${onMove(JellyWidth, JellyWidth, JellyHeight, 50)} ${speed}ms
          cubic-bezier(1, 0.5, 0.5, 1.75) forwards;
      `;
    if ((direction === 'right' && toggle) || (direction === 'left' && toggle))
      return css`
        animation: ${onMove(0, JellyWidth, JellyHeight, JellyHeight)} ${speed}ms
          cubic-bezier(1, 0.5, 0.5, 1.75) forwards;
      `;
    if ((direction === 'right' && !toggle) || (direction === 'left' && !toggle))
      return css`
        animation: ${onMove(JellyWidth, 0, JellyHeight, JellyHeight)} ${speed}ms
          cubic-bezier(0.75, -0.5, 0, 0.5) forwards;
      `;
  }};
  border: 1px solid pink;
  width: ${({ JellyWidth }) => JellyWidth}px;
  height: ${({ JellyHeight }) => JellyHeight}px;
  & > div {
    transform: rotate(90deg);
  }
`;

const onMove = (e: number, i: number, y: number, z: number) => keyframes` 
  0% {
    /* transform:translate(${e}px, ${y}px); */
    width:${e}px;
    height:${y}px;
  }
  100% {
    /* transform:translate(${i}px, ${z}px); */
    width:${i}px;
    height:${z}px;
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
