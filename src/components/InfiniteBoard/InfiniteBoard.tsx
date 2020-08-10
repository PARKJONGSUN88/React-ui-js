import * as React from 'react';
import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface InfiniteBoardType {
  ViewWidth?: number;
  ViewHeight?: number;
  direction?: 'row' | 'column';
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
  direction: 'row' | 'column';
  width: number;
  height: number;
  speed: number;
  count: number;
  toggle: boolean;
  second?: boolean;
}

const InfiniteBoard: React.FC<InfiniteBoardType> = ({
  ViewWidth = 300,
  ViewHeight = 300,
  direction = 'row',
  items = [
    { item: '1번째 사진입니다.', url: '1번 사진으로 이동' },
    { item: '2번째 사진입니다.', url: '2번 사진으로 이동' },
    { item: '3번째 사진입니다.', url: '3번 사진으로 이동' },
    { item: '4번째 사진입니다.', url: '4번 사진으로 이동' },
    { item: '5번째 사진입니다.', url: '5번 사진으로 이동' },
    { item: '6번째 사진입니다.', url: '6번 사진으로 이동' },
  ],
  width = 200,
  height = 200,
  speed = 10,
  userFunc = (e: string | number | boolean | null | undefined) =>
    console.log(e),
}) => {
  const [toggle, setToggle] = useState(true);

  return (
    <Contents ViewWidth={ViewWidth} ViewHeight={ViewHeight}>
      <Items
        onClick={() => setToggle(!toggle)}
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
        onClick={() => setToggle(!toggle)}
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ direction }) => direction};
  ${({
    direction,
    width,
    height,
    count,
    ViewWidth,
    ViewHeight,
    speed,
    toggle,
  }) =>
    direction === 'column'
      ? css`
          top: 0px;
          width: ${width}px;
          height: ${height * count}px;
          animation: ${onMove(
              ViewHeight,
              -(height * count + (height * count - ViewHeight)),
              0,
              0,
            )}
            ${speed}s ${toggle ? 'running' : 'paused'} linear infinite;
        `
      : css`
          left: 0px;
          width: ${width * count}px;
          height: ${height}px;
          animation: ${onMove(
              0,
              0,
              ViewWidth,
              -(width * count + (width * count - ViewWidth)),
            )}
            ${speed}s ${toggle ? 'running' : 'paused'} linear infinite;
        `};
  ${({ direction, second, ViewWidth, ViewHeight }) =>
    second && direction === 'column'
      ? css`
          transform: translateY(${ViewHeight}px);
        `
      : css`
          transform: translateX(${ViewWidth}px);
        `};
  z-index: ${({ second }) => (second ? 2 : 1)};
  animation-delay: ${({ second, speed }) => second && speed / 2}s;
  /* background-color: ${({ second }) => (second ? 'pink' : 'skyblue')}; */
  & > div {
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid black; */
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
