import React from "react";

const renderFormCheckbox = (props) => {
  const {
    input,
    label,
    id,
    //value,
    meta: { touched, error, warning },
  } = props;
  return (
    <div className="form-check form-check-inline">
      <input
        {...input}
        {...props}
        className="form-check-input"
        type="checkbox"
        // value={value}
        // id={id}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
      {touched &&
        ((error && <div className="invalid-feedback">{error}</div>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );
};
export default renderFormCheckbox;
