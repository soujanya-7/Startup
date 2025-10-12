import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("Select your query type"); // dropdown selection
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" | "error"
  const [loading, setLoading] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [showInlineStatus, setShowInlineStatus] = useState(false); // render banner only after actual send
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (val) => {
    const re = /^[^@\s]+@[^@\s]+\.(com|in)$/i; // must end with .com or .in
    return re.test(val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setShowInlineStatus(false);
    setLoading(true);
    // Validate dropdown selection (placeholder should not be submitted)
    if (query === "Select your query type") {
      setLoading(false);
      setStatus("Please select your query type.");
      setStatusType("error");
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 5000);
      return; // do not show inline banner for validation-only errors
    }
    // Email validation before sending
    const emailValid = validateEmail(email);
    if (!emailValid) {
      setLoading(false);
      setEmailTouched(true);
      setEmailError("Invalid mail id");
      setStatus("Invalid email. Please use an address ending with .com or .in");
      setStatusType("error");
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 5000);
      return;
    }
    try {
      const serviceId = "service_86s12e8";
      const templateId = "template_lqiq4hp";
      const publicKey = "PVvjgTLofvDoeyXeC";

      // Get current time for the template
      const currentTime = new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: name,           // matches {{name}} in template
          time: currentTime,    // matches {{time}} in template  
          message: message,     // matches {{message}} in template
          // Additional fields that might be useful
          phone: phone,
          email: email,
          query: query,
          subject: query,       // use query as subject
          to_email: "support@propelfoundary.com", // ensure recipient is Support
          reply_to: email,                         // set reply-to to sender
        },
        { publicKey }
      );

      setStatus("Message sent successfully. We'll get back to you soon.");
      setStatusType("success");
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 5000);
      setName("");
      setPhone("");
      setQuery("Select your query type");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("Failed to send. Please try again in a moment.");
      setStatusType("error");
      setShowInlineStatus(true);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 5000);
      console.error("EmailJS error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-card">
          <h2 className="contact-title">Contact</h2>
          <p className="contact-subtitle">Share your details and select your query.</p>
          <p className="contact-hint">We typically respond within 24 hours.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <span className="field-icon" aria-hidden>👤</span>
              <input
                type="text"
                className="contact-input"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="field">
              <span className="field-icon" aria-hidden>📞</span>
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                className="contact-input"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                title="Enter numbers only"
                required
              />
            </div>
            <div className="field span-2">
              <span className="field-icon" aria-hidden>✉️</span>
              <input
                type="email"
                className={`contact-input ${emailTouched && emailError ? "invalid" : ""}`}
                placeholder="Your mail id"
                value={email}
                onChange={(e) => {
                  const v = e.target.value;
                  setEmail(v);
                  if (emailTouched) {
                    setEmailError(validateEmail(v) ? "" : "Invalid mail id");
                  }
                }}
                onBlur={() => {
                  setEmailTouched(true);
                  setEmailError(validateEmail(email) ? "" : "Invalid mail id");
                }}
                required
              />
              {emailTouched && emailError && (
                <div className="field-error">{emailError}</div>
              )}
            </div>
            <div className="field span-2">
              <span className="field-icon" aria-hidden>📌</span>
              <select
                className="contact-select"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
              >
                <option value="Select your query type" disabled>Select your query type</option>
                <option value="Hackathon">Hackathon</option>
                <option value="Startups">Startups</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Mentorship">Mentorship</option>
              </select>
            </div>
            <div className="field span-2">
              <span className="field-icon field-icon-top" aria-hidden>📝</span>
              <textarea
                className="contact-textarea"
                placeholder="State your query..."
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="field span-2">
              <button type="submit" className="contact-button" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
          {status && showInlineStatus && statusType === "error" && (
            <div
              className={`contact-status ${
                statusType === "success" ? "contact-status-success" : "contact-status-error"
              }`}
              role="status"
            >
              {status}
            </div>
          )}
          {toastVisible && (
            <div className={`toast ${statusType === "success" ? "toast-success" : "toast-error"}`}>
              {status}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;