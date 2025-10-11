import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("Hackathon"); // dropdown selection
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" | "error"
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);
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
        },
        { publicKey }
      );

      setStatus("Message sent successfully. We'll get back to you soon.");
      setStatusType("success");
      setName("");
      setPhone("");
      setQuery("Hackathon");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("Failed to send. Please try again in a moment.");
      setStatusType("error");
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
          <input
            type="text"
            className="contact-input"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            className="contact-input"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[0-9+\-()\s]{7,}"
            title="Enter a valid phone number"
            required
          />
          <input
            type="email"
            className="contact-input"
            placeholder="Your mail id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <select
            className="contact-select"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          >
            <option value="Hackathon">Hackathon</option>
            <option value="Startups">Startups</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Partnership">Mentorship</option>
          </select>
          <textarea
            className="contact-textarea"
            placeholder="State your query..."
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit" className="contact-button" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
          </form>
          {status && (
            <div
              className={`contact-status ${
                statusType === "success" ? "contact-status-success" : "contact-status-error"
              }`}
              role="status"
            >
              {status}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;