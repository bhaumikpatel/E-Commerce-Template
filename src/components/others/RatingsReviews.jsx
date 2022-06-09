import React from "react";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconCheckCircleFill } from "bootstrap-icons/icons/check-circle-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const RatingsReviews = (props) => {
  return (
    <div className="border-bottom mb-3">
      <div className="mb-2">
        <span>
          <IconStarFill className="text-warning me-1" />
          <IconStarFill className="text-warning me-1" />
          <IconStarFill className="text-warning me-1" />
          <IconStarFill className="text-warning me-1" />
          <IconStarFill className="text-secondary me-1" />
        </span>
        <span className="text-muted">
          <IconCheckCircleFill className="text-success me-1" />
          Certified Buyer | Reviewed on{" "}
          <i className="fw-bold">15 October 2020</i>
        </span>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="mb-2">
        <button className="btn btn-sm btn-outline-success me-2">
          <FontAwesomeIcon icon={faThumbsUp} /> 10
        </button>
        <button className="btn btn-sm btn-outline-danger me-2">
          <FontAwesomeIcon icon={faThumbsDown} /> 5
        </button>
        <button type="button" className="btn btn-sm btn-outline-secondary">
          Report abuse
        </button>
      </div>
    </div>
  );
};

export default RatingsReviews;
