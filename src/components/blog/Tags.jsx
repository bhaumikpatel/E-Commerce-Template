import React, { lazy } from "react";
import { Link } from "react-router-dom";
const Line = lazy(() => import("../others/Line"));

const Tags = (props) => {
  return (
    <div className={`mb-4 px-4 ${props.className ? props.className : ""}`}>
      <h4 className="font-italic">{props.title}</h4>
      <Line className="mb-2" />
      <Link to="/" className="btn btn-sm btn-outline-info mr-2 mb-2">
        Summer
      </Link>
      <Link to="/" className="btn btn-sm btn-outline-secondary mr-2 mb-2">
        Clothing
      </Link>
      <Link to="/" className="btn btn-sm btn-outline-success mr-2 mb-2">
        Woman
      </Link>
      <Link to="/" className="btn btn-sm btn-outline-danger mr-2 mb-2">
        Hot Trend
      </Link>
      <Link to="/" className="btn btn-sm btn-outline-dark mr-2 mb-2">
        Jacket
      </Link>
      <Link to="/" className="btn btn-sm btn-outline-primary mr-2 mb-2">
        Men
      </Link>
      <Link to="/" className="btn btn-sm btn-outline-warning mr-2 mb-2">
        Luxyry
      </Link>
    </div>
  );
};
export default Tags;
