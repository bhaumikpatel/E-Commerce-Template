import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationTriangle,
  faHistory,
  faTimesCircle,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";

class OrdersView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container mb-3">
        <h4 className="my-3">Orders</h4>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-3 text-center">
                  <img
                    src="../../images/products/tshirt_red_480x400.webp"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-header">
                    <div className="small">
                      <span className="border bg-secondary rounded-left px-2 text-white">
                        Order ID
                      </span>
                      <span className="border bg-white rounded-right px-2 me-2">
                        #123456
                      </span>
                      <span className="border bg-secondary rounded-left px-2 text-white">
                        Date
                      </span>
                      <span className="border bg-white rounded-right px-2">
                        25 Sep 20, 12:34 PM
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6>
                      <Link to="/" className="text-decoration-none">
                        Great product name goes here
                      </Link>
                    </h6>
                    <div className="small">
                      <span className="text-muted me-2">Size:</span>
                      <span className="me-3">M</span>
                      <span className="text-muted me-2">Price:</span>
                      <span className="me-3">$1234</span>
                      <span className="text-muted me-2">Color:</span>
                      <span className="me-3">
                        <span className="bg-primary px-1 rounded">
                          &nbsp;&nbsp;&nbsp;
                        </span>
                      </span>
                    </div>
                    <div className="mt-2"></div>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <div>
                      <span className="me-2">Status:</span>
                      <span className="text-success">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="me-1"
                        />
                        Completed
                      </span>
                    </div>
                    <div>
                      <span className="me-2">Invoice:</span>
                      <span className="text-success">
                        <Link to="/invoice">
                          <FontAwesomeIcon
                            icon={faFileInvoice}
                            className="me-1"
                          />
                          Download
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-3 text-center">
                  <img
                    src="../../images/products/tshirt_grey_480x400.webp"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-header">
                    <div className="small">
                      <span className="border bg-secondary rounded-left px-2 text-white">
                        Order ID
                      </span>
                      <span className="border bg-white rounded-right px-2 me-2">
                        #123456
                      </span>
                      <span className="border bg-secondary rounded-left px-2 text-white">
                        Date
                      </span>
                      <span className="border bg-white rounded-right px-2">
                        25 Sep 20, 12:34 PM
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6>
                      <Link to="/" className="text-decoration-none">
                        Great product name goes here
                      </Link>
                    </h6>
                    <div className="small">
                      <span className="text-muted me-2">Size:</span>
                      <span className="me-3">M</span>
                      <span className="text-muted me-2">Price:</span>
                      <span className="me-3">$1234</span>
                      <span className="text-muted me-2">Color:</span>
                      <span className="me-3">
                        <span className="bg-primary px-1 rounded">
                          &nbsp;&nbsp;&nbsp;
                        </span>
                      </span>
                    </div>
                    <div className="mt-2"></div>
                  </div>
                  <div className="card-footer">
                    <span className="me-2">Status:</span>
                    <span className="text-primary">
                      <FontAwesomeIcon icon={faHistory} className="me-1" />
                      Processing
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-3 text-center">
                  <img
                    src="../../images/products/tshirt_black_480x400.webp"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-header">
                    <div className="small">
                      <span className="border bg-secondary rounded-left px-2 text-white">
                        Order ID
                      </span>
                      <span className="border bg-white rounded-right px-2 me-2">
                        #123456
                      </span>
                      <span className="border bg-secondary rounded-left px-2 text-white">
                        Date
                      </span>
                      <span className="border bg-white rounded-right px-2">
                        25 Sep 20, 12:34 PM
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6>
                      <Link to="/" className="text-decoration-none">
                        Great product name goes here
                      </Link>
                    </h6>
                    <div className="small">
                      <span className="text-muted me-2">Size:</span>
                      <span className="me-3">M</span>
                      <span className="text-muted me-2">Price:</span>
                      <span className="me-3">$1234</span>
                      <span className="text-muted me-2">Color:</span>
                      <span className="me-3">
                        <span className="bg-primary px-1 rounded">
                          &nbsp;&nbsp;&nbsp;
                        </span>
                      </span>
                    </div>
                    <div className="mt-2"></div>
                  </div>
                  <div className="card-footer">
                    <span className="me-2">Status:</span>
                    <span className="text-warning">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        className="me-1"
                      />
                      Pending
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-3 text-center">
                  <img
                    src="../../images/products/tshirt_green_480x400.webp"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-header">
                    <div className="small">
                      <span className="border bg-secondary rounded-left px-2 text-white">
                        Order ID
                      </span>
                      <span className="border bg-white rounded-right px-2 me-2">
                        #123456
                      </span>
                      <span className="border bg-secondary rounded-left px-2 text-white">
                        Date
                      </span>
                      <span className="border bg-white rounded-right px-2">
                        25 Sep 20, 12:34 PM
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6>
                      <Link to="/" className="text-decoration-none">
                        Great product name goes here
                      </Link>
                    </h6>
                    <div className="small">
                      <span className="text-muted me-2">Size:</span>
                      <span className="me-3">M</span>
                      <span className="text-muted me-2">Price:</span>
                      <span className="me-3">$1234</span>
                      <span className="text-muted me-2">Color:</span>
                      <span className="me-3">
                        <span className="bg-primary px-1 rounded">
                          &nbsp;&nbsp;&nbsp;
                        </span>
                      </span>
                    </div>
                    <div className="mt-2"></div>
                  </div>
                  <div className="card-footer">
                    <span className="me-2">Status:</span>
                    <span className="text-danger">
                      <FontAwesomeIcon icon={faTimesCircle} className="me-1" />
                      Cancelled
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrdersView;
