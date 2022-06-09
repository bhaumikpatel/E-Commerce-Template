import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import renderFormField from "../../helpers/renderFormField";
import {
  required,
} from "../../helpers/validation";

const CouponApplyForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
      >
      <Field
        name="coupon"
        type="text"
        label="Have coupon?"
        component={renderFormField}
        placeholder="Coupon code"
        validate={[required]}
              required={true}
      />
      <button
        type="submit"
        className="btn btn-sm btn-primary mt-3 float-end"
        disabled={submitting}
      >
        Apply
      </button>
    </form>
  );
};

export default compose(
  reduxForm({
    form: "couponapplyform",
  })
)(CouponApplyForm);
