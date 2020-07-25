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

  return (
    <Contents>
      <Button
        bWidth={bWidth}
        bHeight={bHeight}
        onClick={() => setIsToggle(!isToggle)}
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
  width: ${(props) => props.bWidth}px;
  height: ${(props) => props.bHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Units = styled.div<UnitsType>`
  position: absolute;
  ${(props) => {
    if (props.direction === 'up')
      return css`
        bottom: ${props.bHeight}px;
      `;
    if (props.direction === 'down')
      return css`
        top: ${props.bHeight}px;
      `;
    if (props.direction === 'left')
      return css`
        right: ${props.bWidth}px;
      `;
    if (props.direction === 'right')
      return css`
        left: ${props.bWidth}px;
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

const UnitWrap = styled.div<UnitWrapType>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => {
    if (props.direction === 'up')
      return css`
        margin-bottom: ${props.between}px;
        width: ${props.bWidth}px;
        height: ${props.height}px;
      `;
    if (props.direction === 'down')
      return css`
        margin-top: ${props.between}px;
        width: ${props.bWidth}px;
        height: ${props.height}px;
      `;
    if (props.direction === 'left')
      return css`
        margin-right: ${props.between}px;
        width: ${props.width}px;
        height: ${props.bHeight}px;
      `;
    if (props.direction === 'right')
      return css`
        margin-left: ${props.between}px;
        width: ${props.width}px;
        height: ${props.bHeight}px;
      `;
  }} 
  animation: ${(props) => (props.isToggle ? onScale(0, 1) : onScale(1, 0))}
    ${(props) =>
      props.isToggle
        ? (props.index + 1) * props.speed
        : (props.length - props.index) * props.speed}ms 
    forwards;
`;

const Unit = styled.div<UnitType>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
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
