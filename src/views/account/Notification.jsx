import React, { Component } from "react";
//import { data } from "../../data";
import { Link } from "react-router-dom";
import { ReactComponent as IconClock } from "bootstrap-icons/icons/clock.svg";
import { ReactComponent as IconBellFill } from "bootstrap-icons/icons/bell-fill.svg";
import { ReactComponent as IconCash } from "bootstrap-icons/icons/cash.svg";
import { ReactComponent as IconCartCheckFill } from "bootstrap-icons/icons/cart-check-fill.svg";
import { ReactComponent as IconCartxFill } from "bootstrap-icons/icons/cart-x-fill.svg";
import { ReactComponent as IconTagFill } from "bootstrap-icons/icons/tag-fill.svg";

class NotificationView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container mb-3">
        <h4 className="my-3">Notification</h4>

        <div className="list-group">
          <Link
            to="/"
            className="list-group-item list-group-item-action active"
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                <IconBellFill className="i-va" /> Deal Alert!
              </h5>
              <span className="small">
                <IconClock /> 2 mins ago
              </span>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
          </Link>
          <Link to="/" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between text-success">
              <h5 className="mb-1">
                <IconTagFill className="i-va" /> Coupon Alert!
              </h5>
              <span className="small text-muted">
                <IconClock /> 5 hours ago
              </span>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
          </Link>
          <Link to="/" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between text-danger">
              <h5 className="mb-1">
                <IconCash className="i-va" /> Price dropped!
              </h5>
              <span className="small text-muted">
                <IconClock /> 10 hours ago
              </span>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small className="text-muted">Donec id elit non mi porta.</small>
          </Link>
          <Link to="/" className="list-group-item list-group-item-action bg-success text-white">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                <IconCartCheckFill className="i-va" /> Order Placed
              </h5>
              <span className="small text-white">
                <IconClock /> 12 hours ago
              </span>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
          </Link>
          <Link to="/" className="list-group-item list-group-item-action bg-danger text-white">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                <IconCartxFill className="i-va" /> Order Cancelled
              </h5>
              <span className="small text-white">
                <IconClock /> 2 days ago
              </span>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

export default NotificationView;
