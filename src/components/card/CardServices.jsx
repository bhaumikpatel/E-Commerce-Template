import React from "react";
import { ReactComponent as IconTruckFill } from "bootstrap-icons/icons/truck.svg";
import { ReactComponent as IconLifePreserverFill } from "bootstrap-icons/icons/life-preserver.svg";
import { ReactComponent as IconArrowCounterclockwiseFill } from "bootstrap-icons/icons/arrow-counterclockwise.svg";

const CardServices = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-header fw-bold text-uppercase">
        Custom Service
      </div>
      <div className="card-body">
        <div className="row border-bottom">
          <div className="col-2">
            <IconTruckFill width={40} height={40} />
          </div>
          <div className="col">
            <div className="ms-3">
              <span className="fw-bold">Free Delivery</span>
              <p className="text-muted small">From $59.89</p>
            </div>
          </div>
        </div>
        <div className="row border-bottom py-3">
          <div className="col-2">
            <IconLifePreserverFill width={40} height={40} />
          </div>
          <div className="col">
            <div className="ms-3">
              <span className="fw-bold">Support 24/7</span>
              <p className="text-muted small m-0">Online 24 hours</p>
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-2">
            <IconArrowCounterclockwiseFill width={40} height={40} />
          </div>
          <div className="col">
            <div className="ms-3">
              <span className="fw-bold">Free return</span>
              <p className="text-muted small m-0">365 a day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardServices;
