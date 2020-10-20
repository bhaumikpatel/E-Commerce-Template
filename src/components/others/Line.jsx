import React from "react";

const Line = (props) => {
  return (
    <div className={`progress ${props.className}`} style={{ height: 1 }}>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: "25%" }}
        aria-valuenow={25}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};
export default Line;
