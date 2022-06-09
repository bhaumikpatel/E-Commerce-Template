import React, { lazy } from "react";
import { Link } from "react-router-dom";
const Line = lazy(() => import("../others/Line"));

const MostViewed = (props) => {
  return (
    <div className={`mb-4 px-4 ${props.className ? props.className : ""}`}>
      <h4 className="fst-italic">{props.title}</h4>
      <Line className="mb-2" />
      <div className="card text-white">
        <Link to="/" className="stretched-link text-decoration-none text-white">
          <img
            src="../../images/blog/nature-p-1.webp"
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay">
            <h5 className="card-title position-absolute bottom-0 mb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </h5>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default MostViewed;
