import React from "react";
import { Link } from "react-router-dom";

const FilterTag = (props) => {
  return (
    <div className="card mb-3">
      <div
        className="card-header fw-bold text-uppercase accordion-icon-button"
        data-bs-toggle="collapse"
        data-bs-target="#filterTag"
        aria-expanded="true"
        aria-controls="filterTag"
      >
        Product Tags
      </div>
      <div className="card-body show" id="filterTag">
        <Link to="/" className="btn btn-sm btn-outline-info me-2 mb-2">
          Summer
        </Link>
        <Link to="/" className="btn btn-sm btn-outline-secondary me-2 mb-2">
          Clothing
        </Link>
        <Link to="/" className="btn btn-sm btn-outline-success me-2 mb-2">
          Woman
        </Link>
        <Link to="/" className="btn btn-sm btn-outline-danger me-2 mb-2">
          Hot Trend
        </Link>
        <Link to="/" className="btn btn-sm btn-outline-dark me-2 mb-2">
          Jacket
        </Link>
        <Link to="/" className="btn btn-sm btn-outline-primary me-2 mb-2">
          Men
        </Link>
        <Link to="/" className="btn btn-sm btn-outline-warning me-2 mb-2">
          Luxyry
        </Link>
      </div>
    </div>
  );
};

export default FilterTag;
