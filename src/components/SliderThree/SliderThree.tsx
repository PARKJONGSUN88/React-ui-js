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

interface ControllerType {
  width: number;
  height: number;
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
  plus?: boolean;
}

const Slider: React.FC<InfiniteBoardType> = ({
  ViewWidth = 800,
  ViewHeight = 500,
  direction = 'left',
  items = [
    { item: '1', url: '1번 사진으로 이동' },
    { item: '2', url: '2번 사진으로 이동' },
    { item: '3', url: '3번 사진으로 이동' },
    { item: '4', url: '1번 사진으로 이동' },
    { item: '5', url: '2번 사진으로 이동' },
    { item: '6', url: '3번 사진으로 이동' },
  ],
  width = 300,
  height = 300,
  speed = 500,
  userFunc = (e: string | number | boolean | null | undefined) =>
    console.log(e),
}) => {
  const [state, setNum] = useState(1);
  const [start, setStart] = useState(false);
  const [plus, setPlus] = useState(true);

  return (
    <>
      <Contents ViewWidth={ViewWidth} ViewHeight={ViewHeight}>
        <Controller width={width} height={height}>
          <div
            onClick={() => {
              setNum(state < items.length ? state + 1 : 1);
              setStart(true);
              setPlus(true);
            }}
          ></div>
          <div
            onClick={() => {
              setNum(state > 1 ? state - 1 : items.length);
              setStart(true);
              setPlus(false);
            }}
          ></div>
        </Controller>

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
  overflow: hidden;
  border: 1px solid pink;
`;

const Controller = styled.div<ControllerType>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    width: ${({ width }) => width}px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
  }
`;

const Items = styled.div<ItemsType>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: ${({ direction }) => {
    if (direction === 'up') return 'column';
    if (direction === 'down') return 'column-reverse';
    if (direction === 'left') return 'row';
    if (direction === 'right') return 'row-reverse';
  }};
  ${({ state, index, start, speed, length, plus, ViewWidth, height }) => {
    if (plus) {
      if (state === index) {
        // 최종 센터
        return css`
          animation: ${onMove(ViewWidth / 3, 0, 0, 0, 0.5, 1)} linear forwards
            ${start ? speed : 0}ms;
          z-index: 2;
        `;
      }
      if (state === index + 1 || (state === 1 && index === length)) {
        // 최종 좌1
        return css`
          animation: ${onMove(0, -ViewWidth / 3, 0, height / 8, 1, 0.5)} linear
            forwards ${start ? speed : 0}ms;
        `;
      }
      if (
        state === index + 2 ||
        (state === 1 && index === length - 1) ||
        (state === 2 && index === length)
      ) {
        // 최종 좌2
        return css`
          animation: ${onMove(
              -ViewWidth / 3,
              (2 * -ViewWidth) / 3,
              height / 8,
              height / 8,
              0.5,
              0,
            )}
            linear forwards ${start ? speed : 0}ms;
        `;
      }
      if (state === index - 1 || (state === length && index === 1)) {
        // 최종 우1
        return css`
          animation: ${onMove(
              (2 * ViewWidth) / 3,
              ViewWidth / 3,
              height / 8,
              height / 8,
              0,
              0.5,
            )}
            linear forwards ${start ? speed : 0}ms;
        `;
      } else {
        return css`
          visibility: hidden;
        `;
      }
      // 뒤록가기
    } else {
      if (state === index) {
        // 최종 센터
        return css`
          animation: ${onMove(-ViewWidth / 3, 0, 0, 0, 0.5, 1)} linear forwards
            ${start ? speed : 0}ms;
          z-index: 2;
        `;
      }
      if (state === index + 1 || (state === 1 && index === length)) {
        // 최종 좌1
        return css`
          animation: ${onMove(
              (2 * -ViewWidth) / 3,
              -ViewWidth / 3,
              height / 8,
              height / 8,
              0,
              0.5,
            )}
            linear forwards ${start ? speed : 0}ms;
        `;
      }
      if (state === index - 1 || (state === length && index === 1)) {
        // 최종 우1
        return css`
          animation: ${onMove(0, ViewWidth / 3, 0, height / 8, 1, 0.5)} linear
            forwards ${start ? speed : 0}ms;
        `;
      }
      if (
        state === index - 2 ||
        (state === length - 1 && index === 1) ||
        (state === length && index === 2)
      ) {
        // 최종 우2
        return css`
          animation: ${onMove(
              ViewWidth / 3,
              (2 * ViewWidth) / 3,
              height / 8,
              height / 8,
              0.5,
              0,
            )}
            linear forwards ${start ? speed : 0}ms;
        `;
      } else {
        return css`
          visibility: hidden;
        `;
      }
    }
  }};
  & > div {
    font-size: 100px;
    padding: 10px;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const onMove = (
  e: number,
  i: number,
  y: number,
  z: number,
  s: number,
  c: number,
) => keyframes` 
  0% {
    transform: translate(${e}px, ${y}px) scale(${s});
  }
  100% {
    transform: translate(${i}px, ${z}px) scale(${c});
  }
`;
