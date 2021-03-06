import * as React from 'react';
import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface QuickButtonType {
  button?: string | number | React.ReactElement;
  bWidth?: number;
  bHeight?: number;
  dials?: Array<dialsType>;
  width?: number;
  height?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  between?: number;
  speed?: number;
  userFunc?: Function;
}

interface dialsType {
  url?: string | number | boolean | null | undefined;
  icon: React.ReactElement | string | number;
}

interface ButtonType {
  bWidth: number;
  bHeight: number;
}

interface UnitsType {
  bWidth: number;
  bHeight: number;
  direction: 'left' | 'right' | 'up' | 'down';
}

interface UnitWrapType {
  isToggle: boolean;
  bWidth: number;
  bHeight: number;
  width: number;
  height: number;
  direction: 'left' | 'right' | 'up' | 'down';
  index: number;
  length: number;
  between: number;
  speed: number;
  start: boolean;
}

interface UnitType {
  width: number;
  height: number;
}

const QuickButton: React.FC<QuickButtonType> = ({
  button = 'button',
  bWidth = 100,
  bHeight = 100,
  dials = [
    { url: '/url1', icon: 'icon1' },
    { url: '/url2', icon: 'icon2' },
  ],
  direction = 'right',
  width = 50,
  height = 50,
  between = 20,
  speed = 200,
  userFunc = (e: string | number | boolean | null | undefined) =>
    console.log(e),
}) => {
  const [isToggle, setIsToggle] = useState(false);
  const [start, setStart] = useState(false);

  return (
    <Contents>
      <Button
        bWidth={bWidth}
        bHeight={bHeight}
        onClick={() => {
          setIsToggle(!isToggle);
          setStart(true);
        }}
      >
        {button}
      </Button>
      <Units bWidth={bWidth} bHeight={bHeight} direction={direction}>
        {dials.map((item, index) => (
          <UnitWrap
            key={index}
            isToggle={isToggle}
            bWidth={bWidth}
            bHeight={bHeight}
            width={width}
            height={height}
            direction={direction}
            index={index}
            length={dials.length}
            between={between}
            speed={speed}
            start={start}
          >
            <Unit
              width={width}
              height={height}
              onClick={() => {
                userFunc(dials[index].url);
                setIsToggle(false);
              }}
            >
              {item.icon}
            </Unit>
          </UnitWrap>
        ))}
      </Units>
    </Contents>
  );
};

export default QuickButton;

const Contents = styled.div`
  position: relative;
  display: flex;
`;

const Button = styled.div<ButtonType>`
  width: ${({ bWidth }) => bWidth}px;
  height: ${({ bHeight }) => bHeight}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Units = styled.div<UnitsType>`
  position: absolute;
  height: 0px;
  display: flex;
  ${({ direction, bHeight, bWidth }) => {
    if (direction === 'up')
      return css`
        bottom: ${bHeight}px;
        flex-direction: column-reverse;
      `;
    if (direction === 'down')
      return css`
        top: ${bHeight}px;
        flex-direction: column;
      `;
    if (direction === 'left')
      return css`
        right: ${bWidth}px;
        flex-direction: row-reverse;
      `;
    if (direction === 'right')
      return css`
        left: ${bWidth}px;
        flex-direction: row;
      `;
  }};
`;

const UnitWrap = styled.div<UnitWrapType>`
  width: ${({ direction, width, bWidth }) =>
    direction === 'up' || direction === 'down' ? bWidth : width}px;
  height: ${({ direction, height, bHeight }) =>
    direction === 'up' || direction === 'down' ? height : bHeight}px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ direction, between }) => direction === 'down' && between}px;
  margin-bottom: ${({ direction, between }) => direction === 'up' && between}px;
  ${({ direction, between }) => {
    if (direction === 'up')
      return css`
        margin-bottom: ${between}px;
      `;
    if (direction === 'down')
      return css`
        margin-top: ${between}px;
      `;
    if (direction === 'left')
      return css`
        margin-right: ${between}px;
      `;
    if (direction === 'right')
      return css`
        margin-left: ${between}px;
      `;
  }};
  animation: ${({ isToggle }) => (isToggle ? onScale(0, 1) : onScale(1, 0))}
    ${({ isToggle, index, speed, length, start }) =>
      start ? (isToggle ? (index + 1) * speed : (length - index) * speed) : 0}ms
    forwards;
`;

const Unit = styled.div<UnitType>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const onScale = (e: number, i: number) => keyframes`
  0% {
    transform: scale(${e});
  }
  100% {    
    transform: scale(${i});
  }
`;
