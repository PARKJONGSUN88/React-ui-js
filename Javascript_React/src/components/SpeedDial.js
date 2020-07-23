import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const SpeedDial = (props) => {
  const {
    button,
    bWidth,
    bHeight,
    dials,
    width,
    height,
    between,
    deg,
    speed,
    userFunc,
  } = props;
  const [isToggle, setIsToggle] = useState(false);

  return (
    <Contents>
      <ToggleButton
        isToggle={isToggle}
        bWidth={bWidth}
        bHeight={bHeight}
        onClick={() => setIsToggle(!isToggle)}
      >
        {button}
      </ToggleButton>
      <Units height={height}>
        {dials.map((item, index) => (
          <Bridge index={index} between={between} deg={deg}>
            <UnitWrap index={index} deg={deg}>
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

export default SpeedDial;

SpeedDial.defaultProps = {
  button: "button",
  bWidth: 100,
  bHeight: 100,
  dials: [
    { url: "url1", icon: "icon1" },
    { url: "url2", icon: "icon2" },
  ],
  width: 40,
  height: 40,
  between: 100,
  deg: 45,
  speed: 150,
  userFunc: (e) => console.log(e),
};

const Contents = styled.div`
  position: relative;
`;

const ToggleButton = styled.div`
  position: absolute;
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

const Units = styled.div`
  position: absolute;
  transform: translateY(${(props) => -props.height / 2}px);
`;

const Bridge = styled.div`
  position: absolute;
  left: 0;
  width: ${(props) => props.between}px;
  display: flex;
  transform-origin: 0 50%;
  transform: rotate(${(props) => props.index * props.deg}deg);
`;

const UnitWrap = styled.div`
  transform: rotate(${(props) => props.index * -props.deg}deg);
  margin-left: auto;
`;

const Unit = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${(props) => (props.isToggle ? onScale(0, 1) : onScale(1, 0))}
    ${(props) =>
      props.isToggle
        ? (props.index + 1) * props.speed
        : (props.length - props.index) * props.speed}ms
    forwards;
`;

const onScale = (e, i) => keyframes`
  0% {
    transform: scale(${e});
  }
  100% {    
    transform: scale(${i});
  }
`;
