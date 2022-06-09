import React from "react";
import { ReactComponent as IconCreditCard2FrontFill } from "bootstrap-icons/icons/credit-card-2-front-fill.svg";
import { ReactComponent as IconCreditCard } from "bootstrap-icons/icons/credit-card.svg";
import { ReactComponent as IconTrash } from "bootstrap-icons/icons/trash.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const CardListForm = () => {
  return (
    <div className="card border-success">
      <h6 className="card-header">
        <IconCreditCard2FrontFill className="text-success" /> Saved Card
        <button className="btn btn-sm btn-primary float-end"><FontAwesomeIcon icon={faPlus} className="text-light" /></button>
      </h6>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <IconCreditCard /> 123 *** *** 123{" "}
          <button type="button" className="btn btn-sm btn-danger ms-3">
            <IconTrash />
          </button>
        </li>
        <li className="list-group-item">
          <IconCreditCard /> 123 *** *** 123{" "}
          <button type="button" className="btn btn-sm btn-danger ms-3">
            <IconTrash />
          </button>
        </li>
        <li className="list-group-item">
          <IconCreditCard /> 123 *** *** 123{" "}
          <button type="button" className="btn btn-sm btn-danger ms-3">
            <IconTrash />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CardListForm;
