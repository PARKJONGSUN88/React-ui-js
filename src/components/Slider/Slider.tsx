import * as React from 'react';
import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface SliderType {
  buttonWidth?: number;
  buttonHeight?: number;
  leftButton?: React.ReactElement | string | number;
  rightButton?: React.ReactElement | string | number;
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
  buttonWidth: number;
  buttonHeight: number;
}

interface ItemsType {
  width: number;
  height: number;
}

interface ItemWrapType {
  width: number;
  speed: number;
  start: boolean;
  state: number;
  index: number;
  length: number;
  left?: boolean;
}

const Slider: React.FC<SliderType> = ({
  buttonWidth = 100,
  buttonHeight = 100,
  leftButton = 'left',
  rightButton = 'right',
  items = [
    { item: '1번째 사진입니다.', url: '1번 사진으로 이동' },
    { item: '2번째 사진입니다.', url: '2번 사진으로 이동' },
    { item: '3번째 사진입니다.', url: '3번 사진으로 이동' },
    { item: '4번째 사진입니다.', url: '4번 사진으로 이동' },
  ],
  width = 300,
  height = 300,
  speed = 500,
  userFunc = (e: string | number | boolean | null | undefined) =>
    console.log(e),
}) => {
  const [state, setState] = useState(1);
  const [start, setStart] = useState(false);
  const [left, setLeft] = useState(false);

  return (
    <Contents buttonWidth={buttonWidth} buttonHeight={buttonHeight}>
      <div
        className="leftButton"
        onClick={() => {
          setState(state < items.length ? state + 1 : 1);
          setStart(true);
          setLeft(true);
        }}
      >
        {leftButton}
      </div>
      <Items width={width} height={height}>
        {items.map((item, index) => (
          <ItemWrap
            speed={speed}
            width={width}
            start={start}
            state={state}
            index={index + 1}
            length={items.length}
            left={left}
          >
            <div
              className="item"
              key={index}
              onClick={() => userFunc(items[index].url)}
            >
              {item.item}
            </div>
          </ItemWrap>
        ))}
      </Items>
      <div
        className="rightButton"
        onClick={() => {
          setState(state > 1 ? state - 1 : items.length);
          setStart(true);
          setLeft(false);
        }}
      >
        {rightButton}
      </div>
    </Contents>
  );
};

export default Slider;

const Contents = styled.div<ContentsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  .leftButton,
  .rightButton {
    width: ${({ buttonWidth }) => buttonWidth}px;
    height: ${({ buttonHeight }) => buttonHeight}px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Items = styled.div<ItemsType>`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ItemWrap = styled.div<ItemWrapType>`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ state, index, start, speed, length, left, width }) => {
    // 왼쪽버튼 클릭시
    if (left) {
      // 왼쪽버튼 클릭시: 가운데로
      if (index === state) {
        return css`
          animation: ${onMove(width, 0)} linear forwards ${start ? speed : 0}ms;
        `;
      }
      // 왼쪽버튼 클릭시: 왼쪽으로
      if (state === index + 1 || (state === 1 && index === length)) {
        return css`
          animation: ${onMove(0, -width)} ${start ? speed : 0}ms linear forwards;
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
          animation: ${onMove(-width, 0)} linear forwards ${start ? speed : 0}ms;
        `;
      }
      // 오른쪽버튼 클릭시: 오른쪽으로
      if (state === index - 1 || (state === length && index === 1)) {
        return css`
          animation: ${onMove(0, width)} ${start ? speed : 0}ms linear forwards;
        `;
      }
      // 오른쪽버튼 클릭시: 그외 hiddenelse {
      return css`
        visibility: hidden;
      `;
    }
  }};
  .item {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const onMove = (e: number, i: number) => keyframes` 
  0% {
    transform: translateX(${e}px);
  }
  100% {
    transform: translateX(${i}px);
  }
`;
