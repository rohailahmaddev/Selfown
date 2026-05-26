// StickerBadge.jsx
import React from "react";

const StickerBadge = ({ rotate,date, circleBg }) => {
  const colorMap = {
    "bg-red-400":    "#f87171",
    "bg-green-400":  "#4ade80",
    "bg-blue-400":   "#60a5fa",
    "bg-yellow-400": "#facc15",
  };
  console.log(circleBg)
  return (
    <div className={` rotate-0`}>
     <div class={`timeline-year`}
     style={{ background: `linear-gradient(60deg, ${colorMap[circleBg]}, #fcd9db)` }}
     ><div className={`${rotate}`}>{date}</div></div>
    </div>
  );
};

export default StickerBadge;