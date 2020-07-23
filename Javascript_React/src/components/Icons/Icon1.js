import React from "react";
import { DiAndroid } from "react-icons/di";
import { IconContext } from "react-icons";

const Icon1 = (props) => {
  return (
    <IconContext.Provider
      value={{
        size: "1000%",
        color: `${props.color}`,
        style: { cursor: "pointer" },
      }}
    >
      <DiAndroid />
    </IconContext.Provider>
  );
};

export default Icon1;

Icon1.defaultProps = {
  color: "black",
};
