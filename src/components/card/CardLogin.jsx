import React from "react";
import { Link } from "react-router-dom";

const CardLogin = (props) => {
  return (
    <div className={`card shadow-sm ${props.className}`}>
      <div className="card-body text-center">
        <h5 className="card-title">Sign in for your best experience</h5>
        <Link to="account/signin" className="btn btn-warning">
          Sign in securely
        </Link>
      </div>
    </div>
  );
};

export default CardLogin;
