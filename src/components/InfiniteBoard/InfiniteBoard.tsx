import * as React from 'react';
import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface InfiniteBoardType {
  ViewWidth?: number;
  ViewHeight?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  items?: Array<ArrayType>;
  width?: number;
  height?: number;
  speed?: number;
  userFunc?: Function;
}

interface ArrayType {
  item: React.ReactElement | string | number;
  url?: string | number | boolean | null | undefined;
}

interface ContentsType {
  ViewWidth: number;
  ViewHeight: number;
}

interface ItemsType {
  ViewWidth: number;
  ViewHeight: number;
  direction: 'left' | 'right' | 'up' | 'down';
  width: number;
  height: number;
  speed: number;
  count: number;
  toggle: boolean;
  second?: boolean;
}

const InfiniteBoard: React.FC<InfiniteBoardType> = ({
  ViewWidth = 200,
  ViewHeight = 200,
  direction = 'left',
  items = [
    { item: '1번째 사진입니다.', url: '1번 사진으로 이동' },
    { item: '2번째 사진입니다.', url: '2번 사진으로 이동' },
    { item: '3번째 사진입니다.', url: '3번 사진으로 이동' },
  ],
  width = 100,
  height = 100,
  speed = 10,
  userFunc = (e: string | number | boolean | null | undefined) =>
    console.log(e),
}) => {
  const [toggle, setToggle] = useState(true);

  return (
    <Contents
      ViewWidth={ViewWidth}
      ViewHeight={ViewHeight}
      onClick={() => setToggle(!toggle)}
    >
      <Items
        ViewWidth={ViewWidth}
        ViewHeight={ViewHeight}
        direction={direction}
        speed={speed}
        width={width}
        height={height}
        count={items.length}
        toggle={toggle}
      >
        {items.map((item, index) => (
          <div key={index} onClick={() => userFunc(items[index].url)}>
            {item.item}
          </div>
        ))}
      </Items>
      <Items
        ViewWidth={ViewWidth}
        ViewHeight={ViewHeight}
        direction={direction}
        speed={speed}
        width={width}
        height={height}
        count={items.length}
        toggle={toggle}
        second={true}
      >
        {items.map((item, index) => (
          <div key={index} onClick={() => userFunc(items[index].url)}>
            {item.item}
          </div>
        ))}
      </Items>
    </Contents>
  );
};

export default InfiniteBoard;

const Contents = styled.div<ContentsType>`
  position: relative;
  width: ${({ ViewWidth }) => ViewWidth}px;
  height: ${({ ViewHeight }) => ViewHeight}px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Items = styled.div<ItemsType>`
  position: absolute;
  top: ${({ direction }) => direction === 'up' && 0}px;
  bottom: ${({ direction }) => direction === 'down' && 0}px;
  left: ${({ direction }) => direction === 'left' && 0}px;
  right: ${({ direction }) => direction === 'right' && 0}px;
  width: ${({ direction, width, count, ViewWidth }) =>
    direction === 'left' || direction === 'right'
      ? width * count >= ViewWidth
        ? width * count
        : ViewWidth
      : width}px;
  height: ${({ direction, height, count, ViewHeight }) =>
    direction === 'up' || direction === 'down'
      ? height * count >= ViewHeight
        ? height * count
        : ViewHeight
      : height}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: ${({ direction }) => {
    if (direction === 'up') return 'column';
    if (direction === 'down') return 'column-reverse';
    if (direction === 'left') return 'row';
    if (direction === 'right') return 'row-reverse';
  }};
  animation: ${({ toggle }) => (toggle ? 'running' : 'paused')} linear infinite
    ${({ speed }) => speed}s
    ${({ direction, width, height, count, ViewWidth, ViewHeight }) => {
      if (direction === 'up') {
        if (height * count >= ViewHeight)
          return css`
            ${onMove(
              0,
              0,
              ViewHeight,
              -(height * count + (height * count - ViewHeight)),
            )};
          `;
        else
          return css`
            ${onMove(0, 0, ViewHeight, -ViewHeight)};
          `;
      }
      if (direction === 'down') {
        if (height * count >= ViewHeight)
          return css`
            ${onMove(
              0,
              0,
              -ViewHeight,
              height * count + (height * count - ViewHeight),
            )};
          `;
        else
          return css`
            ${onMove(0, 0, -ViewHeight, ViewHeight)};
          `;
      }
      if (direction === 'left') {
        if (width * count >= ViewWidth)
          return css`
            ${onMove(
              ViewWidth,
              -(width * count + (width * count - ViewWidth)),
              0,
              0,
            )};
          `;
        else
          return css`
            ${onMove(ViewWidth, -ViewWidth, 0, 0)};
          `;
      }
      if (direction === 'right') {
        if (width * count >= ViewWidth)
          return css`
            ${onMove(
              -ViewWidth,
              width * count + (width * count - ViewWidth),
              0,
              0,
            )};
          `;
        else
          return css`
            ${onMove(-ViewWidth, ViewWidth, 0, 0)};
          `;
      }
    }};
  animation-delay: ${({ second, speed }) => second && speed / 2}s;
  z-index: ${({ second }) => (second ? 1 : 2)};
  ${({ direction, second, ViewWidth, ViewHeight }) => {
    if (second) {
      if (direction === 'up')
        return css`
          transform: translateY(${ViewHeight}px);
        `;
      if (direction === 'down')
        return css`
          transform: translateY(${-ViewHeight}px);
        `;
      if (direction === 'left')
        return css`
          transform: translateX(${ViewWidth}px);
        `;
      if (direction === 'right')
        return css`
          transform: translateX(${-ViewWidth}px);
        `;
    }
  }};
  & > div {
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const onMove = (e: number, i: number, y: number, z: number) => keyframes` 
  0% {
    transform: translate(${e}px, ${y}px);
  }
  100% {
    transform: translate(${i}px, ${z}px);
  }
`;
