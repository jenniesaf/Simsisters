import { faHandHolding } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import useForm from "../useForm";
import validate from "../validateInfo";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="form-content-right">
      <form class="form" onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Your Name
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter Your Name"
            value={values.userName}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter Your Email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="textarea" className="textarea">
            Your Message
          </label>
          <textarea
            id="textarea"
            type="textarea"
            name="textarea"
            className="form-input"
            placeholder="Enter Your Message"
          />
        </div>
        <button className="form-input-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
export default FormSignup;
