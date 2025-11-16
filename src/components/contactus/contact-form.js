"use client";
import { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStatus(data.message);
    } catch (err) {
      setStatus("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Contact Page Start */}
      <div
        className="contact-form br-10 bgc-lighter rmt-60"
        name="contact-form"
        data-aos="fade-left"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <form
          id="contactForm"
          className="contactForm"
          name="contactForm"
          //   action="assets/php/form-process.php"
          //   method="post"
          onSubmit={handleSubmit}
        >
          <img
            className="shape-one"
            src="assets/images/shapes/star-yellow-shape.png"
            alt="Star Shape"
          />
          <img
            className="shape-two"
            src="assets/images/shapes/star-black-shape.png"
            alt="Star Shape"
          />
          <h5>Send Us Message</h5>
          <p>Questions or you would just like to say hello, contact us.</p>
          <div className="row mt-30">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  defaultValue=""
                  placeholder="Enter your name"
                  required=""
                  data-error="Please enter your Name"
                />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  defaultValue=""
                  placeholder="Enter your email"
                  required=""
                  data-error="Please enter your Email"
                />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  className="form-control"
                  defaultValue=""
                  placeholder="Enter your mobile number"
                  required=""
                  data-error="Please enter your phone"
                />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows={4}
                  placeholder="Write Message"
                  required=""
                  data-error="Please enter your Message"
                  defaultValue={""}
                />
                <div className="help-block with-errors" />
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group mb-0">
                {/* <button type="submit" className="theme-btn">
                          Send Us Message <i className="far fa-arrow-right" />
                        </button> */}
                {/* <div id="msgSubmit" className="hidden" /> */}
                <button type="submit" className="theme-btn" disabled={loading}>
                  {loading ? "Sending..." : "Send Us Message"}
                </button>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group mt-4">
                {status && <p className="text-primary text-end">{status}</p>}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default ContactForm;
