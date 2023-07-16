import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { validationData } from "./Contact_RegeX";
import Loader from "../loading/Loader";
import SendSvg from "../loading/SendSvg";
import Button from "../button/Button";

import "./contact.css";

const Contact = () => {
  const form: any = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  // loading state to disable the input fields and the submit button during the loading process.

  const sendEmail = async (e: any) => {
    e.preventDefault();

    const [isNameValid, isEmailValid] = validationData(name, email);

    if (isNameValid && isEmailValid) {
      console.log("submitted: ", name, email);
    } else {
      setNameError(isNameValid ? "" : "Invalid name");
      setEmailError(isEmailValid ? "" : "Invalid email address");
    }

    // check status name & email
    if (!isNameValid) {
      console.log("name invalid");
      // return, prevent sending if invalid
      return;
    } else if (!isEmailValid) {
      console.log("email invalid");
      return;
    }

    try {
      // start loading
      setLoading(true);

      // Simulate a 1-second delay before sending the email
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const result = await emailjs.sendForm(
        "service_o8aw3wd",
        "template_rmw4f5c",
        form.current,
        "C9K36uwheVoFbeM2A"
      );
      e.target.reset();
      console.log(result.text);
      console.log("Send successful");
    } catch (error: any) {
      console.log(error.text);
    } finally {
      // stop loading after sending succes or error
      setLoading(false);
    }
  };

  // check validation
  // validationData("satria", "GG");
  // console.log(validationData("satria", "GG"));

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>

              <span className="contact__card-data">user@gmail.com</span>

              <a
                href="mailto:examplemail@gmail.com.com"
                className="contact__button"
              >
                write me
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+ 628 ------</span>

              <a
                href="https://api.whatsapp.com/send?phone=085890005772&text=Hello, more information"
                className="contact__button"
              >
                write me
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>
              <h3 className="contact__card-title">Massenger</h3>
              <span className="contact__card-data">user@gmail.com</span>

              <a href="https://m.me/crypticalcoder" className="contact__button">
                write me
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Get Me your contact</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label htmlFor="name" className="contact__form-tag">
                Name
              </label>
              <input
                id="name"
                type="text "
                name="name"
                className={`contact__form-input ${nameError ? "error" : ""}`}
                placeholder="Insert Your name"
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
                required
              />
              {nameError && <span className="error-message">{nameError}</span>}
            </div>
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Mail
              </label>
              <input
                id="email"
                type="email "
                name="email"
                className={`contact__form-input ${nameError ? "error" : ""}`}
                placeholder="Insert Your e-mail"
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
              />
              {emailError && (
                <span className="error-message">{emailError}</span>
              )}
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-area contact__form-tag contact__form-message ">
                Message
              </label>
              <textarea
                name="message"
                cols={30}
                rows={10}
                className="contact__form-input"
                placeholder="Write your contact"
                disabled={loading}
                required
              ></textarea>
            </div>

            <button className="button button--flex" disabled={loading}>
              Send Message
              <SendSvg />
              <Loader />
            </button>
            {/* <Button disabled={loading} /> */}
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
