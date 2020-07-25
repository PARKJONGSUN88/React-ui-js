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
  width: ${(props) => props.bWidth}px;
  height: ${(props) => props.bHeight}px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transform: translate(
    ${(props) => -props.bWidth / 2}px,
    ${(props) => -props.bHeight / 2}px
  );
`;

const Units = styled.div<UnitsType>`
  position: absolute;
  top: ${(props) => props.height / 2}px;
  width: ${(props) => props.between}px;
  height: 0px;
  transform-origin: 0 50%;
  transform: translateY(${(props) => -props.height / 2}px)
    rotate(${(props) => props.fDeg}deg);
`;

const Bridge = styled.div<BridgeType>`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  transform-origin: 0 50%;
  animation: ${(props) =>
      props.isToggle
        ? onRotate(0, props.index * props.deg)
        : onRotate(props.index * props.deg, 0)}
    ${(props) => props.speed}ms forwards;
`;

const UnitWrap = styled.div<UnitWrapType>`
  margin-left: auto;
  animation: ${(props) =>
      props.isToggle
        ? onRotate(-props.fDeg, props.index * -props.deg - props.fDeg)
        : onRotate(props.index * -props.deg - props.fDeg, -props.fDeg)}
    ${(props) => props.speed}ms forwards;
`;

const Unit = styled.div<UnitType>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${(props) => (props.isToggle ? onScale(0, 1) : onScale(1, 0))}
    forwards;
  animation-delay: ${(props) => (props.isToggle ? 0 : props.speed)}ms;
`;

const onRotate = (e: number, i: number) => keyframes`
  0% {
    transform: rotate(${e}deg);
  }
  100% {    
    transform: rotate(${i}deg);
  }
`;

const onScale = (e: number, i: number) => keyframes`
  0% {
    transform: scale(${e});   
  }
  100% {    
    transform: scale(${i});   
  }
`;
