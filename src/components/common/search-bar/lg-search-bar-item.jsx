import React, { useState } from "react";

import "../../../css/spec/search-bar.css";

export default function LGSearchBarItem({ item, action}) {
  const [hoverStatus, setHoverStatus] = useState(false);
  const handleMouseEnter = (e) => {
    setHoverStatus(!hoverStatus);
  };
  const handleMouseLeave = (e) => {
    setHoverStatus(!hoverStatus);
  };
  return (
    <div
      className={
        hoverStatus === false
          ? "lg search-bar-item"
          : "hover lg search-bar-item"
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={action}
    >
      <img src={item.image} alt="" />
      <p>{item.name}</p>
    </div>
  );
}
