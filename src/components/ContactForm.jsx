import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validate First Name
    if (!formData.fname.trim()) {
      newErrors.fname = "First name is required.";
      isValid = false;
    }

    // Validate Last Name
    if (!formData.lname.trim()) {
      newErrors.lname = "Last name is required.";
      isValid = false;
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
      isValid = false;
    }

    // Validate Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // EmailJS integration
      emailjs
        .sendForm(
          "service_w9dlk8a", // Your service ID
          "template_xgbd3vg", // Your template ID
          e.target, // The form you are submitting
          "user_your_user_id" // Your user ID from EmailJS
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setIsSubmitted(true); // Show thank you message
          },
          (error) => {
            console.log("FAILED...", error);
            alert("Failed to send message. Please try again.");
          }
        );
    }
  };

  return (
    <div className="tj-contact-form style-2">
      {!isSubmitted ? (
        <form id="contactForm" className="contact-form mt-md-0 mt-5" onSubmit={handleSubmit}>
          <div className="form_group">
            <div className="row">
              <div className="col-6">
                <input
                  type="text"
                  name="fname"
                  placeholder="First name"
                  value={formData.fname}
                  onChange={handleChange}
                />
                <small className="mt-2" style={{ display: errors.fname ? 'block' : 'none' }}>
                  {errors.fname}
                </small>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  name="lname"
                  placeholder="Last name"
                  value={formData.lname}
                  onChange={handleChange}
                />
                <small className="mt-2" style={{ display: errors.lname ? 'block' : 'none' }}>
                  {errors.lname}
                </small>
              </div>
            </div>
          </div>

          <div className="form_group">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
            <small className="mt-2" style={{ display: errors.email ? 'block' : 'none' }}>
              {errors.email}
            </small>
          </div>

          <div className="form_group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
            />
            <small className="mt-2" style={{ display: errors.phone ? 'block' : 'none' }}>
              {errors.phone}
            </small>
          </div>

          <div className="form_group">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form_btn">

            <button type="submit" 
            className="primary-btn border-0 contact-button d-inline-flex align-items-center text-decoration-none px-4 py-3 fw-semibold rounded-pill">
              Send Message
              <span className="icon_box">
        <FontAwesomeIcon icon={faArrowRight} className="icon_first" />
        <FontAwesomeIcon icon={faArrowRight} className="icon_second" />
      </span>
            </button>



          </div>
        </form>
      ) : (
        <div id="thankyou">
          <div className="row justify-content-center">
            <div className="col-10 skills-widget style-2 mb-md-4">
              <div
                className="skill-item text-center"
                style={{
                  border: "1px solid var(--tj-theme-primary)",
                  backgroundColor: "var(--tj-theme-secondary)",
                }}
              >
                <div className="mb-3">
                  <img
                    src="./assets/img/icons/check.png"
                    width="120"
                    height="120"
                    loading="lazy"
                    alt="Hivision Foundation"
                  />
                </div>
                <h5>Thank you for submitting your details.</h5>
                <small>
                  We have received your details and will get back to you soon.
                </small>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
