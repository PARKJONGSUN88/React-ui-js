import * as React from 'react';
import { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface SliderThreeType {
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
  width: number;
  height: number;
}

interface ControllerType {
  width: number;
}

interface ItemsType {
  width: number;
  height: number;
  speed: number;
  state: number;
  index: number;
  length: number;
  start: boolean;
  left?: boolean;
  rotate: boolean;
}

const SliderThree: React.FC<SliderThreeType> = ({
  items = [
    { item: '1', url: '1번 사진으로 이동' },
    { item: '2', url: '2번 사진으로 이동' },
    { item: '3', url: '3번 사진으로 이동' },
    { item: '4', url: '1번 사진으로 이동' },
  ],
  width = 400,
  height = 250,
  speed = 500,
  userFunc = (e: string | number | boolean | null | undefined) =>
    console.log(e),
}) => {
  const [state, setState] = useState(1);
  const [start, setStart] = useState(false);
  const [left, setleft] = useState(false);
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    !rotate && setRotate(true);
  }, [rotate]);

  return (
    <Contents width={width} height={height}>
      <Controller width={width}>
        <div
          className="leftButton"
          onClick={() => {
            setState(state < items.length ? state + 1 : 1);
            setStart(true);
            setleft(true);
            setRotate(false);
          }}
        />
        <div
          className="rightButton"
          onClick={() => {
            setState(state > 1 ? state - 1 : items.length);
            setStart(true);
            setleft(false);
            setRotate(false);
          }}
        />
      </Controller>
      {items.map((item, index) => (
        <Items
          key={index}
          width={width}
          height={height}
          speed={speed}
          start={start}
          state={state}
          index={index + 1}
          length={items.length}
          left={left}
          rotate={rotate}
        >
          <div className="itemWrap" onClick={() => userFunc(items[index].url)}>
            <div className="item">{item.item}</div>
          </div>
        </Items>
      ))}
    </Contents>
  );
};

export default SliderThree;

const Contents = styled.div<ContentsType>`
  width: ${({ width }) => width * 2}px;
  height: ${({ height }) => height}px;
  position: relative;
  overflow: hidden;
`;

const Controller = styled.div<ControllerType>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .leftButton,
  .rightButton {
    width: ${({ width }) => width / 2}px;
    height: 100%;
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
  justify-content: center;
  .itemWrap {
    z-index: ${({ state, index }) => (state === index ? 2 : 1)};
    ${({ state, index, start, speed, length, left, height, width }) => {
      // 왼쪽버튼 클릭시
      if (left) {
        // 왼쪽버튼 클릭시: 가운데로
        if (state === index) {
          return css`
            animation: ${onMove(width - width * 0.25, 0, 0, 0, 0.5, 1)} linear
              forwards ${start ? speed : 0}ms;
          `;
        }
        // 왼쪽버튼 클릭시: 왼쪽 첫번째로
        if (state === index + 1 || (state === 1 && index === length)) {
          return css`
            animation: ${onMove(
                0,
                -width + width * 0.25,
                0,
                height / 8,
                1,
                0.5,
              )}
              linear forwards ${start ? speed : 0}ms;
          `;
        }
        // 왼쪽버튼 클릭시: 왼쪽 두번째로
        if (
          state === index + 2 ||
          (state === 1 && index === length - 1) ||
          (state === 2 && index === length)
        ) {
          return css`
            animation: ${onMove(
                -width + width * 0.25,
                2 * -width + width * 0.2,
                height / 8,
                height / 8,
                0.5,
                0,
              )}
              linear forwards ${start ? speed : 0}ms;
          `;
        }
        // 왼쪽버튼 클릭시: 오른쪽으로
        if (state === index - 1 || (state === length && index === 1)) {
          return css`
            animation: ${onMove(
                2 * width,
                width - width * 0.25,
                height / 8,
                height / 8,
                0,
                0.5,
              )}
              linear forwards ${start ? speed : 0}ms;
          `;
        }
        //왼쪽버튼 클릭시: 그외 hidden
        else {
          return css`
            visibility: hidden;
          `;
        }
      }
      // 오른쪽버튼 클릭시
      else {
        // 오른쪽버튼 클릭시: 가운데로
        if (state === index) {
          return css`
            animation: ${onMove(-width - width * 0.25, 0, 0, 0, 0.5, 1)} linear
              forwards ${start ? speed : 0}ms;
          `;
        }
        // 오른쪽버튼 클릭시: 왼쪽 첫번째로
        if (state === index + 1 || (state === 1 && index === length)) {
          return css`
            animation: ${onMove(
                2 * -width,
                -width + width * 0.25,
                height / 8,
                height / 8,
                0,
                0.5,
              )}
              linear forwards ${start ? speed : 0}ms;
          `;
        }
        // 오른쪽버튼 클릭시: 오른쪽 첫번째로
        if (state === index - 1 || (state === length && index === 1)) {
          return css`
            animation: ${onMove(0, width - width * 0.25, 0, height / 8, 1, 0.5)}
              linear forwards ${start ? speed : 0}ms;
          `;
        }
        // 오른쪽버튼 클릭시: 오른쪽 두번째로
        if (
          state === index - 2 ||
          (state === length - 1 && index === 1) ||
          (state === length && index === 2)
        ) {
          return css`
            animation: ${onMove(
                width - width * 0.25,
                2 * width - width * 0.25,
                height / 8,
                height / 8,
                0.5,
                0,
              )}
              linear forwards ${start ? speed : 0}ms;
          `;
        }
        // 오른쪽버튼 클릭시: 그외 hiddenelse {
        return css`
          visibility: hidden;
        `;
      }
    }};
    .item {
      width: ${({ width }) => width * 0.9}px;
      height: ${({ height }) => height * 0.9}px;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: ${({ start, rotate, left, height }) =>
          left
            ? start && rotate && onRotate(0, 25, height * 1.5)
            : start && rotate && onRotate(0, -25, height * 1.5)}
        ease 2 alternate ${({ speed }) => speed / 2}ms;
    }
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

const onRotate = (e: number, i: number, z: number) => keyframes`
  0% {
    transform: perspective(${z}px) rotateY(${e}deg);
  }
  100% {
    transform: perspective(${z}px) rotateY(${i}deg);
  }
`;
