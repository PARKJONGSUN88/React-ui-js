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
  length: number;
  between: number;
  speed: number;
}

interface UnitType {
  width: number;
  height: number;
}

const JellyPop: React.FC<QuickButtonType> = ({
  button = 'button',
  bWidth = 100,
  bHeight = 100,
  dials = [
    { url: '/url1', icon: 'icon1' },
    { url: '/url2', icon: 'icon2' },
  ],
  direction = 'left',
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
        가가가
      </Units>
    </Contents>
  );
};

export default JellyPop;

const Contents = styled.div`
  position: relative;
  display: flex;
  border: 1px solid blue;
`;

const Button = styled.div<ButtonType>`
  width: ${({ bWidth }) => bWidth}px;
  height: ${({ bHeight }) => bHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

const Units = styled.div<UnitsType>`
  border: 1px solid pink;
  position: absolute;
  display: flex;
  height: 0px;
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
  width: 100px;
  height: 300px;
`;
