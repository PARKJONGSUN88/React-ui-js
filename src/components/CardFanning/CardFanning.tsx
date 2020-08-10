import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface CardFanningType {
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
  isToggle: boolean;
  index: number;
  deg: number;
  speed: number;
}

interface UnitWrapType {
  index: number;
  deg: number;
  fDeg: number;
  isToggle: boolean;
  speed: number;
}

interface UnitType {
  width: number;
  height: number;
  isToggle: boolean;
  index: number;
  speed: number;
  length: number;
}

const CardFanning: React.FC<CardFanningType> = ({
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
  fDeg = 90,
  deg = -30,
  speed = 1000,
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
      <Units between={between} height={height} fDeg={fDeg}>
        {dials.map((item, index) => (
          <Bridge isToggle={isToggle} index={index} deg={deg} speed={speed}>
            <UnitWrap
              isToggle={isToggle}
              index={index}
              deg={deg}
              speed={speed}
              fDeg={fDeg}
            >
              <Unit
                isToggle={isToggle}
                length={dials.length}
                index={index}
                width={width}
                height={height}
                speed={speed}
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

export default CardFanning;

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
  animation: ${({ isToggle, index, deg }) =>
      isToggle
        ? onAnimation(0, index * deg, 1, 1)
        : onAnimation(index * deg, 0, 1, 1)}
    ${({ speed }) => speed}ms forwards;
`;

const UnitWrap = styled.div<UnitWrapType>`
  margin-left: auto;
  animation: ${({ isToggle, fDeg, index, deg }) =>
      isToggle
        ? onAnimation(-fDeg, index * -deg - fDeg, 1, 1)
        : onAnimation(index * -deg - fDeg, -fDeg, 1, 1)}
    ${({ speed }) => speed}ms forwards;
`;

const Unit = styled.div<UnitType>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${({ isToggle }) =>
      isToggle ? onAnimation(0, 0, 0, 1) : onAnimation(0, 0, 1, 0)}
    forwards;
  animation-delay: ${({ isToggle, speed }) => (isToggle ? 0 : speed)}ms;
`;

const onAnimation = (e: number, i: number, y: number, z: number) => keyframes`
  0% {
    transform: rotate(${e}deg) scale(${y});
  }
  100% {    
    transform: rotate(${i}deg) scale(${z});
  }
`;
