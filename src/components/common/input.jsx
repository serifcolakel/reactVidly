import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        //...rest diğer tüm özellikleri diretk kendine eşitleyecek
        {...rest}
        id={name}
        name={name}
        className="form-control"
        style={{ textAlign: "center" }}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
