import React, { lazy } from "react";
import { Link } from "react-router-dom";
const Line = lazy(() => import("../others/Line"));

const Follow = (props) => {
  return (
    <div className={`mb-4 px-4 ${props.className ? props.className : ""}`}>
      <h4 className="fst-italic">{props.title}</h4>
      <Line className="mb-2" />
      <Link to="/" className="btn btn-light btn-sm bg-twitter me-2">
        <i className="bi bi-twitter-x text-white mx-1"></i>
      </Link>
      <Link to="/" className="btn btn-light btn-sm bg-facebook me-2">
        <i className="bi bi-facebook text-white mx-1"></i>
      </Link>
      <Link to="/" className="btn btn-light btn-sm bg-instagram me-2">
        <i className="bi bi-instagram text-white mx-1"></i>
      </Link>
      <Link to="/" className="btn btn-light btn-sm bg-google me-2">
        <i className="bi bi-youtube text-white mx-1"></i>
      </Link>
    </div>
  );
};
export default Follow;
