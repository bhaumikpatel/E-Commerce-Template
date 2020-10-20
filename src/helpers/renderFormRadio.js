import React from "react";

const renderFormRadio = (props) => {
  const { input, label, id } = props;
  return (
    <div className="form-check form-check-inline">
      <input
        {...input}
        {...props}
        checked={input.value === props.value}
        className="form-check-input"
        type="radio"
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
export default renderFormRadio;
