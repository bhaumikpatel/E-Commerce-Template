import React, { lazy } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Line = lazy(() => import("../others/Line"));

const Follow = (props) => {
  return (
    <div
      className={`mb-4 px-4 ${
        props.className ? props.className : ""
      }`}
    >
      <h4 className="fst-italic">{props.title}</h4>
      <Line className="mb-2" />
      <Link to="/" className="btn btn-light btn-sm bg-twitter me-2">
        <FontAwesomeIcon icon={faTwitter} className="text-white mx-1" />
      </Link>
      <Link to="/" className="btn btn-light btn-sm bg-facebook me-2">
        <FontAwesomeIcon icon={faFacebookF} className="text-white mx-1" />
      </Link>
      <Link to="/" className="btn btn-light btn-sm bg-instagram me-2">
        <FontAwesomeIcon icon={faInstagram} className="text-white mx-1" />
      </Link>
      <Link to="/" className="btn btn-light btn-sm bg-google me-2">
        <FontAwesomeIcon icon={faYoutube} className="text-white mx-1" />
      </Link>
    </div>
  );
};
export default Follow;
