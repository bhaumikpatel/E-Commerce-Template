import React from "react";
import { Link } from "react-router-dom";

const CardImage = (props) => {
  return (
    <Link to={props.to}>
      <div className={`card shadow-sm ${props.className}`}>
        <div className="card-body p-0">
          <img
            src={props.src}
            className="img-fluid rounded"
            alt="..."
          />
        </div>
      </div>
    </Link>
  );
};

export default CardImage;
