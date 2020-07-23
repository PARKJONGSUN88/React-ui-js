import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const iconList = [
  { url: "0", icon: "0" },
  { url: "15", icon: "15" },
  { url: "30", icon: "30" },
  { url: "45", icon: "45" },
];

const switchIcon = "button";

const toggleSpeed = 200;
const deg = 30;

const SpeedDial = (props) => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <Contents>
      <ToggleButton isToggle={isToggle} onClick={() => setIsToggle(!isToggle)}>
        {switchIcon}
      </ToggleButton>
      <Units>
        {iconList.map((item, index) => (
          <Bridge index={index} deg={deg}>
            <UnitWrap index={index} deg={deg}>
              <Unit
                index={index}
                isToggle={isToggle}
                length={iconList.length}
                toggleSpeed={toggleSpeed}
                onClick={() => {
                  console.log(index);
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
  top: 50px;
  left: 100px;
`;

const ToggleButton = styled.div`
  position: absolute;
  cursor: pointer;
  width: 100px;
  height: 100px;
  background-color: skyblue;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const Units = styled.div`
  position: absolute;
  left: 50px;
  top: 25px;
`;

const Bridge = styled.div`
  position: absolute;
  left: 0;
  width: 200px;
  display: flex;
  align-items: center;
  transform-origin: 0 50%;
  transform: rotate(${(props) => props.index * props.deg}deg);
`;

const UnitWrap = styled.div`
  margin-left: auto;
  transform: rotate(${(props) => props.index * props.deg * -1}deg);
`;

const Unit = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: white;
  border: 1px solid pink;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${(props) => (props.isToggle ? onRotate(0, 1) : onRotate(1, 0))}
    ${(props) =>
      props.isToggle
        ? (props.index + 1) * props.toggleSpeed
        : (props.length - props.index) * props.toggleSpeed}ms
    forwards;
`;

const onRotate = (e, i) => keyframes`
  0% {
    transform: scale(${e});
  }
  100% {    
    transform: scale(${i});
  }
`;
