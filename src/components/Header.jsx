import { lazy } from "react";
import { Link } from "react-router-dom";
const Search = lazy(() => import("./Search"));

const Header = () => {
  return (
    <header className="p-3 border-bottom bg-light">
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-md-3 text-center">
            <Link to="/">
              <img alt="logo" src="../../images/logo.webp" />
            </Link>
          </div>
          <div className="col-md-5">
            <Search />
          </div>
          <div className="col-md-4">
            <div className="position-relative d-inline me-3">
              <Link to="/cart" className="btn btn-primary">
                <i className="bi bi-cart3"></i>
                <div className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
                  2
                </div>
              </Link>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-secondary rounded-circle border me-3"
                data-toggle="dropdown"
                aria-expanded="false"
                aria-label="Profile"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-person-fill text-light"></i>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/account/profile">
                    <i className="bi bi-person-square"></i> My Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/star/zone">
                    <i className="bi bi-star-fill text-warning"></i> Star Zone
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/account/orders">
                    <i className="bi bi-list-check text-primary"></i> Orders
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/account/wishlist">
                    <i className="bi bi-heart-fill text-danger"></i> Wishlist
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/account/notification">
                    <i className="bi bi-bell-fill text-primary"></i>
                    Notification
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/support">
                    <i className="bi bi-info-circle-fill text-success"></i>
                    Support
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="bi bi-door-closed-fill text-danger"></i>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
            {/* <Link to="/account/signin">Sign In</Link> |{" "}
              <Link to="/account/signup"> Sign Up</Link> */}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
