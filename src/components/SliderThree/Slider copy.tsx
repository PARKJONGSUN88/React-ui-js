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
  state: number;
  index: number;
  length: number;
  start: boolean;
  second?: boolean;
  plus?: boolean;
}

const Slider: React.FC<InfiniteBoardType> = ({
  ViewWidth = 400,
  ViewHeight = 500,
  direction = 'left',
  items = [
    { item: '1번째 사진입니.', url: '1번 사진으로 이동' },
    { item: '2번째 사진입니다.', url: '2번 사진으로 이동' },
    { item: '3번째 사진입니다.', url: '3번 사진으로 이동' },
  ],
  width = 400,
  height = 400,
  speed = 500,
  userFunc = (e: string | number | boolean | null | undefined) =>
    console.log(e),
}) => {
  const [state, setNum] = useState(items.length);
  const [start, setStart] = useState(false);
  const [plus, setPlus] = useState(true);

  return (
    <>
      {state !== items.length ? state + 1 : 1} {plus}
      <div
        onClick={() => {
          setNum(state < items.length ? state + 1 : 1);
          setStart(true);
          setPlus(true);
        }}
      >
        앞으로가기
      </div>
      <div
        onClick={() => {
          setNum(state > 1 ? state - 1 : items.length);
          setStart(true);
          setPlus(false);
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
            width={width}
            height={height}
            speed={speed}
            start={start}
            count={items.length}
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
  width: ${({ ViewWidth }) => ViewWidth}px;
  height: ${({ ViewHeight }) => ViewHeight}px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* overflow: hidden; */
  border: 1px solid pink;
`;

const Items = styled.div<ItemsType>`
  width: ${({ ViewWidth }) => ViewWidth}px;
  height: ${({ ViewHeight }) => ViewHeight}px;
  position: absolute;
  top: ${({ direction }) => direction === 'up' && 0}px;
  bottom: ${({ direction }) => direction === 'down' && 0}px;
  left: ${({ direction }) => direction === 'left' && 0}px;
  right: ${({ direction }) => direction === 'right' && 0}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: ${({ direction }) => {
    if (direction === 'up') return 'column';
    if (direction === 'down') return 'column-reverse';
    if (direction === 'left') return 'row';
    if (direction === 'right') return 'row-reverse';
  }};
  ${({ state, index, start, speed, length, plus, ViewWidth }) => {
    if (plus) {
      if (index === state) {
        return css`
          animation: ${onMove(0, -ViewWidth, 0, 0)} linear forwards
            ${start ? speed : 0}ms;
        `;
      }
      if ((index === 1 && state === length) || index === state + 1) {
        return css`
          animation: ${onMove(ViewWidth, 0, 0, 0)} ${start ? speed : 0}ms linear
            forwards;
        `;
      } else {
        return css`
          visibility: hidden;
        `;
      }
    } else {
      if (index === state + 1 || (index === 1 && state === length)) {
        return css`
          animation: ${onMove(-ViewWidth, 0, 0, 0)} linear forwards
            ${start ? speed : 0}ms;
        `;
      }
      if (
        index === state + 2 ||
        (index === 2 && state === length) ||
        (index === 1 && state === length - 1)
      ) {
        return css`
          animation: ${onMove(0, ViewWidth, 0, 0)} ${start ? speed : 0}ms linear
            forwards;
        `;
      } else {
        return css`
          visibility: hidden;
        `;
      }
    }
  }};
  & > div {
    padding: 10px;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${({ start }) => start && onRotate()} 1s;
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

const onRotate = () => keyframes` 
  0% {
    transform: perspective(800px) rotateY(0deg) ;
  }
  100% {
    transform: perspective(800px) rotateY(25deg) ;
  }
`;
