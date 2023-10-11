import { lazy } from "react";
const Search = lazy(() => import("../../components/Search"));

const InternalServerErrorView = () => {
  return (
    <div className="container text-center p-5">
      <div className="display-1">
        <i className="bi bi-bug-fill text-danger" />
        500
      </div>
      <h1 className="mb-3">Internal Server Error</h1>
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default InternalServerErrorView;
