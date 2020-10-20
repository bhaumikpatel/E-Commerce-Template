import React from "react";
const renderSelectOptions = (item) => (
  <option key={item.value} value={item.value}>
    {item.label}
  </option>
);
//export default function renderFormSelect({
const renderFormSelect = (props) => {
  const {
    input,
    label,
    tips,
    options,
    required,
    meta: { touched, error, warning },
  } = props;
  return (
    <React.Fragment>
      <label
        className={`form-label ${required ? "required" : ""}`}
        htmlFor={input.name}
      >
        {label}
      </label>
      <select {...input} {...props} id={input.name} className="form-select">
        {options?.map(renderSelectOptions)}
      </select>
      {tips && <div className="form-text">{tips}</div>}
      {touched &&
        ((error && <div className="invalid-feedback">{error}</div>) ||
          (warning && <span>{warning}</span>))}
    </React.Fragment>
  );
};
export default renderFormSelect;
