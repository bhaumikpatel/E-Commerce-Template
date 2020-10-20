import React from "react";
//export default function renderFormGroupField({
const renderFormGroupField = (props) => {
  const {
    input,
    label,
    tips,
    required,
    meta: { touched, error, warning },
  } = props;
  const Icon = props.icon;
  return (
    <div className={`form-group ${props.className}`}>
      {label && (
        <label
          className={`form-label ${required ? "required" : ""}`}
          htmlFor={input.name}
        >
          {label}
        </label>
      )}

      <div className="input-group">
        <span className="input-group-text">
          <Icon />
        </span>
        <input {...input} {...props} id={input.name} className="form-control" />
        {touched &&
          ((error && <div className="invalid-feedback">{error}</div>) ||
            (warning && <span>{warning}</span>))}
      </div>
      {tips && <div className="form-text">{tips}</div>}
    </div>
  );
};

export default renderFormGroupField;
