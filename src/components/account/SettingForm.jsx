import React from "react";
import { ReactComponent as IconGearFill } from "bootstrap-icons/icons/gear-fill.svg";
import { ReactComponent as IconPercent } from "bootstrap-icons/icons/percent.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconTrash } from "bootstrap-icons/icons/trash.svg";
import { ReactComponent as IconBell } from "bootstrap-icons/icons/bell.svg";

const SettingForm = () => {
  return (
    <div className="card border-danger">
      <h6 className="card-header">
        <IconGearFill className="text-danger" /> Settiing
      </h6>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <IconBell /> Notification
          <div className="form-check form-switch float-end">
            <input className="form-check-input" type="checkbox" />
          </div>
        </li>
        <li className="list-group-item">
          <IconEnvelope /> E-Mail and SMS
          <div className="form-check form-switch float-end">
            <input className="form-check-input" type="checkbox" />
          </div>
        </li>
        <li className="list-group-item">
          <IconPercent /> Promotional offers E-Mail and SMS
          <div className="form-check form-switch float-end">
            <input className="form-check-input" type="checkbox" disabled />
          </div>
        </li>
        <li className="list-group-item bg-danger text-white">
          <IconTrash /> Delete Account{" "}
          <button type="button" className="btn btn-sm btn-light ms-3">
            Submit
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SettingForm;
