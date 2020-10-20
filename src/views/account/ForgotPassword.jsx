import React, { lazy, Component } from "react";
const ForgotPasswordForm = lazy(() =>
  import("../../components/account/ForgotPasswordForm")
);

class ForgotPasswordView extends Component {
  onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };
  render() {
    return (
      <div className="container my-3">
        <div className="row justify-content-md-center ">
          <div className="col-md-4 p-3 border">
            <h4 className="text-center">Forgot Password</h4>
            <ForgotPasswordForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPasswordView;
