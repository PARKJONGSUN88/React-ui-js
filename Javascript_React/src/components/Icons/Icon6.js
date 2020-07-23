import React from "react";
import { DiVisualstudio } from "react-icons/di";
import { IconContext } from "react-icons";

const Icon6 = () => {
  return (
    <IconContext.Provider
      value={{
        size: "70%",
        color: "green",
        style: { cursor: "pointer" },
      }}
    >
      <DiVisualstudio />
    </IconContext.Provider>
  );
};

export default Icon6;
