import React from "react";

const CardListForm = () => {
  return (
    <div className="card border-success">
      <h6 className="card-header">
        <i className="bi bi-credit-card-2-front-fill text-success"></i> Saved Card
        <button className="btn btn-sm btn-primary float-end">
          <i className="bi bi-plus-lg text-light"></i>
        </button>
      </h6>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <i className="bi bi-credit-card"></i> 123 *** *** 123{" "}
          <button type="button" className="btn btn-sm btn-danger ms-3">
            <i className="bi bi-trash"></i>
          </button>
        </li>
        <li className="list-group-item">
          <i className="bi bi-credit-card"></i> 123 *** *** 123{" "}
          <button type="button" className="btn btn-sm btn-danger ms-3">
            <i className="bi bi-trash"></i>
          </button>
        </li>
        <li className="list-group-item">
          <i className="bi bi-credit-card"></i> 123 *** *** 123{" "}
          <button type="button" className="btn btn-sm btn-danger ms-3">
            <i className="bi bi-trash"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CardListForm;
