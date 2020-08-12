import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface SpeedDialType {
  button?: React.ReactElement | string | number;
  bWidth?: number;
  bHeight?: number;
  dials?: Array<dialsType>;
  width?: number;
  height?: number;
  between?: number;
  fDeg?: number;
  deg?: number;
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
  between: number;
  height: number;
  fDeg: number;
}

interface BridgeType {
  index: number;
  deg: number;
}

interface UnitWrapType {
  index: number;
  deg: number;
  fDeg: number;
}

interface UnitType {
  width: number;
  height: number;
  isToggle: boolean;
  index: number;
  speed: number;
  start: boolean;
  length: number;
}

const SpeedDial: React.FC<SpeedDialType> = ({
  button = 'button',
  bWidth = 100,
  bHeight = 100,
  dials = [
    { url: 'url1', icon: 'icon1' },
    { url: 'url2', icon: 'icon2' },
  ],
  width = 50,
  height = 50,
  between = 150,
  fDeg = 180,
  deg = -30,
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
      <Units between={between} height={height} fDeg={fDeg}>
        {dials.map((item, index) => (
          <Bridge index={index} deg={deg}>
            <UnitWrap index={index} deg={deg} fDeg={fDeg}>
              <Unit
                isToggle={isToggle}
                length={dials.length}
                index={index}
                width={width}
                height={height}
                speed={speed}
                start={start}
                onClick={() => {
                  userFunc(dials[index].url);
                  setIsToggle(false);
                }}
              >
                {item.icon}
              </Unit>
            </UnitWrap>
          </Bridge>
        ))}
      </Units>
    </Contents>
  );
};

export default SpeedDial;

const Contents = styled.div`
  position: relative;
`;

const Button = styled.div<ButtonType>`
  position: absolute;
  top: 0px;
  width: ${({ bWidth }) => bWidth}px;
  height: ${({ bHeight }) => bHeight}px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transform: translate(
    ${({ bWidth }) => -bWidth / 2}px,
    ${({ bHeight }) => -bHeight / 2}px
  );
`;

const Units = styled.div<UnitsType>`
  position: absolute;
  top: ${({ height }) => height / 2}px;
  width: ${({ between }) => between}px;
  height: 0px;
  transform-origin: 0 50%;
  transform: translateY(${({ height }) => -height / 2}px)
    rotate(${({ fDeg }) => fDeg}deg);
`;

const Bridge = styled.div<BridgeType>`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  transform-origin: 0 50%;
  transform: rotate(${({ index, deg }) => index * deg}deg);
`;

const UnitWrap = styled.div<UnitWrapType>`
  margin-left: auto;
  transform: rotate(${({ index, deg, fDeg }) => index * -deg - fDeg}deg);
`;

const Unit = styled.div<UnitType>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${({ isToggle }) => (isToggle ? onScale(0, 1) : onScale(1, 0))}
    ${({ isToggle, index, speed, length, start }) =>
      start ? (isToggle ? (index + 1) * speed : (length - index) * speed) : 0}ms
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
