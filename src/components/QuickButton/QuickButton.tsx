import * as React from 'react';
import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface QuickButtonType {
  button?: string | number | React.ReactElement;
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

interface ContentsType {
  direction: 'left' | 'right' | 'up' | 'down';
}

interface ButtonType {
  width: number;
  height: number;
}

interface UnitsType {
  width: number;
  height: number;
  direction: 'left' | 'right' | 'up' | 'down';
}

interface UnitType {
  isToggle: boolean;
  width: number;
  height: number;
  direction: 'left' | 'right' | 'up' | 'down';
  between: number;
  speed: number;
  index: number;
  length: number;
}

const QuickButton: React.FC<QuickButtonType> = ({
  button = 'button',
  dials = [
    { url: '/url1', icon: 'icon1' },
    { url: '/url2', icon: 'icon2' },
  ],
  direction = 'right',
  width = 50,
  height = 50,
  between = 10,
  speed = 200,
  userFunc = (e: string | number | boolean | null | undefined) =>
    console.log(e),
}) => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <Contents direction={direction}>
      <Button
        width={width}
        height={height}
        onClick={() => setIsToggle(!isToggle)}
      >
        {button}
      </Button>
      <Units width={width} height={height} direction={direction}>
        {dials.map((item, index) => (
          <Unit
            key={index}
            isToggle={isToggle}
            width={width}
            height={height}
            direction={direction}
            index={index}
            length={dials.length}
            between={between}
            speed={speed}
            onClick={() => {
              userFunc(dials[index].url);
              setIsToggle(false);
            }}
          >
            {item.icon}
          </Unit>
        ))}
      </Units>
    </Contents>
  );
};

export default QuickButton;

const Contents = styled.div<ContentsType>`
  position: relative;
  display: flex;
  flex-direction: ${(props) => {
    if (props.direction === 'up') return 'column-reverse';
    if (props.direction === 'down') return 'column';
    if (props.direction === 'left') return 'row-reverse';
    if (props.direction === 'right') return 'row';
  }};
`;

const Button = styled.div<ButtonType>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Units = styled.div<UnitsType>`
  position: absolute;
  ${(props) => {
    if (props.direction === 'up')
      return css`
        bottom: ${props.height}px;
      `;
    if (props.direction === 'down')
      return css`
        top: ${props.height}px;
      `;
    if (props.direction === 'left')
      return css`
        right: ${props.width}px;
      `;
    if (props.direction === 'right')
      return css`
        left: ${props.width}px;
      `;
  }}
  height: 0px;
  display: flex;
  flex-direction: ${(props) => {
    if (props.direction === 'up') return 'column-reverse';
    if (props.direction === 'down') return 'column';
    if (props.direction === 'left') return 'row-reverse';
    if (props.direction === 'right') return 'row';
  }};
`;

const Unit = styled.div<UnitType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  ${(props) => {
    if (props.direction === 'up')
      return css`
        margin-bottom: ${props.between}px;
      `;
    if (props.direction === 'down')
      return css`
        margin-top: ${props.between}px;
      `;
    if (props.direction === 'left')
      return css`
        margin-right: ${props.between}px;
      `;
    if (props.direction === 'right')
      return css`
        margin-left: ${props.between}px;
      `;
  }} 
  animation: ${(props) => (props.isToggle ? onScale(0, 1) : onScale(1, 0))}
    ${(props) =>
      props.isToggle
        ? (props.index + 1) * props.speed
        : (props.length - props.index) * props.speed}ms
    forwards;
`;

const onScale = (e: number, i: number) => keyframes`
  0% {
    transform: scale(${e});
  }
  100% {    
    transform: scale(${i});
  }
`;
