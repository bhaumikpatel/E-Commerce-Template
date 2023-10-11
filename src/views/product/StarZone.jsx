import { Link } from "react-router-dom";

const StarZoneView = () => {
  return (
    <div>
      <h1 className="text-center">Electronics Store</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <Link to="/">
              <img
                src="../../images/banner/Apple.webp"
                className="img-fluid rounded"
                alt="..."
              />
            </Link>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col">
                <Link to="/">
                  <img
                    src="../../images/banner/Philips.webp"
                    className="img-fluid rounded"
                    alt="..."
                  />
                </Link>
              </div>
              <div className="col">
                <Link to="/">
                  <img
                    src="../../images/banner/Dell.webp"
                    className="img-fluid rounded"
                    alt="..."
                  />
                </Link>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <Link to="/">
                  <img
                    src="../../images/banner/Quick-heal.webp"
                    className="img-fluid rounded"
                    alt="..."
                  />
                </Link>
              </div>
              <div className="col">
                <Link to="/">
                  <img
                    src="../../images/banner/Tablets.webp"
                    className="img-fluid rounded"
                    alt="..."
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <Link to="/">
              <img
                src="../../images/banner/Laptops.webp"
                className="img-fluid rounded"
                alt="..."
              />
            </Link>
          </div>
        </div>
        <h2 className="text-center mt-3">Shop by Budget</h2>
        <div className="row g-3 mb-3">
          <div className="col">
            <Link
              to="/"
              className="bg-warning p-3 text-center display-6 rounded shadow text-decoration-none text-white d-block"
            >
              Below 20K
            </Link>
          </div>
          <div className="col">
            <Link
              to="/"
              className="bg-warning p-3 text-center display-6 rounded shadow text-decoration-none text-white d-block"
            >
              20K-30K
            </Link>
          </div>
          <div className="col">
            <Link
              to="/"
              className="bg-warning p-3 text-center display-6 rounded shadow text-decoration-none text-white d-block"
            >
              30K-40K
            </Link>
          </div>
          <div className="col">
            <Link
              to="/"
              className="bg-warning p-3 text-center display-6 rounded shadow text-decoration-none text-white d-block"
            >
              40K-50K
            </Link>
          </div>
          <div className="col">
            <Link
              to="/"
              className="bg-warning p-3 text-center display-6 rounded shadow text-decoration-none text-white d-block"
            >
              50K-60K
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarZoneView;
