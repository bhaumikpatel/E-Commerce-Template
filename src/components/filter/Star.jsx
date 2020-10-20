import React from "react";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";

const FilterStar = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-header font-weight-bold text-uppercase">
        Customer Review
      </div>
      <div className="card-body">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault5"
          />
          <label
            className="form-check-label"
            htmlFor="flexRadioDefault5"
            aria-label="Star"
          >
            <IconStarFill className="text-warning mr-1 mb-2" />
            <IconStarFill className="text-warning mr-1 mb-2" />
            <IconStarFill className="text-warning mr-1 mb-2" />
            <IconStarFill className="text-warning mr-1 mb-2" />
            <IconStarFill className="text-warning mr-1 mb-2" />
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault4"
          />
          <label
            className="form-check-label"
            htmlFor="flexRadioDefault4"
            aria-label="Star"
          >
            <IconStarFill className="text-warning mr-1 mb-2" />
            <IconStarFill className="text-warning mr-1 mb-2" />
            <IconStarFill className="text-warning mr-1 mb-2" />
            <IconStarFill className="text-warning mr-1 mb-2" />
            <IconStarFill className="text-secondary mr-1 mb-2" />
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
          />
          <label
            className="form-check-label"
            htmlFor="flexRadioDefault3"
            aria-label="Star"
          >
            <IconStarFill className="text-warning mr-1 mb-2" />
            <IconStarFill className="text-warning mr-1 mb-2" />
            <IconStarFill className="text-warning mr-1 mb-2" />
            <IconStarFill className="text-secondary mr-1 mb-2" />
            <IconStarFill className="text-secondary mr-1 mb-2" />
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label
            className="form-check-label"
            htmlFor="flexRadioDefault2"
            aria-label="Star"
          >
            <IconStarFill className="text-warning mr-1 mb-2" />
            <IconStarFill className="text-warning mr-1 mb-2" />
            <IconStarFill className="text-secondary mr-1 mb-2" />
            <IconStarFill className="text-secondary mr-1 mb-2" />
            <IconStarFill className="text-secondary mr-1 mb-2" />
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label"
            htmlFor="flexRadioDefault1"
            aria-label="Star"
          >
            <IconStarFill className="text-warning mr-1 mb-2" />
            <IconStarFill className="text-secondary mr-1 mb-2" />
            <IconStarFill className="text-secondary mr-1 mb-2" />
            <IconStarFill className="text-secondary mr-1 mb-2" />
            <IconStarFill className="text-secondary mr-1 mb-2" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterStar;
