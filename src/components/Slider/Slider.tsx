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
  state: number;
  index: number;
  length: number;
  plus?: boolean;
}

const Slider: React.FC<InfiniteBoardType> = ({
  ViewWidth = 500,
  ViewHeight = 500,
  direction = 'left',
  items = [
    { item: '1번째 사진입니다.', url: '1번 사진으로 이동' },
    { item: '2번째 사진입니다.', url: '2번 사진으로 이동' },
    { item: '3번째 사진입니다.', url: '3번 사진으로 이동' },
    { item: '4번째 사진입니다.', url: '4번 사진으로 이동' },
    { item: '5번째 사진입니다.', url: '5번 사진으로 이동' },
    { item: '6번째 사진입니다.', url: '6번 사진으로 이동' },
  ],
  width = 500,
  height = 500,
  speed = 500,
  userFunc = (e: string | number | boolean | null | undefined) =>
    console.log(e),
}) => {
  const [toggle, setToggle] = useState(false);
  const [state, setNum] = useState(items.length);
  const [plus, setPlus] = useState(true);

  return (
    <>
      {state !== items.length ? state + 1 : 1} {plus}
      <div
        onClick={() => {
          setNum(state < items.length ? state + 1 : 1);
          setToggle(true);
          setPlus(true);
        }}
      >
        앞으로가기
      </div>
      <div
        onClick={() => {
          {
            setNum(state > 1 ? state - 1 : items.length);
            setToggle(true);
            setPlus(false);
          }
        }}
      >
        뒤로가기
      </div>
      <Contents ViewWidth={ViewWidth} ViewHeight={ViewHeight}>
        {items.map((item, index) => (
          <Items
            ViewWidth={ViewWidth}
            ViewHeight={ViewHeight}
            direction={direction}
            speed={speed}
            width={width}
            height={height}
            count={items.length}
            toggle={toggle}
            state={state}
            index={index + 1}
            length={items.length}
            plus={plus}
          >
            <div key={index} onClick={() => userFunc(items[index].url)}>
              {item.item}
            </div>
          </Items>
        ))}
      </Contents>
    </>
  );
};

export default Slider;

const Contents = styled.div<ContentsType>`
  position: relative;
  width: ${({ ViewWidth }) => ViewWidth}px;
  height: ${({ ViewHeight }) => ViewHeight}px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* overflow: hidden; */
  border: 1px solid pink;
`;

const Items = styled.div<ItemsType>`
  position: absolute;
  top: ${({ direction }) => direction === 'up' && 0}px;
  bottom: ${({ direction }) => direction === 'down' && 0}px;
  left: ${({ direction }) => direction === 'left' && 0}px;
  right: ${({ direction }) => direction === 'right' && 0}px;
  width: 500px;
  height: ${({ direction, height, count, ViewHeight }) =>
    direction === 'up' || direction === 'down'
      ? height * count >= ViewHeight
        ? height * count
        : ViewHeight
      : height}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* background: white; */
  flex-direction: ${({ direction }) => {
    if (direction === 'up') return 'column';
    if (direction === 'down') return 'column-reverse';
    if (direction === 'left') return 'row';
    if (direction === 'right') return 'row-reverse';
  }};
  ${({ state, index, toggle, speed, length, plus }) => {
    if (plus) {
      if (index === state) {
        return css`
          animation: ${onMove(0, -500, 0, 0)} linear forwards
            ${toggle ? speed : 0}ms;
          /* z-index: 2; */
        `;
      }
      if ((index === 1 && state === length) || index === state + 1) {
        return css`
          animation: ${onMove(500, 0, 0, 0)} ${toggle ? speed : 0}ms linear
            forwards;
          /* z-index: 2; */
        `;
      } else {
        return css`
          visibility: hidden;
        `;
      }
    } else {
      if (index === state + 1 || (index === 1 && state === length)) {
        return css`
          animation: ${onMove(-500, 0, 0, 0)} linear forwards
            ${toggle ? speed : 0}ms;
          /* z-index: 2; */
        `;
      }
      if (
        index === state + 2 ||
        (index === 2 && state === length) ||
        (index === 1 && state === length - 1)
      ) {
        return css`
          animation: ${onMove(0, 500, 0, 0)} ${toggle ? speed : 0}ms linear
            forwards;
          /* z-index: 2; */
        `;
      } else {
        return css`
          visibility: hidden;
        `;
      }
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
