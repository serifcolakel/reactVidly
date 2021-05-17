import React from "react";

const Input = ({ name, label, value, onChange, error, ...props }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        autoFocus //componentDidMount yerine kullanılır
        // ref={this.username}
        onChange={onChange}
        id={name}
        name={name}
        type="text"
        className="form-control"
        style={{ textAlign: "center" }}
        {...props}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
