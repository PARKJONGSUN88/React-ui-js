import React from "react";
import { DiPython } from "react-icons/di";
import { IconContext } from "react-icons";

const Icon5 = (props) => {
  return (
    <IconContext.Provider
      value={{
        size: "100%",
        color: `${props.color}`,
        style: { cursor: "pointer" },
      }}
    >
      <DiPython />
    </IconContext.Provider>
  );
};

export default Icon5;

Icon5.defaultProps = {
  color: "black",
};
