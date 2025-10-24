import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import { FaGlobe, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    query: "Select your query type",
    message: "",
  });

  const [status, setStatus] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const validateEmail = (val) => /^[^@\s]+@[^@\s]+\.(com|in)$/i.test(val);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "", type: "" });
    setLoading(true);

    if (formData.query === "Select your query type") {
      setStatus({ message: "Please select your query type.", type: "error" });
      setToastVisible(true);
      setLoading(false);
      return setTimeout(() => setToastVisible(false), 5000);
    }

    if (!validateEmail(formData.email)) {
      setEmailTouched(true);
      setStatus({ message: "Invalid email. Please use .com or .in.", type: "error" });
      setToastVisible(true);
      setLoading(false);
      return setTimeout(() => setToastVisible(false), 5000);
    }

    try {
      const { name, phone, email, message, query } = formData;
      const currentTime = new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      await emailjs.send(
        "service_86s12e8",
        "template_lqiq4hp",
        {
          name,
          phone,
          email,
          message,
          query,
          time: currentTime,
          subject: query,
          to_email: "support@propelfoundary.com",
          reply_to: email,
        },
        { publicKey: "PVvjgTLofvDoeyXeC" }
      );

      setStatus({ message: "Message sent successfully! We'll get back soon.", type: "success" });
      setFormData({ name: "", phone: "", email: "", query: "Select your query type", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({ message: "Failed to send. Please try again later.", type: "error" });
    } finally {
      setToastVisible(true);
      setLoading(false);
      setTimeout(() => setToastVisible(false), 5000);
    }
  };

  return (
    <>
      {/* SEO Tags */}
      <Helmet>
        <title>Contact Propel Foundry | Startup Support & Inquiries</title>
        <meta
          name="description"
          content="Get in touch with Propel Foundry for company registration, mentorship, training programs, R&D, hackathons, and general startup support. We respond within 24 hours."
        />
        <meta
          name="keywords"
          content="Propel Foundry contact, startup support, company registration, mentorship, training programs, R&D, hackathon, startup inquiry, Coimbatore startups"
        />
      </Helmet>

      <section className="contact-section" id="contact">
        <div className="contact-container">

          {/* CONTACT FORM */}
          <div className="contact-card">
            <div className="contact-header">
              <h2 className="contact-title">Get in Touch</h2>
              <p className="contact-subtitle">Share your details and select your query type</p>
              <p className="contact-hint">We typically respond within 24 hours.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <span className="field-icon" aria-hidden>👤</span>
                <input
                  type="text"
                  name="name"
                  className="contact-input"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field">
                <span className="field-icon" aria-hidden>📞</span>
                <input
                  type="tel"
                  name="phone"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="contact-input"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })
                  }
                  title="Enter numbers only"
                  required
                />
              </div>

              <div className="field span-2">
                <span className="field-icon" aria-hidden>✉️</span>
                <input
                  type="email"
                  name="email"
                  className={`contact-input ${emailTouched && !validateEmail(formData.email) ? "invalid" : ""}`}
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => setEmailTouched(true)}
                  required
                />
              </div>

              <div className="field span-2">
                <span className="field-icon" aria-hidden>📌</span>
                <select
                  name="query"
                  className="contact-select"
                  value={formData.query}
                  onChange={handleChange}
                  required
                >
                  <option value="Select your query type" disabled>Select your query type</option>
                  <option value="Company Registration">Company Registration</option>
                  <option value="IPR and Compliance">IPR and Compliance</option>
                  <option value="Training Programs">Training Programs</option>
                  <option value="Research and Development">Research and Development</option>
                  <option value="Hackathon">Hackathon</option>
                  <option value="Startups">Startups</option>
                  <option value="Mentorship">Mentorship</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div className="field span-2">
                <span className="field-icon field-icon-top" aria-hidden>📝</span>
                <textarea
                  name="message"
                  className="contact-textarea"
                  placeholder="State your query..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field span-2">
                <button type="submit" className="contact-button" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>

            {/* Status / Toast */}
            {status.message && (
              <div
                className={`contact-status ${status.type === "success" ? "contact-status-success" : "contact-status-error"}`}
                role="status"
              >
                {status.message}
              </div>
            )}
            {toastVisible && (
              <div className={`toast ${status.type === "success" ? "toast-success" : "toast-error"}`}>
                {status.message}
              </div>
            )}
          </div>

          {/* OFFICE INFO */}
          <div className="office-card">
            <h3>Our Office</h3>
            <p><strong>Propel Foundry HQ</strong></p>
            <p>34/3, Tank Street, Chinnamettupalayam,<br />Saravanampatti, Coimbatore, India</p>
            <p><strong>Email:</strong> support@propelfoundry.com</p>
            <p><strong>Phone:</strong> +91 99943 40054</p>

            <div className="social-links">
              <a href="https://www.instagram.com/propelfoundry" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/propelfoundry" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/919994340054" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://propelfoundry.com" target="_blank" rel="noopener noreferrer" aria-label="Website">
                <FaGlobe />
              </a>
            </div>

            <iframe
              title="office-map"
              className="office-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.563065389011!2d76.95673667411806!3d11.031520890971835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85999d7d5267b%3A0x8b0b9f0c69a0893d!2sSaravanampatti%2C%20Coimbatore%2C%20Tamil%20Nadu%20641217%2C%20India!5e0!3m2!1sen!2sin!4v1707594660718!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
