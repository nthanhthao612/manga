import React, { useState } from "react";

import "../../../css/common/button.css";

let defaultValue = {
  image: "https://i.imgur.com/Bo2l1Z8.png",
};

export default function LGIconButton({
  image = defaultValue.image,
  action = () => console.log("hello"),
}) {
  const [hoverStatus, setHoverStatus] = useState(false);
  const handleMouseEnter = (e) => {
    setHoverStatus(!hoverStatus);
  };
  const handleMouseLeave = (e) => {
    setHoverStatus(!hoverStatus);
  };
  return (
    <div
      onClick={() => action()}
      className={
        hoverStatus ? "hover button lg icon-button" : "button lg icon-button"
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt="" />
    </div>
  );
}
