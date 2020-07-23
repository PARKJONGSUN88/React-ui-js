import React from "react";
import { DiCss3 } from "react-icons/di";
import { IconContext } from "react-icons";

const Icon3 = () => {
  return (
    <IconContext.Provider
      value={{
        size: "70%",
        color: "gray",
        style: { cursor: "pointer" }
      }}
    >
      <DiCss3 />
    </IconContext.Provider>
  );
};

export default Icon3;
