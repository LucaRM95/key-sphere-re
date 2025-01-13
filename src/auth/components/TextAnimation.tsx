"use client";

import { TypeAnimation } from "react-type-animation";

export const TextAnimation = () => {
  return (
    <TypeAnimation
      style={{
        whiteSpace: "pre-line",
        fontSize: "4rem",
        height: "400px",
        color: "#0ACF83",
        width: "60%",
        fontWeight: "bold",
        display: "block",
      }}
      //Opening Doors, Unlocking Dreams
      sequence={[`Opening\nDoors,\nUnlocking\nDreams`, 3000, ""]}
      repeat={Infinity}
    />
  );
};
