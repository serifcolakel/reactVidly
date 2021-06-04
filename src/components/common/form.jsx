import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }; // "name" ne ise ona göre işlev yapacak (dinamik kodlama)
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema, { abortEarly: false });
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    //for beginner (for me ) :)
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault(); //formun yeniden yollanmasını engelliyoruz
    // const username = document.getElementById("username").value;
    // const username = this.username.current.value;
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    //console.log(errors);
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
  renderSelect(name, label, options) {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  renderButton(label, className, disabled) {
    return (
      <button
        type="text"
        disabled={disabled}
        onClick={this.login}
        className={className}
        style={{ margin: "0px 20px" }}
      >
        {label}
      </button>
    );
  }

  renderInput(name, type, label) {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        type={type}
        placeholder={"Please, enter your " + label}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
