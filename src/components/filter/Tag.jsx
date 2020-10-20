import React from "react";
import { Link } from "react-router-dom";

const FilterTag = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-header font-weight-bold text-uppercase">
        Product Tags
      </div>
      <div className="card-body">
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
    </div>
  );
};

export default FilterTag;
