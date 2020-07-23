import React from "react";
import { DiApple } from "react-icons/di";
import { IconContext } from "react-icons";

const Icon2 = (props) => {
  return (
    <IconContext.Provider
      value={{
        size: "100%",
        color: `${props.color}`,
        style: { cursor: "pointer" },
      }}
    >
      <DiApple />
    </IconContext.Provider>
  );
};

export default Icon2;

Icon2.defaultProps = {
  color: "red",
};
