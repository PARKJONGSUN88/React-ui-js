import * as React from 'react';
import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface RelayBoardType {
  ViewWidht?: number;
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
  ViewWidht: number;
  ViewHeight: number;
  direction: 'row' | 'column';
}

interface ItemsType {
  ViewWidht: number;
  ViewHeight: number;
  direction: 'row' | 'column';
  width: number;
  height: number;
  speed: number;
  count: number;
  toggle: boolean;
}

const RelayBoard: React.FC<RelayBoardType> = ({
  ViewWidht = 400,
  ViewHeight = 50,
  direction = 'column',
  items = [
    { item: '1번째 공지사항입니다.', url: '1번 공지사항으로 이동' },
    { item: '2번째 공지사항입니다.', url: '2번 공지사항으로 이동' },
    { item: '3번째 공지사항입니다.', url: '3번 공지사항으로 이동' },
    { item: '4번째 공지사항입니다.', url: '4번 공지사항으로 이동' },
    { item: '5번째 공지사항입니다.', url: '5번 공지사항으로 이동' },
    { item: '6번째 공지사항입니다.', url: '6번 공지사항으로 이동' },
  ],
  width = 400,
  height = 50,
  speed = 10,
  userFunc = (e: string | number | boolean | null | undefined) =>
    console.log(e),
}) => {
  const [toggle, setToggle] = useState(true);

  return (
    <Contents
      ViewWidht={ViewWidht}
      ViewHeight={ViewHeight}
      direction={direction}
    >
      <Items
        ViewWidht={ViewWidht}
        ViewHeight={ViewHeight}
        direction={direction}
        speed={speed}
        width={width}
        height={height}
        count={items.length}
        toggle={toggle}
      >
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              userFunc(items[index].url);
              setToggle(!toggle);
            }}
          >
            {item.item}
          </div>
        ))}
      </Items>
    </Contents>
  );
};

export default RelayBoard;

const Contents = styled.div<ContentsType>`
  width: ${({ ViewWidht }) => ViewWidht}px;
  height: ${({ ViewHeight }) => ViewHeight}px;
  overflow: hidden;
  display: flex;
  ${({ direction }) =>
    direction === 'column'
      ? css`
          align-items: flex-end;
          justify-content: center;
        `
      : css`
          align-items: center;
          justify-content: flex-end;
        `};
`;

const Items = styled.div<ItemsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ direction }) => direction};
  ${({
    direction,
    width,
    height,
    count,
    ViewWidht,
    ViewHeight,
    speed,
    toggle,
  }) =>
    direction === 'column'
      ? css`
          width: ${width}px;
          height: ${height * count}px;
          animation: ${onMove(
              height * count - height * 0.25,
              -ViewHeight + height * 0.25,
              0,
              0,
            )}
            ${speed}s ${toggle ? 'running' : 'paused'} linear infinite;
        `
      : css`
          width: ${width * count}px;
          height: ${height}px;
          animation: ${onMove(
              0,
              0,
              width * count - width * 0.25,
              -ViewWidht + width * 0.25,
            )}
            ${speed}s ${toggle ? 'running' : 'paused'} linear infinite;
        `};
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
    transform: translate(${y}px, ${e}px);
  }
  100% {
    transform: translate(${z}px, ${i}px);
  }
`;
