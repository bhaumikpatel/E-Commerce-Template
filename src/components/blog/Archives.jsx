import React, { lazy } from "react";
import { Link } from "react-router-dom";
const Line = lazy(() => import("../others/Line"));

const Archives = (props) => {
  return (
    <div className={`mb-4 px-4 ${props.className ? props.className : ""}`}>
      <h4 className="fst-italic">{props.title}</h4>
      <Line className="mb-2" />
      <Link to="/" className="d-block mb-1">
        March 2020 (40)
      </Link>
      <Link to="/" className="d-block mb-1">
        April 2020 (08)
      </Link>
      <Link to="/" className="d-block mb-1">
        May 2020 (11)
      </Link>
      <Link to="/" className="d-block mb-1">
        Jun 2020 (21)
      </Link>
    </div>
  );
};
export default Archives;
