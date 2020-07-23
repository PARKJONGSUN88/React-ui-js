import React from "react";
import { DiJsBadge } from "react-icons/di";
import { IconContext } from "react-icons";

const Icon4 = () => {
  return (
    <IconContext.Provider
      value={{
        size: "70%",
        color: "yellow",
        style: { cursor: "pointer" }
      }}
    >
      <DiJsBadge />
    </IconContext.Provider>
  );
};

export default Icon4;
