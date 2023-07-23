import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { validationData } from "./Contact_RegeX";
import Loader from "../loading/Loader";
import SendSvg from "../loading/SendSvg";
import Button from "../button/Button";
import toast, { Toaster } from "react-hot-toast";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import "./contact.css";

const Contact = () => {
  const form: any = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isNameValid, isEmailValid] = validationData(name, email);
  const [spamClickCount, setSpamClickCount] = useState(0);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  // const [showLoader, setShowLoader] = useState(false);

  const sendEmail = async (e: any) => {
    e.preventDefault();

    if (isNameValid && isEmailValid) {
      const loadingToastId = toast.loading("Sending...");
      setLoading(true);

      try {
        // await new Promise((resolve) => setTimeout(resolve, 0));
        // setLoading(true);

        const result = await emailjs.sendForm(
          "service_o8aw3wd",
          "template_rmw4f5c",
          form.current,
          "C9K36uwheVoFbeM2A"
        );
        await new Promise((resolve) => setTimeout(resolve, 3000));

        e.target.reset();
        console.log(result.text);
        console.log("Send successful");
        toast.success("Email sent successfully");
      } catch (error: any) {
        console.log(error.text);
      } finally {
        // stop loading after sending succes or error
        toast.dismiss(loadingToastId);
        setLoading(false);
      }
      console.log("submitted: ", name, email);
    } else {
      setNameError(isNameValid ? "" : "Invalid name");
      setEmailError(isEmailValid ? "" : "Invalid email address");
    }

    // check status name & email
    if (!isNameValid) {
      if (spamClickCount < 3) {
        setSpamClickCount(spamClickCount + 1);
        toast.error("name invalid", {
          duration: 1000,
        });
      } else {
        toast.error("Name input is invalid. Please wait for 3 seconds", {
          duration: 3000,
        });
        setSpamClickCount(0);
        setButtonDisabled(true);

        const timeout: any = setTimeout(() => {
          setButtonDisabled(false);
        }, 3000);
      }
      console.log("name invalid");
      return; // return, prevent sending if invalid
    } else if (!isEmailValid) {
      if (spamClickCount < 3) {
        setSpamClickCount(spamClickCount + 1);
        toast.error("email invalid", {
          duration: 1000,
        });
      } else {
        toast.error("Email input is invalid. Please wait for 3 seconds", {
          duration: 3000,
        });
        setSpamClickCount(0);
        setButtonDisabled(true);

        const timeout: any = setTimeout(() => {
          setButtonDisabled(false);
        }, 3000);
      }
      console.log("email invalid");
      return;
    }

    // if (!isNameValid || !isEmailValid) { }
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

              <span className="contact__card-data">
                extencezone02@gmail.com
              </span>

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
              <span className="contact__card-data">+ 628 5890005772</span>

              <a
                href="https://api.whatsapp.com/send?phone=085890005772&text=Hello, more information"
                className="contact__button"
              >
                write me
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-linkedin contact__card-icon"></i>
              <h3 className="contact__card-title">Linkedin</h3>
              <span className="contact__card-data">satria wibowo</span>

              <a
                href="https://www.linkedin.com/in/satria-wibowo-subiantoro/"
                className="contact__button"
              >
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
              {nameError && <span className="error-message">{""}</span>}
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
              {emailError && <span className="error-message">{""}</span>}
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

            {/* <button className="button button--flex" disabled={loading}>
              Send Message
              <SendSvg />
              <Loader />
            </button> */}
            <Button
              text={"Send Message"}
              // onSubmit={sendEmail}
              loading={loading}
              disabled={loading || isButtonDisabled}
              Loader={Loader}
              SendSvg={SendSvg}
            />
          </form>
          <Toaster position="top-right" reverseOrder={loading} />
        </div>
      </div>
    </section>
  );
};
export default Contact;
