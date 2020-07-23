import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const iconList = [
  { url: "0", icon: "0" },
  { url: "15", icon: "15" },
  { url: "30", icon: "30" },
  { url: "45", icon: "45" },
  { url: "60", icon: "60" },
  { url: "75", icon: "75" },
  { url: "90", icon: "90" },
];

const switchIcon = "button";

const SpeedDial = (props) => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <Contents>
      <ToggleButton isToggle={isToggle} onClick={() => setIsToggle(!isToggle)}>
        {switchIcon}
      </ToggleButton>
      <Units>
        {iconList.map((item, index) => (
          <Bridge index={index} isToggle={isToggle}>
            <Unit
              index={index}
              isToggle={isToggle}
              onClick={() => {
                console.log(index);
                setIsToggle(false);
              }}
            >
              {item.icon}
            </Unit>
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
  z-index: 1;
`;

const Bridge = styled.div`
  position: absolute;
  left: 0;
  width: 200px;
  display: flex;
  align-items: center;
  transform-origin: 0 50%;
  animation: ${(props) =>
      props.isToggle
        ? onRotate(0, props.index * 15)
        : onRotate(props.index * 15, 0)}
    1s forwards;
`;

const onRotate = (e, i) => keyframes`
  0% {
    transform: rotate(${e}deg);
  }
  100% {    
    transform: rotate(${i}deg);
  }
`;

const Unit = styled.div`
  margin-left: auto;
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: white;
  border: 1px solid pink;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(${(props) => (props.isToggle ? props.index * -15 : 0)}deg);
`;
